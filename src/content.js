// Tutti i dati commerciali da aggiornare prima della pubblicazione sono qui.
export const assetUrl = path => path.startsWith('data:') ? path : import.meta.env.BASE_URL + path.replace(/^\/+/, '');

export const studio = {
  name: 'Bealab – Beauty Studio',
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
  reviews: [], // Solo recensioni autentiche autorizzate: { text, author, sourceUrl }.
};

export const treatments = [
  { id: 'mani', number: '01', name: 'Manicure & nail care', short: 'Piccoli dettagli, grande bellezza.', description: 'Un momento dedicato alle tue mani e ai tuoi piedi, con la cura che meritano.', services: ['Manicure', 'Semipermanente', 'Pedicure', 'Ricostruzione unghie'], image: '/images/nails.webp', alt: 'Dettaglio dimostrativo di una manicure nei toni nude', position: 'center' },
  { id: 'viso', number: '02', name: 'Trattamenti viso', short: 'Ritrova la tua luce naturale.', description: 'Ascoltare la tua pelle e dedicarti un rituale di bellezza pensato intorno a te.', services: ['Pulizia del viso', 'Trattamenti personalizzati per la pelle', 'Cura e benessere del viso'], image: '/images/hero.webp', alt: 'Immagine dimostrativa di un rituale di cura del viso', position: '65% center' },
  { id: 'sguardo', number: '03', name: 'Ciglia & sguardo', short: 'La bellezza, al primo sguardo.', description: 'Un’attenzione speciale ai dettagli che rendono il tuo sguardo unico.', services: ['Trattamenti per valorizzare lo sguardo', 'Laminazione ciglia'], image: '/images/eyes.webp', alt: 'Dettaglio dimostrativo di occhi chiusi e ciglia naturali', position: 'center' },
  { id: 'depilazione', number: '04', name: 'Depilazione', short: 'La leggerezza sulla pelle.', description: 'Cura e delicatezza per sentirti a tuo agio, ogni giorno.', services: ['Ceretta', 'Trattamenti di epilazione'], image: '/images/wellness.webp', alt: 'Accessori dimostrativi dedicati alla cura della pelle', position: 'center' },
  { id: 'corpo', number: '05', name: 'Corpo & benessere', short: 'Rallenta. Respira. Ritrovati.', description: 'Lascia spazio al relax con un momento dedicato al tuo corpo e al tuo benessere.', services: ['Trattamenti estetici per il corpo', 'Percorsi dedicati al benessere'], image: '/images/studio.webp', alt: 'Ambiente dimostrativo per un momento di relax e benessere', position: 'center' },
].map(treatment => ({ ...treatment, image: assetUrl(treatment.image) }));

export const values = [
  { icon: 'sparkles', title: 'Cura dei dettagli', text: 'L’attenzione che fa la differenza, in ogni piccolo gesto.' },
  { icon: 'flower-2', title: 'Professionalità', text: 'Ascolto e cura, al centro di ogni tuo desiderio.' },
  { icon: 'heart-handshake', title: 'Accoglienza', text: 'Un’atmosfera serena in cui sentirti semplicemente bene.' },
  { icon: 'fingerprint', title: 'Bellezza personalizzata', text: 'Il tuo modo di essere, il nostro punto di partenza.' },
];

export const gallery = [
  { src: '/images/studio.webp', alt: 'Ispirazione per un ambiente beauty accogliente', label: 'Uno spazio per rallentare', className: 'gallery-tall' },
  { src: '/images/nails.webp', alt: 'Ispirazione manicure nude', label: 'La bellezza nei dettagli' },
  { src: '/images/hero.webp', alt: 'Ispirazione per un rituale viso', label: 'Un gesto di cura' },
  { src: '/images/eyes.webp', alt: 'Ispirazione dedicata alla cura dello sguardo', label: 'La tua luce naturale', className: 'gallery-wide' },
  { src: '/images/wellness.webp', alt: 'Ispirazione dedicata al benessere', label: 'Il tempo di ritrovarti' },
].map(image => ({ ...image, src: assetUrl(image.src) }));
