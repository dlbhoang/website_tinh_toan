import { useState } from 'react'
import './TopBar.css'

export default function TopBar() {
  const [lang, setLang] = useState('VI')

  return (
    <div className="topbar">
      <div className="topbar-inner container">

        {/* Logo */}
        <div className="tb-logo">
          <div className="tb-logo-icon">
            <StatorIcon />
          </div>
          <div className="tb-logo-text">
            <span className="tb-site-name">Statordata.com</span>
            <span className="tb-site-sub">Phần mềm thiết kế máy điện</span>
          </div>
        </div>

        {/* Community box */}
        <div className="tb-community">
          <div className="tb-comm-label">Hỏi đáp giao lưu kỹ thuật động cơ</div>
          <div className="tb-comm-name">Cộng đồng Statordata.com</div>
        </div>

        {/* Actions */}
        <div className="tb-actions">
          <button className="tb-lang" onClick={() => setLang(l => l === 'VI' ? 'EN' : 'VI')}>
            {lang} <span>▾</span>
          </button>
          <button className="tb-icon-btn" title="Tìm kiếm">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="18" height="18">
              <circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="22" y2="22"/>
            </svg>
          </button>
          <a href="https://linkedin.com" target="_blank" className="tb-icon-btn tb-linkedin" title="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
          <a href="#" className="tb-icon-btn tb-youtube" title="YouTube">
            <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
              <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
              <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
            </svg>
          </a>
          <button className="tb-login-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="15" height="15">
              <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4"/>
              <polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/>
            </svg>
            Đăng nhập
          </button>
        </div>
      </div>
    </div>
  )
}

function StatorIcon() {
  const spokes = [0, 45, 90, 135, 180, 225, 270, 315]
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="30" fill="var(--blue-50)" stroke="var(--blue-700)" strokeWidth="2.5"/>
      <circle cx="32" cy="32" r="18" fill="none" stroke="var(--blue-600)" strokeWidth="1.8"/>
      {spokes.map((deg, i) => (
        <line key={i}
          x1={32 + 20 * Math.cos(deg * Math.PI / 180)}
          y1={32 + 20 * Math.sin(deg * Math.PI / 180)}
          x2={32 + 30 * Math.cos(deg * Math.PI / 180)}
          y2={32 + 30 * Math.sin(deg * Math.PI / 180)}
          stroke="var(--blue-700)" strokeWidth="2.5" strokeLinecap="round"/>
      ))}
      <circle cx="32" cy="32" r="5" fill="var(--blue-700)"/>
    </svg>
  )
}
