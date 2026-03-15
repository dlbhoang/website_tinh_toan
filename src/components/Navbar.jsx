import { useState } from 'react'
import './Navbar.css'

const navItems = [
  { label: 'Kỹ thuật - Công nghệ', href: '#kythuật' },
  { label: 'Điều khoản dịch vụ', href: '#dieukhoan' },
  { label: 'Trung tâm học tập 3 pha, 1 Tốc độ', href: '#3pha1td', active: true },
  { label: 'Trung tâm học tập 3 pha, 2 Tốc độ', href: '#3pha2td' },
  { label: 'Trung tâm học tập 1 pha', href: '#1pha' },
  { label: 'Liên hệ với chúng tôi', href: '#lienhe' },
]

export default function Navbar() {
  const [active, setActive] = useState(2)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-inner container">
        <button className="hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
          <span/><span/><span/>
        </button>
        <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item, i) => (
            <li key={i}>
              <a
                href={item.href}
                className={`nav-link ${active === i ? 'active' : ''}`}
                onClick={() => { setActive(i); setMenuOpen(false); }}
              >
                <span className="nav-dot"/>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
