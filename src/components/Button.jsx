import { Link } from 'react-router-dom'

const base =
  'inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 font-body text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none'

const variants = {
  primary: 'bg-orange text-white hover:bg-orange-light active:translate-y-px',
  dark: 'bg-black text-cream hover:bg-black-soft active:translate-y-px',
  outline:
    'border border-black/15 text-black hover:border-orange hover:text-orange bg-transparent',
  outlineDark:
    'border border-cream/25 text-cream hover:border-orange hover:text-orange bg-transparent',
  ghost: 'text-black hover:text-orange',
}

/**
 * Universal button/link.
 * - Pass `to="/path"` for internal navigation (uses React Router)
 * - Pass `href="mailto:..."` or `href="https://wa.me/..."` for external links
 * - Pass `onClick` for form submits / in-page actions
 */
export default function Button({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  ...rest
}) {
  const classes = `${base} ${variants[variant] || variants.primary} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        {...rest}
      >
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...rest}>
      {children}
    </button>
  )
}
