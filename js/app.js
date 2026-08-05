document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. GESTIONE FORM MULTI-STEP WIZARD (preventivo.html)
  // ==========================================
  const wizardForm = document.getElementById('wizard-preventivo-form');

  if (wizardForm) {
    const step1 = document.getElementById('wizard-step-1');
    const step2 = document.getElementById('wizard-step-2');
    const step3 = document.getElementById('wizard-step-3');

    const ind1 = document.getElementById('step-indicator-1');
    const ind2 = document.getElementById('step-indicator-2');
    const ind3 = document.getElementById('step-indicator-3');

    const btnToStep2 = document.getElementById('btn-to-step-2');
    const btnToStep3 = document.getElementById('btn-to-step-3');
    const btnBackTo1 = document.getElementById('btn-back-to-step-1');
    const btnBackTo2 = document.getElementById('btn-back-to-step-2');

    const productRadios = document.querySelectorAll('input[name="prodotto-radio"]');
    const hiddenProductInput = document.getElementById('prodotto-selezionato');
    const productCards = document.querySelectorAll('.product-selection-card');

    const dynamicStepFields = document.querySelectorAll('.dynamic-step-fields');
    const consentSanitarioGroupW = document.getElementById('group-consenso-sanitario-w');
    const inputConsensoSanitarioW = document.getElementById('consenso-sanitario-w');
    const wizardStatus = document.getElementById('wizard-form-status');

    // Funzione per impostare il prodotto attivo
    const setProduct = (productVal) => {
      hiddenProductInput.value = productVal;

      // Aggiorna classe active sulle card
      productCards.forEach(card => {
        const radio = card.querySelector('input[type="radio"]');
        if (radio.value === productVal) {
          card.classList.add('active');
          radio.checked = true;
        } else {
          card.classList.remove('active');
        }
      });

      // Aggiorna campi visibili al Passo 2
      dynamicStepFields.forEach(fieldGroup => {
        if (fieldGroup.id === `step2-fields-${productVal}`) {
          fieldGroup.classList.add('active');
        } else {
          fieldGroup.classList.remove('active');
        }
      });

      // Visibilità consenso dati sanitari al Passo 3
      if (productVal === 'vita' || productVal === 'diaria') {
        if (consentSanitarioGroupW) consentSanitarioGroupW.style.display = 'flex';
        if (inputConsensoSanitarioW) inputConsensoSanitarioW.setAttribute('required', 'required');
      } else {
        if (consentSanitarioGroupW) consentSanitarioGroupW.style.display = 'none';
        if (inputConsensoSanitarioW) {
          inputConsensoSanitarioW.removeAttribute('required');
          inputConsensoSanitarioW.checked = false;
        }
      }
    };

    // Event listener sulle card prodotto
    productCards.forEach(card => {
      card.addEventListener('click', () => {
        const radio = card.querySelector('input[type="radio"]');
        if (radio) {
          setProduct(radio.value);
        }
      });
    });

    // Switcher Privati vs Imprese in Wizard (preventivo.html)
    const wizardBtnPersonal = document.getElementById('wizard-btn-personal');
    const wizardBtnBusiness = document.getElementById('wizard-btn-business');
    const wizardViewPersonal = document.getElementById('wizard-view-personal');
    const wizardViewBusiness = document.getElementById('wizard-view-business');

    const showWizardPersonal = () => {
      if (wizardBtnPersonal && wizardBtnBusiness) {
        wizardBtnPersonal.classList.add('active');
        wizardBtnBusiness.classList.remove('active');
      }
      if (wizardViewPersonal && wizardViewBusiness) {
        wizardViewPersonal.style.display = 'block';
        wizardViewBusiness.style.display = 'none';
      }
    };

    const showWizardBusiness = () => {
      if (wizardBtnPersonal && wizardBtnBusiness) {
        wizardBtnBusiness.classList.add('active');
        wizardBtnPersonal.classList.remove('active');
      }
      if (wizardViewPersonal && wizardViewBusiness) {
        wizardViewBusiness.style.display = 'block';
        wizardViewPersonal.style.display = 'none';
      }
    };

    if (wizardBtnPersonal) wizardBtnPersonal.addEventListener('click', showWizardPersonal);
    if (wizardBtnBusiness) wizardBtnBusiness.addEventListener('click', showWizardBusiness);

    // Controllo parametri URL (es. ?prod=fabbricati o ?prod=vita dal banner Quick Start della Home)
    const urlParams = new URLSearchParams(window.location.search);
    const prodParam = urlParams.get('prod');
    const cittaParam = urlParams.get('citta');

    const businessProducts = ['fabbricati', 'rc-aziendale', 'flotte', 'welfare'];
    const allProducts = ['auto', 'casa', 'vita', 'diaria', ...businessProducts];

    if (prodParam && allProducts.includes(prodParam)) {
      if (businessProducts.includes(prodParam)) {
        showWizardBusiness();
      } else {
        showWizardPersonal();
      }
      setProduct(prodParam);
    }
    if (cittaParam) {
      const cittaInput = document.getElementById('citta-w');
      if (cittaInput) cittaInput.value = cittaParam;
    }

    // Gestione della barra di avanzamento del wizard
    const progressFill = document.getElementById('wizard-progress-fill');
    const currentStepNumText = document.getElementById('current-step-num');

    const updateProgressBar = (stepNum) => {
      if (!progressFill) return;
      if (stepNum === 1) {
        progressFill.style.width = '33.33%';
        if (currentStepNumText) currentStepNumText.textContent = '1';
      } else if (stepNum === 2) {
        progressFill.style.width = '66.66%';
        if (currentStepNumText) currentStepNumText.textContent = '2';
      } else if (stepNum === 3) {
        progressFill.style.width = '100%';
        if (currentStepNumText) currentStepNumText.textContent = '3';
      }
    };

    // Navigazione Step 1 -> Step 2
    if (btnToStep2) {
      btnToStep2.addEventListener('click', () => {
        step1.classList.remove('active');
        step2.classList.add('active');
        ind1.classList.remove('active');
        ind2.classList.add('active');
        updateProgressBar(2);
        window.scrollTo({ top: 150, behavior: 'smooth' });
      });
    }

    // Formattazione automatica in maiuscolo per Targa e Codice Fiscale (UX Enhancement)
    const targaInput = document.getElementById('targa-w');
    const cfInput = document.getElementById('cf-w');

    [targaInput, cfInput].forEach(input => {
      if (input) {
        input.addEventListener('input', () => {
          input.value = input.value.toUpperCase();
          if (input.hasAttribute('pattern')) {
            const regex = new RegExp(input.getAttribute('pattern'));
            if (regex.test(input.value)) {
              input.style.borderColor = 'var(--color-success)';
            } else if (input.value.length > 0) {
              input.style.borderColor = 'var(--color-accent)';
            } else {
              input.style.borderColor = 'var(--border-card)';
            }
          }
        });
      }
    });

    // Navigazione Step 2 -> Step 3 con Validazione In-Line (RF-05)
    if (btnToStep3) {
      btnToStep3.addEventListener('click', () => {
        const activeGroup = document.querySelector('.dynamic-step-fields.active');
        let isValid = true;
        let firstInvalidInput = null;

        if (activeGroup) {
          const inputs = activeGroup.querySelectorAll('input, select');
          inputs.forEach(input => {
            // Se ha un attributo pattern, verifica la corrispondenza regex
            if (input.value && input.hasAttribute('pattern')) {
              const regex = new RegExp(input.getAttribute('pattern'));
              if (!regex.test(input.value)) {
                isValid = false;
                input.style.borderColor = 'var(--color-error)';
                if (!firstInvalidInput) firstInvalidInput = input;
              } else {
                input.style.borderColor = 'var(--border-card)';
              }
            } else {
              input.style.borderColor = 'var(--border-card)';
            }
          });
        }

        if (!isValid && firstInvalidInput) {
          firstInvalidInput.focus();
          mostraStatoWizard(`Errore nei dati inseriti: inserire valori validi nei campi evidenziati (es. targa o codice fiscale).`, 'error');
          return;
        }

        // Resetta errori precedenti se tutto è valido
        if (wizardStatus) {
          wizardStatus.className = 'form-status';
          wizardStatus.textContent = '';
        }

        step2.classList.remove('active');
        step3.classList.add('active');
        ind2.classList.remove('active');
        ind3.classList.add('active');
        updateProgressBar(3);
        window.scrollTo({ top: 150, behavior: 'smooth' });
      });
    }

    // Navigazione Indietro Step 2 -> Step 1
    if (btnBackTo1) {
      btnBackTo1.addEventListener('click', () => {
        step2.classList.remove('active');
        step1.classList.add('active');
        ind2.classList.remove('active');
        ind1.classList.add('active');
        updateProgressBar(1);
        window.scrollTo({ top: 150, behavior: 'smooth' });
      });
    }

    // Navigazione Indietro Step 3 -> Step 2
    if (btnBackTo2) {
      btnBackTo2.addEventListener('click', () => {
        step3.classList.remove('active');
        step2.classList.add('active');
        ind3.classList.remove('active');
        ind2.classList.add('active');
        updateProgressBar(2);
        window.scrollTo({ top: 150, behavior: 'smooth' });
      });
    }

    // Invio Form Wizard
    wizardForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      wizardStatus.className = 'form-status';
      wizardStatus.textContent = '';

      const formData = new FormData(wizardForm);
      const data = Object.fromEntries(formData.entries());
      const prodotto = data['prodotto-selezionato'];

      if (!data['consenso-privacy']) {
        mostraStatoWizard('Errore: È necessario accettare l\'Informativa sulla Privacy.', 'error');
        return;
      }

      if ((prodotto === 'vita' || prodotto === 'diaria') && !data['consenso-sanitario']) {
        mostraStatoWizard('Errore: Per polizze Vita o Diaria occorre prestare il consenso al trattamento dei dati sanitari.', 'error');
        return;
      }

      const submitBtn = document.getElementById('btn-submit-wizard');
      const origText = submitBtn.textContent;
      submitBtn.textContent = 'Invio in corso...';
      submitBtn.disabled = true;

      try {
        const formAction = wizardForm.getAttribute('action') || 'https://formsubmit.co/ajax/michele-conte@live.it';

        if (formAction.includes('mockEndpoint')) {
          await new Promise(res => setTimeout(res, 1200));
        } else {
          const res = await fetch(formAction, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
          });
          if (!res.ok) throw new Error('Errore di invio form');
        }

        window.location.href = 'grazie.html';

      } catch (err) {
        mostraStatoWizard('Si è verificato un errore durante l\'invio. Puoi riprovare o chiamarci direttamente al 0972 203454.', 'error');
      } finally {
        submitBtn.textContent = origText;
        submitBtn.disabled = false;
      }
    });

    function mostraStatoWizard(msg, tipo) {
      wizardStatus.textContent = msg;
      wizardStatus.className = `form-status ${tipo}`;
      wizardStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }


  // ==========================================
  // 3. GESTIONE SWITCHER SEGMENTATO (PRIVATI VS AZIENDE)
  // ==========================================
  const btnSegmentPersonal = document.getElementById('btn-segment-personal');
  const btnSegmentBusiness = document.getElementById('btn-segment-business');
  const viewPersonal = document.getElementById('view-personal');
  const viewBusiness = document.getElementById('view-business');
  const navPersonal = document.getElementById('nav-personal');
  const navBusiness = document.getElementById('nav-business');

  if (btnSegmentPersonal && btnSegmentBusiness && viewPersonal && viewBusiness) {
    const showPersonal = () => {
      btnSegmentPersonal.classList.add('active');
      btnSegmentBusiness.classList.remove('active');
      viewPersonal.style.display = 'block';
      viewBusiness.style.display = 'none';
      viewPersonal.classList.add('active');
      viewBusiness.classList.remove('active');
    };

    const showBusiness = () => {
      btnSegmentBusiness.classList.add('active');
      btnSegmentPersonal.classList.remove('active');
      viewBusiness.style.display = 'block';
      viewPersonal.style.display = 'none';
      viewBusiness.classList.add('active');
      viewPersonal.classList.remove('active');
    };

    const scrollToServizi = () => {
      const serviziSec = document.getElementById('servizi');
      if (serviziSec) {
        serviziSec.scrollIntoView({ behavior: 'smooth' });
      }
    };

    btnSegmentPersonal.addEventListener('click', showPersonal);
    btnSegmentBusiness.addEventListener('click', showBusiness);

    if (navPersonal) {
      navPersonal.addEventListener('click', (e) => {
        showPersonal();
        scrollToServizi();
      });
    }
    if (navBusiness) {
      navBusiness.addEventListener('click', (e) => {
        showBusiness();
        scrollToServizi();
      });
    }

    document.querySelectorAll('.dropdown-link-personal').forEach(link => {
      link.addEventListener('click', () => {
        showPersonal();
        scrollToServizi();
      });
    });

    document.querySelectorAll('.dropdown-link-business').forEach(link => {
      link.addEventListener('click', () => {
        showBusiness();
        scrollToServizi();
      });
    });

    // Controlla l'hash dell'URL all'avvio (es. index.html#personal o index.html#business o index.html#servizi)
    if (window.location.hash === '#personal') {
      showPersonal();
      scrollToServizi();
    } else if (window.location.hash === '#business') {
      showBusiness();
      scrollToServizi();
    }
  }

  // ==========================================
  // 4. GESTIONE MENU HAMBURGER MOBILE (UNIVERSELE)
  // ==========================================
  const navBtn = document.getElementById('nav-hamburger');
  const mainNav = document.getElementById('main-nav');
  const navOverlay = document.getElementById('nav-overlay');

  if (navBtn && mainNav && navOverlay) {
    const openMenu = () => {
      mainNav.classList.add('is-open');
      navBtn.classList.add('is-open');
      navOverlay.classList.add('is-open');
      navBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    };

    const closeMenu = () => {
      mainNav.classList.remove('is-open');
      navBtn.classList.remove('is-open');
      navOverlay.classList.remove('is-open');
      navBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    };

    navBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      mainNav.classList.contains('is-open') ? closeMenu() : openMenu();
    });

    navOverlay.addEventListener('click', closeMenu);

    document.querySelectorAll('#main-nav a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) closeMenu();
    });
  }

});
