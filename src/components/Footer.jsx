import './Footer.css'

export default function Footer({ setActivePage }) {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <div className="f-brand">
          <div className="f-name">Statordata.com</div>
          <p>Phần mềm thiết kế tính toán dữ liệu dây quấn động cơ cảm ứng chuyên nghiệp.</p>
          <div className="f-social">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="f-soc-btn">in</a>
            <a href="#" className="f-soc-btn yt">▶</a>
          </div>
        </div>
        <div className="f-col">
          <h4>Học tập</h4>
          <ul>
            {[['3 pha, 1 Tốc độ','3pha1td-sn-1lop'],['3 pha, 2 Tốc độ','3pha2td-kyhieu'],['1 pha','1pha-ly-thuyet']].map(([l,p])=>(
              <li key={p}><button onClick={()=>setActivePage(p)}>{l}</button></li>
            ))}
          </ul>
        </div>
        <div className="f-col">
          <h4>Tính toán</h4>
          <ul>
            {[['3 pha 1 lớp','tt-3pha-sn-1lop'],['3 pha 2 lớp','tt-3pha-sn-2lop'],['1 pha','tt-1pha-sin']].map(([l,p])=>(
              <li key={p}><button onClick={()=>setActivePage(p)}>{l}</button></li>
            ))}
          </ul>
        </div>
        <div className="f-col">
          <h4>Liên kết</h4>
          <ul>
            {[['Kỹ thuật - Công nghệ','ky-thuat'],['Điều khoản dịch vụ','dieu-khoan'],['Liên hệ','lien-he']].map(([l,p])=>(
              <li key={p}><button onClick={()=>setActivePage(p)}>{l}</button></li>
            ))}
          </ul>
        </div>
        <div className="f-contact">
          <h4>Thông tin liên hệ</h4>
          <div className="f-contact-list">
            <div>📍 Số nhà 319 - Đường DT 9 - Thôn 1, Tân tiến, Đăk Lak</div>
            <div>📞 0366332181</div>
            <div>✉️ Statordata@gmail.com</div>
          </div>
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
