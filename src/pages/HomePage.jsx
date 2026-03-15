import './HomePage.css'

export default function HomePage({ setActivePage }) {
  return (
    <div className="homepage">
      {/* HERO - Main content box */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">

            {/* Left: App mockup */}
            <div className="hero-left">
              <div className="app-badge">App: Statordata</div>
              <PhoneMockup />
            </div>

            {/* Center: Main */}
            <div className="hero-center">
              <div className="hero-software-tag">PHẦN MỀM THIẾT KẾ MÁY ĐIỆN.</div>
              <h1 className="hero-main-title">
                THIẾT KẾ – TÍNH TOÁN DỮ LIỆU<br/>
                DÂY QUẤN STATOR<br/>
                <span>ĐỘNG CƠ CẢM ỨNG.</span>
              </h1>
              <div className="hero-divider"/>
              <h2 className="hero-sub-title">PHẦN MỀM THIẾT KẾ TÍNH TOÁN DỮ LIỆU ĐỘNG CƠ CẢM ỨNG.</h2>
              <ul className="hero-list">
                {[
                  'Phần mềm Statordata.com tối ưu hoá, thiết kế tính toán dữ liệu dây quấn động cơ Cảm ứng.',
                  'Hỗ trợ kỹ thuật trong quá trình thiết kế và tính toán dữ liệu động cơ cảm ứng.',
                  'Thiết kế tính toán dữ liệu Stator hoặc Rotor dây quấn 1 lớp hay 2 lớp.',
                  'Tính toán số vòng và đường kính dây đồng tròn.',
                  'Tính toán dòng điện và công suất động cơ.',
                  'Ứng dụng cho động cơ không đồng bộ hoặc động cơ đồng bộ, loại stator hoặc rotor dây quấn, 1 pha và 3 pha.',
                ].map((t, i) => (
                  <li key={i}><span className="check-icon">✔</span>{t}</li>
                ))}
              </ul>
              <div className="hero-cta">
                <button className="btn-primary" onClick={() => setActivePage('3pha1td-sn-1lop')}>Bắt đầu học</button>
                <button className="btn-ghost" onClick={() => setActivePage('lien-he')}>Liên hệ</button>
              </div>
            </div>

            {/* Right: Stator diagram */}
            <div className="hero-right">
              <StatorDiagram />
              <p className="diagram-caption">Ngay đây video: Phân bố mật độ từ thông mạch từ stator.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-section">
        <div className="container">
          <h2 className="section-title">VÌ SAO CÁC KỸ SƯ LỰA CHỌN NỀN TẢNG STATORDATA.COM?</h2>
          <div className="why-grid">
            {[
              { icon: '🎯', text: 'Làm việc trực tiếp với thông số đầu vào stator do bạn cung cấp.' },
              { icon: '⚙️', text: 'Hỗ trợ tính toán dữ liệu, động cơ 1 pha, 3 pha 1 tốc độ, và 3 pha 2 tốc độ (đổi cực Dahlander).' },
              { icon: '📊', text: 'Phân tích thông số xây dựng sơ đồ khai triển dây quấn và kiểm tra mật độ từ thông chi tiết.' },
              { icon: '✅', text: 'Tính toán chuẩn hoá thông số định mức động cơ.' },
              { icon: '⏱️', text: 'Tiết kiệm đến 70% thời gian tính toán, giảm sai sót khi tính toán dữ liệu thủ công.' },
              { icon: '📤', text: 'Xuất dữ liệu sẵn sàng cho xưởng quấn dây.' },
            ].map((item, i) => (
              <div key={i} className="why-card">
                <span className="why-icon">{item.icon}</span>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAGNETIC CIRCUIT */}
      <section className="info-section">
        <div className="container">
          <div className="info-card clickable" onClick={() => setActivePage('ly-thuyet-mach-tu')}>
            <div className="info-card-content">
              <h3>LÝ THUYẾT MẠCH TỪ TRONG MÁY ĐIỆN.</h3>
              <p>Nắm bắt những hiểu biết giá trị về thiết kế và hoạt động của động cơ điện, thông qua phân tích chi tiết mạch từ. Khám phá các thông số kỹ thuật, Từ thông cực đại qua mỗi vị trí, Thông suất từ gông stator đến răng Stator đi qua khe hở không khí...và phân bố từ trường trên mỗi cực từ.</p>
              <span className="info-read-more">Xem chi tiết →</span>
            </div>
            <div className="info-card-visual magnetic">
              <MagneticCircuitViz />
            </div>
          </div>

          <div className="info-card clickable" onClick={() => setActivePage('thong-so-dinh-muc')}>
            <div className="info-card-visual motor">
              <MotorViz />
            </div>
            <div className="info-card-content">
              <h3>THÔNG SỐ ĐỊNH MỨC ĐỘNG CƠ ĐIỆN.</h3>
              <p>Nắm bắt những hiểu biết giá trị về vận hành và hoạt động của động cơ điện, thông qua Công suất hay dòng điện. Các thông số kỹ thuật, cấp cách điện, nhiệm vụ hoạt động S1 đến S8, Hệ số công suất (Power Factor).....vv</p>
              <span className="info-read-more">Xem chi tiết →</span>
            </div>
          </div>
        </div>
      </section>

      {/* HISTORY */}
      <section className="history-section">
        <div className="container">
          <h2 className="section-title">LỊCH SỬ HÌNH THÀNH CHÚNG TÔI</h2>
          <div className="history-timeline">
            <div className="timeline-item">
              <div className="timeline-year">1888</div>
              <div className="timeline-content">
                <p>Động cơ cảm ứng xoay chiều được phát minh bởi <strong>Nikola Tesla</strong>, từ cuối thế kỷ XIX.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">1986</div>
              <div className="timeline-content">
                <p>Chương trình thiết kế và tính toán động cơ cảm ứng được biên soạn bởi <strong>Kỹ sư Nguyễn Thế Kiệt</strong> — Giảng viên Trường Đại học Bách Khoa Thành phố Hồ Chí Minh. Nền tảng tính toán được ứng dụng rộng rãi trong đào tạo và thực tiễn sản xuất.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">Nay</div>
              <div className="timeline-content">
                <p>Website DATA STATOR được xây dựng dựa trên nền tảng lý thuyết và kinh nghiệm thực tiễn đó, do <strong>Kỹ sư Võ Nguyên Bá Liêu</strong> — Khoa cơ Điện, Trường Đại Học Lạc Hồng — nhằm hỗ trợ kỹ sư và sinh viên trong việc tính toán, thiết kế và phân tích dữ liệu động cơ một cách chính xác, nhanh chóng và chuyên nghiệp.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

/* Phone mockup */
function PhoneMockup() {
  return (
    <div className="phone-wrap">
      <div className="phone">
        <div className="phone-notch"/>
        <div className="phone-body">
          <div className="phone-topbar-row">
            <span className="p-time">12:21</span>
            <span className="p-bank">VCB Digibank</span>
            <span className="p-signal">●●●</span>
          </div>
          <div className="phone-header-row">
            <div className="p-vcb">VCB<br/><small>Digibank</small></div>
            <span className="p-flag">🇬🇧 ENG</span>
          </div>
          <div className="phone-skyline">
            {[60,90,75,110,85,70].map((h, i) => (
              <div key={i} className="p-building" style={{ height: h + 'px', animationDelay: i * 0.1 + 's' }}/>
            ))}
          </div>
          <div className="phone-form-area">
            <div className="p-greeting">👋 Xin chào: VÕ NGUYỄN BA LIÊU</div>
            <div className="p-input">🔒 Mật khẩu</div>
            <div className="p-btn-green">Đăng nhập</div>
            <div className="p-forgot">Quên mật khẩu?</div>
          </div>
          <div className="phone-footer-icons">
            {['🏧','🎁','📖','🔑','🆘'].map((ic, i) => (
              <div key={i} className="p-footer-icon">{ic}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* Stator SVG */
function StatorDiagram() {
  const slots = 36; const cx = 130, cy = 130
  const outerR = 112, innerR = 66
  return (
    <div className="stator-wrap">
      <svg viewBox="0 0 260 260" xmlns="http://www.w3.org/2000/svg" className="stator-svg">
        <defs>
          <radialGradient id="bg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#001a40"/><stop offset="100%" stopColor="#000820"/>
          </radialGradient>
          <linearGradient id="flux" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ff0000"/>
            <stop offset="25%" stopColor="#ffaa00"/>
            <stop offset="50%" stopColor="#00ff88"/>
            <stop offset="75%" stopColor="#0088ff"/>
            <stop offset="100%" stopColor="#220066"/>
          </linearGradient>
        </defs>
        <circle cx={cx} cy={cy} r="128" fill="url(#bg)"/>
        <circle cx={cx} cy={cy} r={outerR} fill="#1a2a4a" stroke="#2a4a8a" strokeWidth="1.5"/>
        {[...Array(slots)].map((_, i) => {
          const a = (i / slots) * 2 * Math.PI - Math.PI / 2
          const phaseColors = ['#ff4444','#ff4444','#ff4444','#ff4444','#ff4444','#ff4444',
                               '#44aaff','#44aaff','#44aaff','#44aaff','#44aaff','#44aaff',
                               '#ff9900','#ff9900','#ff9900','#ff9900','#ff9900','#ff9900']
          const color = phaseColors[i % 18]
          return (
            <line key={i}
              x1={cx+(innerR+28)*Math.cos(a)} y1={cy+(innerR+28)*Math.sin(a)}
              x2={cx+innerR*Math.cos(a)} y2={cy+innerR*Math.sin(a)}
              stroke={color} strokeWidth="5" strokeLinecap="round" opacity="0.88"/>
          )
        })}
        <circle cx={cx} cy={cy} r={innerR} fill="#061528" stroke="#1a3a6a" strokeWidth="1.5"/>
        <circle cx={cx} cy={cy} r={innerR-8} fill="#040f1e"/>
        <rect x="247" y="18" width="10" height="224" fill="url(#flux)" rx="3"/>
        <text x="245" y="16" fontSize="7" fill="#aaa" textAnchor="end">1.60T</text>
        <text x="245" y="248" fontSize="7" fill="#aaa" textAnchor="end">0.00T</text>
      </svg>
    </div>
  )
}

/* Magnetic circuit visualization */
function MagneticCircuitViz() {
  return (
    <svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" style={{width:'100%', maxWidth:200}}>
      <defs>
        <linearGradient id="mcg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0057b8"/><stop offset="100%" stopColor="#1e90ff"/>
        </linearGradient>
      </defs>
      <rect x="10" y="10" width="180" height="140" rx="10" fill="var(--blue-50)" stroke="var(--blue-200)" strokeWidth="1"/>
      {[20,60,100,140].map((y, i) => (
        <path key={i} d={`M 30 ${y} Q 100 ${y - 20} 170 ${y}`}
          stroke="url(#mcg)" strokeWidth="2.5" fill="none" opacity={0.4 + i * 0.15}/>
      ))}
      <circle cx="100" cy="80" r="35" fill="none" stroke="var(--blue-700)" strokeWidth="3"/>
      <circle cx="100" cy="80" r="20" fill="var(--blue-50)" stroke="var(--blue-500)" strokeWidth="2"/>
      <circle cx="100" cy="80" r="8" fill="var(--blue-700)"/>
      <text x="100" y="148" textAnchor="middle" fontSize="10" fill="var(--blue-700)" fontWeight="700">Mạch từ Stator</text>
    </svg>
  )
}

function MotorViz() {
  return (
    <svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" style={{width:'100%', maxWidth:200}}>
      <rect x="10" y="10" width="180" height="140" rx="10" fill="#fff8e1" stroke="#f59e0b" strokeWidth="1"/>
      <rect x="40" y="30" width="120" height="80" rx="8" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2"/>
      <circle cx="100" cy="70" r="28" fill="none" stroke="#f59e0b" strokeWidth="3"/>
      <circle cx="100" cy="70" r="14" fill="#fbbf24"/>
      <circle cx="100" cy="70" r="5" fill="#fff"/>
      <text x="100" y="130" textAnchor="middle" fontSize="10" fill="#92400e" fontWeight="700">Động cơ Điện</text>
      {[0,60,120,180,240,300].map((d, i) => (
        <line key={i}
          x1={100+28*Math.cos(d*Math.PI/180)} y1={70+28*Math.sin(d*Math.PI/180)}
          x2={100+38*Math.cos(d*Math.PI/180)} y2={70+38*Math.sin(d*Math.PI/180)}
          stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round"/>
      ))}
    </svg>
  )
}
