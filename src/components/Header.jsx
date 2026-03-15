import { useState } from 'react'
import './Header.css'

export default function Header() {
  const [lang, setLang] = useState('VI')

  return (
    <header className="header">
      <div className="header-inner container">
        {/* Logo */}
        <div className="logo-area">
          <div className="logo-circle">
            <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30" cy="30" r="28" stroke="#0057b8" strokeWidth="3" fill="#e8f1fc"/>
              <circle cx="30" cy="30" r="18" stroke="#0057b8" strokeWidth="2" fill="none"/>
              {[0,45,90,135,180,225,270,315].map((deg,i) => (
                <line key={i}
                  x1={30 + 20*Math.cos(deg*Math.PI/180)}
                  y1={30 + 20*Math.sin(deg*Math.PI/180)}
                  x2={30 + 28*Math.cos(deg*Math.PI/180)}
                  y2={30 + 28*Math.sin(deg*Math.PI/180)}
                  stroke="#0057b8" strokeWidth="2.5" strokeLinecap="round"/>
              ))}
              <circle cx="30" cy="30" r="5" fill="#0057b8"/>
            </svg>
          </div>
          <div className="logo-text">
            <span className="logo-name">Statordata.com</span>
            <span className="logo-tagline">Phần mềm thiết kế máy điện</span>
          </div>
        </div>

        {/* Community Box */}
        <div className="community-box">
          <div className="community-label">Hỏi đáp giao lưu kỹ thuật động cơ</div>
          <div className="community-name">Cộng đồng Statordata.com</div>
        </div>

        {/* Right actions */}
        <div className="header-actions">
          <div className="lang-selector" onClick={() => setLang(l => l === 'VI' ? 'EN' : 'VI')}>
            {lang} <span className="chevron">▾</span>
          </div>
          <a href="#" className="icon-btn" title="Tìm kiếm">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="20" height="20">
              <circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="22" y2="22"/>
            </svg>
          </a>
          <a href="https://linkedin.com" target="_blank" className="icon-btn icon-linkedin" title="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
          <a href="#" className="icon-btn icon-youtube" title="YouTube">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
              <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
            </svg>
          </a>
          <button className="btn-login">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16" style={{marginRight:'6px'}}>
              <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4"/>
              <polyline points="10 17 15 12 10 7"/>
              <line x1="15" y1="12" x2="3" y2="12"/>
            </svg>
            Đăng nhập
          </button>
        </div>
      </div>
    </header>
  )
}
