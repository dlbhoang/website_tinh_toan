import { useState } from 'react'
import './CourseSections.css'

const courses = [
  {
    id: 'td1',
    category: 'Trung tâm học tập 3 pha, 1 Tốc độ',
    title: 'Phương pháp xây dựng sơ đồ khai triển 3 pha, 1 tốc độ, số nguyên.',
    isBold: true,
    items: [
      { label: 'Phương pháp Xây dựng sơ đồ khai triển 3 pha 1 lớp.', href: '#' },
      { label: 'Phương pháp Xây dựng sơ đồ khai triển 3 pha 2 lớp.', href: '#' },
    ],
  },
  {
    id: 'td1b',
    title: 'Phương pháp xây dựng sơ đồ khai triển 3 pha 1 tốc độ, phân số tối giản.',
    isBold: true,
    highlighted: true,
    items: [
      { label: 'Phương pháp Xây dựng sơ đồ khai triển 3 pha 1 lớp.', href: '#' },
      { label: 'Phương pháp Xây dựng sơ đồ khai triển 3 pha 2 lớp.', href: '#' },
    ],
  },
  {
    id: 'td2',
    category: 'Trung tâm học tập 3 pha, 2 Tốc độ',
    title: 'Phương pháp xây dựng sơ đồ khai triển 3 pha, 2 tốc độ, số nguyên.',
    isBold: true,
    items: [
      { label: 'Phương pháp Xây dựng sơ đồ khai triển 3 pha 1 lớp.', href: '#' },
      { label: 'Phương pháp Xây dựng sơ đồ khai triển 3 pha 2 lớp.', href: '#' },
    ],
  },
  {
    id: 'td1pha',
    category: 'Trung tâm học tập 1 pha',
    title: 'Phương pháp xây dựng sơ đồ khai triển 1 pha.',
    isBold: true,
    items: [
      { label: 'Phương pháp Xây dựng sơ đồ khai triển 1 pha 1 lớp.', href: '#' },
      { label: 'Phương pháp Xây dựng sơ đồ khai triển 1 pha 2 lớp.', href: '#' },
    ],
  },
]

export default function CourseSections() {
  const [active, setActive] = useState(null)

  return (
    <section className="courses">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Trung tâm học tập</h2>
          <p className="section-desc">Tài liệu học tập chuyên sâu về kỹ thuật dây quấn động cơ điện</p>
        </div>

        <div className="courses-layout">
          {courses.map((course, ci) => (
            <div key={course.id} className={`course-block ${course.highlighted ? 'highlighted' : ''}`}>
              {course.category && (
                <div className="course-category">{course.category}</div>
              )}
              <div className={`course-section-title ${course.isBold ? 'bold' : ''}`}>
                {course.title}
                {course.highlighted && (
                  <span className="arrow-badge">◀</span>
                )}
              </div>
              <ul className="course-items">
                {course.items.map((item, ii) => (
                  <li key={ii}>
                    <a
                      href={item.href}
                      className={`course-item ${active === `${ci}-${ii}` ? 'active' : ''}`}
                      onClick={() => setActive(`${ci}-${ii}`)}
                    >
                      <span className="course-dot"/>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
