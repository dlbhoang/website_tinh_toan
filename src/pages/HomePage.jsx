import './HomePage.css'

export default function HomePage({ setActivePage }) {
  return (
    <div className="home">

      {/* ── HERO BOX ── */}
      <section className="hero-box">
        <div className="container">
          <div className="hero-grid">

            {/* Left phone */}
            <div className="hero-left">
              <div className="app-tag">App:<br/>Statordata</div>
              <PhoneMockup />
            </div>

            {/* Center */}
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

            {/* Right stator diagram */}
            <div className="hero-right">
              <StatorDiagram />
              <p className="stator-cap">Ngay đây video: Phân bố mật độ từ thông mạch từ stator.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MACH TU & THONG SO: 2 columns ── */}
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
              <p className="threed-label">Trong này có những hình ảnh 3D, chạy trong này.<br/><span>(ảnh này gửi qua sau)</span></p>
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
              <NikolaTeslaViz />
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

function StatorDiagram() {
  const n=36, cx=130, cy=130, oR=112, iR=66
  return (
    <svg viewBox="0 0 260 260" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',maxWidth:260,borderRadius:12,boxShadow:'0 4px 24px rgba(0,60,140,.2)'}}>
      <defs>
        <radialGradient id="sbg" cx="50%" cy="50%"><stop offset="0%" stopColor="#001840"/><stop offset="100%" stopColor="#000818"/></radialGradient>
        <linearGradient id="sflux" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ff2200"/><stop offset="25%" stopColor="#ff9900"/>
          <stop offset="50%" stopColor="#00ff88"/><stop offset="75%" stopColor="#0088ff"/>
          <stop offset="100%" stopColor="#330099"/>
        </linearGradient>
      </defs>
      <circle cx={cx} cy={cy} r="128" fill="url(#sbg)"/>
      <circle cx={cx} cy={cy} r={oR} fill="#1a2a48" stroke="#2a4a88" strokeWidth="1.5"/>
      {[...Array(n)].map((_,i)=>{
        const a=(i/n)*2*Math.PI-Math.PI/2
        const cols=['#ff4444','#4488ff','#ff9900']
        const c=cols[Math.floor(i/12)%3]
        return <line key={i} x1={cx+(iR+28)*Math.cos(a)} y1={cy+(iR+28)*Math.sin(a)} x2={cx+iR*Math.cos(a)} y2={cy+iR*Math.sin(a)} stroke={c} strokeWidth="5" strokeLinecap="round" opacity=".87"/>
      })}
      <circle cx={cx} cy={cy} r={iR} fill="#050f20" stroke="#1a3a60" strokeWidth="1.5"/>
      <circle cx={cx} cy={cy} r={iR-8} fill="#030c18"/>
      <rect x="247" y="18" width="10" height="224" fill="url(#sflux)" rx="3"/>
      <text x="245" y="16" fontSize="7" fill="#aaa" textAnchor="end">1.60T</text>
      <text x="245" y="248" fontSize="7" fill="#aaa" textAnchor="end">0.00T</text>
    </svg>
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
  const slots=24, cx=90, cy=90, oR=78, iR=46
  return (
    <svg viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg" style={{width:180,height:180}}>
      <defs>
        <radialGradient id="t3bg"><stop offset="0%" stopColor="#001020"/><stop offset="100%" stopColor="#000"/>
        </radialGradient>
      </defs>
      <circle cx={cx} cy={cy} r={oR+8} fill="url(#t3bg)"/>
      <circle cx={cx} cy={cy} r={oR} fill="#111d30" stroke="var(--b7)" strokeWidth="2"/>
      {[...Array(slots)].map((_,i)=>{
        const a=(i/slots)*Math.PI*2; const hue=i*(360/slots)
        return <line key={i} x1={cx+(iR+24)*Math.cos(a)} y1={cy+(iR+24)*Math.sin(a)} x2={cx+iR*Math.cos(a)} y2={cy+iR*Math.sin(a)} stroke={`hsl(${hue},80%,60%)`} strokeWidth="5" strokeLinecap="round" opacity=".85"/>
      })}
      <circle cx={cx} cy={cy} r={iR} fill="#040d1a" stroke="var(--b8)" strokeWidth="1.5"/>
      <circle cx={cx} cy={cy} r={iR-6} fill="#020810"/>
      {[...Array(6)].map((_,i)=>{
        const a=i/6*Math.PI*2
        return <circle key={i} cx={cx+(iR-14)*Math.cos(a)} cy={cy+(iR-14)*Math.sin(a)} r="5" fill="var(--b6)" opacity=".7"/>
      })}
      <circle cx={cx} cy={cy} r="8" fill="var(--b5)"/>
    </svg>
  )
}

function NikolaTeslaViz() {
  return (
    <div style={{width:130,background:'var(--g100)',border:'2px solid var(--g300)',borderRadius:'var(--r-md)',overflow:'hidden',flexShrink:0}}>
      <svg viewBox="0 0 130 170" xmlns="http://www.w3.org/2000/svg">
        <rect width="130" height="170" fill="#d4c8b8"/>
        <ellipse cx="65" cy="60" rx="28" ry="34" fill="#c8a882"/>
        <rect x="30" y="88" width="70" height="82" rx="4" fill="#1a1a2e"/>
        <rect x="25" y="85" width="80" height="12" rx="3" fill="#2a2a3e"/>
        <ellipse cx="55" cy="65" rx="5" ry="4" fill="#8b6f47"/>
        <ellipse cx="75" cy="65" rx="5" ry="4" fill="#8b6f47"/>
        <path d="M 55 78 Q 65 84 75 78" stroke="#8b6f47" strokeWidth="2" fill="none"/>
        <rect x="35" y="95" width="25" height="55" rx="2" fill="#2a2a3e"/>
        <rect x="70" y="95" width="25" height="55" rx="2" fill="#2a2a3e"/>
        <text x="65" y="162" textAnchor="middle" fontSize="9" fill="var(--g600)" fontStyle="italic">Nikola Tesla</text>
      </svg>
    </div>
  )
}
