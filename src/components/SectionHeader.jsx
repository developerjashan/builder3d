export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  dark = false,
}) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl ${
          dark ? 'text-cream' : 'text-black'
        }`}
      >
        {title}
      </h2>
      <span
        className={`build-line mt-4 w-16 animate-drawLine ${
          align === 'center' ? 'mx-auto' : ''
        }`}
      />
      {description && (
        <p className={`mt-5 text-base leading-relaxed ${dark ? 'text-steel' : 'text-gray-muted'}`}>
          {description}
        </p>
      )}
    </div>
  )
}
