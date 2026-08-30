import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Logo.jsx'
import Button from './Button.jsx'

const links = [
  { to: '/products', label: 'Products' },
  { to: '/industrial', label: 'Industrial' },
  { to: '/projects', label: 'Projects' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change / resize to desktop
  useEffect(() => {
    const onResize = () => window.innerWidth >= 768 && setOpen(false)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-200 ${
        scrolled ? 'border-black/10 bg-cream/95 backdrop-blur' : 'border-transparent bg-cream'
      }`}
    >
      <nav className="container-px mx-auto flex h-18 max-w-7xl items-center justify-between py-3.5">
        <Logo />

        {/* Desktop links */}
        <div className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative py-1 font-body text-sm font-medium transition-colors ${
                  isActive ? 'text-black' : 'text-gray-muted hover:text-black'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-orange" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:block">
          <Button to="/industrial#enquiry" variant="primary">
            Get a Quote
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span
            className={`h-[2px] w-6 bg-black transition-transform duration-200 ${
              open ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-black transition-opacity duration-200 ${
              open ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-black transition-transform duration-200 ${
              open ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`overflow-hidden border-t border-black/10 bg-cream transition-[max-height] duration-300 md:hidden ${
          open ? 'max-h-96' : 'max-h-0 border-t-0'
        }`}
      >
        <div className="container-px mx-auto flex flex-col gap-1 py-4">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `rounded-md px-3 py-3 font-body text-base font-medium ${
                  isActive ? 'bg-black/5 text-black' : 'text-gray-muted'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Button
            to="/industrial#enquiry"
            variant="primary"
            className="mt-3 w-full"
            onClick={() => setOpen(false)}
          >
            Get a Quote
          </Button>
        </div>
      </div>
    </header>
  )
}
