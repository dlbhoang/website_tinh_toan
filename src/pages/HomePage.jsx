import { useState, useEffect, useRef } from 'react'
import './HomePage.css'
import statorImg from '../assets/stator.png'
import heroImg   from '../assets/hero.png'
import teslaImg  from '../assets/telsa.png'
import qcImg     from '../assets/qc.png'

export default function HomePage({ setActivePage }) {
  const [showAd, setShowAd] = useState(true)

  return (
    <div className="home">

      {/* ── POPUP QUẢNG CÁO ── */}
      {showAd && (
        <div className="ad-overlay" onClick={() => setShowAd(false)}>
          <div className="ad-modal" onClick={e => e.stopPropagation()}>
            <button className="ad-close" onClick={() => setShowAd(false)}>✕</button>
            <img src={qcImg} alt="Quảng cáo Statordata" className="ad-img" />
            <div className="ad-actions">
              <button className="ad-btn-primary" onClick={() => setShowAd(false)}>
                Khám phá ngay →
              </button>
              <button className="ad-btn-secondary" onClick={() => setShowAd(false)}>
                Bỏ qua
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── HERO BOX ── */}
      <section className="hero-box">
        <div className="container">
          <div className="hero-grid">

            <div className="hero-left">
              <div className="app-tag">App:<br/>Statordata</div>
              <PhoneMockup />
            </div>

            <div className="hero-center">
              <p className="hc-badge">PHẦN MỀM THIẾT KẾ MÁY ĐIỆN.</p>
              <h1 className="hc-title">
                THIẾT KẾ – TÍNH TOÁN DỮ LIỆU DÂY QUẤN STATOR<br/>
                <span>ĐỘNG CƠ CẢM ỨNG.</span>
              </h1>
              <div className="hc-divider"/>
              <h2 className="hc-subtitle">PHẦN MỀM THIẾT KẾ TÍNH TOÁN DỮ LIỆU ĐỘNG CƠ CẢM ỨNG.</h2>
              <ul className="hc-list">
                {[
                  'Phần mềm Statordata.com tối ưu hoá, thiết kế tính toán dữ liệu dây quấn động cơ Cảm ứng.',
                  'Hỗ trợ kỹ thuật trong quá trình thiết kế và tính toán dữ liệu động cơ cảm ứng.',
                  'Thiết kế tính toán dữ liệu Stator hoặc Rotor dây quấn 1 lớp hay 2 lớp.',
                  'Tính toán số vòng và đường kính dây đồng tròn.',
                  'Tính toán dòng điện và công suất động cơ.',
                  'Ứng dụng cho động cơ không đồng bộ hoặc động cơ đồng bộ, loại stator hoặc rotor dây quấn, 1 pha và 3 pha.',
                ].map((t,i)=>(
                  <li key={i}><span className="ck">✔</span>{t}</li>
                ))}
              </ul>
            </div>

            {/* Right: VIDEO / Placeholder */}
            <div className="hero-right">
              <StatorVideoPlaceholder />
              <p className="stator-cap">Video: Phân bố mật độ từ thông mạch từ stator.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MACH TU & THONG SO ── */}
      <section className="mt-section">
        <div className="container">
          <h2 className="mt-title">MẠCH TỪ VÀ THÔNG SỐ VẬN HÀNH TRONG MÁY ĐIỆN.</h2>
          <div className="mt-grid">
            <div className="mt-card clickable" onClick={()=>setActivePage('ly-thuyet-mach-tu')}>
              <div className="mt-card-img">
                <MagneticViz label="Ảnh: mật độ từ thông trong Stator"/>
              </div>
              <div className="mt-card-body">
                <h3>LÝ THUYẾT MẠCH TỪ TRONG MÁY ĐIỆN.</h3>
                <p>Nắm bắt những hiểu biết giá trị về thiết kế và hoạt động của động cơ điện, thông qua phân tích chi tiết mạch từ. Khám phá các thông số kỹ thuật, Từ thông cực đại qua mỗi vị trí, Thông suất từ gông stator đến răng Stator đi qua khe hở không khí...và phân bố từ trường trên mỗi cực từ.</p>
                <span className="mt-more">Xem chi tiết →</span>
              </div>
            </div>
            <div className="mt-card clickable" onClick={()=>setActivePage('thong-so-dinh-muc')}>
              <div className="mt-card-body">
                <h3>THÔNG SỐ ĐỊNH MỨC ĐỘNG CƠ ĐIỆN.</h3>
                <p>Nắm bắt những hiểu biết giá trị về vận hành và hoạt động của động cơ điện, thông qua Công suất hay dòng điện. Các thông số kỹ thuật, cấp cách điện, nhiệm vụ hoạt động S1 đến S8, Hệ số công suất (Power Factor)....</p>
                <span className="mt-more">Xem chi tiết →</span>
              </div>
              <div className="mt-card-img">
                <MagneticViz label="Ảnh: mật độ từ thông trong Stator" amber/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ── */}
      <section className="why-section">
        <div className="container">
          <h2 className="why-title">VÌ SAO CÁC KỸ SƯ LỰA CHỌN NỀN TẢNG STATORDAT.COM ?</h2>
          <div className="why-layout">
            <div className="why-left">
              <h3>Làm việc dựa trên phần mềm Statordata.com</h3>
              <ul className="why-list">
                {[
                  'Làm việc trực tiếp với thông số đầu vào stator do bạn cung cấp.',
                  'Hỗ trợ tính toán dữ liệu, động cơ 1 pha, 3 pha 1 tốc độ, và 3 pha 2 tốc độ (đổi cực Dahlander).',
                  'Phân tích thông số xây dựng sơ đồ khai triển dây quấn và kiểm tra mật độ từ thông chi tiết.',
                  'Tính toán chuẩn hoá thông số định mức động cơ.',
                  'Tiết kiệm đến 70% thời gian tính toán, giảm sai sót khi tính toán dữ liệu thủ công.',
                  'Xuất dữ liệu sẵn sàng cho xưởng quấn dây.',
                ].map((t,i)=>(
                  <li key={i}><span className="why-arrow">→</span>{t}</li>
                ))}
              </ul>
            </div>
            <div className="why-center">
              <EfficiencyChart />
              <p className="why-chart-note">1 tấm ảnh tính mẫu ví dụ tính toán dữ liệu 3 pha 2 lớp</p>
            </div>
            <div className="why-right">
              <p>Statordata.com là nền tảng kỹ thuật chuyên sâu dành cho kỹ sư thiết kế và sửa chữa động cơ cảm ứng. Thông số đầu vào, Điện áp pha, tần số, Số rãnh, số cực, mạch nhánh song song. Thông số kích thước. Thông số đầu vào từ cảm cực đại và gông và rãnh stator.</p>
              <p style={{marginTop:'10px'}}>Thông số đầu vào mật độ dòng điện, hệ số công suất, hiệu suất. Các thông số định mức của động cơ cơ như công suất, dòng điện định mức, cũng được tính toán, đảm bảo sự tương thích giữa thiết kế điện từ và đặc tính từ hoạt mạch từ.</p>
              <p style={{marginTop:'10px'}}>Statordata.com không chỉ là công cụ tính toán dữ liệu động cơ cảm ứng, mà là một hệ thống hỗ trợ toàn diện nguồn tài nguyên học tập - mà còn giúp bạn hiểu sâu về bản chất thiết kế kỹ máy điện.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3D SECTION ── */}
      <section className="threed-section">
        <div className="container">
          <div className="threed-box">
            <div className="threed-inner">
              <Threed3D />
            </div>
          </div>
        </div>
      </section>

      {/* ── HISTORY + CONTACT ── */}
      <section className="history-section">
        <div className="container">
          <div className="history-box">
            <div className="history-content">
              <h3>LỊCH SỬ HÌNH THÀNH CHÚNG TÔI:</h3>
              <p>Động cơ cảm ứng xoay chiều được phát minh năm 1888 bởi Nikola Tesla. Từ cuối thế kỷ XIX.</p>
              <p>Tại Việt Nam, ngành động cơ điện bắt đầu được tiếp nhận từ năm 1958. Trải qua các giai đoạn lắp ráp, sửa chữa và cải tiến, đến sau năm 1975, Việt Nam từng bước làm chủ công nghệ, tự thiết kế và nội địa hóa sản xuất động cơ không đồng bộ.</p>
              <p>Chương trình thiết kế và tính toán động cơ cảm ứng được biên soạn bởi <strong>Kỹ sư Nguyễn Thế Kiệt</strong> – Giảng viên Trường Đại học Bách Khoa Thành phố Hồ Chí Minh. Nền tảng tính toán 1986 đã được ứng dụng rộng rãi trong đào tạo và thực tiễn sản xuất, và tiếp tục được kế thừa, phát triển cho đến ngày nay.</p>
              <p>Website <strong>DATA STATOR</strong> được xây dựng dựa trên nền tảng lý thuyết và kinh nghiệm thực tiễn đó, do <strong>Kỹ sư Võ Nguyên Bá Liêu</strong> – Khoa cơ Điện, Trường Đại Học Lạc Hồng, nhằm hỗ trợ kỹ sư và sinh viên trong việc tính toán, thiết kế và phân tích dữ liệu động cơ một cách chính xác, nhanh chóng và chuyên nghiệp.</p>
            </div>
            <div className="history-photo">
              <img src={teslaImg} alt="Nikola Tesla" className="tesla-img"/>
              <p className="tesla-name">Nikola Tesla: 1856 - 1943</p>
            </div>
          </div>
          <div className="contact-strip">
            <div className="cs-item">
              <span className="cs-icon">📍</span>
              <span><strong>Địa chỉ:</strong> Số nhà 319 - Đường DT 9 - Thôn 1, Tân tiến, Đăk Lak</span>
            </div>
            <div className="cs-item">
              <span className="cs-icon">📞</span>
              <span><strong>Điện Thoại:</strong> 0366332181</span>
            </div>
            <div className="cs-item">
              <span className="cs-icon">✉️</span>
              <span><strong>Gmail:</strong> <a href="mailto:Statordata@gmail.com" style={{color:'var(--b5)'}}>Statordata@gmail.com</a></span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ────────────────────────────────────────
   STATOR VIDEO PLACEHOLDER
   Animated canvas — mô phỏng từ thông quay
   Khi có video thật:
     1. Bỏ comment: import videoSrc from '../assets/stator.mp4'
     2. Thay <StatorVideoPlaceholder /> bằng:
        <video src={videoSrc} autoPlay loop muted playsInline
               style={{width:'100%',maxWidth:260,borderRadius:12,
                       boxShadow:'0 4px 24px rgba(0,60,140,.2)'}} />
──────────────────────────────────────── */
function StatorVideoPlaceholder() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const W = canvas.width = 260
    const H = canvas.height = 260
    const cx = W / 2, cy = H / 2
    const oR = 112, iR = 66
    const slots = 36
    let angle = 0
    let raf

    // Flux colour scale: 0→1 mapped to blue→green→yellow→red
    function fluxColor(t) {
      // t: 0..1
      if (t < 0.25) {
        const f = t / 0.25
        return `rgb(${Math.round(f*0)},${Math.round(f*136)},${Math.round(255-f*119)})`
      } else if (t < 0.5) {
        const f = (t - 0.25) / 0.25
        return `rgb(${Math.round(f*0)},${Math.round(136+f*119)},${Math.round(136-f*136)})`
      } else if (t < 0.75) {
        const f = (t - 0.5) / 0.25
        return `rgb(${Math.round(f*255)},${Math.round(255-f*106)},0)`
      } else {
        const f = (t - 0.75) / 0.25
        return `rgb(255,${Math.round(149-f*149)},0)`
      }
    }

    function draw() {
      // Background
      ctx.fillStyle = '#000d1e'
      ctx.fillRect(0, 0, W, H)

      // Outer ring
      ctx.beginPath()
      ctx.arc(cx, cy, oR, 0, Math.PI * 2)
      ctx.fillStyle = '#0f1f3a'
      ctx.fill()
      ctx.strokeStyle = '#1e3a70'
      ctx.lineWidth = 1.5
      ctx.stroke()

      // Rotating flux field — colour each slot by sinusoidal B value
      for (let i = 0; i < slots; i++) {
        const a = (i / slots) * Math.PI * 2 - Math.PI / 2
        // 3-phase flux: each slot belongs to one of 3 phases
        const phaseOffset = (i / slots) * Math.PI * 6  // 3 pairs of poles
        const B = (Math.sin(phaseOffset - angle * 3) + 1) / 2   // 0..1
        const color = fluxColor(B)

        const x1 = cx + (iR + 4) * Math.cos(a)
        const y1 = cy + (iR + 4) * Math.sin(a)
        const x2 = cx + (oR - 4) * Math.cos(a)
        const y2 = cy + (oR - 4) * Math.sin(a)

        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.strokeStyle = color
        ctx.lineWidth = 5
        ctx.lineCap = 'round'
        ctx.globalAlpha = 0.9
        ctx.stroke()
        ctx.globalAlpha = 1
      }

      // Inner bore (rotor space)
      ctx.beginPath()
      ctx.arc(cx, cy, iR, 0, Math.PI * 2)
      ctx.fillStyle = '#030c1a'
      ctx.fill()
      ctx.strokeStyle = '#0d2a50'
      ctx.lineWidth = 1.5
      ctx.stroke()

      // Rotating flux arrow inside bore
      const ax = cx + (iR - 14) * Math.cos(angle)
      const ay = cy + (iR - 14) * Math.sin(angle)
      ctx.beginPath()
      ctx.moveTo(cx, cy)
      ctx.lineTo(ax, ay)
      ctx.strokeStyle = '#ffffff'
      ctx.lineWidth = 2
      ctx.globalAlpha = 0.6
      ctx.stroke()
      ctx.globalAlpha = 1

      // Centre dot
      ctx.beginPath()
      ctx.arc(cx, cy, 4, 0, Math.PI * 2)
      ctx.fillStyle = '#3b82f6'
      ctx.fill()

      // Colour scale bar (right side)
      const barX = 248, barY = 18, barH = 224
      const grad = ctx.createLinearGradient(0, barY, 0, barY + barH)
      grad.addColorStop(0,    '#ff2200')
      grad.addColorStop(0.33, '#ff9900')
      grad.addColorStop(0.66, '#00ff88')
      grad.addColorStop(1,    '#0088ff')
      ctx.fillStyle = grad
      ctx.beginPath()
      ctx.roundRect(barX, barY, 8, barH, 3)
      ctx.fill()

      // Scale labels
      ctx.fillStyle = '#aaaaaa'
      ctx.font = '9px monospace'
      ctx.textAlign = 'right'
      ctx.fillText('1.60T', barX - 2, barY + 5)
      ctx.fillText('0.00T', barX - 2, barY + barH + 4)

      // Label
      ctx.fillStyle = '#4a90d9'
      ctx.font = 'bold 9px monospace'
      ctx.textAlign = 'center'
      ctx.fillText('PHÂN BỐ MẬT ĐỘ TỪ THÔNG', cx - 10, H - 8)

      angle += 0.022
      raf = requestAnimationFrame(draw)
    }

    draw()
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div className="video-placeholder-wrap">
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          maxWidth: 260,
          borderRadius: 12,
          boxShadow: '0 4px 24px rgba(0,60,140,.25)',
          display: 'block',
        }}
      />
      <div className="video-ph-badge">▶ Simulation</div>
    </div>
  )
}

/* ── Sub-components ── */

function PhoneMockup() {
  return (
    <div className="phone">
      <div className="phone-notch"/>
      <div className="phone-screen">
        <div className="p-statusbar"><span>12:21</span><span>VCB Digibank</span><span>▐▐▐</span></div>
        <div className="p-bankrow"><div className="p-vcb">VCB<br/><small>Digibank</small></div><span className="p-lang">🇬🇧 ENG</span></div>
        <div className="p-skyline">
          {[55,80,70,110,75,60,90].map((h,i)=>(
            <div key={i} className="p-bld" style={{height:h,animationDelay:i*.08+'s'}}/>
          ))}
        </div>
        <div className="p-form">
          <div className="p-greet">👋 Xin chào: VÕ NGUYỄN BA LIÊU</div>
          <div className="p-input">🔒 Mật khẩu</div>
          <div className="p-btn-g">Đăng nhập</div>
          <div className="p-forgot">Quên mật khẩu?</div>
        </div>
        <div className="p-footer">{['🏧','🎁','📖','🔑','🆘'].map((ic,i)=><span key={i}>{ic}</span>)}</div>
      </div>
    </div>
  )
}

function MagneticViz({ label, amber }) {
  const c = amber ? '#d97706' : '#0057b8'
  const bg = amber ? '#fff8e1' : 'var(--b0)'
  return (
    <div style={{background:bg,borderRadius:'var(--r-md)',padding:'14px',display:'flex',flexDirection:'column',alignItems:'center',gap:8}}>
      <svg viewBox="0 0 160 130" style={{width:160}}>
        <defs>
          <radialGradient id={`mg${amber?'a':'b'}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={amber?'#fbbf24':'#60a8ff'} stopOpacity=".6"/>
            <stop offset="100%" stopColor={amber?'#d97706':'#0057b8'} stopOpacity=".1"/>
          </radialGradient>
        </defs>
        <ellipse cx="80" cy="65" rx="70" ry="55" fill={`url(#mg${amber?'a':'b'})`} stroke={c} strokeWidth="1.5"/>
        {[18,30,42,54].map((r,i)=>(
          <ellipse key={i} cx="80" cy="65" rx={70-r} ry={55-r*0.8} fill="none" stroke={c} strokeWidth="1" opacity={.3+i*.12}/>
        ))}
        <circle cx="80" cy="65" r="14" fill={c} opacity=".85"/>
        <circle cx="80" cy="65" r="6" fill="#fff"/>
      </svg>
      <p style={{fontSize:10.5,fontWeight:700,color:c,textAlign:'center'}}>{label}</p>
    </div>
  )
}

function EfficiencyChart() {
  const pts = [[10,72],[15,78],[20,82],[30,85],[40,87],[60,88],[80,87],[100,85]]
  const w=220,h=150,px=28,py=20
  const xScale = v => px + (v/110)*(w-px-10)
  const yScale = v => h-py-(v-60)/(95-60)*(h-py-10)
  const path = pts.map((p,i)=>`${i===0?'M':'L'}${xScale(p[0])},${yScale(p[1])}`).join(' ')
  return (
    <div style={{background:'var(--white)',border:'1.5px solid var(--g200)',borderRadius:'var(--r-md)',padding:10}}>
      <svg viewBox={`0 0 ${w} ${h}`} style={{width:'100%'}}>
        <text x={w/2} y={12} textAnchor="middle" fontSize="9" fill="var(--b7)" fontWeight="700">Efficiency of Induction Motor</text>
        {[70,75,80,85,90].map(v=>(
          <g key={v}>
            <line x1={px} y1={yScale(v)} x2={w-10} y2={yScale(v)} stroke="var(--g200)" strokeWidth=".8"/>
            <text x={px-3} y={yScale(v)+3} textAnchor="end" fontSize="7" fill="var(--g400)">{v}</text>
          </g>
        ))}
        {[10,20,40,60,100].map(v=>(
          <g key={v}>
            <line x1={xScale(v)} y1={py} x2={xScale(v)} y2={h-py} stroke="var(--g200)" strokeWidth=".8"/>
            <text x={xScale(v)} y={h-py+10} textAnchor="middle" fontSize="7" fill="var(--g400)">{v}</text>
          </g>
        ))}
        <path d={path} fill="none" stroke="var(--b6)" strokeWidth="2" strokeLinejoin="round"/>
        <path d={path+` L${xScale(pts[pts.length-1][0])},${h-py} L${xScale(pts[0][0])},${h-py} Z`} fill="var(--b5)" opacity=".1"/>
        {pts.map((p,i)=><circle key={i} cx={xScale(p[0])} cy={yScale(p[1])} r="2.5" fill="var(--b7)"/>)}
        <text x={w/2} y={h-2} textAnchor="middle" fontSize="8" fill="var(--g600)">P (kW)</text>
        <text x={8} y={h/2} textAnchor="middle" fontSize="8" fill="var(--g600)" transform={`rotate(-90,8,${h/2})`}>η (%)</text>
      </svg>
    </div>
  )
}

function Threed3D() {
  const images = [
    { src: statorImg, caption: 'Mô hình 3D kết cấu Stator' },
    { src: heroImg,   caption: 'Phân bố từ thông mạch từ Stator' },
  ]
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [paused, images.length])

  const prev = () => setCurrent(p => (p - 1 + images.length) % images.length)
  const next = () => setCurrent(p => (p + 1) % images.length)

  return (
    <div className="threed-slideshow" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="slideshow-track">
        {images.map((img, i) => (
          <div key={i} className={`slide ${i === current ? 'slide-active' : ''}`}>
            <img src={img.src} alt={img.caption} onError={e => { e.target.style.display = 'none' }}/>
          </div>
        ))}
      </div>
      <button className="slide-btn slide-btn-prev" onClick={prev}>‹</button>
      <button className="slide-btn slide-btn-next" onClick={next}>›</button>
      <p className="slide-caption">{images[current].caption}</p>
      <div className="slide-dots">
        {images.map((_, i) => (
          <button key={i} className={`slide-dot ${i === current ? 'dot-active' : ''}`} onClick={() => setCurrent(i)}/>
        ))}
      </div>
      <div className="slide-progress">
        <div key={current} className={`slide-progress-bar ${!paused ? 'slide-progress-running' : ''}`} style={{ animationDuration: '3.5s' }}/>
      </div>
    </div>
  )
}