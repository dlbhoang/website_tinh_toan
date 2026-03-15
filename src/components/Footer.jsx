import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <div className="footer-brand">
          <div className="footer-logo">
            <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
              <circle cx="25" cy="25" r="23" stroke="rgba(255,255,255,0.5)" strokeWidth="2" fill="rgba(255,255,255,0.08)"/>
              <circle cx="25" cy="25" r="14" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none"/>
              {[0,45,90,135,180,225,270,315].map((deg,i) => (
                <line key={i}
                  x1={25 + 16*Math.cos(deg*Math.PI/180)} y1={25 + 16*Math.sin(deg*Math.PI/180)}
                  x2={25 + 23*Math.cos(deg*Math.PI/180)} y2={25 + 23*Math.sin(deg*Math.PI/180)}
                  stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinecap="round"/>
              ))}
              <circle cx="25" cy="25" r="4" fill="white" opacity="0.8"/>
            </svg>
          </div>
          <div>
            <div className="footer-site-name">Statordata.com</div>
            <div className="footer-tagline">Phần mềm thiết kế máy điện chuyên nghiệp</div>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>Kỹ thuật</h4>
            <ul>
              <li><a href="#">Ký hiệu dây quấn</a></li>
              <li><a href="#">Truyền động điện</a></li>
              <li><a href="#">Sơ đồ liên kết</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Học tập</h4>
            <ul>
              <li><a href="#">3 pha 1 tốc độ</a></li>
              <li><a href="#">3 pha 2 tốc độ</a></li>
              <li><a href="#">1 pha</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Hỗ trợ</h4>
            <ul>
              <li><a href="#">Liên hệ</a></li>
              <li><a href="#">Điều khoản dịch vụ</a></li>
              <li><a href="#">Cộng đồng</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-social">
          <h4>Kết nối</h4>
          <div className="social-icons">
            <a href="#" className="social-icon">in</a>
            <a href="#" className="social-icon yt">▶</a>
          </div>
          <p className="footer-contact">Cộng đồng Statordata.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          © 2024 Statordata.com — Phần mềm thiết kế tính toán dữ liệu dây quấn động cơ cảm ứng.
        </div>
      </div>
    </footer>
  )
}
