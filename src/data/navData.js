// TOP NAVBAR - Mục 1-6
export const topNavItems = [
  {
    id: 'ky-thuat',
    label: 'Kỹ thuật - Công nghệ',
    page: 'ky-thuat',
    children: [],
  },
  {
    id: 'dieu-khoan',
    label: 'Điều khoản dịch vụ',
    page: 'dieu-khoan',
    children: [],
  },
  {
    id: '3pha-1td',
    label: 'Trung tâm học tập 3 pha, 1 Tốc độ',
    page: null,
    children: [
      {
        groupLabel: 'Kỹ thuật dây quấn động cơ cảm ứng 3 pha, 1 tốc độ.',
        items: [
          { label: 'Ký hiệu và nguyên lý kỹ thuật dây quấn.', page: '3pha1td-kyhieu' },
          { label: 'Truyền động điện và sơ đồ liên kết tổng quát.', page: '3pha1td-truyen-dong' },
        ],
      },
      {
        groupLabel: 'Phương pháp xây dựng sơ đồ khai triển 3 pha 1 tốc độ, số nguyên.',
        items: [
          { label: 'Phương pháp Xây dựng sơ đồ khai triển 3 pha 1 lớp.', page: '3pha1td-sn-1lop' },
          { label: 'Phương pháp Xây dựng sơ đồ khai triển 3 pha 2 lớp.', page: '3pha1td-sn-2lop' },
        ],
      },
      {
        groupLabel: 'Phương pháp xây dựng sơ đồ khai triển 3 pha 1 tốc độ, số tối giản.',
        items: [
          { label: 'Phương pháp Xây dựng sơ đồ khai triển 3 pha 1 lớp.', page: '3pha1td-tg-1lop' },
          { label: 'Phương pháp Xây dựng sơ đồ khai triển 3 pha 2 lớp.', page: '3pha1td-tg-2lop' },
        ],
      },
    ],
  },
  {
    id: '3pha-2td',
    label: 'Trung tâm học tập 3 pha, 2 Tốc độ',
    page: null,
    children: [
      {
        groupLabel: 'Kỹ thuật dây quấn động cơ cảm ứng 3 pha, 2 tốc độ.',
        items: [
          { label: 'Ký hiệu và nguyên lý kỹ thuật dây quấn.', page: '3pha2td-kyhieu' },
          { label: 'Sơ đồ ra dây và liên kết tổng quát từng loại tốc độ, theo (Robert Dahlander).', page: '3pha2td-so-do' },
        ],
      },
      {
        groupLabel: 'Phương pháp xây dựng sơ đồ khai triển 3 pha, 2 tốc độ, theo (Robert Dahlander)',
        items: [
          { label: 'Trường hợp 1: Đổi tốc độ momen không đổi (n = var; t = const): (2y/∆).', page: '3pha2td-th1' },
          { label: 'Trường hợp 2: Đổi tốc độ công suất không đổi (n = var; p = const): (∆/2y).', page: '3pha2td-th2' },
          { label: 'Trường hợp 3: Đổi tốc độ công suất và momen thay đổi (n = var; p = var, t = var): (2Y/Y).', page: '3pha2td-th3' },
        ],
      },
    ],
  },
  {
    id: '1pha',
    label: 'Trung tâm học tập 1 pha',
    page: null,
    children: [
      {
        groupLabel: 'Kỹ thuật dây quấn động cơ cảm ứng 1 pha.',
        items: [
          { label: 'Lý thuyết và phân loại trong máy điện 1 pha.', page: '1pha-ly-thuyet' },
          { label: 'Sơ đồ liên kết tổng quát và Thông số kỹ thuật tính toán dữ liệu.', page: '1pha-so-do' },
        ],
      },
      {
        groupLabel: 'Phương pháp xây dựng sơ đồ khai triển động cơ 1 pha.',
        items: [
          { label: 'Phương pháp xây dựng sơ đồ khai triển, phân bố QA = QB.', page: '1pha-qa-qb' },
          { label: 'Phương pháp xây dựng sơ đồ khai triển, phân bố QA = 2.QB.', page: '1pha-qa-2qb' },
          { label: 'Phương pháp xây dựng sơ đồ khai triển 2 lớp, phân bố QA = 3.QB.', page: '1pha-qa-3qb' },
          { label: 'Phương pháp xây dựng sơ đồ khai triển, 2 lớp.', page: '1pha-2lop' },
          { label: 'Phương pháp xây dựng sơ đồ khai triển, Pha làm việc và pha khởi động dây quấn sin.', page: '1pha-sin' },
        ],
      },
    ],
  },
  {
    id: 'lien-he',
    label: 'Liên hệ với chúng tôi',
    page: 'lien-he',
    children: [],
  },
]

// BOTTOM NAVBAR - Chương trình tính toán
export const bottomNavItems = [
  {
    id: 'tt-3pha-1td',
    label: 'Tính toán dữ liệu 3 pha, 1 tốc độ',
    children: [
      {
        groupLabel: 'Tính toán dữ liệu 3 pha, số nguyên:',
        items: [
          { label: 'Tính toán dữ liệu 3 pha 1 lớp.', page: 'tt-3pha-sn-1lop' },
          { label: 'Tính toán dữ liệu 3 pha 2 lớp.', page: 'tt-3pha-sn-2lop' },
          { label: 'Hướng dẫn tính toán dữ liệu.', page: 'tt-3pha-sn-huong-dan' },
        ],
      },
      {
        groupLabel: 'Tính toán dữ liệu 3 pha, phân số tối giản:',
        items: [
          { label: 'Tính toán dữ liệu 3 pha 1 lớp.', page: 'tt-3pha-tg-1lop' },
          { label: 'Tính toán dữ liệu 3 pha 2 lớp.', page: 'tt-3pha-tg-2lop' },
          { label: 'Hướng dẫn tính toán dữ liệu.', page: 'tt-3pha-tg-huong-dan' },
        ],
      },
    ],
  },
  {
    id: 'tt-3pha-2td',
    label: 'Tính toán dữ liệu 3 pha, 2 tốc độ',
    children: [
      {
        groupLabel: 'Tính toán dữ liệu 3 pha, 2 tốc, Theo (Robert Dahlander).',
        items: [
          { label: 'Tính toán dữ liệu đổi tốc độ momen không đổi (n = var; T = const): (2Y/∆).', page: 'tt-3pha-2td-th1' },
          { label: 'Tính toán dữ liệu đổi tốc độ Công suất không đổi (n = var; P = const): (∆/2Y).', page: 'tt-3pha-2td-th2' },
          { label: 'Tính toán dữ liệu đổi tốc độ công suất và momen thay đổi (n = var; P = var, T= var): (2Y/Y).', page: 'tt-3pha-2td-th3' },
          { label: 'Hướng dẫn tính toán dữ liệu.', page: 'tt-3pha-2td-huong-dan' },
        ],
      },
    ],
  },
  {
    id: 'tt-1pha',
    label: 'Tính toán dữ liệu 1 pha',
    children: [
      {
        groupLabel: 'Pha làm việc và pha khởi động dây quấn sin:',
        items: [
          { label: 'Tính toán dữ dây quấn sin.', page: 'tt-1pha-sin' },
          { label: 'Hướng dẫn tính toán dữ liệu dây quấn sin.', page: 'tt-1pha-sin-hd' },
        ],
      },
      {
        groupLabel: 'Phân bố QA = 2.QB (Pha làm việc bằng 2 lần pha khởi động):',
        items: [
          { label: 'Tính toán dữ liệu sử dụng phân bố QA = 2.QB.', page: 'tt-1pha-2qb' },
          { label: 'Hướng dẫn tính toán dữ liệu QA = 2.QB.', page: 'tt-1pha-2qb-hd' },
        ],
      },
      {
        groupLabel: 'Phân bố QA = 3.QB (Pha làm việc bằng 3 lần pha khởi động):',
        items: [
          { label: 'Tính toán dữ liệu sử dụng phân bố QA = 3.QB.', page: 'tt-1pha-3qb' },
          { label: 'Hướng dẫn tính toán dữ liệu QA = 3.QB.', page: 'tt-1pha-3qb-hd' },
        ],
      },
      {
        groupLabel: 'Phân bố QA = QB (Pha làm việc bằng pha khởi động):',
        items: [
          { label: 'Tính toán dữ liệu sử dụng phân bố QA = QB.', page: 'tt-1pha-qb' },
          { label: 'Hướng dẫn tính toán dữ liệu QA = QB.', page: 'tt-1pha-qb-hd' },
        ],
      },
    ],
  },
]
