import { useState, useRef, useEffect } from 'react'
import { topNavItems } from '../data/navData'
import './TopNavbar.css'

export default function TopNavbar({ activePage, setActivePage }) {
  const [openMenu, setOpenMenu] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    function handleClick(e) {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenMenu(null)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const handleTopClick = (item) => {
    if (item.children.length === 0) {
      setActivePage(item.page)
      setOpenMenu(null)
      setMobileOpen(false)
    } else {
      setOpenMenu(openMenu === item.id ? null : item.id)
    }
  }

  const handleSubClick = (page) => {
    setActivePage(page)
    setOpenMenu(null)
    setMobileOpen(false)
  }

  const isActive = (item) => {
    if (item.page && item.page === activePage) return true
    if (item.children) {
      return item.children.some(g => g.items.some(i => i.page === activePage))
    }
    return false
  }

  return (
    <nav className="top-navbar" ref={navRef}>
      <div className="tnav-inner container">
        <button className="tnav-hamburger" onClick={() => setMobileOpen(o => !o)}>
          <span/><span/><span/>
        </button>
        <ul className={`tnav-list ${mobileOpen ? 'mobile-open' : ''}`}>
          {topNavItems.map(item => (
            <li key={item.id} className={`tnav-item ${openMenu === item.id ? 'open' : ''} ${isActive(item) ? 'active' : ''}`}>
              <button className="tnav-btn" onClick={() => handleTopClick(item)}>
                <span className="tnav-dot"/>
                <span>{item.label}</span>
                {item.children.length > 0 && <span className="tnav-arrow">{openMenu === item.id ? '▴' : '▾'}</span>}
              </button>

              {item.children.length > 0 && openMenu === item.id && (
                <div className="tnav-dropdown">
                  {item.children.map((group, gi) => (
                    <div key={gi} className="tnav-group">
                      <div className="tnav-group-label">{group.groupLabel}</div>
                      <ul className="tnav-sub-list">
                        {group.items.map((sub, si) => (
                          <li key={si}>
                            <button
                              className={`tnav-sub-btn ${activePage === sub.page ? 'sub-active' : ''}`}
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
