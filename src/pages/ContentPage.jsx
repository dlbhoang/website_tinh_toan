import { topNavItems, bottomNavItems } from '../data/navData'
import './ContentPage.css'

// Build a lookup of page -> {title, breadcrumb}
function buildPageMeta() {
  const meta = {}

  const staticPages = {
    'ky-thuat': { title: 'Kỹ thuật - Công nghệ', crumbs: ['Kỹ thuật - Công nghệ'] },
    'dieu-khoan': { title: 'Điều khoản dịch vụ', crumbs: ['Điều khoản dịch vụ'] },
    'lien-he': { title: 'Liên hệ với chúng tôi', crumbs: ['Liên hệ'] },
    'ly-thuyet-mach-tu': { title: 'Lý thuyết mạch từ trong máy điện', crumbs: ['Kỹ thuật - Công nghệ', 'Lý thuyết mạch từ'] },
    'thong-so-dinh-muc': { title: 'Thông số định mức động cơ điện', crumbs: ['Kỹ thuật - Công nghệ', 'Thông số định mức'] },
  }
  Object.assign(meta, staticPages)

  topNavItems.forEach(navItem => {
    navItem.children.forEach(group => {
      group.items.forEach(sub => {
        meta[sub.page] = {
          title: sub.label,
          crumbs: [navItem.label, group.groupLabel.replace(/\.$/, ''), sub.label],
          section: navItem.label,
        }
      })
    })
  })

  bottomNavItems.forEach(navItem => {
    navItem.children.forEach(group => {
      group.items.forEach(sub => {
        meta[sub.page] = {
          title: sub.label,
          crumbs: ['Chương trình tính toán', navItem.label, sub.label],
          section: navItem.label,
          isCalc: true,
        }
      })
    })
  })

  return meta
}

const pageMeta = buildPageMeta()

// Content templates for specific pages
function getContent(page) {
  const contents = {
    'ky-thuat': <KyThuatContent />,
    'dieu-khoan': <DieuKhoanContent />,
    'lien-he': <LienHeContent />,
    'ly-thuyet-mach-tu': <LyThuyetContent />,
    'thong-so-dinh-muc': <ThongSoContent />,
  }
  return contents[page] || <DefaultContent page={page} meta={pageMeta[page]} />
}

export default function ContentPage({ page, setActivePage }) {
  const meta = pageMeta[page] || { title: page, crumbs: [page] }

  return (
    <div className="content-page">
      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <div className="container">
          <nav className="breadcrumb">
            <button className="bc-home" onClick={() => setActivePage('home')}>🏠 Trang chủ</button>
            {meta.crumbs.slice(0, -1).map((c, i) => (
              <span key={i} className="bc-item">
                <span className="bc-sep">›</span>
                <span className="bc-text">{c}</span>
              </span>
            ))}
            <span className="bc-item">
              <span className="bc-sep">›</span>
              <span className="bc-current">{meta.crumbs[meta.crumbs.length - 1]}</span>
            </span>
          </nav>
        </div>
      </div>

      {/* Page header */}
      <div className={`page-header ${meta.isCalc ? 'calc-header' : ''}`}>
        <div className="container">
          <div className="ph-badge">{meta.isCalc ? '⚙️ Tính toán dữ liệu' : '📚 Học tập & Kỹ thuật'}</div>
          <h1 className="ph-title">{meta.title}</h1>
          {meta.section && <p className="ph-section">{meta.section}</p>}
        </div>
      </div>

      {/* Page content */}
      <div className="page-body">
        <div className="container">
          {getContent(page)}
        </div>
      </div>
    </div>
  )
}

/* ===== CONTENT TEMPLATES ===== */

function DefaultContent({ page, meta }) {
  return (
    <div className="default-content">
      <div className="coming-soon-card">
        <div className="cs-icon">📄</div>
        <h2>Nội dung đang được cập nhật</h2>
        <p>Trang <strong>{meta?.title || page}</strong> sẽ sớm có nội dung chi tiết từ tài liệu Word được gửi kèm.</p>
        <p className="cs-sub">Vui lòng liên hệ để được hỗ trợ hoặc cung cấp file Word cho trang này.</p>
      </div>
    </div>
  )
}

function KyThuatContent() {
  return (
    <div className="article-content">
      <div className="article-intro">
        <p>Trang <strong>Kỹ thuật - Công nghệ</strong> cung cấp kiến thức nền tảng về thiết kế và vận hành động cơ điện cảm ứng.</p>
      </div>
      <div className="article-grid">
        {[
          { title: 'Ký hiệu và nguyên lý kỹ thuật dây quấn', desc: 'Hệ thống ký hiệu chuẩn quốc tế và nguyên lý hoạt động của các loại dây quấn động cơ.' },
          { title: 'Truyền động điện', desc: 'Sơ đồ truyền động điện và liên kết tổng quát trong hệ thống động cơ điện.' },
          { title: 'Lý thuyết mạch từ', desc: 'Phân tích chi tiết mạch từ, từ thông và phân bố từ trường trong máy điện.' },
          { title: 'Thông số định mức', desc: 'Các thông số định mức động cơ, cấp cách điện, nhiệm vụ hoạt động S1-S8.' },
        ].map((item, i) => (
          <div key={i} className="article-card">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function DieuKhoanContent() {
  return (
    <div className="article-content">
      <div className="legal-box">
        <h2>Điều khoản sử dụng dịch vụ</h2>
        <p>Bằng cách sử dụng Statordata.com, bạn đồng ý với các điều khoản và điều kiện sau đây:</p>
        {[
          ['1. Phạm vi dịch vụ', 'Statordata.com cung cấp phần mềm tính toán và thiết kế dữ liệu dây quấn động cơ cảm ứng cho mục đích giáo dục và thực tiễn.'],
          ['2. Quyền sở hữu trí tuệ', 'Toàn bộ nội dung, thuật toán và phương pháp tính toán trên Statordata.com thuộc quyền sở hữu của tác giả.'],
          ['3. Trách nhiệm sử dụng', 'Người dùng chịu trách nhiệm kiểm tra và xác minh kết quả tính toán trước khi áp dụng vào thực tiễn.'],
          ['4. Bảo mật thông tin', 'Chúng tôi cam kết bảo vệ thông tin cá nhân của người dùng theo quy định pháp luật hiện hành.'],
          ['5. Liên hệ', 'Mọi thắc mắc về điều khoản dịch vụ, vui lòng liên hệ qua trang Liên hệ với chúng tôi.'],
        ].map(([title, body], i) => (
          <div key={i} className="legal-item">
            <h3>{title}</h3>
            <p>{body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function LienHeContent() {
  return (
    <div className="contact-content">
      <div className="contact-grid">
        <div className="contact-info">
          <h2>Liên hệ với chúng tôi</h2>
          <p>Hỗ trợ kỹ thuật và giải đáp thắc mắc về tính toán dữ liệu dây quấn động cơ điện.</p>
          <div className="contact-items">
            <div className="contact-item">
              <span className="ci-icon">🌐</span>
              <div><strong>Website</strong><br/>statordata.com</div>
            </div>
            <div className="contact-item">
              <span className="ci-icon">💼</span>
              <div><strong>LinkedIn</strong><br/>Cộng đồng Statordata.com</div>
            </div>
            <div className="contact-item">
              <span className="ci-icon">▶️</span>
              <div><strong>YouTube</strong><br/>Kênh hướng dẫn kỹ thuật</div>
            </div>
            <div className="contact-item">
              <span className="ci-icon">👨‍🏫</span>
              <div><strong>Tác giả</strong><br/>Kỹ sư Võ Nguyên Bá Liêu — Khoa Cơ Điện, Trường ĐH Lạc Hồng</div>
            </div>
          </div>
        </div>
        <div className="contact-form-area">
          <h3>Gửi câu hỏi kỹ thuật</h3>
          <div className="form-group"><label>Họ và tên</label><input type="text" placeholder="Nhập họ tên..." readOnly/></div>
          <div className="form-group"><label>Email</label><input type="email" placeholder="Nhập email..." readOnly/></div>
          <div className="form-group"><label>Nội dung</label><textarea rows="4" placeholder="Mô tả câu hỏi kỹ thuật..." readOnly/></div>
          <button className="btn-primary" style={{opacity:0.6, cursor:'default'}}>Gửi câu hỏi (demo)</button>
        </div>
      </div>
    </div>
  )
}

function LyThuyetContent() {
  return (
    <div className="article-content">
      <div className="article-intro">
        <p>Nắm bắt những hiểu biết giá trị về thiết kế và hoạt động của động cơ điện, thông qua phân tích chi tiết mạch từ.</p>
      </div>
      <div className="theory-sections">
        {[
          { heading: 'Thông số kỹ thuật mạch từ', body: 'Mạch từ trong máy điện là đường dẫn của từ thông, bao gồm gông stator, răng stator, khe hở không khí, răng rotor và lõi rotor. Mỗi phần có đặc tính từ khác nhau.' },
          { heading: 'Từ thông cực đại qua mỗi vị trí', body: 'Từ thông cực đại Φmax được tính toán dựa trên mật độ từ thông cho phép của vật liệu từ, tiết diện ngang của mạch từ tại mỗi vị trí cụ thể.' },
          { heading: 'Thông suất từ gông đến răng Stator', body: 'Từ thông đi từ gông stator, qua răng stator, qua khe hở không khí, vào lõi rotor và quay về theo chiều ngược lại, tạo thành mạch từ khép kín.' },
          { heading: 'Phân bố từ trường trên mỗi cực từ', body: 'Phân bố từ trường không đều trên chu vi của stator, với mật độ cao nhất tại vùng trục từ và giảm dần về hai bên. Điều này ảnh hưởng trực tiếp đến hiệu suất của động cơ.' },
        ].map((s, i) => (
          <div key={i} className="theory-block">
            <h3>{s.heading}</h3>
            <p>{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function ThongSoContent() {
  return (
    <div className="article-content">
      <div className="article-intro">
        <p>Nắm bắt những hiểu biết giá trị về vận hành và hoạt động của động cơ điện, thông qua Công suất hay dòng điện.</p>
      </div>
      <div className="specs-table-wrap">
        <table className="specs-table">
          <thead>
            <tr>
              <th>Thông số</th>
              <th>Ký hiệu</th>
              <th>Đơn vị</th>
              <th>Mô tả</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Công suất định mức', 'Pn', 'kW', 'Công suất cơ học trên trục động cơ'],
              ['Điện áp định mức', 'Un', 'V', 'Điện áp nguồn cấp vào stator'],
              ['Dòng điện định mức', 'In', 'A', 'Dòng điện tiêu thụ ở tải định mức'],
              ['Tốc độ định mức', 'nn', 'rpm', 'Tốc độ quay của rotor ở tải định mức'],
              ['Hệ số công suất', 'cosφ', '—', 'Power Factor, thường từ 0.75 đến 0.95'],
              ['Hiệu suất', 'η', '%', 'Tỉ lệ công suất ra / công suất vào'],
              ['Cấp cách điện', '—', '—', 'A, B, F, H tương ứng nhiệt độ tối đa'],
              ['Chế độ làm việc', 'S1-S8', '—', 'S1: liên tục, S2-S8: gián đoạn'],
            ].map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => <td key={j}>{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
