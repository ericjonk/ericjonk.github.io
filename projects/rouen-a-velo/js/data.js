// Rouen à Vélo : les vélos de l'atelier
// Ce fichier est fourni : NE PAS LE MODIFIER.
// Le catalogue, les fiches et la réservation lisent tous ce tableau.

const velos = [
  {
    id: 1,
    nom: "Citadine Bleue",
    type: "ville",            // "ville", "vtt" ou "enfant"
    electrique: false,
    prixHeure: 4,             // en euros
    prixJour: 15,
    disponible: true,
    image: "images/velos/citadine-bleue.jpg",
    description: "Un vélo léger et confortable pour flâner sur les quais de Seine. Panier à l'avant, 3 vitesses, éclairage intégré."
  },
  {
    id: 2,
    nom: "Citadine Électrique",
    type: "ville",
    electrique: true,
    prixHeure: 8,
    prixJour: 30,
    disponible: true,
    image: "images/velos/citadine-electrique.jpg",
    description: "L'assistance électrique pour monter sans effort les côtes de Bonsecours. Autonomie de 60 km, batterie amovible."
  },
  {
    id: 3,
    nom: "Le Rouennais",
    type: "ville",
    electrique: false,
    prixHeure: 5,
    prixJour: 18,
    disponible: true,
    image: "images/velos/rouennais.jpg",
    description: "Un vélo hollandais au guidon relevé, idéal pour découvrir le centre historique en position droite et détendue."
  },
  {
    id: 4,
    nom: "VTT Forêt Verte",
    type: "vtt",
    electrique: false,
    prixHeure: 6,
    prixJour: 22,
    disponible: true,
    image: "images/velos/vtt-foret-verte.jpg",
    description: "Un VTT tout suspendu pour les chemins de la forêt de Roumare. 21 vitesses, freins à disque."
  },
  {
    id: 5,
    nom: "VTT Électrique Côte",
    type: "vtt",
    electrique: true,
    prixHeure: 10,
    prixJour: 38,
    disponible: true,
    image: "images/velos/vtt-electrique-cote.jpg",
    description: "Le VTT électrique pour les grandes balades sur les hauteurs de Rouen. Moteur central, autonomie de 80 km."
  },
  {
    id: 6,
    nom: "Cargo Familial",
    type: "ville",
    electrique: true,
    prixHeure: 12,
    prixJour: 45,
    disponible: true,
    image: "images/velos/cargo-familial.jpg",
    description: "Un vélo-cargo électrique avec un bac à l'avant pour transporter deux enfants ou les courses du marché."
  },
  {
    id: 7,
    nom: "Junior 20 pouces",
    type: "enfant",
    electrique: false,
    prixHeure: 3,
    prixJour: 10,
    disponible: true,
    image: "images/velos/junior-20.jpg",
    description: "Pour les enfants de 6 à 9 ans. Léger, avec un seul frein facile à atteindre et une sonnette."
  },
  {
    id: 8,
    nom: "Draisienne Pirate",
    type: "enfant",
    electrique: false,
    prixHeure: 2,
    prixJour: 8,
    disponible: true,
    image: "images/velos/draisienne.jpg",
    description: "Sans pédales, pour apprendre l'équilibre dès 3 ans. Selle réglable, roues increvables."
  },
  {
    id: 9,
    nom: "Tandem Duo",
    type: "ville",
    electrique: false,
    prixHeure: 9,
    prixJour: 32,
    disponible: false,
    image: "images/velos/tandem-duo.jpg",
    description: "Pour pédaler à deux le long de la Seine. Actuellement en réparation à l'atelier."
  },
  {
    id: 10,
    nom: "VTT Junior 24 pouces",
    type: "enfant",
    electrique: false,
    prixHeure: 3,
    prixJour: 12,
    disponible: true,
    image: "images/velos/vtt-junior-24.jpg",
    description: "Le premier VTT des 9 à 12 ans : 7 vitesses, fourche suspendue, pneus crantés pour les chemins."
  }
];
