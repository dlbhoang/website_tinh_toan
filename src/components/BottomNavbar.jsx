import { useState, useRef, useEffect } from 'react'
import { bottomNavItems } from '../data/navData'
import './BottomNavbar.css'

export default function BottomNavbar({ activePage, setActivePage }) {
  const [open, setOpen] = useState(null)
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
    if (!item.children?.length) { setActivePage(item.page); setOpen(null) }
    else setOpen(open === item.id ? null : item.id)
  }

  return (
    <nav className="bot-nav" ref={ref}>
      <div className="bn-inner container">
        <span className="bn-label">Chương trình tính toán dữ liệu:</span>
        <ul className="bn-list">
          {bottomNavItems.map(item => (
            <li key={item.id} className={`bn-item${open===item.id?' is-open':''}${isActive(item)?' is-active':''}`}>
              <button className="bn-btn" onClick={() => handleTop(item)}>
                <svg viewBox="0 0 16 16" fill="currentColor" width="12" height="12" style={{flexShrink:0}}>
                  <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 0a1 1 0 11-2 0 1 1 0 012 0zm-1-5.25a.75.75 0 01.75.75v3a.75.75 0 01-1.5 0v-3A.75.75 0 018 2.75z"/>
                </svg>
                {item.label}
                {item.children?.length > 0 && <span className="bn-chevron">{open===item.id?'▴':'▾'}</span>}
              </button>
              {item.children?.length > 0 && open === item.id && (
                <div className="bn-drop">
                  {item.children.map((g, gi) => (
                    <div key={gi} className="bn-group">
                      <div className="bn-group-label">{g.groupLabel}</div>
                      <ul>
                        {g.items.map((sub, si) => (
                          <li key={si}>
                            <button
                              className={`bn-sub${activePage===sub.page?' sub-on':''}`}
                              onClick={() => { setActivePage(sub.page); setOpen(null) }}
                            >
                              <span className="bn-sub-dot"/>
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
