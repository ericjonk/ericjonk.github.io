var OPTIONS = [
  { id: 'helmet', label: 'Casque',       price: 2 },
  { id: 'lock',   label: 'Antivol',      price: 3 },
  { id: 'seat',   label: 'Siège enfant', price: 5 }
];

var DISCOUNT_RATE = 0.10;      // if you change these two, change the texts in velos.html too
var DISCOUNT_FROM_DAYS = 3;
var MAX = { hours: 12, days: 30 };
// Text shown for each "type" value in data.js
var typeLabels = { ville: 'Ville', vtt: 'VTT', enfant: 'Enfant' };
// Lower case + no accents, so "electrique" also finds "Électrique"
function normalize(text) {
  return text.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
}
function setupBikesPage() {
  var filtersForm = document.getElementById('filters');
  var grid = document.getElementById('bike-grid');
  var countText = document.getElementById('result-count');
  var noResult = document.getElementById('no-result');
  var resetButton = document.getElementById('reset-filters');
  var sortSelect = document.getElementById('sort');

  var dialog = document.getElementById('bike-dialog');
  var bookingForm = document.getElementById('booking-form');
  var qtyInput = document.getElementById('duration-qty');
  var unitSelect = document.getElementById('duration-unit');
  var durationError = document.getElementById('duration-error');
  var optionsList = document.getElementById('options-list');
  var summary = document.getElementById('summary');
  var currentBike = null;        // the bike shown in the window right now

  // Bike Filter
  function matches(bike, filters) {
    if (filters.type !== 'all' && bike.type !== filters.type) { return false; }
    if (filters.onlyElectric && !bike.electrique) { return false; }
    if (filters.onlyAvailable && !bike.disponible) { return false; }
    if (filters.query !== '') {
      var haystack = normalize(bike.nom + ' ' + bike.description + ' ' + typeLabels[bike.type] +
                               (bike.electrique ? ' électrique' : ''));
      if (haystack.indexOf(filters.query) === -1) { return false; }
    }
    return true;
  }
  // Display the Bikes when filtered
  function showBikes() {
    var filters = {
      query: normalize(filtersForm.elements['search'].value.trim()),
      type: filtersForm.elements['type'].value,   // the chosen radio button
      onlyElectric: filtersForm.elements['electric'].checked,
      onlyAvailable: filtersForm.elements['available'].checked
    };

    var shown = velos.filter(function (bike) { return matches(bike, filters); });

    // Sort by hourly price if asked
    if (sortSelect.value !== 'default') {
      var direction = sortSelect.value === 'price-asc' ? 1 : -1;
      shown = shown.slice().sort(function (a, b) { return (a.prixHeure - b.prixHeure) * direction; });
    }

    grid.replaceChildren();   // empty the grid...
    shown.forEach(function (bike) { grid.appendChild(buildBikeCard(bike)); });   // ...and refill it

    countText.textContent = shown.length + (shown.length > 1 ? ' vélos trouvés' : ' vélo trouvé');

    // "Réinitialiser" is only useful when at least one filter is active
    resetButton.hidden = filters.query === '' && filters.type === 'all' && !filters.onlyElectric && !filters.onlyAvailable;
    noResult.hidden = shown.length !== 0;
  }

  filtersForm.addEventListener('input', showBikes);   // typing in the search field
  filtersForm.addEventListener('change', showBikes);   // radio buttons and checkboxes
  filtersForm.addEventListener('reset', function () {
    setTimeout(showBikes, 0);   // wait until the browser has cleared the fields
  });
  sortSelect.addEventListener('change', showBikes);   // new order
  filtersForm.addEventListener('submit', function (event) { event.preventDefault(); });   // Enter in the search field: no page reload

  // Create the option checkboxes from the OPTIONS list
  OPTIONS.forEach(function (option) {
    var label = document.createElement('label');
    label.className = 'check';
    var box = document.createElement('input');
    box.type = 'checkbox';
    box.name = 'option';
    box.value = option.id;
    label.appendChild(box);
    label.appendChild(document.createTextNode(option.label + ' (+' + money(option.price) + ')'));
    optionsList.appendChild(label);
  });

  // Open the window for one bike
  function openDialog(bike) {
    currentBike = bike;

    var photo = document.getElementById('dialog-photo');
    photo.src = '../' + bike.image;
    photo.alt = bike.nom;

    document.getElementById('dialog-type').textContent = typeLabels[bike.type];
    document.getElementById('dialog-electric').hidden = !bike.electrique;
    document.getElementById('dialog-unavailable').hidden = bike.disponible;
    document.getElementById('dialog-title').textContent = bike.nom;
    document.getElementById('dialog-desc').textContent = bike.description;
    document.getElementById('dialog-hour').textContent = money(bike.prixHeure);
    document.getElementById('dialog-day').textContent = money(bike.prixJour);

    // A bike in repair: no calculator, just a message
    bookingForm.hidden = !bike.disponible;
    document.getElementById('dialog-unavailable-note').hidden = bike.disponible;

    bookingForm.reset();               // back to: 1 hour, no option ticked
    updateSummary();

    dialog.showModal();                // opens the window: the page behind is blocked, Esc closes it
    dialog.focus();                    // the window itself gets the focus (so the ✕ button does not show a focus ring)
    dialog.scrollTop = 0;
  }

  // Work out the price for the current choices
  function computePrice(bike, quantity, unit, chosenOptions) {
    var rental = quantity * (unit === 'hours' ? bike.prixHeure : bike.prixJour);

    // 10 % off the BIKE only (not the options), for rentals in days from 3 days
    var discount = 0;
    if (unit === 'days' && quantity >= DISCOUNT_FROM_DAYS) {
      discount = Math.round(rental * DISCOUNT_RATE * 100) / 100;     // rounded to the cent
    }

    var optionsTotal = chosenOptions.reduce(function (sum, option) { return sum + option.price; }, 0);

    return { rental: rental, discount: discount, optionsTotal: optionsTotal,
             total: rental - discount + optionsTotal };
  }

  // Read the form, then show the price lines (or an error if the duration is wrong)
  function updateSummary() {
    if (!currentBike) { return; }

    var unit = unitSelect.value;                                   // 'hours' or 'days'
    var max = MAX[unit];
    qtyInput.max = max;

    var quantity = Number(qtyInput.value);
    var valid = qtyInput.value.trim() !== '' && Number.isInteger(quantity) && quantity >= 1 && quantity <= max;

    durationError.hidden = valid;
    qtyInput.classList.toggle('is-invalid', !valid);               // red border
    summary.hidden = !valid;
    if (!valid) {
      durationError.textContent = 'Choisissez une durée entière de 1 à ' + plural(max, unit) + '.';
      return;
    }

    // The options that are ticked
    var chosen = OPTIONS.filter(function (option) {
      return bookingForm.querySelector('input[value="' + option.id + '"]').checked;
    });

    var price = computePrice(currentBike, quantity, unit, chosen);
    var unitPrice = unit === 'hours' ? currentBike.prixHeure : currentBike.prixJour;

    document.getElementById('line-rental-label').textContent =
      'Location (' + plural(quantity, unit) + ' × ' + money(unitPrice) + ')';
    document.getElementById('line-rental').textContent = money(price.rental);

    document.getElementById('row-discount').hidden = price.discount === 0;
    document.getElementById('line-discount').textContent = '−' + money(price.discount);

    document.getElementById('row-options').hidden = chosen.length === 0;
    document.getElementById('line-options-label').textContent = 'Options (' +
      chosen.map(function (option) { return option.label.toLowerCase(); }).join(', ') + ')';
    document.getElementById('line-options').textContent = money(price.optionsTotal);

    document.getElementById('line-total').textContent = money(price.total);
  }

  // Click on a card (anywhere on it, or on its button) opens that bike's window
  grid.addEventListener('click', function (event) {
    var card = event.target.closest('.bike-card');
    if (!card) { return; }
    var bike = velos.find(function (item) { return item.id === Number(card.dataset.id); });
    if (bike) { openDialog(bike); }
  });

  // − / + buttons: change the number by 1 (never below 1 or above the maximum)
  function stepQty(change) {
    var next = (Number(qtyInput.value) || 0) + change;
    qtyInput.value = Math.min(Math.max(next, 1), MAX[unitSelect.value]);
    updateSummary();
  }
  document.getElementById('qty-minus').addEventListener('click', function () { stepQty(-1); });
  document.getElementById('qty-plus').addEventListener('click', function () { stepQty(1); });

  // Any change in the form: recalculate
  bookingForm.addEventListener('input', updateSummary);
  bookingForm.addEventListener('change', function (event) {
    if (event.target === unitSelect && Number(qtyInput.value) > MAX[unitSelect.value]) {
      qtyInput.value = MAX[unitSelect.value];            // switching to hours with 20 typed: bring it back to the maximum
    }
    updateSummary();
  });

  // "Réserver ce vélo"
  bookingForm.addEventListener('submit', function (event) {
    event.preventDefault();
    if (summary.hidden) { qtyInput.focus(); return; }    // wrong duration: go back to the field
    // Nothing is sent anywhere: the price summary above is the result.
  });

  // Close: the ✕ button, a click on the dark area around the window, or the Esc key (automatic)
  document.getElementById('dialog-close').addEventListener('click', function () { dialog.close(); });
  dialog.addEventListener('click', function (event) {
    if (event.target === dialog) { dialog.close(); }     // the click landed on the backdrop, not inside the window
  });

  // Start: show the bikes. A link like pages/velos.html?bike=4 also opens the window of bike number 4
  showBikes();

  var params = new URLSearchParams(location.search);
  var linkedBike = velos.find(function (item) { return item.id === Number(params.get('bike')); });
  if (linkedBike) { openDialog(linkedBike); }
}

setupBikesPage();
