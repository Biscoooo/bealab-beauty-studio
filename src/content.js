// Tutti i dati commerciali da aggiornare prima della pubblicazione sono qui.
export const assetUrl = path => path.startsWith('data:') ? path : import.meta.env.BASE_URL + path.replace(/^\/+/, '');

export const studio = {
  name: 'Bealab – Beauty Studio',
  openingYear: 2022,
  phone: '+39 351 112 8616',
  phoneHref: 'tel:+393511128616',
  whatsapp: 'https://wa.me/393511128616',
  address: 'Corso Giovanni Agnelli 52/C',
  postalCode: '10137',
  city: 'Torino',
  maps: 'https://www.google.com/maps/search/?api=1&query=Bealab+Beauty+Studio+Torino',
  // Inserire un URL della scheda Google ufficiale solo dopo averla verificata.
  googleReviewsUrl: null,
  hours: [
    { day: 'Lunedì', time: 'Chiuso' },
    { day: 'Martedì', time: '9:30 – 19:00' },
    { day: 'Mercoledì', time: '9:30 – 19:00' },
    { day: 'Giovedì', time: '8:30 – 19:30' },
    { day: 'Venerdì', time: '8:30 – 19:30' },
    { day: 'Sabato', time: '9:30 – 13:30' },
    { day: 'Domenica', time: 'Chiuso' },
  ],
  socials: [], // { label: 'Instagram', url: 'URL verificato' }
  legal: { owner: '', vatNumber: '', contact: '', providers: '' },
  // Trascritte dagli screenshot Google Maps forniti dall’utente. Cognomi abbreviati su sua richiesta.
  reviews: [
    {
      author: 'Elena F.',
      rating: 5,
      text: 'Un centro che consiglio davvero! Ho fatto diversi trattamenti e sono sempre rimasta molto soddisfatta. Le quattro ragazze sono bravissime, gentili e sempre disponibili. Ti fanno sentire a tuo agio dal primo momento e lavorano con grande professionalità. Entrare qui è sempre una piacevole coccola ✨',
      sourceUrl: null,
    },
    {
      author: 'Jessica P.',
      rating: 5,
      text: 'Andare da Bealab è una coccola, tutto lo staff è super gentile ma trovare Ilenia ad accogliermi è sempre un piacere. Non potrei affidarmi a nessun altro per i trattamenti corpo che faccio. Assolutamente consigliato come centro.',
      sourceUrl: null,
    },
    {
      author: 'Laura D.',
      rating: 5,
      text: 'Ormai una garanzia da anni, mi affido a loro per trattamenti corpo, laser e unghie e mi trovo davvero bene. Professionali, preparate e cordiali, un piccolo angolo di paradiso.',
      sourceUrl: null,
    },
  ],
};

export const team = [
  { name: 'Giulia', role: 'Titolare', image: '/images/team-giulia.webp', alt: 'Giulia, titolare di Bealab' },
  { name: 'Alessia', role: 'Il team Bealab', image: '/images/team-alessia.webp', alt: 'Alessia, della squadra Bealab' },
  { name: 'Ilenia', role: 'Il team Bealab', image: '/images/team-ilenia.webp', alt: 'Ilenia, della squadra Bealab' },
  { name: 'Marika', role: 'Il team Bealab', image: '/images/team-marika.webp', alt: 'Marika, della squadra Bealab' },
].map(person => ({ ...person, image: assetUrl(person.image) }));

export const treatments = [
  { id: 'mani', number: '01', name: 'Manicure & nail care', short: 'Piccoli dettagli, grande bellezza.', description: 'Un momento dedicato alle tue mani e ai tuoi piedi, con la cura che meritano.', services: ['Manicure', 'Semipermanente', 'Pedicure', 'Ricostruzione unghie'], image: '/images/nails.webp', alt: 'Dettaglio dimostrativo di una manicure nei toni nude', position: 'center' },
  { id: 'viso', number: '02', name: 'Trattamenti viso', short: 'Ritrova la tua luce naturale.', description: 'Ascoltare la tua pelle e dedicarti un rituale di bellezza pensato intorno a te.', services: ['Pulizia del viso', 'Trattamenti personalizzati per la pelle', 'Cura e benessere del viso'], image: '/images/hero.webp', alt: 'Immagine dimostrativa di un rituale di cura del viso', position: '65% center' },
  { id: 'sguardo', number: '03', name: 'Ciglia & sguardo', short: 'La bellezza, al primo sguardo.', description: 'Un’attenzione speciale ai dettagli che rendono il tuo sguardo unico.', services: ['Trattamenti per valorizzare lo sguardo', 'Laminazione ciglia'], image: '/images/eyes.webp', alt: 'Dettaglio dimostrativo di occhi chiusi e ciglia naturali', position: 'center' },
  { id: 'depilazione', number: '04', name: 'Depilazione', short: 'La leggerezza sulla pelle.', description: 'Cura e delicatezza per sentirti a tuo agio, ogni giorno.', services: ['Ceretta', 'Trattamenti di epilazione'], image: '/images/wellness.webp', alt: 'Accessori dimostrativi dedicati alla cura della pelle', position: 'center' },
  { id: 'corpo', number: '05', name: 'Corpo & benessere', short: 'Rallenta. Respira. Ritrovati.', description: 'Lascia spazio al relax con un momento dedicato al tuo corpo e al tuo benessere.', services: ['Trattamenti estetici per il corpo', 'Percorsi dedicati al benessere'], image: '/images/studio.webp', alt: 'Ambiente dimostrativo per un momento di relax e benessere', position: 'center' },
].map(treatment => ({ ...treatment, image: assetUrl(treatment.image) }));

export const values = [
  { icon: 'sparkles', title: 'Cura dei dettagli', text: 'Nei piccoli gesti, tutta l’attenzione che ci piace dedicarti.' },
  { icon: 'flower-2', title: 'Professionalità', text: 'Cura e serietà nel lavoro, spontaneità nel modo di accoglierti.' },
  { icon: 'heart-handshake', title: 'Accoglienza', text: 'Una chiacchiera, una risata e la libertà di essere te.' },
  { icon: 'fingerprint', title: 'Bellezza personalizzata', text: 'Ti ascoltiamo per trovare insieme quello che fa per te.' },
];

export const gallery = [
  { src: '/images/studio.webp', alt: 'Ispirazione per un ambiente beauty accogliente', label: 'Uno spazio per rallentare', className: 'gallery-tall' },
  { src: '/images/nails.webp', alt: 'Ispirazione manicure nude', label: 'La bellezza nei dettagli' },
  { src: '/images/hero.webp', alt: 'Ispirazione per un rituale viso', label: 'Un gesto di cura' },
  { src: '/images/eyes.webp', alt: 'Ispirazione dedicata alla cura dello sguardo', label: 'La tua luce naturale', className: 'gallery-wide' },
  { src: '/images/wellness.webp', alt: 'Ispirazione dedicata al benessere', label: 'Il tempo di ritrovarti' },
].map(image => ({ ...image, src: assetUrl(image.src) }));
