<script>
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>MinMyndighed – Selvbetjening</title>
</svelte:head>

<main id="main-content" class="page-content">
  <div class="container mt-6 mb-8">

    <!-- Hero section -->
    <div class="row mb-7">
      <div class="col-12 col-md-8">
        <h1>Velkommen til MinMyndighed</h1>
        <p class="font-lead">
          Her kan du finde information om vores digitale selvbetjeningsløsninger
          og få hjælp til dine henvendelser. Vi arbejder for at gøre det nemmere
          for borgere og virksomheder at benytte offentlige tjenester.
        </p>
        <a href="{base}/components" class="button button-primary mt-4">
          Se komponenter
        </a>
        <a href="{base}/contact" class="button button-secondary mt-4 ml-3">
          Kontakt os
        </a>
      </div>
    </div>

    <!-- Cards section -->
    <h2 class="mb-5">Vores tjenester</h2>
    <div class="row card-row">
      <div class="col-12 col-md-4 mb-5">
        <section class="card">
          <div class="card-content">
            <p class="card-subheading">Borgerservice</p>
            <h3 class="card-heading">
              <a href="{base}/components">Digital Post</a>
            </h3>
            <p>
              Se og administrer din digitale post fra det offentlige.
              Du kan også ændre dine indstillinger for Digital Post.
            </p>
            <ul class="card-actions">
              <li>
                <a href="{base}/components" class="icon-link">
                  Læs mere
                  <svg class="icon-svg" focusable="false" aria-hidden="true"><use href="#arrow-forward"></use></svg>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <div class="col-12 col-md-4 mb-5">
        <section class="card">
          <div class="card-content">
            <p class="card-subheading">Erhverv</p>
            <h3 class="card-heading">
              <a href="{base}/components">Virksomhedsregistrering</a>
            </h3>
            <p>
              Registrer din virksomhed eller foretag ændringer
              til eksisterende registreringer.
            </p>
            <ul class="card-actions">
              <li>
                <a href="{base}/components" class="icon-link">
                  Læs mere
                  <svg class="icon-svg" focusable="false" aria-hidden="true"><use href="#arrow-forward"></use></svg>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <div class="col-12 col-md-4 mb-5">
        <section class="card">
          <div class="card-content">
            <p class="card-subheading">Support</p>
            <h3 class="card-heading">
              <a href="{base}/contact">Hjælp og vejledning</a>
            </h3>
            <p>
              Har du brug for hjælp? Find svar på de mest stillede
              spørgsmål eller kontakt os direkte.
            </p>
            <ul class="card-actions">
              <li>
                <a href="{base}/contact" class="icon-link">
                  Kontakt os
                  <svg class="icon-svg" focusable="false" aria-hidden="true"><use href="#arrow-forward"></use></svg>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>

    <!-- Info boxes -->
    <div class="row mt-5">
      <div class="col-12 col-md-6 mb-5">
        <div class="alert alert-info" role="region" aria-label="Information">
          <div class="alert-body">
            <p class="alert-heading">Information</p>
            <p class="alert-text">
              Vores telefonsupport har åbent mandag til fredag kl. 9:00–15:00.
              Du kan altid skrive til os via kontaktformularen.
            </p>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 mb-5">
        <div class="alert alert-success" role="region" aria-label="Nyhed">
          <div class="alert-body">
            <p class="alert-heading">Nyt selvbetjeningssystem</p>
            <p class="alert-text">
              Vi har lanceret et nyt og forbedret selvbetjeningssystem.
              Oplev hurtigere sagsbehandling og bedre overblik.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Accordion section -->
    <h2 class="mt-6 mb-5">Ofte stillede spørgsmål</h2>
    <ul class="accordion" id="faq-accordion">
      <li>
        <button class="accordion-button" aria-expanded="false" aria-controls="faq-1">
          <span class="accordion-title">Hvordan logger jeg ind?</span>
        </button>
        <div id="faq-1" class="accordion-content" aria-hidden="true">
          <p>
            Du logger ind med MitID. Klik på "Log ind" i øverste højre hjørne,
            og følg instruktionerne på skærmen. Har du ikke MitID, kan du
            oprette det på <a href="https://www.mitid.dk">mitid.dk</a>.
          </p>
        </div>
      </li>
      <li>
        <button class="accordion-button" aria-expanded="false" aria-controls="faq-2">
          <span class="accordion-title">Hvad er behandlingstiden?</span>
        </button>
        <div id="faq-2" class="accordion-content" aria-hidden="true">
          <p>
            Behandlingstiden varierer afhængigt af sagstypen. De fleste sager
            behandles inden for 5 hverdage. Ved særligt komplicerede sager
            kan behandlingstiden være op til 4 uger.
          </p>
        </div>
      </li>
      <li>
        <button class="accordion-button" aria-expanded="false" aria-controls="faq-3">
          <span class="accordion-title">Kan jeg følge min sag online?</span>
        </button>
        <div id="faq-3" class="accordion-content" aria-hidden="true">
          <p>
            Ja, du kan følge status på din sag under "Mine sager" efter du
            har logget ind. Du vil også modtage en besked i din digitale
            postkasse, når der er nyt i din sag.
          </p>
        </div>
      </li>
    </ul>

  </div>
</main>
