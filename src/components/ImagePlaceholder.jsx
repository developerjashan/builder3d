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
      <div className="relative flex flex-col items-center gap-2 px-4 text-center">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          className={dark ? 'text-steel/50' : 'text-black/25'}
        >
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M21 15l-5-5-9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span
          className={`font-mono text-[10px] font-medium uppercase tracking-[0.15em] ${
            dark ? 'text-steel/60' : 'text-black/40'
          }`}
        >
          {label}
        </span>
        <span className="font-mono text-[9px] text-black/25">{path}</span>
      </div>
    </div>
  )
}
