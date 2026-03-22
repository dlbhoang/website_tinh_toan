# Hướng dẫn cài đặt ảnh

## Các ảnh cần thiết

Tải các ảnh sau vào thư mục `/public/assets/`:

### 1. `stator-cross.png` - Mặt cắt ngang Stator/Rotor
- **Kích thước gợi ý**: 400x400px (vuông)
- **Nội dung**: Mặt cắt ngang chi tiết các thông số (a, b, d1, d2, h, hr)
- **Định dạng**: PNG, JPG
- **Dùng cho**: Hero section bên trái

### 2. `motor-diagram.png` - Sơ đồ motor chi tiết
- **Kích thước gợi ý**: 600x400px (ngang)
- **Nội dung**: Motor stator đầy đủ với chi tiết (L, Dt, Hg, Dn, H, bz, d1, d2, etc.)
- **Định dạng**: PNG, JPG
- **Dùng cho**: Hero section bên phải

## Cải thiện làm thêm

Nếu muốn thêm ảnh vào các section khác:
- `lý-thuyết-mạch-từ`: thêm ảnh từ trường
- `thông-số-định-mức`: thêm bảng/biểu đồ thông số
- `ContentPage`: thêm ảnh minh họa cho từng page

## Lưu ý

- Ảnh sẽ hiển thị với fallback `/assets/hero.png` nếu không tìm thấy
- Tất cả ảnh tự động responsive qua `object-fit:contain`
- Format hỗ trợ: PNG, JPG, WebP
