import Logo from './Logo.jsx'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="bp-grid-dark border-t border-gray-line bg-black text-cream">
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo dark />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-steel">
              Turning ideas into real things.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-4">Navigate</p>
            <ul className="space-y-2.5 text-sm text-steel">
              <li>
                <a href="/products" className="transition-colors hover:text-orange">
                  Products
                </a>
              </li>
              <li>
                <a href="/industrial" className="transition-colors hover:text-orange">
                  Industrial
                </a>
              </li>
              <li>
                <a href="/projects" className="transition-colors hover:text-orange">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Services</p>
            <ul className="space-y-2.5 text-sm text-steel">
              <li>3D Printing</li>
              <li>Custom Parts</li>
              <li>Prototyping</li>
              <li>CAD Design</li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Contact</p>
            <ul className="space-y-2.5 text-sm text-steel">
              {/* REPLACE: update contact details below */}
              <li>
                <a href="mailto:hello@builders3d.in" className="transition-colors hover:text-orange">
                  hello@builders3d.in
                </a>
              </li>
              <li>
                <a href="https://wa.me/910000000000" className="transition-colors hover:text-orange">
                  +91 00000 00000 (WhatsApp)
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/builders3d"
                  className="transition-colors hover:text-orange"
                >
                  @builders3d
                </a>
              </li>
            </ul>

            <div className="mt-5 flex gap-3">
              <SocialIcon label="Instagram" href="https://instagram.com/builders3d">
                <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z" />
                <path d="M12 15.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" />
                <path d="M17.2 6.8h.01" />
              </SocialIcon>
              <SocialIcon label="WhatsApp" href="https://wa.me/910000000000">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              </SocialIcon>
              <SocialIcon label="LinkedIn" href="https://linkedin.com">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </SocialIcon>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-gray-line pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-xs text-steel/70">
            © {year} BUILDERS 3D. All rights reserved.
          </p>
          {/* Required ownership line — subtle, smaller than main branding */}
          <p className="font-mono text-[11px] text-steel/40">
            A product of Celestara Private Limited
          </p>
        </div>
      </div>
    </footer>
  )
}

function SocialIcon({ children, label, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-line text-steel transition-colors hover:border-orange hover:text-orange"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        {children}
      </svg>
    </a>
  )
}
