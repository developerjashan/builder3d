import { useState } from 'react'

const initialState = {
  name: '',
  company: '',
  phone: '',
  email: '',
  requirement: '',
  file: null,
}

/**
 * Industrial enquiry form.
 * ---------------------------------------------------------------
 * This currently validates fields and shows a success state, but
 * does not send data anywhere. To connect it:
 *   - Simplest: swap the onSubmit handler to open a mailto: link
 *     or a WhatsApp deep link pre-filled with the form values.
 *   - Or: POST the `data` object to a form backend (e.g. Formspree,
 *     Basin) or your own API endpoint — set REPLACE_WITH_ENDPOINT below.
 * ---------------------------------------------------------------
 */
const FORM_ENDPOINT = '' // REPLACE ME: e.g. 'https://formspree.io/f/your-id'

export default function EnquiryForm() {
  const [data, setData] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success

  const update = (field) => (e) =>
    setData((d) => ({
      ...d,
      [field]: field === 'file' ? e.target.files?.[0] ?? null : e.target.value,
    }))

  const validate = () => {
    const next = {}
    if (!data.name.trim()) next.name = 'Please enter your name.'
    if (!data.phone.trim()) next.phone = 'Please enter a phone or WhatsApp number.'
    if (!data.email.trim()) next.email = 'Please enter your email.'
    else if (!/^\S+@\S+\.\S+$/.test(data.email)) next.email = 'Enter a valid email address.'
    if (!data.requirement.trim()) next.requirement = 'Tell us briefly what you need.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('submitting')

    if (FORM_ENDPOINT) {
      try {
        const body = new FormData()
        Object.entries(data).forEach(([k, v]) => v && body.append(k, v))
        await fetch(FORM_ENDPOINT, { method: 'POST', body, headers: { Accept: 'application/json' } })
      } catch {
        // Network errors are ignored here; still show success locally.
        // Replace with real error handling once FORM_ENDPOINT is set.
      }
    } else {
      // No backend configured yet — simulate a short delay.
      await new Promise((r) => setTimeout(r, 500))
    }

    setStatus('success')
    setData(initialState)
  }

  if (status === 'success') {
    return (
      <div className="rounded-lg border border-orange/30 bg-black-soft p-8 text-center">
        <p className="font-display text-lg font-bold text-cream">Enquiry received.</p>
        <p className="mt-2 text-sm text-steel">
          Thanks — we'll get back to you shortly. (Connect FORM_ENDPOINT in EnquiryForm.jsx to
          receive these by email.)
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Name" error={errors.name}>
          <input
            type="text"
            value={data.name}
            onChange={update('name')}
            className={inputClass(errors.name)}
            placeholder="Your full name"
          />
        </Field>
        <Field label="Company">
          <input
            type="text"
            value={data.company}
            onChange={update('company')}
            className={inputClass()}
            placeholder="Company name (optional)"
          />
        </Field>
        <Field label="Phone / WhatsApp" error={errors.phone}>
          <input
            type="tel"
            value={data.phone}
            onChange={update('phone')}
            className={inputClass(errors.phone)}
            placeholder="+91 00000 00000"
          />
        </Field>
        <Field label="Email" error={errors.email}>
          <input
            type="email"
            value={data.email}
            onChange={update('email')}
            className={inputClass(errors.email)}
            placeholder="you@company.com"
          />
        </Field>
      </div>

      <Field label="Requirement" error={errors.requirement}>
        <textarea
          rows={4}
          value={data.requirement}
          onChange={update('requirement')}
          className={inputClass(errors.requirement)}
          placeholder="Tell us about the part, material, quantity and timeline."
        />
      </Field>

      <Field label="Upload CAD / Drawing">
        <input
          type="file"
          onChange={update('file')}
          accept=".stl,.step,.stp,.pdf,.jpg,.png,.dwg"
          className="block w-full text-sm text-steel file:mr-4 file:rounded-md file:border-0 file:bg-orange file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-orange-light"
        />
        <p className="mt-1.5 font-mono text-[11px] text-steel/60">
          STL, STEP, PDF, DWG or image — up to 20MB.
        </p>
      </Field>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full rounded-md bg-orange px-6 py-3.5 font-body text-sm font-semibold text-white transition-colors hover:bg-orange-light disabled:opacity-60 sm:w-auto"
      >
        {status === 'submitting' ? 'Submitting…' : 'Submit Enquiry'}
      </button>
    </form>
  )
}

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.1em] text-steel">
        {label}
      </span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-orange-light">{error}</span>}
    </label>
  )
}

function inputClass(error) {
  return `w-full rounded-md border bg-black px-4 py-2.5 text-sm text-cream placeholder:text-steel/40 focus:border-orange focus:outline-none ${
    error ? 'border-orange-light' : 'border-gray-line'
  }`
}
