import './Footer.css'

export default function Footer({ setActivePage }) {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <div className="footer-brand">
          <div className="footer-logo-text">Statordata.com</div>
          <p>Phần mềm thiết kế tính toán dữ liệu dây quấn động cơ cảm ứng chuyên nghiệp.</p>
          <div className="footer-social">
            <a href="https://linkedin.com" target="_blank" className="f-social-btn">in</a>
            <a href="#" className="f-social-btn yt">▶</a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Trung tâm học tập</h4>
          <ul>
            {[
              ['3 pha, 1 Tốc độ', '3pha1td-sn-1lop'],
              ['3 pha, 2 Tốc độ', '3pha2td-kyhieu'],
              ['1 pha', '1pha-ly-thuyet'],
            ].map(([label, page]) => (
              <li key={page}><button onClick={() => setActivePage(page)}>{label}</button></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Tính toán dữ liệu</h4>
          <ul>
            {[
              ['3 pha 1 lớp', 'tt-3pha-sn-1lop'],
              ['3 pha 2 lớp', 'tt-3pha-sn-2lop'],
              ['1 pha', 'tt-1pha-sin'],
            ].map(([label, page]) => (
              <li key={page}><button onClick={() => setActivePage(page)}>{label}</button></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Hỗ trợ</h4>
          <ul>
            {[
              ['Kỹ thuật - Công nghệ', 'ky-thuat'],
              ['Điều khoản dịch vụ', 'dieu-khoan'],
              ['Liên hệ', 'lien-he'],
            ].map(([label, page]) => (
              <li key={page}><button onClick={() => setActivePage(page)}>{label}</button></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          © 2024 Statordata.com — Kỹ sư Võ Nguyên Bá Liêu, Khoa Cơ Điện, Trường ĐH Lạc Hồng.
        </div>
      </div>
    </footer>
  )
}
