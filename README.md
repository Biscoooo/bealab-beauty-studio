# Bealab – Beauty Studio

Sito vetrina dimostrativo in italiano, sviluppato con Vite e JavaScript. Non richiede database, account o chiavi API. Contiene nove sezioni, menu mobile, galleria con lightbox e navigazione da tastiera, dettagli dei trattamenti, collegamenti WhatsApp e telefono, mappa caricata su richiesta e spazio privacy.

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

- `src/content.js`: contatti, orari, servizi, foto, social, recensioni autorizzate e informazioni legali. Gli orari vuoti mostrano un invito a contattare il centro; nessun orario è stato inventato.
- `src/main.js`: testi editoriali, struttura e interazioni.
- `src/style.css`: palette, tipografia, animazioni e responsive.
- `public/images/`: immagini WebP locali, sostituibili mantenendo gli stessi nomi. Sono tutte illustrazioni generate per la demo, non fotografie del salone o prove di trattamenti effettivamente eseguiti. I file originali sono conservati fuori dal checkout in `/workspace/generated_images`.
- `index.html`: metadati SEO e Open Graph.

I font Cormorant Garamond e DM Sans sono serviti localmente tramite Fontsource. Le icone sono Lucide (ISC); i font includono le rispettive licenze SIL OFL nei pacchetti installati. Non sono presenti analytics o pixel pubblicitari.

## Prima della pubblicazione

1. Confermare i servizi, gli orari e le informazioni commerciali con il proprietario.
2. Sostituire le immagini illustrative con foto autorizzate, se disponibili, e aggiornare le relative diciture.
3. Verificare l’URL della scheda Google ufficiale e inserirlo in `studio.googleReviewsUrl`. Finché manca, il sito mostra correttamente un collegamento di ricerca, senza presentarlo come recensioni verificate. Non sono state inventate testimonianze.
4. Completare `studio.legal`, l’informativa privacy e la verifica della mappa con i dati reali del titolare e dell’hosting. L’informativa presente è esplicitamente preliminare. La mappa non comporta richieste a Google prima del clic; la scelta non viene memorizzata.
5. Impostare `SITE_URL` al dominio HTTPS definitivo e compilare:

```sh
SITE_URL=https://DOMINIO-VERIFICATO npm run build
```

Il comando produce `dist/sitemap.xml`, `robots.txt`, URL canonico e Open Graph assoluti. Senza `SITE_URL` la demo resta `noindex,nofollow`, `robots.txt` vieta l’indicizzazione e non viene inventato un dominio per la sitemap. Il dominio dell’esempio è un segnaposto da sostituire.

6. Pubblicare il contenuto di `dist/` su un hosting statico e verificare HTTPS, collegamenti e anteprime social sul dominio reale. Lo sviluppo e il salvataggio della configurazione cloud non pubblicano automaticamente il sito né effettuano push su GitHub.

## Verifiche

La compilazione controlla il bundle. Il flusso è stato verificato con Chromium/Playwright su desktop e smartphone: menu, collegamenti interni, dettagli dei cinque trattamenti, WhatsApp senza testo precompilato, galleria e tastiera, privacy e caricamento differito della mappa. Le aperture dei servizi esterni non costituiscono una verifica delle loro funzionalità o della scheda Google ufficiale.
