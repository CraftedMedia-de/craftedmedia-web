import { computed, ref } from 'vue'

export type NetlifyFormField = { name: string; value: string }

export function useNetlifyForm(options?: { endpoint?: string; formName?: string }) {
  const endpoint = options?.endpoint ?? '/'
  const formName = options?.formName ?? 'contact'

  const isSubmitting = ref(false)
  const submitSuccess = ref(false)
  const submitError = ref('')

  async function submit(data: Record<string, any>) {
    isSubmitting.value = true
    submitError.value = ''
    submitSuccess.value = false

    try {
      const payload: Record<string, string> = {
        'form-name': formName,
        'bot-field': '',
      }

      Object.entries(data).forEach(([k, v]) => {
        if (v === undefined || v === null) return
        if (Array.isArray(v)) payload[k] = v.join(', ')
        else payload[k] = String(v)
      })

      const encoded = Object.entries(payload)
        .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
        .join('&')

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encoded,
      })

      if (!res.ok) {
        const text = await res.text().catch(() => '')
        submitError.value = `Server returned ${res.status}` + (text ? `: ${text}` : '')
        return { ok: false, status: res.status, text }
      }

      submitSuccess.value = true
      return { ok: true }
    } catch (err: any) {
      submitError.value = err?.message || 'Beim Senden ist ein Fehler aufgetreten.'
      return { ok: false, error: err }
    } finally {
      isSubmitting.value = false
    }
  }

  function buildHiddenFields(data: Record<string, any>) {
    return computed<NetlifyFormField[]>(() => {
      const fields: NetlifyFormField[] = []
      fields.push({ name: 'form-name', value: formName })
      fields.push({ name: 'bot-field', value: '' })

      Object.entries(data).forEach(([k, v]) => {
        if (v === undefined || v === null) return
        if (Array.isArray(v)) fields.push({ name: k, value: v.join(', ') })
        else fields.push({ name: k, value: String(v) })
      })

      return fields
    })
  }

  return {
    submit,
    isSubmitting,
    submitSuccess,
    submitError,
    buildHiddenFields,
    endpoint,
    formName,
  }
}

