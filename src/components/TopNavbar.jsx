import { useState, useRef, useEffect } from 'react'
import { topNavItems } from '../data/navData'
import './TopNavbar.css'

export default function TopNavbar({ activePage, setActivePage }) {
  const [open, setOpen] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const h = e => { if (ref.current && !ref.current.contains(e.target)) setOpen(null) }
    document.addEventListener('mousedown', h)
    return () => document.removeEventListener('mousedown', h)
  }, [])

  const isActive = item => {
    if (item.page === activePage) return true
    return item.children?.some(g => g.items?.some(i => i.page === activePage))
  }

  const handleTop = item => {
    if (!item.children?.length) { setActivePage(item.page); setOpen(null); setMobileOpen(false) }
    else setOpen(open === item.id ? null : item.id)
  }

  const handleSub = page => { setActivePage(page); setOpen(null); setMobileOpen(false) }

  return (
    <nav className="top-nav" ref={ref}>
      <div className="tn-inner container">
        <button className="tn-ham" onClick={() => setMobileOpen(o=>!o)} aria-label="menu">
          <span/><span/><span/>
        </button>
        <ul className={`tn-list ${mobileOpen ? 'open' : ''}`}>
          {topNavItems.map(item => (
            <li key={item.id} className={`tn-item${open===item.id?' is-open':''}${isActive(item)?' is-active':''}`}>
              <button className="tn-btn" onClick={() => handleTop(item)}>
                <span className="tn-dot"/>
                <span>{item.label}</span>
                {item.children?.length > 0 && <span className="tn-chevron">{open===item.id?'▴':'▾'}</span>}
              </button>
              {item.children?.length > 0 && open === item.id && (
                <div className="tn-drop">
                  {item.children.map((g, gi) => (
                    <div key={gi} className="tn-group">
                      <div className="tn-group-label">{g.groupLabel}</div>
                      <ul>
                        {g.items.map((sub, si) => (
                          <li key={si}>
                            <button className={`tn-sub${activePage===sub.page?' sub-on':''}`} onClick={() => handleSub(sub.page)}>
                              <span className="tn-sub-dot"/>
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
