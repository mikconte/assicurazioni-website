# AGENTS.md - Regole di Comportamento ed Ecosistema di Sviluppo dell'Agente

Questo file stabilisce la filosofia di lavoro, le regole di feedback operativo, le tecnologie, l'integrazione delle **Skills Antigravity** ed i vincoli legali non negoziabili per lo sviluppo del sito web della **Sub-Agenzia Assicurativa Plurimandataria**.

---

## ⚡ 1. Ecosistema Skills (`antigravity-awesome-skills`)

L'agente sfrutta l'ecosistema di skill specializzate di **Google Antigravity** (`antigravity-awesome-skills`) per garantire la massima qualità e correttezza nell'esecuzione dei compiti:

1. **Invocazione Progressiva delle Skill**:
   - Per task di progettazione grafica e UI/UX: consultare ed applicare le linee guida di `frontend-design` e `web-design-guidelines`.
   - Per audit di conformità e sicurezza: applicare `security-checklist` e `seo-audit`.
   - Per la gestione del flusso di lavoro e chiarimenti: utilizzare `ask-questions-if-underspecified`, `planning-with-files` e `systematic-debugging`.
2. **Caricamento On-Demand**: Caricare le skill in modo mirato per evitare spreco di token di contesto, garantendo l'applicazione delle migliori pratiche del settore.

---

## 👁️ 2. Ecosistema di Feedback e Verifica (Correctness Feedback Ecosystem - RIF1)

L'agente deve operare secondo un approccio scientifico basato sull'osservazione empirica dell'errore (Test-Driven & Eyes-On Code):

1. **La Regola del "Non credere mai di aver finito"**:
   - L'agente non considera mai conclusa l'implementazione di una funzionalità solo perché ha scritto il codice.
   - Devo sempre verificare l'esecuzione o il rendering tramite script o strumenti di ispezione del terminale.
   - Devo leggere l'output (i "miei occhi") ed usare quel feedback per correggere autonomamente eventuali errori prima di restituire il controllo all'utente.
2. **Nessuna Assunzione a Cieca (Zero Guesswork)**:
   - Mai inferire classi CSS, ID di elementi, campi form o contratti JS senza aver ispezionato preventivamente i file sorgente reali.
3. **Loop di Autocorrezione**:
   - In caso di errore (di sintassi, layout, link interrotto o validazione form), l'agente analizza i log o l'output di errore e corregge la causa radice invece di mascherare i sintomi.

---

## 🎨 3. Selezione Tecnologica, Minimalismo e Stile (RIF2)

L'efficacia e la manutenibilità a lungo termine di questa codebase si basano sul minimalismo:

1. **Stack Vanilla Leggero (Zero Heavy Framework Policy)**:
   - **HTML5 Semantico**: Strutturazione SEO-friendly ed accessibile.
   - **Vanilla CSS3**: Design System custom con variabili CSS, Flexbox, CSS Grid ed effetti glassmorphism (senza dipendenze da framework pesanti come Tailwind o Bootstrap).
   - **JavaScript ES6+**: Logica del wizard e validazioni client-side in JS puro.
2. **Rapporto tra Linee di Codice e Risultato (Minimalismo)**:
   - Semplificare all'osso gli script e gli elementi HTML, eliminando boilerplate superfluo.
   - Mantenere la codebase compatta per ottimizzare i tempi di caricamento e garantire contesti AI sempre puliti.
3. **Stile ed Esperienza Utente (Ispirazione Worth Insurance)**:
   - Layout scuro ed elegante, Top Announcement Bar, widget Quick Start in Hero, Trust Stats Bar e procedura di preventivo guidata a 3 passaggi (`preventivo.html`).

---

## ⚖️ 4. Conformità Legale e Normativa Assicurativa (Non Negoziabili)

1. **Trasparenza IVASS (Reg. n. 40/2018 e s.m.i.)**:
   - Inserire in tutte le pagine i dati obbligatori dell'intermediaria: Nome/Cognome, Ufficio, PEC, P.IVA, **Iscrizione RUI (Sezione E/A)** e **Vigilanza IVASS** con link al portale pubblico.
   - Documenti precontrattuali scaricabili in PDF (**Allegato 3** e **Allegato 4 / MUP**).
   - Indicazione trasparente dei mandati attivi con le compagnie partner.
2. **GDPR (Regolamento UE 2016/679 - Art. 9)**:
   - Checkbox obbligatoria e separata (non pre-selezionata) per il **consenso esplicito ai dati sanitari particolari** per i rami Vita e Salute/Diaria.
   - Informativa Privacy e Cookie Policy.

---

## 🧠 5. Gestione della Memoria dell'Agente (`agy_memory/`)

L'agente mantiene la persistenza dello stato e del contesto del progetto secondo la seguente architettura di memoria:

- **Autosave a Milestone**: L'agente aggiorna automaticamente i file in `agy_memory/` (`session_context.json`, `interaction_history.json`, `MEMORY.md`, `project_architecture.md`, `long_term_memory.md`) dopo ogni lavoro o modifica importante.
- **Autosave al Commiato**: Quando l'utente indica di voler concludere la sessione (*"sto andando"*, *"chiudo"*, *"vado via"*), l'agente esegue il salvataggio completo della memoria prima di salutare.
