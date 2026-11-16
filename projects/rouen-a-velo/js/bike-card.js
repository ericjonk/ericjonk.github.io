// Words for each unit: [singular, plural]
var UNITS = { hours: ['heure', 'heures'], days: ['jour', 'jours'] };
// Formats the price
var euroWhole = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });
var euroCents = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', minimumFractionDigits: 2 });
function money(value) {
  return Number.isInteger(value) ? euroWhole.format(value) : euroCents.format(value);
}

// "1 heure" / "3 heures"
function plural(count, unit) {
  return count + ' ' + UNITS[unit][count > 1 ? 1 : 0];
}
function buildBikeCard(bike) {
  var card = document.createElement('li');
  card.className = 'bike-card' + (bike.disponible ? '' : ' is-unavailable');
  card.dataset.id = bike.id;                                  // used to find the bike when the card is clicked

  card.innerHTML =
    '<div class="bike-media">' +
      '<img class="bike-photo" width="800" height="600" loading="lazy" alt="">' +
      '<div class="badges"></div>' +
    '</div>' +
    '<div class="bike-body">' +
      '<h3 class="bike-name"></h3>' +
      '<p class="bike-price"><strong class="price-hour"></strong> / h' +
        '<span class="price-alt"><span class="price-day"></span> / jour</span></p>' +
      '<button class="bike-book" type="button"></button>' +
    '</div>';

  var photo = card.querySelector('.bike-photo');
  photo.src = '../' + bike.image;   // data.js writes 'images/...'; this page is in /pages
  photo.alt = bike.nom;   // text shown when the photo cannot be seen

  var badges = card.querySelector('.badges');
  if (bike.electrique) { badges.innerHTML += '<span class="badge badge-electric">Électrique</span>'; }
  if (!bike.disponible) { badges.innerHTML += '<span class="badge badge-unavailable">Indisponible</span>'; }

  card.querySelector('.bike-name').textContent = bike.nom;
  card.querySelector('.price-hour').textContent = money(bike.prixHeure);   // main price: per hour
  card.querySelector('.price-day').textContent = money(bike.prixJour);     // smaller line: per day

  // A bike in repair can be looked at, but not booked
  var button = card.querySelector('.bike-book');
  button.textContent = bike.disponible ? 'Réserver →' : 'Détail →';
  return card;
}
