# Architettura Tecnica e Mappa del Progetto

Documento tecnico di riferimento per la struttura dei file, i componenti del frontend, la gestione dello stato, la metodologia SDLC e le risorse del progetto web.

---

## 🛠️ Stack Tecnologico & Metodologia SDLC

- **Metodologia Ingegneristica**: Standard SDLC in 6 fasi formalizzato nel file [SDLC_METHODOLOGY.md](file:///home/miche/project/mamma/website/SDLC_METHODOLOGY.md).
- **Frontend**: HTML5 Semantico, Vanilla CSS3 (Custom Design Tokens), JavaScript ES6+.
- **Nessuna dipendenza pesante**: Il sito è leggero, estremamente veloce e non necessita di build step o npm install.
- **Integrazione Form**: Predisposto per invii asincroni `fetch` verso endpoint REST come **Formspree** (`https://formspree.io`).

---

## 🗂️ Mappa dei File e Responsabilità

```text
website/
├── SDLC_METHODOLOGY.md         # Piano Ingegneristico e Ciclo di Vita del Software (SDLC)
├── AGENTS.md                   # Linee guida operative dell'agente (RIF1, RIF2, Skills)
├── README.md                   # Documentazione di progetto e Avvertenze Legali IVASS/GDPR
│
├── index.html                  # Homepage principale
│   ├── Top Announcement Bar    # Contatto telefonico diretto + messaggio plurimandato
│   ├── Header                  # Navigazione e brand dello studio
│   ├── Hero & Quick Start      # Widget avvio rapido preventivo + Trust Stats
│   ├── Chi Sono                # Sezione personalizzata per la titolare dello studio
│   ├── Bento Grid Servizi      # Card espositive per Auto, Vita e Diaria
│   ├── Trasparenza IVASS       # Download PDF Allegati 3 & 4/MUP + Compagnie partner
│   └── Footer                  # Note legali RUI, IVASS, P.IVA, PEC
│
├── preventivo.html             # Pagina Wizard di Preventivo Guidato (Stile Worth Insurance)
│   ├── Wizard Progress Bar     # Indicatore di avanzamento 3 step
│   ├── Step 1                  # Card scelta prodotto (Auto, Vita, Diaria, Casa) + Stato polizza
│   ├── Step 2                  # Campi dinamici specifici per il prodotto selezionato
│   ├── Step 3                  # Dati anagrafici, Privacy e Consenso Sanitario GDPR (Art. 9)
│   └── Trust Footer            # Valutazioni (4.9/5, 10+ compagnie, 24h risposta)
│
├── css/
│   └── styles.css              # Stili globali, variabili CSS, responsive design e animazioni
│
├── js/
│   └── app.js                  # Logica di navigazione wizard, campi condizionali e parametri URL
│
└── agy_memory/                 # Architettura di Memoria dell'Agente
    ├── MEMORY.md               # Indice principale della memoria agente
    ├── session_context.json    # Istantanea di sessione a breve termine
    ├── long_term_memory.md     # Memoria a lungo termine (Regole business e legali)
    ├── interaction_history.json# Storico cronologico dei turni
    └── project_architecture.md # Mappa dei file ed architettura del software
```

---

## ⚙️ Logica del Form Wizard (`js/app.js`)

1. **Routing Parametri URL**: Se l'utente arriva dalla Home cliccando su *"Calcola Ora"* dal widget Quick Start con `preventivo.html?prod=vita&citta=Milano`, il JS legge i parametri `prod` e `citta` e pre-seleziona la card ed i campi corrispondenti.
2. **Campi Condizionali**: La selezione del prodotto determina quali campi rendere visibili al Passo 2 e attiva l'obbligatorietà del consenso ai dati sanitari (Art. 9 GDPR) al Passo 3 per i rami Vita e Salute/Diaria.
3. **Navigazione Fluida**: I bottoni *Avanti* e *Indietro* permettono di scorrere tra gli step con uno scroll morbido verso l'alto ed aggiornamento dinamico degli indicatori visivi.
