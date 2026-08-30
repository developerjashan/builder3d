export default function ImagePlaceholder({
  path = '/images/placeholder.jpg',
  ratio = 'aspect-[4/3]',
  className = '',
  dark = false,
}) {
  return (
    <div
      className={`image-placeholder relative ${ratio} w-full overflow-hidden rounded-lg border ${
        dark
          ? 'border-steel/20 bg-black-soft'
          : 'border-black/10 bg-black/[0.03]'
      } ${className}`}
    >
      <img
        src={path}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  )
}
