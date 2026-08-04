# Agent Memory Index (Antigravity Memory System)

Questo file costituisce il punto di ingresso principale dell'architettura di memoria dell'agente (**`agy_memory`**).

---

## 🗂️ Struttura del Sistema di Memoria (`agy_memory/`)

```text
agy_memory/
├── MEMORY.md                   # Registro generale ed indice dell'architettura di memoria
├── session_context.json        # Istantanea della sessione (Stato attivo, punto di ripresa, timestamp)
├── long_term_memory.md         # Memoria a lungo termine: Profilo utente, requisiti business, IVASS & GDPR, Triggers
├── interaction_history.json    # Storico cronologico delle sessioni, turni e modifiche apportate
└── project_architecture.md     # Architettura tecnica del sito, componenti, stack, SDLC ed ispirazione UX
```

---

## 📌 Sintesi dello Stato del Progetto & Punto di Ripresa

- **Progetto**: Vetrina Web & Form Preventivi Guidato per Sub-Agenzia Assicurativa Plurimandataria.
- **Titolare**: Consulente ed agente/sub-agente assicurativa indipendente con studio personale.
- **Stack Tecnologico**: HTML5, Vanilla CSS3 (Design System custom), JavaScript ES6+ (Wizard 3-step con Auto-Uppercase e Live In-Line Validation).
- **Ispirazione UX/UI**: [Worth Insurance](https://www.worthinsurance.com/) (Quick start hero, Trust bar, Wizard a 3 step `preventivo.html`).
- **Conformità Normativa**: RUI IVASS (Sezione E/A), Allegati 3 & 4/MUP in PDF, PEC, P.IVA, Consenso GDPR Dati Sanitari (Art. 9).
- **Documenti Ingegneristici**: [SDLC_METHODOLOGY.md](file:///home/miche/project/mamma/website/SDLC_METHODOLOGY.md), [AGENTS.md](file:///home/miche/project/mamma/website/AGENTS.md), [README.md](file:///home/miche/project/mamma/website/README.md).

---

📍 **Checkpoint 60 — 2026-08-04T21:14 — Sincronizzati perfettamente l'Header ed il Footer di tutte le pagine prendendo index.html come riferimento master**

### ✅ Completato in questa sessione
1. **Sincronizzazione Header e Navigazione**: Allineati tutti i dropdown ed i link di navigazione dell'Header in `preventivo.html`, `privacy.html` e `grazie.html` con la struttura definita in `index.html`.
2. **Sincronizzazione Footer a Norma IVASS/GDPR**: Allineato il footer di tutte le pagine per includere lo stesso Menu Rapido, i contatti e le note legali sull'iscrizione al RUI e sulla vigilanza IVASS.
3. **Validazione Test-Driven**: Superato il test E2E con esito 100% positivo.

### 🔜 Prossimi passi suggeriti
- Inserire il numero RUI reale e la P.IVA reale in footer di tutte le pagine (`[N_RUI]`, `[NUMERO_PIVA]`) quando disponibili.
