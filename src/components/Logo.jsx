import { Link } from 'react-router-dom'

/**
 * BUILDERS 3D logo.
 * ---------------------------------------------------------------
 * REPLACE ME: this is a text-based stand-in for your real logo.
 * To use your actual logo file:
 *   1. Save it to /public/images/logo.png (or .svg)
 *   2. Replace the contents of this component with:
 *        <img src="/images/logo.png" alt="BUILDERS 3D" className={className} />
 * ---------------------------------------------------------------
 */
export default function Logo({ dark = false, className = '' }) {
  return (
    <Link
      to="/products"
      className={`group flex items-center gap-2.5 ${className}`}
      aria-label="BUILDERS 3D — go to homepage"
    >
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-md border font-display text-lg font-bold ${
          dark
            ? 'border-steel/40 bg-black text-orange'
            : 'border-black/10 bg-black text-orange'
        }`}
      >
        B
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-lg font-bold tracking-tight ${
            dark ? 'text-cream' : 'text-black'
          }`}
        >
          BUILDERS<span className="text-orange">3D</span>
        </span>
        <span className="font-mono text-[9px] tracking-[0.25em] text-gray-muted">
          DESIGN · PRINT · BUILD
        </span>
      </span>
    </Link>
  )
}
