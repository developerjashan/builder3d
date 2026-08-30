/**
 * ImagePlaceholder
 * ---------------------------------------------------------------
 * A clearly-marked stand-in for a real photo. Once you have your
 * product/project photography, replace usages of this component
 * with a plain <img src="/images/your-file.jpg" alt="..." /> tag,
 * or point the `src` prop at your file — see comment below.
 *
 * Every placeholder in this codebase references a suggested path
 * such as /images/product-01.jpg so you know exactly which file
 * to drop into /public/images to bring each spot to life.
 * ---------------------------------------------------------------
 */
export default function ImagePlaceholder({
  label = 'ADD IMAGE HERE',
  path = '/images/placeholder.jpg',
  ratio = 'aspect-[4/3]',
  className = '',
  dark = false,
}) {
  return (
    <div
      className={`image-placeholder relative flex ${ratio} w-full items-center justify-center overflow-hidden rounded-lg border ${
        dark
          ? 'border-steel/20 bg-black-soft'
          : 'border-black/10 bg-black/[0.03]'
      } ${className}`}
    >
      <img
  src={path}
  alt={label}
  className="absolute inset-0 h-full w-full object-cover"
/>

      </div>
    </div>
  )
}
