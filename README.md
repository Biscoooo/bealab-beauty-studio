# Bealab – Beauty Studio

Sito vetrina dimostrativo in italiano, sviluppato con Vite e JavaScript. Non richiede database, account o chiavi API. Include una sezione dedicata alla squadra, menu mobile, dettagli dei trattamenti, collegamenti WhatsApp e telefono, mappa caricata su richiesta e spazio privacy.

## Demo online su Vercel

La demo pubblica è disponibile su **https://bealab-beauty-studio.vercel.app/** e il repository è `siti-web-torino/bealab-beauty-studio`. Vercel è collegato a GitHub: i push su `main` avviano la pubblicazione. Il progetto usa il framework Vite, `npm run build` e la directory di output `dist`; su Vercel il percorso base deve restare `/` (non impostare `VITE_BASE_PATH` al percorso GitHub Pages). Verificare il completamento della pubblicazione prima di condividere una modifica.

La demo resta `noindex,nofollow`. I metadati di condivisione puntano all’indirizzo Vercel; impostando `SITE_URL` al dominio definitivo la build aggiorna URL e sitemap e abilita l’indicizzazione, da fare dopo la conferma dei contenuti e dei dati legali.

## Pubblicazione alternativa su GitHub Pages

È predisposta la pubblicazione tramite GitHub Pages. Il proprietario deve attivarla una sola volta:

1. Aprire **Settings → Pages** nel repository GitHub.
2. In **Build and deployment → Source**, scegliere **GitHub Actions**.
3. Aprire **Actions → Pubblica demo Bealab**, premere **Run workflow**, scegliere `main` e confermare. Se un’esecuzione è già fallita prima dell’attivazione di Pages, usare **Re-run all jobs** oppure avviare una nuova esecuzione.

Dopo la prima pubblicazione riuscita, GitHub mostra il collegamento nelle impostazioni Pages. L’indirizzo previsto, senza dominio personalizzato, è `https://siti-web-torino.github.io/bealab-beauty-studio/`. Ogni successivo push su `main` ricompila e pubblica automaticamente il sito: non occorre riscaricare lo ZIP, basta riaprire o aggiornare lo stesso link dopo il completamento dell’azione. Un’eventuale esecuzione fallita va risolta dalla scheda Actions.

La build legge il percorso da GitHub Pages per servire correttamente immagini, font e script anche nella sottocartella del progetto. Questa pubblicazione è una demo pubblicamente accessibile; resta esclusa dall’indicizzazione con `noindex,nofollow`, senza attivare `SITE_URL`. I dati legali e le informazioni commerciali ancora da verificare vanno completati prima di usarla come sito definitivo.

Se GitHub richiede un piano a pagamento per Pages nel repository privato, verificare le opzioni dell’account: non cambiare automaticamente la visibilità del repository. La configurazione del workflow non prova che Pages sia già attivo o che la prima pubblicazione sia riuscita.

## Vedere il sito senza installare nulla

1. Su GitHub premi il pulsante verde **Code**, poi **Download ZIP**.
2. Estrai completamente la cartella ZIP sul computer.
3. Apri **APRI-IL-SITO.html** con un doppio clic (Chrome, Edge, Firefox o Safari).

Questo file contiene già immagini, font e funzionalità della demo: non richiede Node.js o un server. WhatsApp, telefono e mappa usano i rispettivi servizi esterni quando li selezioni. La visualizzazione del file su GitHub mostra il codice: per vedere il sito va prima scaricato e aperto nel browser. Questa demo locale non pubblica il sito su Internet.

`APRI-IL-SITO.html` è un’istantanea della demo; dopo eventuali modifiche ai sorgenti va rigenerata. Per lo sviluppo ordinario usare i comandi seguenti.

## Sviluppo

Node.js >= 22.12 (verificato con Node 24) e npm.

```sh
cd /workspace/bealab-beauty-studio
npm ci --cache /workspace/.npm-cache --no-audit --no-fund
npm run dev -- --port 5173 --strictPort
```

Ogni attività cloud dispone già di un ambiente isolato: usare questo checkout; non creare worktree, salvo richiesta esplicita.

```sh
npm run build
npm run preview -- --port 4173 --strictPort
```

La cartella `dist/` è distribuibile su hosting statico. Non contiene segreti. L’avvio del server va ripetuto in ogni nuova sessione: i processi non sono conservati dallo snapshot dell’ambiente.

## Aggiornare il sito

- `src/content.js`: contatti, anno di apertura, orari, squadra, servizi, foto, social, recensioni autorizzate e informazioni legali. Gli orari vuoti mostrano un invito a contattare il centro; nessun orario è stato inventato. L’anno 2022, i nomi Giulia, Alessia, Ilenia e Marika e il ruolo di Giulia come titolare provengono dal post ufficiale fornito dall’utente. Non sono attribuite specializzazioni o qualifiche non confermate alle altre persone.
- `src/main.js`: testi editoriali, struttura e interazioni.
- `src/motion.js`: ingresso progressivo dei contenuti, indicatore di lettura, lieve movimento delle foto su desktop e apertura animata dei dettagli. Gli effetti rispettano `prefers-reduced-motion`, anche se la preferenza cambia durante la visita; le interazioni legate al puntatore sono limitate ai dispositivi con mouse.
- `src/style.css`: palette, tipografia, animazioni e responsive.
- `public/images/`: immagini WebP locali, sostituibili mantenendo gli stessi nomi. I ritratti `team-*.webp` sono adattamenti realizzati con uno strumento di editing generativo a partire dalle fotografie fornite in chat: non sono copie identiche dei file originali. Per una presentazione fedele dell’attività, sostituirli con i JPG/PNG originali autorizzati. Le altre fotografie sono illustrazioni generate per la demo, non immagini del salone o prove di trattamenti effettivamente eseguiti. Le risorse di lavoro sono conservate fuori dal checkout in `/workspace/generated_images`.
- `public/images/logo-bealab.webp`: adattamento con sfondo trasparente del logo fornito, ottenuto con lo stesso strumento generativo; per l’identità ufficiale usare il file originale. La palette del sito riprende rosa peonia, lilla e fucsia dal post ufficiale condiviso dall’utente.
- `index.html`: metadati SEO e Open Graph.

I font Cormorant Garamond e DM Sans sono serviti localmente tramite Fontsource. Le icone sono Lucide (ISC); i font includono le rispettive licenze SIL OFL nei pacchetti installati. Non sono presenti analytics o pixel pubblicitari.

## Prima della pubblicazione

1. Confermare i servizi, gli orari e le informazioni commerciali con il proprietario.
2. Sostituire le immagini illustrative con foto autorizzate, se disponibili, e aggiornare le relative diciture.
3. Il collegamento alle recensioni in `studio.googleReviewsUrl` usa la scheda Google Maps verificata confrontando nome, indirizzo e telefono. Le tre testimonianze sono trascritte dagli screenshot forniti dall’utente, con i cognomi abbreviati come richiesto; l’apertura della scheda non sostituisce la conferma del proprietario sui materiali usati.
4. Completare `studio.legal`, l’informativa privacy e la verifica della mappa con i dati reali del titolare e dell’hosting. L’informativa presente è esplicitamente preliminare. La mappa non comporta richieste a Google prima del clic; la scelta non viene memorizzata.
5. Impostare `SITE_URL` al dominio HTTPS definitivo e compilare:

```sh
SITE_URL=https://DOMINIO-VERIFICATO npm run build
```

Il comando produce `dist/sitemap.xml`, `robots.txt`, URL canonico e Open Graph assoluti. Senza `SITE_URL` la demo resta `noindex,nofollow`, `robots.txt` vieta l’indicizzazione e non viene inventato un dominio per la sitemap. Il dominio dell’esempio è un segnaposto da sostituire.

6. Pubblicare il contenuto di `dist/` su un hosting statico e verificare HTTPS, collegamenti e anteprime social sul dominio reale. Lo sviluppo e il salvataggio della configurazione cloud non pubblicano automaticamente il sito né effettuano push su GitHub.

## Verifiche

La compilazione controlla il bundle. Il flusso è stato verificato con Chromium/Playwright su desktop e smartphone: menu, collegamenti interni, dettagli dei cinque trattamenti, WhatsApp senza testo precompilato, chiusura delle finestre con il tasto Escape, privacy e caricamento differito della mappa. Le aperture dei servizi esterni non costituiscono una verifica delle loro funzionalità o della scheda Google ufficiale.
