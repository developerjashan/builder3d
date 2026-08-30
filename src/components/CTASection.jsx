export default function CTASection({ eyebrow, title, description, children, dark = true }) {
  return (
    <section
      className={`relative overflow-hidden ${
        dark ? 'bp-grid-dark bg-black text-cream' : 'bg-black/[0.03] text-black'
      }`}
    >
      <div className="container-px relative mx-auto max-w-4xl py-20 text-center">
        {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
        {description && (
          <p
            className={`mx-auto mt-4 max-w-xl text-base leading-relaxed ${
              dark ? 'text-steel' : 'text-gray-muted'
            }`}
          >
            {description}
          </p>
        )}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">{children}</div>
      </div>
    </section>
  )
}
