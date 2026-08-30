import ImagePlaceholder from './ImagePlaceholder.jsx'

export default function ProjectCard({ name, description, category, imagePath }) {
  return (
    <div className="group">
      <div className="viewport-corners overflow-hidden rounded-lg">
        <div className="transition-transform duration-500 group-hover:scale-[1.04]">
          <ImagePlaceholder
            label="ADD PROJECT IMAGE"
            path={imagePath}
            ratio="aspect-[4/3]"
          />
        </div>
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-base font-bold text-black">{name}</h3>
          <p className="mt-1 text-sm leading-relaxed text-gray-muted">{description}</p>
        </div>
        <span className="shrink-0 rounded-full border border-orange/30 px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-orange">
          {category}
        </span>
      </div>
    </div>
  )
}
