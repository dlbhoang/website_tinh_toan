import { useState, useRef, useEffect } from 'react'
import { bottomNavItems } from '../data/navData'
import './BottomNavbar.css'

export default function BottomNavbar({ activePage, setActivePage }) {
  const [openMenu, setOpenMenu] = useState(null)
  const navRef = useRef(null)

  useEffect(() => {
    function handleClick(e) {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenMenu(null)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const handleSubClick = (page) => {
    setActivePage(page)
    setOpenMenu(null)
  }

  const isActive = (item) =>
    item.children.some(g => g.items.some(i => i.page === activePage))

  return (
    <nav className="bot-navbar" ref={navRef}>
      <div className="bnav-inner container">
        <div className="bnav-label">Chương trình tính toán dữ liệu:</div>
        <ul className="bnav-list">
          {bottomNavItems.map(item => (
            <li key={item.id} className={`bnav-item ${openMenu === item.id ? 'open' : ''} ${isActive(item) ? 'active' : ''}`}>
              <button className="bnav-btn" onClick={() => setOpenMenu(openMenu === item.id ? null : item.id)}>
                <svg viewBox="0 0 16 16" fill="currentColor" width="13" height="13">
                  <path d="M8 2a6 6 0 100 12A6 6 0 008 2zm0 10.5a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm0-7a.75.75 0 01.75.75v3a.75.75 0 01-1.5 0v-3A.75.75 0 018 5.5zm0-1.75a.875.875 0 100-1.75.875.875 0 000 1.75z"/>
                </svg>
                {item.label}
                <span className="bnav-arrow">{openMenu === item.id ? '▴' : '▾'}</span>
              </button>

              {openMenu === item.id && (
                <div className="bnav-dropdown">
                  {item.children.map((group, gi) => (
                    <div key={gi} className="bnav-group">
                      <div className="bnav-group-label">{group.groupLabel}</div>
                      <ul className="bnav-sub-list">
                        {group.items.map((sub, si) => (
                          <li key={si}>
                            <button
                              className={`bnav-sub-btn ${activePage === sub.page ? 'sub-active' : ''}`}
                              onClick={() => handleSubClick(sub.page)}
                            >
                              <span className="sub-dot"/>
                              {sub.label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
