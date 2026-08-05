# Politica di Sicurezza (Security Policy)

Ci prendiamo molto a cuore la sicurezza del nostro sito web, dei dati personali dei clienti e della conformità normativa **IVASS** e **GDPR (Reg. UE 2016/679)**.

## Versioni Supportate

| Versione | Supportata |
| -------- | ---------- |
| Main     | :white_check_mark: |
| < 1.0    | :x: |

## Segnalazione di una Vulnerabilità

Se scopri una vulnerabilità di sicurezza all'interno di questo progetto o del sito web, **ti preghiamo di non aprire una Issue pubblica su GitHub**.

Invia invece una segnalazione riservata a:
- **PEC Ufficiale:** `falcitelliassicurazioni@legalmail.it`
- **E-mail:** `falcitelliassicurazioni@gmail.com`
- In alternativa, usa la funzione **"Report a vulnerability"** nel tab *Security* di questo repository.

Fornisci una descrizione dettagliata del problema ed i passaggi minimi per riprodurlo. Risponderemo ed interverremo entro **48 ore**.

---

## 🛡️ Misure di Sicurezza Attive sul Progetto

- 🔒 **HTTPS & HSTS**: Forzatura della cifratura SSL/TLS con `Strict-Transport-Security` (`max-age=31536000`).
- 🛡️ **Security Headers HTTP (`.htaccess`)**: Content-Security-Policy (CSP), X-Frame-Options (Anti-Clickjacking), X-Content-Type-Options (nosniff) e Referrer-Policy.
- 🧹 **Anti-XSS & Input Sanitization**: Utility `sanitizeInput` in `js/app.js` con sanificazione automatica di tutti i campi input di testo.
- 🤖 **Antispam Honeypot Bot-Trap**: Campo trappola invisibile `_gotcha` per bloccare l'invio automatizzato da parte di bot.
- 🔐 **Privacy & GDPR Compliance**: Banner Cookie conforme in Vanilla JS puro e consenso esplicito separato per i dati particolari (Art. 9 GDPR).
- 🔗 **Anti-Reverse Tabnabbing**: Attributi `rel="noopener noreferrer"` attivi su 24/24 link esterni e download di allegati PDF.
