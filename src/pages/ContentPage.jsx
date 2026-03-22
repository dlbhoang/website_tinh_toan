import { topNavItems, bottomNavItems } from '../data/navData'
import './ContentPage.css'

function buildMeta() {
  const m = {
    'ky-thuat':{ title:'Kỹ thuật - Công nghệ', crumbs:['Kỹ thuật - Công nghệ'] },
    'dieu-khoan':{ title:'Điều khoản dịch vụ', crumbs:['Điều khoản dịch vụ'] },
    'lien-he':{ title:'Liên hệ với chúng tôi', crumbs:['Liên hệ'] },
    'ly-thuyet-mach-tu':{ title:'Lý thuyết mạch từ trong máy điện', crumbs:['Kỹ thuật - Công nghệ','Lý thuyết mạch từ'] },
    'thong-so-dinh-muc':{ title:'Thông số định mức động cơ điện', crumbs:['Kỹ thuật - Công nghệ','Thông số định mức'] },
    'mach-nhanh-song-song':{ title:'Các sơ đồ mạch nhánh song song (A)', crumbs:['Kỹ thuật - Công nghệ','Các sơ đồ mạch nhánh song song (A)'] },
    'huong-dan-ky-thuat':{ title:'Hướng dẫn kỹ thuật tính toán dữ liệu', crumbs:['Hướng dẫn kỹ thuật'] },
  }
  topNavItems.forEach(nav=>nav.children?.forEach(g=>g.items?.forEach(sub=>{
    m[sub.page]={ title:sub.label, crumbs:[nav.label, sub.label], section:nav.label }
  })))
  bottomNavItems.forEach(nav=>nav.children?.forEach(g=>g.items?.forEach(sub=>{
    m[sub.page]={ title:sub.label, crumbs:['Tính toán dữ liệu', nav.label, sub.label], section:nav.label, isCalc:true }
  })))
  return m
}
const META = buildMeta()

export default function ContentPage({ page, setActivePage }) {
  const meta = META[page] || { title:page, crumbs:[page] }
  return (
    <div className="cp">
      <div className="cp-breadcrumb">
        <div className="container">
          <button className="cp-home" onClick={()=>setActivePage('home')}>🏠 Trang chủ</button>
          {meta.crumbs.slice(0,-1).map((c,i)=>(
            <span key={i} className="cp-crumb"><span className="cp-sep">›</span>{c}</span>
          ))}
          <span className="cp-crumb"><span className="cp-sep">›</span><strong>{meta.crumbs[meta.crumbs.length-1]}</strong></span>
        </div>
      </div>
      <div className={`cp-header ${meta.isCalc?'is-calc':''}`}>
        <div className="container">
          <span className="cp-badge">{meta.isCalc?'⚙️ Tính toán dữ liệu':'📚 Học tập & Kỹ thuật'}</span>
          <h1 className="cp-title">{meta.title}</h1>
          {meta.section && <p className="cp-section">{meta.section}</p>}
        </div>
      </div>
      <div className="cp-body">
        <div className="container">
          {getContent(page)}
        </div>
      </div>
    </div>
  )
}

const PAGE_REQUIREMENTS = Object.fromEntries(Object.keys(META).map(page => {
  const meta = META[page]
  if (!meta) return [page, null]
  const isCalc = meta.isCalc
  const intro = isCalc
    ? [
        'Xác định các thông số đầu vào bắt buộc (số rãnh, số cực, mật độ dòng điện, hệ số xếp lớp, công suất, tốc độ).',
        'Tính toán sơ đồ khai triển dây quấn, góc lệch, phân bố pha QA-QB hoặc QA-2QB-3QB tùy loại.',
        'Kiểm tra điều kiện kỹ thuật: mật độ từ thông, độ bền điện môi, điều kiện nhiệt độ. ',
        'Lập bảng tổng hợp kết quả: số vòng, đường kính dây, điện áp pha, dòng pha, công suất đầu ra.'
      ]
    : [
        'Giải thích lý thuyết nền tảng và công thức cơ bản cho chủ đề này.',
        'Cung cấp ví dụ hình ảnh, sơ đồ và lưu đồ tính toán để dễ hiểu.',
        'Nêu rõ ghi chú cảnh báo, điều kiện giới hạn và giả định của bài toán.',
      ]
  return [page, { intro, bulletPoints: [
    `Nội dung trang: ${meta.title || page}`,
    ...intro,
    'Cập nhật nội dung chi tiết khi nhận được tài liệu Word và yêu cầu thiết kế (theo phân chia tab).'
  ]}]
}))

function getContent(page) {
  if (page==='lien-he') return <LienHeContent/>
  if (page==='dieu-khoan') return <DieuKhoanContent/>
  if (page==='ly-thuyet-mach-tu') return <LyThuyetContent/>
  if (page==='thong-so-dinh-muc') return <ThongSoContent/>

  const requirement = PAGE_REQUIREMENTS[page]
  if (requirement) return <TopicContent page={page} meta={META[page]} requirements={requirement.bulletPoints} />

  return <DefaultContent page={page} meta={META[page]}/>
}

function TopicContent({ page, meta, requirements }) {
  return (
    <div className="cp-topic">
      <h2>Yêu cầu và Hướng dẫn cho {meta?.title || page}</h2>
      <p>Đây là nội dung tạm thời dựa trên cấu trúc đã khai báo, có thể cập nhật từ tài liệu Word gốc.</p>
      <ul>
        {requirements.map((item, i) => (<li key={i}>{item}</li>))}
      </ul>
      <p style={{marginTop: '1rem', color: 'var(--b5)'}}>
        Mũi nhọn: Nếu cần thêm chi tiết, vui lòng gửi thêm nội dung cụ thể từ file yêu cầu.
      </p>
    </div>
  )
}

function DefaultContent({ page, meta }) {
  return (
    <div className="cp-default">
      <div className="cp-cs">
        <div className="cp-cs-icon">📄</div>
        <h2>Nội dung đang được cập nhật</h2>
        <p>Trang <strong>{meta?.title||page}</strong> sẽ sớm có nội dung chi tiết từ tài liệu Word được gửi kèm.</p>
        <p className="cp-cs-sub">Vui lòng liên hệ hoặc cung cấp file Word để chúng tôi cập nhật nội dung trang này.</p>
      </div>
    </div>
  )
}

function LienHeContent() {
  return (
    <div className="cp-lienhe">
      <div className="lh-grid">
        <div className="lh-info">
          <h2>Liên hệ với chúng tôi</h2>
          <p>Hỗ trợ kỹ thuật và giải đáp thắc mắc về tính toán dữ liệu dây quấn động cơ điện.</p>
          <div className="lh-items">
            {[['📍','Địa chỉ','Số nhà 319 - Đường DT 9 - Thôn 1, Tân tiến, Đăk Lak'],
              ['📞','Điện Thoại','0366332181'],
              ['✉️','Gmail','Statordata@gmail.com'],
              ['💼','LinkedIn','Cộng đồng Statordata.com'],
              ['▶️','YouTube','Kênh hướng dẫn kỹ thuật'],
              ['👨‍🏫','Tác giả','Kỹ sư Võ Nguyên Bá Liêu — Khoa Cơ Điện, ĐH Lạc Hồng'],
            ].map(([ic,lbl,val],i)=>(
              <div key={i} className="lh-item"><span>{ic}</span><div><strong>{lbl}:</strong> {val}</div></div>
            ))}
          </div>
        </div>
        <div className="lh-form">
          <h3>Gửi câu hỏi kỹ thuật</h3>
          {['Họ và tên','Email','Chủ đề'].map(f=>(
            <div key={f} className="lh-field"><label>{f}</label><input type="text" placeholder={`Nhập ${f.toLowerCase()}...`} readOnly/></div>
          ))}
          <div className="lh-field"><label>Nội dung</label><textarea rows="4" placeholder="Mô tả câu hỏi kỹ thuật..." readOnly/></div>
          <button className="lh-send" disabled>Gửi câu hỏi (demo)</button>
        </div>
      </div>
    </div>
  )
}

function DieuKhoanContent() {
  return (
    <div className="cp-legal">
      <h2>Điều khoản sử dụng dịch vụ Statordata.com</h2>
      {[
        ['1. Phạm vi dịch vụ','Statordata.com cung cấp phần mềm tính toán và thiết kế dữ liệu dây quấn động cơ cảm ứng cho mục đích giáo dục và thực tiễn kỹ thuật.'],
        ['2. Quyền sở hữu trí tuệ','Toàn bộ nội dung, thuật toán, phương pháp tính toán và tài liệu trên Statordata.com thuộc quyền sở hữu của tác giả — Kỹ sư Võ Nguyên Bá Liêu.'],
        ['3. Trách nhiệm sử dụng','Người dùng chịu trách nhiệm kiểm tra và xác minh kết quả tính toán trước khi áp dụng vào thực tiễn sản xuất.'],
        ['4. Bảo mật thông tin','Chúng tôi cam kết bảo vệ thông tin cá nhân của người dùng theo quy định pháp luật Việt Nam hiện hành.'],
        ['5. Liên hệ','Mọi thắc mắc về điều khoản dịch vụ, vui lòng liên hệ qua Gmail: Statordata@gmail.com'],
      ].map(([t,b],i)=>(
        <div key={i} className="legal-item">
          <h3>{t}</h3><p>{b}</p>
        </div>
      ))}
    </div>
  )
}

function LyThuyetContent() {
  return (
    <div className="cp-theory">
      <div className="theory-intro">
        <p>Nắm bắt những hiểu biết giá trị về thiết kế và hoạt động của động cơ điện, thông qua phân tích chi tiết mạch từ.</p>
      </div>
      {[
        ['Thông số kỹ thuật mạch từ','Mạch từ trong máy điện là đường dẫn của từ thông, bao gồm gông stator, răng stator, khe hở không khí, răng rotor và lõi rotor. Mỗi phần có đặc tính từ khác nhau ảnh hưởng trực tiếp đến hiệu suất.'],
        ['Từ thông cực đại qua mỗi vị trí','Từ thông cực đại Φmax được tính toán dựa trên mật độ từ thông cho phép của vật liệu từ, tiết diện ngang của mạch từ tại mỗi vị trí cụ thể trong stator và rotor.'],
        ['Thông suất từ gông đến răng Stator','Từ thông đi từ gông stator, qua răng stator, qua khe hở không khí, vào lõi rotor và quay về theo chiều ngược lại, tạo thành mạch từ khép kín hoàn chỉnh.'],
        ['Phân bố từ trường trên mỗi cực từ','Phân bố từ trường không đều trên chu vi của stator, với mật độ cao nhất tại vùng trục từ và giảm dần về hai bên. Điều này ảnh hưởng trực tiếp đến hiệu suất của động cơ.'],
      ].map(([h,b],i)=>(
        <div key={i} className="theory-block"><h3>{h}</h3><p>{b}</p></div>
      ))}
    </div>
  )
}

function ThongSoContent() {
  return (
    <div className="cp-specs">
      <div className="theory-intro">
        <p>Nắm bắt những hiểu biết giá trị về vận hành và hoạt động của động cơ điện, thông qua Công suất hay dòng điện.</p>
      </div>
      <div style={{overflowX:'auto'}}>
        <table className="specs-table">
          <thead><tr><th>Thông số</th><th>Ký hiệu</th><th>Đơn vị</th><th>Mô tả</th></tr></thead>
          <tbody>
            {[
              ['Công suất định mức','Pn','kW','Công suất cơ học trên trục động cơ'],
              ['Điện áp định mức','Un','V','Điện áp nguồn cấp vào stator'],
              ['Dòng điện định mức','In','A','Dòng điện tiêu thụ ở tải định mức'],
              ['Tốc độ định mức','nn','rpm','Tốc độ quay của rotor ở tải định mức'],
              ['Hệ số công suất','cosφ','—','Power Factor, thường từ 0.75 đến 0.95'],
              ['Hiệu suất','η','%','Tỉ lệ công suất ra / công suất vào'],
              ['Cấp cách điện','—','—','A, B, F, H tương ứng nhiệt độ tối đa'],
              ['Chế độ làm việc','S1-S8','—','S1: liên tục; S2-S8: gián đoạn theo chu kỳ'],
            ].map((r,i)=><tr key={i}>{r.map((c,j)=><td key={j}>{c}</td>)}</tr>)}
          </tbody>
        </table>
      </div>
    </div>
  )
}
