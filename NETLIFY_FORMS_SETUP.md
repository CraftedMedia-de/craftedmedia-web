# Netlify Forms Setup (kostenloses Formular-Handling)

## Überblick
Dein Projekt nutzt **Netlify Forms** für kostenlose Formular-Verwaltung:
- ✅ Keine Server-Kosten
- ✅ Keine eigene Backend-Infrastruktur nötig
- ✅ Submissions werden in Netlify Dashboard gespeichert
- ✅ Wiederverwendbares Composable für beliebig viele Formulare

## Was wurde entfernt?
- ❌ `server/api/contact.post.ts` (nicht mehr nötig)
- ❌ SMTP-Konfiguration in `nuxt.config.ts` (nicht mehr nötig)
- ❌ SMTP-Environment-Variablen in `.env.example` (nicht mehr nötig)

## Was bleibt?
- ✅ `app/composables/useNetlifyForm.ts` — Wiederverwendbarer Composable
- ✅ `app/pages/kontakt/ProjektFragebogen.vue` — Angepasst zur Nutzung des Composables
- ✅ `public/netlify-forms-probe.html` — Statische Form, damit Netlify die Felder beim Build erkennt

## Wie funktioniert es?

### 1. Formular erstellen (Template)
```vue
<script setup lang="ts">
import { reactive } from 'vue'
import { useNetlifyForm } from '~/composables/useNetlifyForm'

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const { submit, isSubmitting, submitSuccess, submitError, buildHiddenFields } = 
  useNetlifyForm({ formName: 'mein_formular' })

async function onSubmit() {
  await submit(form)
}
</script>

<template>
  <form data-netlify="true" data-netlify-honeypot="bot-field" @submit.prevent="onSubmit">
    <!-- Hidden inputs (wichtig für Netlify!) -->
    <template v-for="field in buildHiddenFields(form)" :key="field.name">
      <input type="hidden" :name="field.name" :value="field.value" />
    </template>

    <!-- Sichtbare Felder -->
    <input v-model="form.name" name="name" type="text" />
    <input v-model="form.email" name="email" type="email" />
    <textarea v-model="form.message" name="message"></textarea>

    <button type="submit" :disabled="isSubmitting">Absenden</button>
  </form>

  <p v-if="submitSuccess">Danke!</p>
  <p v-if="submitError">Fehler: {{ submitError }}</p>
</template>
```

### 2. Netlify Forms erkannt?
Damit Netlify dein Formular beim Deploy erkennt:
- Form muss ein eindeutiges `name="..."` haben
- Form muss `data-netlify="true"` enthalten
- Statische Probe wird von `public/netlify-forms-probe.html` bereitgestellt

### 3. Submissions anschauen
Nach Deploy auf Netlify:
1. Gehe zu deiner Site in Netlify Dashboard
2. Gehe zu **Forms** (linkes Menü)
3. Dein Formular (z.B. "mein_formular") wird dort angezeigt
4. Alle Submissions sind dort einsehbar

## Mehrere Formulare hinzufügen

### Beispiel: Newsletter-Formular
1. Neue Datei `app/pages/newsletter.vue` erstellen
2. Gleicht wie oben, aber mit anderem `formName`:
   ```ts
   const { submit, ... } = useNetlifyForm({ formName: 'newsletter' })
   ```
3. Probe-HTML erweitern: In `public/netlify-forms-probe.html` ein neues `<form name="newsletter">` hinzufügen (oder kopiere die Struktur der projektfragebogen-Form mit deinen Feldnamen)

### In probe-HTML hinzufügen:
```html
<form name="newsletter" data-netlify="true" netlify-honeypot="bot-field" style="display:none">
  <input type="hidden" name="form-name" value="newsletter" />
  <input type="hidden" name="bot-field" value="" />
  <input type="hidden" name="email" value="" />
  <!-- deine weiteren Felder -->
</form>
```

## E-Mail-Benachrichtigungen (Optional)

Wenn du automatische E-Mails erhalten möchtest:

### Option A: Netlify Notifications (einfach)
Gehe in Netlify Dashboard → Site Settings → Forms → Notifications → Add Notification

### Option B: Webhook zu Zapier/Make (no-code)
Erstelle einen Zapier Workflow:
- Netlify Forms als Trigger
- Gmail/Outlook als Action (sende E-Mail)

### Option C: Netlify Function (für später)
Du kannst eine serverlose Function schreiben, die E-Mails per SendGrid/SMTP versendet. Kontakt wenn du das brauchst.

## Lokales Testen

```bash
# Mit Netlify CLI testen (emuliert Netlify Forms)
npm install -g netlify-cli
netlify dev

# Dann im Browser Formular absenden
# In der Terminal-Ausgabe siehst du die Form-Events
```

## .env.example
Die alte SMTP-Konfiguration wurde entfernt. Aktuell brauchst du keine Environment-Variablen für einfache Netlify Forms.

Falls du später eine Netlify Function für E-Mails hinzufügst, würdest du dann:
```
SENDGRID_API_KEY=xxx
MAIL_TO=team@example.com
```
hinzufügen.

## Vorteile dieses Setups
- 🎯 Zentral verwaltet: Ein Composable für alle Formulare
- 🚀 Einfach erweiterbar: Neue Form = neue Komponente + neuer `formName`
- 💰 Kostenlos: Netlify Forms free tier ist großzügig
- 📊 Tracking: Alle Submissions im Netlify Dashboard
- 🔒 Honeypot: Spam-Schutz eingebaut

Viel Erfolg! 🚀

