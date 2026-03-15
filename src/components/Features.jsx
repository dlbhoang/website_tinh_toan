import './Features.css'

const features = [
  {
    icon: '⚙️',
    title: 'Ký hiệu và nguyên lý kỹ thuật dây quấn',
    desc: 'Hệ thống ký hiệu chuẩn và nguyên lý kỹ thuật cho dây quấn động cơ điện cảm ứng.',
  },
  {
    icon: '🔌',
    title: 'Truyền động điện và sơ đồ liên kết tổng quát',
    desc: 'Sơ đồ liên kết tổng quát cho hệ thống truyền động điện 3 pha.',
  },
  {
    icon: '📐',
    title: 'Phương pháp xây dựng sơ đồ khai triển',
    desc: 'Phương pháp xây dựng sơ đồ khai triển 3 pha, 1 lớp và 2 lớp chuyên nghiệp.',
  },
  {
    icon: '🔢',
    title: 'Tính toán phân số tối giản',
    desc: 'Phương pháp phân số tối giản cho sơ đồ khai triển 3 pha, 1 tốc độ tối ưu.',
  },
]

export default function Features() {
  return (
    <section className="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Kỹ thuật - Công nghệ</h2>
          <p className="section-desc">Nền tảng kỹ thuật chuyên sâu về thiết kế và tính toán dây quấn động cơ điện</p>
        </div>
        <div className="features-grid">
          {features.map((f, i) => (
            <div className="feature-card" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="feature-icon">{f.icon}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
              <a href="#" className="feature-link">Xem thêm →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
