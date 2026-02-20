<script>
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Kontakt – MinMyndighed</title>
</svelte:head>

<main id="main-content" class="page-content">
  <div class="container mt-6 mb-8">

    <h1>Kontakt os</h1>

    <nav aria-label="Brødkrummesti" class="mb-6">
      <ol class="breadcrumb">
        <li><a href="{base}/">Forside</a></li>
        <li>Kontakt</li>
      </ol>
    </nav>

    <div class="row">
      <!-- Contact form -->
      <div class="col-12 col-md-8">
        <h2>Send os en besked</h2>
        <p>Udfyld formularen herunder, så vender vi tilbage hurtigst muligt.</p>

        <form class="mt-5" novalidate>
          <!-- Name field -->
          <div class="form-group">
            <label class="form-label" for="input-name">
              Fulde navn
              <span class="ml-1">(påkrævet)</span>
            </label>
            <input class="form-input input-width-m" id="input-name" type="text" required>
          </div>

          <!-- Email field -->
          <div class="form-group">
            <label class="form-label" for="input-email">
              Email
              <span class="ml-1">(påkrævet)</span>
            </label>
            <span class="form-hint" id="input-email-hint">Vi bruger din email til at svare dig.</span>
            <input class="form-input input-width-m" id="input-email" type="email" required aria-describedby="input-email-hint">
          </div>

          <!-- Phone field -->
          <div class="form-group">
            <label class="form-label" for="input-phone">
              Telefonnummer
            </label>
            <span class="form-hint" id="input-phone-hint">Valgfrit. Angiv dit telefonnummer, hvis du ønsker at blive ringet op.</span>
            <input class="form-input input-char-11" id="input-phone" type="tel" aria-describedby="input-phone-hint">
          </div>

          <!-- Subject dropdown -->
          <div class="form-group">
            <label class="form-label" for="select-subject">
              Emne
              <span class="ml-1">(påkrævet)</span>
            </label>
            <select class="form-select input-width-m" id="select-subject" required>
              <option value="">Vælg emne</option>
              <option value="general">Generel henvendelse</option>
              <option value="technical">Teknisk problem</option>
              <option value="application">Spørgsmål til ansøgning</option>
              <option value="complaint">Klage</option>
              <option value="other">Andet</option>
            </select>
          </div>

          <!-- Radio buttons -->
          <fieldset class="form-group">
            <legend class="form-label">Hvordan ønsker du at blive kontaktet?</legend>
            <ul class="nobullet-list">
              <li>
                <input type="radio" name="contact-method" id="radio-email" value="email" class="form-radio radio-large" checked>
                <label for="radio-email">Email</label>
              </li>
              <li>
                <input type="radio" name="contact-method" id="radio-phone" value="phone" class="form-radio radio-large">
                <label for="radio-phone">Telefon</label>
              </li>
              <li>
                <input type="radio" name="contact-method" id="radio-post" value="post" class="form-radio radio-large">
                <label for="radio-post">Digital Post</label>
              </li>
            </ul>
          </fieldset>

          <!-- Message textarea -->
          <div class="form-group">
            <label class="form-label" for="textarea-message">
              Din besked
              <span class="ml-1">(påkrævet)</span>
            </label>
            <span class="form-hint" id="textarea-message-hint">Beskriv din henvendelse så detaljeret som muligt.</span>
            <textarea class="form-input" id="textarea-message" rows="6" required aria-describedby="textarea-message-hint"></textarea>
          </div>

          <!-- Checkbox -->
          <div class="form-group">
            <input type="checkbox" id="checkbox-consent" class="form-checkbox" required>
            <label for="checkbox-consent">
              Jeg accepterer, at mine oplysninger behandles i henhold til
              <a href="{base}/privatlivspolitik">privatlivspolitikken</a>.
            </label>
          </div>

          <!-- Date field -->
          <fieldset class="form-group">
            <legend class="form-label">Hvornår opstod problemet? (valgfrit)</legend>
            <span class="form-hint" id="date-hint">Angiv dato i formatet dd/mm/åååå.</span>
            <div class="date-group" aria-describedby="date-hint">
              <div class="form-group form-group-day">
                <label class="form-label" for="date-day">Dag</label>
                <input class="form-input input-char-4" id="date-day" type="text" inputmode="numeric" maxlength="2">
              </div>
              <div class="form-group form-group-month">
                <label class="form-label" for="date-month">Måned</label>
                <input class="form-input input-char-4" id="date-month" type="text" inputmode="numeric" maxlength="2">
              </div>
              <div class="form-group form-group-year">
                <label class="form-label" for="date-year">År</label>
                <input class="form-input input-char-8" id="date-year" type="text" inputmode="numeric" maxlength="4">
              </div>
            </div>
          </fieldset>

          <!-- Submit -->
          <div class="form-group mt-6">
            <button type="submit" class="button button-primary">Send besked</button>
            <button type="reset" class="button button-tertiary ml-3">Ryd formular</button>
          </div>
        </form>
      </div>

      <!-- Contact info sidebar -->
      <div class="col-12 col-md-4">
        <div class="alert alert-info" role="region" aria-label="Kontaktinformation">
          <div class="alert-body">
            <p class="alert-heading">Kontaktinformation</p>
            <p class="alert-text">
              <strong>Telefon:</strong> 70 12 34 56<br>
              Man–fre: 9:00–15:00
            </p>
            <p class="alert-text">
              <strong>Email:</strong><br>
              <a href="mailto:info@minmyndighed.dk">info@minmyndighed.dk</a>
            </p>
          </div>
        </div>

        <div class="mt-5">
          <h3>Adresse</h3>
          <p>
            MinMyndighed<br>
            Digitaliseringsvej 1<br>
            1000 København K
          </p>
        </div>

        <div class="mt-5">
          <h3>Åbningstider</h3>
          <table class="table structured-list">
            <tbody>
              <tr>
                <th scope="row">Mandag–torsdag</th>
                <td>9:00–16:00</td>
              </tr>
              <tr>
                <th scope="row">Fredag</th>
                <td>9:00–14:00</td>
              </tr>
              <tr>
                <th scope="row">Weekend</th>
                <td>Lukket</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

  </div>
</main>
