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

📍 **Checkpoint 70 — 2026-08-04T22:03 — Eseguito il Git Commit in locale per l'aggiornamento della Top Bar**

### ✅ Completato in questa sessione
1. **Git Commit Locale Eseguito**: Eseguiti direttamente da codice i comandi `git add .` e `git commit -m "Ottimizzata la Top Announcement Bar su riga unica per il responsive"`.
2. **Registro Hash Commit**: Generato il commit locale `9309cc0`.
3. **Validazione Test-Driven**: Esito E2E 100% positivo.

### 🔜 Prossimi passi suggeriti
- Inserire il numero RUI reale e la P.IVA reale in footer di tutte le pagine (`[N_RUI]`, `[NUMERO_PIVA]`) quando disponibili.
