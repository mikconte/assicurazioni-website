# Sito Web per Sub-Agenzia Assicurativa Plurimandataria

Sito web promozionale e operativo realizzato su misura per una **consulente e sub-agente assicurativa plurimandataria**. Il sito è ispirato alla struttura ed alle funzionalità di portali come **Worth Insurance** (`worthinsurance.com`), includendo una homepage ad alto impatto ed un **wizard di preventivo dedicato a 3 passaggi** (`preventivo.html`).

> [!WARNING]
> ### 🚨 ATTENZIONE AI REQUISITI LEGALI & NORMATIVI (IVASS / GDPR)
> L'attività di intermediazione e promozione assicurativa tramite sito web in Italia è fortemente regolamentata. Prima di mettere online il sito web per il pubblico, **è fondamentale verificare ed aggiornare rigorosamente tutti i dati legali ed assicurarsi del rispetto delle norme IVASS e GDPR.**

---

## ⚖️ Check-List Obblighi Legali e Normativi

Per evitare sanzioni disciplinari ed amministrative da parte di **IVASS** e del **Garante Privacy (GDPR)**, assicurarsi che sul sito siano presenti e conformi i seguenti elementi:

### 1. 🛡️ Obblighi Trasparenza IVASS (Reg. n. 40/2018 e s.m.i.)
- **Dati dell'Intermediaria nel Footer**:
  - Nome e Cognome della sub-agente / ragione sociale dello studio.
  - Indirizzo completo dell'ufficio personale.
  - Numero di telefono, e-mail e **Posta Elettronica Certificata (PEC)** obbligatoria.
  - **Numero e Sezione di iscrizione al RUI** (Registro Unico degli Intermediari Assicurativi) – es. *Sezione E* (Collaboratori) o *Sezione A* (Agenti).
  - Indicazione esplicita che l'attività è soggetta alla vigilanza dell'**IVASS**, con link al portale RUI: `https://servizi.ivass.it/RuiPubblica/`.
- **Documenti Precontrattuali in Download (PDF)**:
  - **Allegato 3 IVASS** (Informativa sugli obblighi di comportamento dei distributori).
  - **Allegato 4 / MUP** (Modulo Unico Precontrattuale informativo) o Allegato 4-ter.
  - Sostituire i file PDF fittizi con la documentazione aggiornata dello studio.
- **Gestione Reclami**:
  - Indicazione delle modalità con cui il cliente può presentare un reclamo (indirizzo e-mail/PEC dedicato) e procedura IVASS.

### 2. 🔐 Privacy & GDPR (Regolamento UE 2016/679)
- **Consenso Esplicito ai Dati Sanitari (Art. 9 GDPR)**:
  - Per preventivi su polizze **Vita**, **Infortuni** e **Salute/Diaria**, i dati inseriti (es. età, abitudini al fumo, professione a rischio, indennità) riguardano lo stato di salute.
  - Il form **DEVE richiedere una checkbox di consenso esplicito e separata** per il trattamento dei dati sanitari particolari. Non pre-selezionare mai le caselle di spunta.
- **Informativa Privacy (Privacy Policy)**:
  - Pagina o documento raggiungibile dal footer e dal form che indichi il Titolare del trattamento, le finalità, la durata di conservazione dei dati ed i diritti dell'utente.
- **Cookie Policy & Banner Cookie**:
  - Inserire un banner cookie conforme (con blocco preventivo dei cookie analitici o di profilazione non tecnici).

### 3. 💼 Obblighi Fiscali (Codice Civile)
- **Partita IVA**: Obbligatoria ed in evidenza nel footer di ogni pagina.

---

## 🧠 Sistema di Memoria dell'Agente (`agy_memory/`)

Il progetto integra una struttura di memoria per l'agente AI nella cartella **`agy_memory/`** che mantiene la persistenza delle sessioni di sviluppo, delle preferenze utente e dei requisiti di conformità:

- **`MEMORY.md`**: Indice generale ed entrypoint dell'architettura di memoria.
- **`session_context.json`**: Stato a breve termine della sessione attiva (obiettivi ed artefatti).
- **`long_term_memory.md`**: Memoria a lungo termine (Regole di business, conformità IVASS/GDPR e direttive di salvataggio automatico).
- **`interaction_history.json`**: Storico cronologico dei turni e delle modifiche effettuate.
- **`project_architecture.md`**: Mappa tecnica del software, dei componenti e dei flussi JS.

> [!NOTE]
> **Salvataggio Automatico della Memoria**: Il sistema aggiorna automaticamente lo stato di memoria in `agy_memory/` sia a seguito di ogni **milestone/lavoro importante** completato, sia quando l'utente comunica la conclusione della sessione (*"sto andando"*, *"chiudo"*).

---

## 🎯 Profilo e Obiettivo del Progetto

- **Professionista**: Sub-agente / Agente assicurativa indipendente con proprio ufficio/studio professionale.
- **Modello di Business**: **Plurimandato** (collaborazione con più compagnie assicurative partner per offrire sempre la soluzione più idonea e conveniente al cliente).
- **Ispirazione UX/UI**: **Worth Insurance** (`worthinsurance.com/free-quote`), con barra degli avvisi superiore, widget di avvio rapido in Hero, indicatori di affidabilità (Trust Stats) e procedura di preventivo guidata a 3 passaggi.

---

## 🚀 Caratteristiche del Sito Web

1. **Homepage (`index.html`)**:
   - **Top Announcement Bar**: Barra informativa superiore con numero diretto di chiamata e contatti.
   - **Hero Quick Start Widget**: Permette all'utente di selezionare il prodotto assicurativo e la città e di essere reindirizzato direttamente alla pagina del preventivo.
   - **Trust Stats Bar**: Indicatori di affidabilità (⭐️ 4.9/5 Valutazione, 🛡️ 10+ Compagnie, ⚡ Risposta 24h).
   - **Sezione "Chi Sono"**: Presentazione personalizzata della titolare dello studio.
   - **Bento Grid Servizi & Trasparenza IVASS**: Vetrina coperture ed allegati PDF precontrattuali scaricabili.

2. **Pagina Preventivo Guidato (`preventivo.html`)**:
   - **Step Progress Bar**: Indicatore visivo a 3 passaggi (1. Prodotto & Profilo -> 2. Dettagli Copertura -> 3. Contatti & Invio).
   - **Card Selettori**: Scelta grafica intuitiva del prodotto (Auto, Vita, Diaria, Casa) e dello stato della polizza attuale.
   - **Form Dinamico e Condizionale**: Campi specifici per ciascun ramo e gestione automatica della checkbox di consenso ai dati sanitari (GDPR Art. 9) per Vita e Salute.
   - **Integrazione Formspree / API**: Invio asincrono senza ricaricamento della pagina con messaggio di conferma.

---

## 📁 Struttura del Repository

```text
.
├── README.md         # Documentazione, avvertenze legali IVASS/GDPR e memoria agente
├── index.html        # Homepage con Top Bar, Hero Quick Start, Chi Sono, Servizi e IVASS
├── preventivo.html   # Pagina Wizard Preventivo Guidato a 3 passaggi (stile Worth Insurance)
├── css/
│   └── styles.css    # Design System custom (palette moderna, glassmorphism e responsive)
├── js/
│   └── app.js        # Logica JS per navigazione wizard, campi condizionali e parametri URL
└── agy_memory/       # Architettura di memoria persistente dell'agente AI
```

---

## 🛠️ Tecnologie Utilizzate

- **HTML5 Semantico**: Strutturazione accessibile ed ottimizzata per SEO.
- **CSS3 Vanilla**: Design moderno senza dipendenze da framework pesanti, con variabili CSS, Flexbox, CSS Grid ed effetti visivi fluidi.
- **JavaScript (ES6+)**: Gestione dello stato del wizard client-side, validazioni condizionali ed integrazione via `fetch`.

---

## 🎨 Iconografia & Licenze Asset

- **Illustrazioni Bento Card**: Vettori SVG forniti da **[unDraw.co](https://undraw.co)** (mirror open-source `cuuupid/undraw-illustrations`).
- **Licenza**: **MIT License** (utilizzabile gratuitamente anche per scopi commerciali senza costi né vincoli di attribuzione).
- **Personalizzazione**: I file SVG vettoriali sono stati personalizzati sostituendo il colore nativo di unDraw con il colore d'accento **Oro Corporate (`#d97706`)** del brand.
- **Stile Visivo**: Le illustrazioni fluttuano senza bordi né box di contenimento sullo sfondo delle Bento Card, in stile **Worth Insurance**.

---

## ⚙️ Personalizzazione & Configurazione

### 1. Dati della Titolare e del RUI
Nei file [index.html](file:///home/miche/project/mamma/website/index.html) e [preventivo.html](file:///home/miche/project/mamma/website/preventivo.html) sostituire i segnaposto con i dati reali:
- Nome dello studio / Titolo nel Header ed Hero.
- Nome e Cognome della sub-agente, numero di iscrizione RUI (Sezione E o A) e data di iscrizione nel footer.
- Indirizzo dell'ufficio personale, numero di telefono, e-mail e PEC.
- P.IVA dello studio.

### 2. Invio Reale del Form di Preventivo
Nei file [index.html](file:///home/miche/project/mamma/website/index.html) e [preventivo.html](file:///home/miche/project/mamma/website/preventivo.html#L52), aggiornare l'attributo `action` del form inserendo il proprio endpoint (es. [Formspree](https://formspree.io)):
```html
<form id="wizard-preventivo-form" action="https://formspree.io/f/IL_TUO_FORM_ID" method="POST">
```
