<script>
  import { onMount } from 'svelte';
  import { afterNavigate } from '$app/navigation';
  import { page } from '$app/stores';
  import { base } from '$app/paths';
  import 'dkfds/dist/css/dkfds.css';

  async function initDKFDS() {
    const mod = await import('dkfds');
    const DKFDS = mod.default ?? mod;
    DKFDS.init();
  }

  onMount(initDKFDS);
  afterNavigate(initDKFDS);
</script>

<a class="skip-link" href="#main-content">Gå til hovedindhold</a>

<header class="header">
  <!-- Portal info -->
  <div class="portal-info">
    <div class="container portal-info-inner">
      <a href="{base}/" class="logo" aria-label="MinMyndighed forside">
        <span>MinMyndighed.dk</span>
      </a>
    </div>
  </div>

  <!-- Solution info -->
  <div class="solution-info">
    <div class="container solution-info-inner">
      <div class="solution-heading">
        <a href="{base}/">Selvbetjeningsløsning</a>
      </div>
      <div class="additional-info d-print-none">
        <p class="authority-name">Styrelsen for Digital Service</p>
        <p>
          <a href="{base}/contact" class="button-contact">
            Kontakt
            <svg class="icon-svg" focusable="false" aria-hidden="true"><use href="#phone"></use></svg>
          </a>
        </p>
      </div>
    </div>
  </div>

  <!-- Navigation -->
  <div class="navigation-menu d-print-none">
    <div class="container">
      <div class="navigation-menu-inner">
        <ul class="nav-primary" role="menubar">
          <li role="none">
            <a
              href="{base}/"
              class="nav-link"
              role="menuitem"
              aria-current={$page.route.id === '/' ? 'page' : undefined}
            >Forside</a>
          </li>
          <li role="none">
            <a
              href="{base}/components"
              class="nav-link"
              role="menuitem"
              aria-current={$page.route.id === '/components' ? 'page' : undefined}
            >Komponenter</a>
          </li>
          <li role="none">
            <a
              href="{base}/contact"
              class="nav-link"
              role="menuitem"
              aria-current={$page.route.id === '/contact' ? 'page' : undefined}
            >Kontakt</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</header>

<slot />

<footer>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-4 footer-col">
          <p class="h5">MinMyndighed.dk</p>
          <ul class="unstyled-list">
            <li><a href="{base}/om-os">Om os</a></li>
            <li><a href="{base}/tilgaengelighed">Tilgængelighed</a></li>
            <li><a href="{base}/privatlivspolitik">Privatlivspolitik</a></li>
          </ul>
        </div>
        <div class="col-12 col-md-4 footer-col">
          <p class="h5">Kontakt</p>
          <ul class="unstyled-list">
            <li>Telefon: 70 12 34 56</li>
            <li>Email: <a href="mailto:info@minmyndighed.dk">info@minmyndighed.dk</a></li>
            <li>Man–fre: 9:00–15:00</li>
          </ul>
        </div>
        <div class="col-12 col-md-4 footer-col">
          <p class="h5">Find vej</p>
          <ul class="unstyled-list">
            <li>MinMyndighed</li>
            <li>Digitaliseringsvej 1</li>
            <li>1000 København K</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>
