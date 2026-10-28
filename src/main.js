import '@fontsource/cormorant-garamond/latin-400.css';
import '@fontsource/cormorant-garamond/latin-400-italic.css';
import '@fontsource/cormorant-garamond/latin-500.css';
import '@fontsource/dm-sans/latin-400.css';
import '@fontsource/dm-sans/latin-500.css';
import { createIcons, ArrowUpRight, ArrowRight, ArrowLeft, ArrowDown, Menu, X, Phone, MapPin, Clock3, Plus, Sparkles, Flower2, HeartHandshake, Fingerprint, ExternalLink } from 'lucide';
import { studio, treatments, values, team, assetUrl } from './content.js';
import './style.css';
import { initMotion, animateDialog } from './motion.js';

const esc = (text) => String(text).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const safeUrl = (url) => { try { const u = new URL(url); return u.protocol === 'https:' ? esc(u.href) : '#'; } catch { return '#'; } };
const icon = (name, cls = '') => `<i data-lucide="${name}" class="${cls}" aria-hidden="true"></i>`;
const waIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.3-4.7a8.5 8.5 0 1 1 16.2-4.1Z"/><path d="M8.3 7.6c-.6 0-1.1.7-.9 1.5.5 2.8 2.8 5.1 5.6 5.8.9.2 1.9-.6 1.9-1.2l-2-1-1 .7a6.7 6.7 0 0 1-2.8-2.7l.6-1-1-2.1Z"/></svg>`;
const external = 'target="_blank" rel="noopener noreferrer"';
const mark = `<img class="brand-logo" src="${assetUrl('/images/logo-bealab.webp')}" width="1784" height="870" alt="BEALAB BeautyStudio di Giulia Salis">`;

document.querySelector('#app').innerHTML = `
  <a class="skip-link" href="#main">Vai al contenuto</a>
  <div class="reading-progress" aria-hidden="true"></div>
  <header class="site-header">
    <a class="brand" href="#home" aria-label="Bealab, inizio pagina">${mark}</a>
    <nav class="desktop-nav" aria-label="Navigazione principale">
      <a href="#filosofia">Il nostro mondo</a><a href="#squadra">La squadra</a><a href="#trattamenti">Trattamenti</a><a href="#contatti">Dove siamo</a>
    </nav>
    <a class="button button-dark header-book" href="${studio.whatsapp}" aria-label="Prenota un appuntamento su WhatsApp" ${external}><span class="book-label-long">Prenota un momento per te</span><span class="book-label-short">Prenota</span> ${icon('arrow-up-right')}</a>
    <button class="menu-toggle" type="button" aria-controls="mobile-nav" aria-expanded="false" aria-label="Apri menu">${icon('menu', 'menu-open-icon')}${icon('x', 'menu-close-icon')}</button>
  </header>
  <nav id="mobile-nav" class="mobile-nav" aria-label="Navigazione mobile" inert>
    <span class="eyebrow">IL MONDO BEALAB</span>
    <a href="#filosofia">Il nostro mondo</a><a href="#squadra">Quelle di Bealab</a><a href="#trattamenti">I trattamenti</a><a href="#recensioni">La vostra fiducia</a><a href="#contatti">Dove siamo</a>
    <a class="button button-dark" href="${studio.whatsapp}" ${external}>Prenota su WhatsApp ${waIcon}</a>
  </nav>
  <main id="main">
    <section class="hero" id="home" aria-labelledby="hero-title">
      <div class="hero-copy">
        <span class="eyebrow"><span class="small-line"></span> BEAUTY STUDIO A TORINO · DAL ${studio.openingYear}</span>
        <h1 id="hero-title">La bellezza<br>di sentirsi<br><em>bene.</em></h1>
        <p>Professionalità, una chiacchiera e un momento per te.<br class="desktop-break"> Da Bealab ci piace farti sentire come a casa.</p>
        <a class="button button-dark" href="#trattamenti">Scopri i trattamenti ${icon('arrow-up-right')}</a>
        <a class="hero-book text-link" href="${studio.whatsapp}" ${external}>Prenota un appuntamento ${icon('arrow-up-right')}</a>
        <a class="hero-scroll" href="#filosofia"><span class="circle-arrow">${icon('arrow-down')}</span> PRENDITI IL TUO TEMPO</a>
      </div>
      <div class="hero-visual">
        <div class="hero-image-frame"><img class="hero-photo" src="${assetUrl('/images/hero.webp')}" width="1536" height="1024" alt="Immagine illustrativa: un momento di relax durante un trattamento viso" fetchpriority="high"></div>
        <div class="hero-image-shade"></div>
        <div class="hero-image-note"><span>BEAUTY IS A FEELING.</span><p>Entra, rilassati.<br>Sei da Bealab.</p><span class="image-demo-label">IMMAGINE DIMOSTRATIVA</span></div>
        <div class="round-seal"><span>UN MOMENTO</span>${icon('flower-2')}<span>SOLO PER TE</span></div>
        <span class="hero-side-note">CURA. EQUILIBRIO. BELLEZZA.</span>
      </div>
    </section>
    <div class="manifesto-strip"><span>Professionalità, senza formalità.</span><span class="strip-flower">${icon('flower-2')}</span><span>Una chiacchiera. Una coccola.</span><span class="strip-flower">${icon('flower-2')}</span><span>Sentiti come a casa.</span></div>

    <section class="about section-pad" id="filosofia" aria-labelledby="about-title">
      <div class="about-visual reveal"><img src="${assetUrl('/images/studio.webp')}" alt="Immagine dimostrativa di un ambiente beauty dai toni caldi e naturali" loading="lazy" width="1024" height="1280"><span class="vertical-caption">UN’ISPIRAZIONE PER IL NOSTRO MONDO · IMMAGINE DEMO</span><div class="about-image-note">Una chiacchiera.<br><em>Un momento per te.</em></div></div>
      <div class="about-copy reveal"><span class="eyebrow">01 / IL MONDO BEALAB</span><h2 id="about-title">Professionalità sì.<br><em>Senza troppe formalità.</em></h2><p>Nel ${studio.openingYear} abbiamo aperto le porte di Bealab con un’idea semplice: prenderci cura di te con professionalità, facendoti sentire a tuo agio fin dal primo momento.</p><p>Qui si ride, si chiacchiera e ci si rilassa. Ci piace conoscerti, ascoltare quello che cerchi e rendere ogni appuntamento un momento piacevole, con la leggerezza di sentirsi a casa.</p><a class="text-link" href="#squadra">Conosci quelle di Bealab ${icon('arrow-up-right')}</a><div class="about-signature">Ti aspettiamo, Giulia e la squadra.</div></div>
    </section>

    <section class="team-section section-pad" id="squadra" aria-labelledby="team-title">
      <div class="section-heading reveal"><div><span class="eyebrow">02 / LA NOSTRA SQUADRA</span><h2 id="team-title">Siamo noi.<br><em>Quelle di Bealab.</em></h2></div><div class="heading-aside team-intro"><p>Giulia, Alessia, Ilenia e Marika.<br>Energie diverse, la stessa missione: farti sentire bene, in relax e a tuo agio.</p></div></div>
      <div class="team-grid">${team.map(person=>`<article class="team-card reveal"><div class="team-photo"><img src="${person.image}" alt="${esc(person.alt)}" width="800" height="1000" loading="lazy"></div><div class="team-person"><h3>${esc(person.name)}</h3><span>${esc(person.role)}</span></div></article>`).join('')}</div>
      <p class="team-note reveal">${icon('heart-handshake')} Qui si ride, si chiacchiera e ci si sente come a casa.</p>
    </section>

    <section class="treatments section-pad" id="trattamenti" aria-labelledby="treatments-title">
      <div class="section-heading reveal"><div><span class="eyebrow">03 / I NOSTRI TRATTAMENTI</span><h2 id="treatments-title">Ogni bellezza ha<br><em>il suo rituale.</em></h2></div><div class="heading-aside"><p>Dalle mani al viso, un’attenzione speciale<br>per ogni parte di te.</p><a href="${studio.whatsapp}" class="text-link" ${external}>Troviamo il tuo trattamento ${icon('arrow-up-right')}</a></div></div>
      <div class="treatment-grid">${treatments.map(t => `<article class="treatment-card reveal"><button class="treatment-image" data-treatment="${t.id}" aria-label="Scopri ${esc(t.name)}"><img src="${t.image}" alt="${esc(t.alt)}" style="object-position:${t.position}" loading="lazy" width="700" height="850"><span class="treatment-number">${t.number}</span><span class="treatment-open">${icon('plus')}</span></button><div class="treatment-info"><h3>${t.name}</h3><p>${t.short}</p><button class="text-link" data-treatment="${t.id}">Richiedi informazioni ${icon('arrow-up-right')}</button></div></article>`).join('')}</div>
      <p class="section-footnote">I servizi presentati sono una selezione dimostrativa, da confermare con il centro.</p>
    </section>

    <section class="values section-pad" id="valori" aria-labelledby="values-title"><div class="values-title reveal"><span class="eyebrow">LA DIFFERENZA È NELLA CURA</span><h2 id="values-title">La differenza è nei dettagli.<br><em>E nel modo di accoglierti.</em></h2></div><div class="values-grid">${values.map(v=>`<article class="value-item reveal">${icon(v.icon)}<h3>${v.title}</h3><p>${v.text}</p></article>`).join('')}</div></section>

    <section class="reviews section-pad" id="recensioni" aria-labelledby="reviews-title"><div class="reviews-symbol">“</div><span class="eyebrow reveal">04 / LA VOSTRA FIDUCIA</span><h2 id="reviews-title" class="reveal">La vostra fiducia è<br><em>la nostra soddisfazione.</em></h2>${studio.reviews.length ? `<p class="reviews-intro reveal">Esperienze condivise su Google Maps.</p><div class="reviews-grid">${studio.reviews.map(r=>`<blockquote class="review-card"><div class="review-rating" role="img" aria-label="${r.rating} su 5 stelle"><span aria-hidden="true">${'★'.repeat(r.rating)}</span></div><p>“${esc(r.text)}”</p><footer class="review-attribution"><cite>${esc(r.author)}</cite>${r.sourceUrl ? `<a class="review-source" href="${safeUrl(r.sourceUrl)}" ${external}>Leggi la recensione originale ${icon('external-link')}</a>` : '<span class="review-source">Google Maps</span>'}</footer></blockquote>`).join('')}</div>` : `<p class="reviews-intro reveal">Il racconto più bello è quello di chi ci sceglie.<br>Scopri le esperienze condivise su Google.</p><div class="review-placeholder reveal"><span class="eyebrow">UNO SPAZIO PER LE VOSTRE PAROLE</span><p>Le recensioni autentiche saranno aggiunte dopo la verifica e l’autorizzazione alla pubblicazione.</p><span class="demo-tag">ANTEPRIMA DEMO</span></div>`}<a class="text-link" href="${safeUrl(studio.googleReviewsUrl||studio.maps)}" ${external}>${studio.googleReviewsUrl ? 'Leggi le recensioni su Google' : 'Trova Bealab su Google'} ${icon('arrow-up-right')}</a></section>

    <section class="booking section-pad" id="prenota" aria-labelledby="booking-title"><div class="booking-orbit orbit-one"></div><div class="booking-orbit orbit-two"></div><div class="booking-content reveal"><span class="eyebrow">NON È SOLO UN APPUNTAMENTO. È IL TUO MOMENTO.</span><h2 id="booking-title">Il tuo momento di<br>benessere <em>ti aspetta.</em></h2><p>Per informazioni o per un appuntamento, scrivici.<br class="desktop-break"> Troviamo insieme il tuo momento, con la semplicità di una chiacchiera.</p><div class="booking-buttons"><a class="button button-ivory" href="${studio.whatsapp}" ${external}>${waIcon} Prenota su WhatsApp ${icon('arrow-up-right')}</a><a class="button button-outline-light" href="${studio.phoneHref}">${icon('phone')} Chiama il centro</a></div><span class="booking-small">UN MESSAGGIO, IL PRIMO GESTO DI CURA.</span></div></section>

    <section class="contact section-pad" id="contatti" aria-labelledby="contact-title"><div class="contact-copy reveal"><span class="eyebrow">05 / CI TROVI QUI</span><h2 id="contact-title">Un angolo di bellezza,<br><em>a Torino.</em></h2><p>Passa a trovarci in Corso Giovanni Agnelli,<br>nel quartiere Santa Rita. Ti aspettiamo!</p><div class="contact-details"><div>${icon('map-pin')}<div><h3>Vieni a trovarci</h3><p>${studio.address}<br>${studio.postalCode} ${studio.city}</p></div></div><div>${icon('phone')}<div><h3>Parliamone</h3><a href="${studio.phoneHref}">${studio.phone}</a></div></div><div class="contact-hours">${icon('clock-3')}<div class="contact-hours-content"><h3>I nostri orari</h3>${studio.hours.length ? `<table class="opening-hours" aria-label="Orari di apertura"><tbody>${studio.hours.map(h=>`<tr><th scope="row">${esc(h.day)}</th><td>${esc(h.time)}</td></tr>`).join('')}</tbody></table>` : `<p>Contattaci per conoscere gli orari<br>e concordare il tuo appuntamento.</p>`}</div></div></div><a class="text-link" href="${studio.maps}" ${external}>Indicazioni stradali ${icon('arrow-up-right')}</a></div><div class="map-panel reveal" id="map-panel"><div class="map-illustration" aria-hidden="true"><span class="map-block block-a"></span><span class="map-block block-b"></span><span class="map-block block-c"></span><span class="map-block block-d"></span><span class="map-road road-one"></span><span class="map-road road-two"></span><span class="map-road road-three"></span><span class="map-road-label">CORSO GIOVANNI AGNELLI</span><span class="map-pin">${icon('map-pin')}</span></div><div class="map-card"><span class="map-card-brand">Bealab</span><p>Corso Giovanni Agnelli 52/C · Torino</p><button id="load-map" class="text-link">Carica Google Maps ${icon('arrow-up-right')}</button><small>Schema illustrativo. Caricando la mappa ti colleghi a Google.</small></div></div></section>
  </main>
  <footer class="footer"><div class="footer-main"><div class="footer-brand"><a class="brand" href="#home" aria-label="Bealab, inizio pagina">${mark}</a><p>Professionalità, una chiacchiera<br>e un momento per te. A Torino, dal ${studio.openingYear}.</p></div><div class="footer-links"><span class="eyebrow">ESPLORA</span><a href="#filosofia">Il nostro mondo</a><a href="#squadra">Quelle di Bealab</a><a href="#trattamenti">I trattamenti</a><a href="#contatti">Dove siamo</a></div><div class="footer-links"><span class="eyebrow">RESTIAMO IN CONTATTO</span><a href="${studio.phoneHref}">${studio.phone}</a><a href="${studio.whatsapp}" ${external}>Scrivici su WhatsApp ${icon('arrow-up-right')}</a><p>${studio.address}<br>${studio.postalCode} ${studio.city}</p>${studio.socials.map(s=>`<a href="${safeUrl(s.url)}" ${external}>${esc(s.label)}</a>`).join('')}</div><a class="back-top" href="#home" aria-label="Torna all’inizio">${icon('arrow-up-right')}</a></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} Bealab – Beauty Studio</span><span>Foto del team e immagini illustrative</span><button class="privacy-link" data-privacy>Informativa privacy</button></div></footer>
  <a class="floating-whatsapp" href="${studio.whatsapp}" ${external} aria-label="Contatta Bealab su WhatsApp">${waIcon}<span>Parliamone</span></a>
  <dialog class="content-dialog" id="content-dialog" aria-labelledby="dialog-title"><div class="dialog-toolbar"><button class="dialog-close" aria-label="Chiudi finestra">${icon('x')}</button></div><div id="dialog-content"></div></dialog>
`;

const icons = { ArrowUpRight, ArrowRight, ArrowLeft, ArrowDown, Menu, X, Phone, MapPin, Clock3, Plus, Sparkles, Flower2, HeartHandshake, Fingerprint, ExternalLink };
const drawIcons = () => createIcons({ icons, attrs: { 'stroke-width': 1.4 } });
drawIcons();

const structured = document.createElement('script');
structured.type = 'application/ld+json';
structured.textContent = JSON.stringify({ '@context': 'https://schema.org', '@type': 'BeautySalon', name: studio.name, foundingDate: String(studio.openingYear), telephone: studio.phone, address: { '@type':'PostalAddress', streetAddress:studio.address, addressLocality:studio.city, postalCode:studio.postalCode, addressCountry:'IT' } });
document.head.append(structured);

const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');
function closeMenu() { menuButton.setAttribute('aria-expanded','false'); menuButton.setAttribute('aria-label','Apri menu'); mobileNav.classList.remove('is-open'); mobileNav.inert = true; document.body.classList.remove('menu-open'); }
menuButton.addEventListener('click', () => { const open = menuButton.getAttribute('aria-expanded') !== 'true'; menuButton.setAttribute('aria-expanded',String(open)); menuButton.setAttribute('aria-label',open?'Chiudi menu':'Apri menu'); mobileNav.classList.toggle('is-open',open); mobileNav.inert = !open; document.body.classList.toggle('menu-open',open); });
mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
matchMedia('(min-width: 1001px)').addEventListener('change',e=>{if(e.matches)closeMenu();});

const contentDialog = document.querySelector('#content-dialog');
const content = document.querySelector('#dialog-content');
function openContent(html) { content.innerHTML=html; drawIcons(); contentDialog.showModal(); document.body.classList.add('dialog-open'); animateDialog(contentDialog); }
document.querySelectorAll('[data-treatment]').forEach(button=>button.addEventListener('click',()=>{const t=treatments.find(t=>t.id===button.dataset.treatment); openContent(`<img class="dialog-treatment-image" src="${t.image}" alt="${esc(t.alt)}"><div class="dialog-body"><span class="eyebrow">IL TUO RITUALE BEALAB · ${t.number}</span><h2 id="dialog-title">${t.name}</h2><p>${t.description}</p><ul class="service-list">${t.services.map(s=>`<li>${s}${icon('sparkles')}</li>`).join('')}</ul><p class="dialog-note">Questa è una selezione dimostrativa. Contatta il centro per confermare servizi disponibili, modalità e prezzi.</p><a class="button button-dark" href="${studio.whatsapp}" ${external}>Richiedi informazioni ${waIcon}</a></div>`);}));
document.querySelectorAll('[data-privacy]').forEach(button=>button.addEventListener('click',()=>openContent(`<div class="dialog-body privacy-body"><span class="eyebrow">TRASPARENZA E PRIVACY</span><h2 id="dialog-title">La tua privacy,<br><em>con cura.</em></h2><p class="privacy-status">Documento preliminare per la demo, da completare prima della pubblicazione. Non costituisce un’informativa definitiva.</p><h3>Come funziona questa demo</h3><p>Il sito non contiene moduli per raccogliere dati personali, non utilizza strumenti di analisi, pubblicità o cookie di profilazione. Font e immagini vengono serviti dal sito. Il gestore dell’hosting può trattare dati tecnici di connessione secondo le proprie condizioni.</p><h3>Servizi esterni</h3><p>I collegamenti a WhatsApp e Google aprono i rispettivi servizi solo quando scegli di visitarli. La mappa Google non è caricata automaticamente: il pulsante dedicato attiva la connessione a Google, che può trattare indirizzo IP e altri dati tecnici secondo la propria <a href="https://policies.google.com/privacy?hl=it" ${external}>informativa privacy</a>. Consultare anche l’<a href="https://www.whatsapp.com/legal/privacy-policy?lang=it" ${external}>informativa WhatsApp</a>.</p><h3>Informazioni del titolare</h3><dl class="legal-fields"><dt>Titolare e recapito privacy</dt><dd>${esc(studio.legal.owner || 'Da inserire dal titolare prima della pubblicazione')}${studio.legal.contact ? ' · '+esc(studio.legal.contact) : ''}</dd><dt>Partita IVA</dt><dd>${esc(studio.legal.vatNumber || 'Da verificare e inserire prima della pubblicazione')}</dd><dt>Fornitori del servizio</dt><dd>${esc(studio.legal.providers || 'Hosting e relativi fornitori da confermare')}</dd></dl><h3>Da completare prima della pubblicazione</h3><p>Il titolare dovrà verificare finalità e basi giuridiche dei trattamenti effettivi, tempi di conservazione, destinatari, eventuali trasferimenti e modalità per esercitare i diritti previsti dal GDPR e presentare reclamo al Garante. La configurazione della mappa e ogni futuro servizio esterno vanno verificati rispetto ai requisiti applicabili.</p></div>`)));

contentDialog.querySelector('.dialog-close').addEventListener('click',()=>contentDialog.close());
contentDialog.addEventListener('click',e=>{if(e.target===contentDialog){const r=contentDialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)contentDialog.close();}});
contentDialog.addEventListener('close',()=>document.body.classList.remove('dialog-open'));

document.querySelector('#load-map').addEventListener('click',()=>{const frame=document.createElement('iframe');frame.title='Google Maps: Bealab Beauty Studio, Corso Giovanni Agnelli 52/C, Torino';frame.src='https://www.google.com/maps?q=Bealab+Beauty+Studio+Corso+Giovanni+Agnelli+52%2FC+Torino&output=embed';frame.referrerPolicy='no-referrer';frame.allowFullscreen=true;const panel=document.querySelector('#map-panel');panel.classList.add('map-loaded');panel.replaceChildren(frame);const fallback=document.createElement('a');fallback.href=studio.maps;fallback.target='_blank';fallback.rel='noopener noreferrer';fallback.className='map-fallback';fallback.textContent='Mappa non disponibile? Apri le indicazioni su Google';panel.append(fallback);});

initMotion();
const sectionObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){document.querySelectorAll('.desktop-nav a').forEach(a=>a.classList.toggle('active',a.hash==='#'+e.target.id));}}),{rootMargin:'-20% 0px -60% 0px'});
document.querySelectorAll('main section[id]').forEach(s=>sectionObserver.observe(s));

// Il contatto resta accessibile in testata; in basso il pulsante flottante
// lascia liberi gli orari e le azioni della sezione appuntamenti.
const floatingContact = document.querySelector('.floating-whatsapp');
const visibleContactSections = new Set();
function updateFloatingContact() {
  const hide = visibleContactSections.size > 0 && document.activeElement !== floatingContact;
  floatingContact.classList.toggle('is-hidden', hide);
  floatingContact.inert = hide;
}
const contactVisibility = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) visibleContactSections.add(entry.target);
    else visibleContactSections.delete(entry.target);
  });
  updateFloatingContact();
}, { threshold: 0 });
['#prenota', '#contatti'].forEach(selector => contactVisibility.observe(document.querySelector(selector)));
floatingContact.addEventListener('blur', updateFloatingContact);
