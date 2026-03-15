import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner container">
        {/* Left: App mockup */}
        <div className="hero-app-mockup">
          <div className="app-label">App: Statordata</div>
          <div className="phone-frame">
            <div className="phone-notch"/>
            <div className="phone-screen">
              <div className="phone-topbar">
                <span>12:21</span>
                <span>VCB Digibank</span>
                <span>40● ■</span>
              </div>
              <div className="phone-logo-row">
                <div className="vcb-logo">VCB<br/><span>Digibank</span></div>
                <span className="phone-lang">🇬🇧 ENG</span>
              </div>
              <div className="phone-building">
                <div className="building-graphic">
                  <div className="building-tower">
                    {[...Array(8)].map((_,i) => (
                      <div key={i} className="building-floor" style={{animationDelay:`${i*0.08}s`}}/>
                    ))}
                  </div>
                </div>
              </div>
              <div className="phone-form">
                <div className="greeting">👋 Xin chào: VÕ NGUYỄN BA LIÊU</div>
                <div className="input-field">🔒 Mật khẩu</div>
                <button className="phone-btn">Đăng nhập</button>
                <div className="forgot-pw">Quên mật khẩu?</div>
              </div>
              <div className="phone-footer">
                <div className="pfooter-item">🏧<br/><small>ATM Chi nhánh</small></div>
                <div className="pfooter-item">🎁<br/><small>Ưu đãi</small></div>
                <div className="pfooter-item">📖<br/><small>Hướng dẫn sử dụng</small></div>
                <div className="pfooter-item">🔑<br/><small>Tạo OTP</small></div>
                <div className="pfooter-item">🆘<br/><small>Hỗ trợ</small></div>
              </div>
            </div>
          </div>
          <div className="arrow-label">
            <svg width="60" height="40" viewBox="0 0 60 40">
              <path d="M50 5 C30 5, 10 20, 10 35" stroke="#0057b8" strokeWidth="2.5" fill="none" strokeDasharray="none" markerEnd="url(#ah)"/>
              <defs>
                <marker id="ah" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                  <path d="M0,0 L8,4 L0,8 Z" fill="#0057b8"/>
                </marker>
              </defs>
            </svg>
          </div>
        </div>

        {/* Center: Main content */}
        <div className="hero-content">
          <div className="hero-badge">PHẦN MỀM THIẾT KẾ MÁY ĐIỆN.</div>
          <h1 className="hero-title">
            THIẾT KẾ – TÍNH TOÁN DỮ LIỆU DÂY QUẤN STATOR<br/>
            <span className="hero-title-sub">ĐỘNG CƠ CẢM ỨNG.</span>
          </h1>

          <div className="hero-divider"/>

          <h2 className="hero-subtitle">PHẦN MỀM THIẾT KẾ TÍNH TOÁN DỮ LIỆU ĐỘNG CƠ CẢM ỨNG.</h2>

          <ul className="hero-features">
            <li><span className="check">✔</span> Phần mềm Statordata.com tối ưu hoá, thiết kế tính toán dữ liệu dây quấn động cơ Cảm ứng.</li>
            <li><span className="check">✔</span> Hỗ trợ kỹ thuật trong quá trình thiết kế và tính toán dữ liệu động cơ cảm ứng.</li>
            <li><span className="check">✔</span> Thiết kế tính toán dữ liệu Stator hoặc Rotor dây quấn 1 lớp hay 2 lớp.</li>
            <li><span className="check">✔</span> Tính toán số vòng và đường kính dây đồng tròn.</li>
            <li><span className="check">✔</span> Tính toán dòng điện và công suất động cơ.</li>
            <li><span className="check">✔</span> Ứng dụng cho động cơ không đồng bộ hoặc động cơ đồng bộ, loại stator hoặc rotor dây quấn, 1 pha và 3 pha.</li>
          </ul>

          <div className="hero-cta">
            <button className="btn-primary">Bắt đầu ngay</button>
            <button className="btn-outline">Tìm hiểu thêm</button>
          </div>
        </div>

        {/* Right: Stator visualization */}
        <div className="hero-visual">
          <div className="stator-diagram">
            <StatorDiagram />
            <div className="visual-caption">Ngay đây video: Phân bố mật độ từ thông mạch từ stator.</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function StatorDiagram() {
  const slots = 36
  const outerR = 110
  const innerR = 65
  const slotDepth = 30
  const cx = 130, cy = 130

  const colors = ['#ff4444','#ff8800','#ffcc00','#44cc44','#0088ff','#aa44ff']

  return (
    <svg viewBox="0 0 260 260" xmlns="http://www.w3.org/2000/svg" className="stator-svg">
      <defs>
        <radialGradient id="bgGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#001a40"/>
          <stop offset="100%" stopColor="#000820"/>
        </radialGradient>
        <radialGradient id="coreGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1a3a6a"/>
          <stop offset="60%" stopColor="#0a1f40"/>
          <stop offset="100%" stopColor="#050e20"/>
        </radialGradient>
      </defs>

      {/* Background */}
      <circle cx={cx} cy={cy} r="128" fill="url(#bgGrad)"/>

      {/* Stator lamination ring */}
      <circle cx={cx} cy={cy} r={outerR} fill="#1a2a4a" stroke="#2a4a8a" strokeWidth="1"/>

      {/* Stator slots */}
      {[...Array(slots)].map((_, i) => {
        const angle = (i / slots) * 2 * Math.PI - Math.PI/2
        const slotW = 0.07
        const x1 = cx + (innerR + slotDepth) * Math.cos(angle)
        const y1 = cy + (innerR + slotDepth) * Math.sin(angle)
        const x2 = cx + innerR * Math.cos(angle)
        const y2 = cy + innerR * Math.sin(angle)
        const colorIdx = Math.floor((i / slots) * 6) % 6
        const hue = (i / slots) * 300 + 0
        const intensity = 0.4 + 0.6 * Math.abs(Math.sin(i * Math.PI / 6))
        const r = Math.floor(intensity * 255 * (colorIdx < 2 ? 1 : colorIdx < 4 ? 0.3 : 0))
        const g = Math.floor(intensity * 255 * (colorIdx < 2 ? 0 : colorIdx < 4 ? 1 : 0.3))
        const b = Math.floor(intensity * 255 * (colorIdx < 2 ? 0 : colorIdx < 4 ? 0 : 1))

        return (
          <g key={i}>
            <line x1={x1} y1={y1} x2={x2} y2={y2}
              stroke={`rgb(${r},${g},${b})`}
              strokeWidth="5" strokeLinecap="round" opacity="0.85"/>
          </g>
        )
      })}

      {/* Inner core */}
      <circle cx={cx} cy={cy} r={innerR} fill="url(#coreGrad)" stroke="#1a3a6a" strokeWidth="1.5"/>

      {/* Rotor (deep blue) */}
      <circle cx={cx} cy={cy} r={innerR - 8} fill="#05122a"/>
      <circle cx={cx} cy={cy} r={innerR - 10} fill="#081e3a"/>

      {/* Flux density color bar */}
      <defs>
        <linearGradient id="fluxBar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ff0000"/>
          <stop offset="16%" stopColor="#ff8800"/>
          <stop offset="33%" stopColor="#ffff00"/>
          <stop offset="50%" stopColor="#00ff88"/>
          <stop offset="66%" stopColor="#0088ff"/>
          <stop offset="83%" stopColor="#4400ff"/>
          <stop offset="100%" stopColor="#220066"/>
        </linearGradient>
      </defs>
      <rect x="245" y="20" width="10" height="220" fill="url(#fluxBar)" rx="3"/>
      <text x="244" y="18" fontSize="7" fill="#aaa" textAnchor="end">1.60T</text>
      <text x="244" y="242" fontSize="7" fill="#aaa" textAnchor="end">0.00T</text>

      {/* Field lines */}
      {[...Array(8)].map((_,i) => {
        const a = (i/8)*Math.PI*2
        const r1 = innerR - 5
        const r2 = innerR - 18
        return (
          <path key={i}
            d={`M ${cx + r1*Math.cos(a)} ${cy + r1*Math.sin(a)} Q ${cx} ${cy} ${cx + r2*Math.cos(a+0.4)} ${cy + r2*Math.sin(a+0.4)}`}
            stroke="rgba(100,180,255,0.3)" strokeWidth="1" fill="none"/>
        )
      })}
    </svg>
  )
}
