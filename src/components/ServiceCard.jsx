export default function ServiceCard({ icon, title, description }) {
  return (
    <div className="group rounded-lg border border-gray-line bg-black-soft p-6 transition-colors duration-200 hover:border-orange/50">
      <div className="flex h-11 w-11 items-center justify-center rounded-md border border-orange/30 text-orange transition-colors group-hover:bg-orange group-hover:text-white">
        {icon}
      </div>
      <h3 className="mt-4 font-display text-base font-bold text-cream">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-steel">{description}</p>
    </div>
  )
}
