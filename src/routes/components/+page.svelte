<script>
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Komponenter – MinMyndighed</title>
</svelte:head>

<main id="main-content" class="page-content">
  <div class="container mt-6 mb-8">

    <h1>Komponenter</h1>
    <p class="font-lead mb-6">
      Denne side viser et udvalg af komponenter fra Det Fælles Designsystem (DKFDS).
    </p>

    <!-- Breadcrumbs -->
    <nav aria-label="Brødkrummesti" class="mb-6">
      <ol class="breadcrumb">
        <li><a href="{base}/">Forside</a></li>
        <li>Komponenter</li>
      </ol>
    </nav>

    <!-- Buttons -->
    <section class="mb-7">
      <h2>Knapper</h2>
      <p>Knapper bruges til at udføre handlinger eller navigere til andre sider.</p>
      <div class="mt-4">
        <button class="button button-primary">Primær knap</button>
        <button class="button button-secondary ml-3">Sekundær knap</button>
        <button class="button button-tertiary ml-3">Tertiær knap</button>
      </div>
      <div class="mt-4">
        <button class="button button-primary" disabled>Deaktiveret</button>
        <a href="{base}/components" class="button button-secondary ml-3">Link som knap</a>
      </div>
    </section>

    <hr class="mb-7">

    <!-- Alerts -->
    <section class="mb-7">
      <h2>Beskeder (Alerts)</h2>
      <p>Beskeder bruges til at informere brugeren om vigtige ting.</p>

      <div class="alert alert-info mt-4" role="region" aria-label="Informativ besked">
        <div class="alert-body">
          <p class="alert-heading">Information</p>
          <p class="alert-text">Dette er en informationsbesked. Den bruges til neutral information.</p>
        </div>
      </div>

      <div class="alert alert-success mt-4" role="region" aria-label="Succesbesked">
        <div class="alert-body">
          <p class="alert-heading">Succes</p>
          <p class="alert-text">Din handling er gennemført. Du vil modtage en bekræftelse.</p>
        </div>
      </div>

      <div class="alert alert-warning mt-4" role="region" aria-label="Advarselsbesked">
        <div class="alert-body">
          <p class="alert-heading">Advarsel</p>
          <p class="alert-text">Vær opmærksom på at fristen udløber snart. Indsend venligst inden den 1. marts.</p>
        </div>
      </div>

      <div class="alert alert-error mt-4" role="region" aria-label="Fejlbesked">
        <div class="alert-body">
          <p class="alert-heading">Fejl</p>
          <p class="alert-text">Der opstod en fejl. Prøv igen eller kontakt support.</p>
        </div>
      </div>
    </section>

    <hr class="mb-7">

    <!-- Tags & Badges -->
    <section class="mb-7">
      <h2>Tags og badges</h2>
      <p>Tags bruges til at kategorisere indhold, og badges bruges til at vise status.</p>
      <div class="mt-4">
        <span class="tag">Standard tag</span>
        <span class="tag tag-info ml-2">Info tag</span>
        <span class="tag tag-success ml-2">Succes tag</span>
        <span class="tag tag-warning ml-2">Advarsel tag</span>
        <span class="tag tag-error ml-2">Fejl tag</span>
      </div>
      <div class="mt-4">
        <span class="badge">1</span>
        <span class="badge badge-large ml-2">99+</span>
      </div>
    </section>

    <hr class="mb-7">

    <!-- Cards -->
    <section class="mb-7">
      <h2>Cards</h2>
      <p>Cards bruges til at gruppere relateret indhold og handlinger.</p>

      <div class="row card-row mt-4">
        <div class="col-12 col-md-4 mb-5">
          <section class="card">
            <div class="card-content">
              <p class="card-subheading">Kategori</p>
              <h3 class="card-heading">
                <a href="{base}/components">Card med link</a>
              </h3>
              <p>Dette er et eksempel på et card med en kort beskrivelse og en handling.</p>
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
              <p class="card-subheading">Ansøgning</p>
              <h3 class="card-heading">
                <a href="{base}/components">Card med handlinger</a>
              </h3>
              <p>Du kan tilføje flere knapper som handlinger i bunden af et card.</p>
              <div class="button-group card-actions">
                <button class="button button-secondary">Start ansøgning</button>
              </div>
            </div>
          </section>
        </div>
        <div class="col-12 col-md-4 mb-5">
          <section class="card">
            <div class="card-content">
              <p class="card-subheading">Status</p>
              <h3 class="card-heading">
                <a href="{base}/components">Card med status</a>
              </h3>
              <p>Cards kan bruges til at vise status og overblik over igangværende sager.</p>
              <ul class="card-actions">
                <li><span class="tag tag-success">Godkendt</span></li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </section>

    <hr class="mb-7">

    <!-- Accordion -->
    <section class="mb-7">
      <h2>Accordion</h2>
      <p>Accordions bruges til at vise og skjule indhold i sektioner.</p>

      <ul class="accordion mt-4" id="demo-accordion">
        <li>
          <button class="accordion-button" aria-expanded="false" aria-controls="acc-1">
            <span class="accordion-title">Hvad er Det Fælles Designsystem?</span>
          </button>
          <div id="acc-1" class="accordion-content" aria-hidden="true">
            <p>
              Det Fælles Designsystem (DKFDS) er det fælles designsystem for
              selvbetjeningsløsninger på borger.dk og Virk. Det indeholder
              retningslinjer, komponenter og mønstre, der hjælper med at skabe
              simple og sammenhængende digitale løsninger.
            </p>
          </div>
        </li>
        <li>
          <button class="accordion-button" aria-expanded="false" aria-controls="acc-2">
            <span class="accordion-title">Hvem kan bruge designsystemet?</span>
          </button>
          <div id="acc-2" class="accordion-content" aria-hidden="true">
            <p>
              Designsystemet er frit tilgængeligt og open source. Det kan bruges
              af alle, der udvikler offentlige digitale selvbetjeningsløsninger
              i Danmark.
            </p>
          </div>
        </li>
        <li>
          <button class="accordion-button" aria-expanded="false" aria-controls="acc-3">
            <span class="accordion-title">Er komponenterne tilgængelige?</span>
          </button>
          <div id="acc-3" class="accordion-content" aria-hidden="true">
            <p>
              Ja, alle komponenter i Det Fælles Designsystem er designet og testet
              med fokus på tilgængelighed (WCAG 2.1). De understøtter skærmlæsere,
              tastaturnavigation og andre hjælpeteknologier.
            </p>
          </div>
        </li>
      </ul>
    </section>

    <hr class="mb-7">

    <!-- Table -->
    <section class="mb-7">
      <h2>Tabel</h2>
      <p>Tabeller bruges til at vise strukturerede data.</p>

      <div class="table--responsive-scroll mt-4">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Sagsnr.</th>
              <th scope="col">Titel</th>
              <th scope="col">Dato</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>SAG-2024-001</td>
              <td>Ansøgning om byggetilladelse</td>
              <td>15. januar 2024</td>
              <td><span class="tag tag-success">Godkendt</span></td>
            </tr>
            <tr>
              <td>SAG-2024-002</td>
              <td>Ændring af virksomhedsadresse</td>
              <td>22. januar 2024</td>
              <td><span class="tag tag-info">Under behandling</span></td>
            </tr>
            <tr>
              <td>SAG-2024-003</td>
              <td>Ansøgning om tilskud</td>
              <td>3. februar 2024</td>
              <td><span class="tag tag-warning">Afventer oplysninger</span></td>
            </tr>
            <tr>
              <td>SAG-2024-004</td>
              <td>Klage over afgørelse</td>
              <td>10. februar 2024</td>
              <td><span class="tag tag-error">Afvist</span></td>
            </tr>
            <tr>
              <td>SAG-2024-005</td>
              <td>Registrering af nyt køretøj</td>
              <td>18. februar 2024</td>
              <td><span class="tag tag-success">Godkendt</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <hr class="mb-7">

    <!-- Details -->
    <section class="mb-7">
      <h2>Detaljer (Details)</h2>
      <p>Details-komponenten bruges til at vise yderligere information, som brugeren kan folde ud.</p>

      <details class="mt-4">
        <summary>Vis tekniske detaljer</summary>
        <p>
          Det Fælles Designsystem er bygget med HTML, CSS (SCSS) og JavaScript.
          Det kan installeres via npm med <code>npm install dkfds</code> og bruges
          med enhver frontend-teknologi.
        </p>
      </details>

      <details class="mt-3">
        <summary>Vis versionsinformation</summary>
        <p>
          Denne side bruger DKFDS version 11.x. Designsystemet opdateres løbende
          med nye komponenter og forbedringer.
        </p>
      </details>
    </section>

    <hr class="mb-7">

    <!-- Structured list -->
    <section class="mb-7">
      <h2>Struktureret liste</h2>
      <p>Strukturerede lister bruges til at vise nøgle-værdi-par i et overskueligt format.</p>

      <table class="table structured-list mt-4">
        <tbody>
          <tr>
            <th scope="row">Navn</th>
            <td>Jens Hansen</td>
          </tr>
          <tr>
            <th scope="row">CPR-nummer</th>
            <td>010180-****</td>
          </tr>
          <tr>
            <th scope="row">Adresse</th>
            <td>Eksempelvej 42, 2000 Frederiksberg</td>
          </tr>
          <tr>
            <th scope="row">Telefon</th>
            <td>12 34 56 78</td>
          </tr>
          <tr>
            <th scope="row">Email</th>
            <td>jens@eksempel.dk</td>
          </tr>
        </tbody>
      </table>
    </section>

    <hr class="mb-7">

    <!-- Pagination -->
    <section class="mb-7">
      <h2>Paginering</h2>
      <p>Paginering bruges til at navigere mellem sider med indhold.</p>

      <nav aria-label="Sidenavigation" class="mt-4">
        <ul class="pagination">
          <li class="pagination-item">
            <a href="{base}/components" class="pagination-link" aria-label="Forrige side">
              <svg class="icon-svg" focusable="false" aria-hidden="true"><use href="#chevron-left"></use></svg>
              Forrige
            </a>
          </li>
          <li class="pagination-item">
            <a href="{base}/components" class="pagination-link" aria-label="Side 1">1</a>
          </li>
          <li class="pagination-item pagination-item-active">
            <a href="{base}/components" class="pagination-link" aria-current="page" aria-label="Side 2, aktuel side">2</a>
          </li>
          <li class="pagination-item">
            <a href="{base}/components" class="pagination-link" aria-label="Side 3">3</a>
          </li>
          <li class="pagination-item">
            <a href="{base}/components" class="pagination-link" aria-label="Side 4">4</a>
          </li>
          <li class="pagination-item">
            <a href="{base}/components" class="pagination-link" aria-label="Næste side">
              Næste
              <svg class="icon-svg" focusable="false" aria-hidden="true"><use href="#chevron-right"></use></svg>
            </a>
          </li>
        </ul>
      </nav>
    </section>

    <hr class="mb-7">

    <!-- Tabs -->
    <section class="mb-7">
      <h2>Faneblade (Tabs)</h2>
      <p>Faneblade bruges til at organisere indhold i forskellige sektioner på samme side.</p>

      <div class="tab-list mt-4" role="tablist">
        <button class="tab-button" role="tab" aria-selected="true" aria-controls="tab-panel-1" id="tab-1">Overblik</button>
        <button class="tab-button" role="tab" aria-selected="false" aria-controls="tab-panel-2" id="tab-2">Dokumenter</button>
        <button class="tab-button" role="tab" aria-selected="false" aria-controls="tab-panel-3" id="tab-3">Historik</button>
      </div>
      <div id="tab-panel-1" class="tab-panel" role="tabpanel" aria-labelledby="tab-1">
        <p>Her vises et overblik over din sag med de vigtigste oplysninger.</p>
      </div>
      <div id="tab-panel-2" class="tab-panel" role="tabpanel" aria-labelledby="tab-2" hidden>
        <p>Her finder du alle dokumenter relateret til din sag.</p>
      </div>
      <div id="tab-panel-3" class="tab-panel" role="tabpanel" aria-labelledby="tab-3" hidden>
        <p>Her kan du se historikken for alle handlinger på din sag.</p>
      </div>
    </section>

    <hr class="mb-7">

    <!-- Tooltip -->
    <section class="mb-7">
      <h2>Tooltip</h2>
      <p>Tooltips bruges til at give yderligere kontekst til et element.</p>
      <div class="mt-4">
        <span class="tooltip-wrapper">
          <button class="button button-secondary" aria-describedby="tooltip-1">Hold musen over mig</button>
          <span class="tooltip" id="tooltip-1" role="tooltip">Dette er et tooltip med yderligere information</span>
        </span>
      </div>
    </section>

    <hr class="mb-7">

    <!-- Spinner -->
    <section class="mb-7">
      <h2>Spinner</h2>
      <p>Spinners bruges til at indikere at noget indlæses.</p>
      <div class="mt-4">
        <div class="spinner" aria-label="Indlæser"></div>
      </div>
    </section>

  </div>
</main>
