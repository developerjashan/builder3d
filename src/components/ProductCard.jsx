import ImagePlaceholder from './ImagePlaceholder.jsx'
import Button from './Button.jsx'

export default function ProductCard({ name, description, price, imagePath }) {
  return (
    <div className="group rounded-lg border border-black/10 bg-white p-4 transition-shadow duration-200 hover:shadow-[0_8px_28px_-12px_rgba(0,0,0,0.15)]">
      <div className="viewport-corners overflow-hidden rounded-md">
        <div className="transition-transform duration-500 group-hover:scale-[1.04]">
          <ImagePlaceholder label="ADD PRODUCT IMAGE" path={imagePath} ratio="aspect-square" />
        </div>
      </div>
      <div className="mt-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-orange">
          Demo Product
        </span>
        <h3 className="mt-1.5 font-display text-base font-bold text-black">{name}</h3>
        <p className="mt-1 text-sm leading-relaxed text-gray-muted">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-mono text-sm font-medium text-black">{price}</span>
          <Button variant="ghost" className="!px-0 !py-0 text-sm">
            View Product →
          </Button>
        </div>
      </div>
    </div>
  )
}
