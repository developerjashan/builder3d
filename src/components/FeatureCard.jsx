export default function FeatureCard({ index, title, description, dark = false }) {
  return (
    <div
      className={`group rounded-lg border p-6 transition-colors duration-200 ${
        dark
          ? 'border-gray-line bg-black-soft hover:border-orange/50'
          : 'border-black/10 bg-white hover:border-orange/40'
      }`}
    >
      {index && (
        <span className="font-mono text-xs text-orange">{index}</span>
      )}
      <h3
        className={`mt-3 font-display text-base font-bold tracking-tight ${
          dark ? 'text-cream' : 'text-black'
        }`}
      >
        {title}
      </h3>
      <p className={`mt-2 text-sm leading-relaxed ${dark ? 'text-steel' : 'text-gray-muted'}`}>
        {description}
      </p>
    </div>
  )
}
