import type { LocaleData } from "./types";

export const vi: LocaleData = {
  meta: {
    description:
      "Portfolio cá nhân giới thiệu dự án, kỹ năng và kinh nghiệm làm việc.",
  },
  nav: [
    { label: "Trang chủ", href: "#home" },
    { label: "Giới thiệu", href: "#about" },
    { label: "Kinh nghiệm", href: "#experience" },
    { label: "Liên hệ", href: "#contact" },
  ],
  header: {
    openMenu: "Mở menu",
    closeMenu: "Đóng menu",
  },
  profile: {
    role: "Kỹ sư phần mềm Full-Stack",
    hero: {
      greeting: {
        before: "Xin chào! Tôi là Chấn Vinh, một ",
        highlight: "Lập trình viên Phần mềm",
        after: " tại Việt Nam",
      },
      subtitle: {
        line1: "Tôi thích giải quyết vấn đề và",
        line2: {
          before: "xây dựng những ",
          highlight: "trải nghiệm web tốt hơn.",
        },
      },
      resumeButton: "CV của tôi",
    },
    about: {
      sectionLabel: "Giới thiệu & Kỹ năng",
      introTitle: "Xin chào! Tôi là {name}, {role}",
      intro:
        "Kỹ sư phần mềm Full-Stack với hơn 4 năm kinh nghiệm phát triển và đưa vào vận hành các ứng dụng web doanh nghiệp trong lĩnh vực ngân hàng, y tế, giáo dục và thông tin tài chính. Tôi đảm nhận tính năng từ đầu đến cuối: frontend React/Next.js và Vue.js cùng các RESTful API bằng ASP.NET Core, PHP Laravel và Java Spring Boot trên PostgreSQL, SQL Server và MySQL, với kiến trúc rõ ràng, kiểm tra dữ liệu chặt chẽ (Yup, Zod) và phân quyền RBAC. Gần đây tôi đã xây dựng hệ thống quy trình tài liệu tài chính, SaaS quản lý hàng chờ phòng khám và nền tảng giao dịch ngân hàng doanh nghiệp.",
      expertiseTitle: "Phát triển web full-stack, từ giao diện dễ tiếp cận đến API bảo mật",
      expertise:
        "Tôi tham gia toàn bộ vòng đời phát triển sản phẩm: thiết kế dịch vụ backend bảo mật, tối ưu hiệu năng truy vấn cơ sở dữ liệu, xây dựng hệ thống giao diện dễ tiếp cận và tăng tốc phát triển bằng công cụ AI (GitHub Copilot, Cursor AI). Tôi có thể đọc hiểu, làm rõ và xác nhận đặc tả kỹ thuật, yêu cầu nghiệp vụ bằng tiếng Anh, có kinh nghiệm làm việc với khách hàng Nhật Bản và từng quản lý nhóm ở vai trò sub-leader. Có kỹ năng giải quyết vấn đề, quản lý thời gian, làm việc nhóm tốt và thích ứng nhanh với công nghệ mới. Hiện đang nghiên cứu Microservices, CI/CD với GitHub Actions và AWS.",
      techStackTitle: "Tech stack của tôi",
    },
  },
  experience: {
    title: "Kinh nghiệm",
    subtitle:
      "Các dự án tôi đã tham gia tại ISB Vietnam - IVC trong hơn 4+ năm.",
    techStackLabel: "Tech stack:",
    productivityLabel: "Productivity Tools:",
    items: {
      fis: {
        role: "Financial Information System (Full Stack) · 06/2026 - Hiện tại",
        highlights: [
          "Quy trình PDF & Chữ ký số cốt lõi: Dẫn dắt phát triển end-to-end các mô-đun xử lý tài liệu, hỗ trợ tạo, hiển thị PDF và tích hợp chữ ký số an toàn bằng Vue.js và Quasar.",
          "Phân tích yêu cầu nghiệp vụ: Phối hợp trực tiếp với các bên liên quan để chuyển đổi các quy tắc tuân thủ và quy trình tài liệu phức tạp thành kiến trúc kỹ thuật sẵn sàng vận hành.",
          "Tăng tốc bàn giao với công cụ AI: Sử dụng GitHub Copilot để triển khai dịch vụ backend và tự động tạo kịch bản kiểm thử, giúp giảm 20% thời gian bàn giao tính năng.",
          "Đảm bảo ổn định hệ thống & UAT: Hỗ trợ khách hàng trong giai đoạn Kiểm thử chấp nhận người dùng (UAT) bằng cách phân tích nguyên nhân gốc, khắc phục nhanh lỗi xử lý tài liệu và làm rõ đặc tả kỹ thuật.",
        ],
      },
      pubcare: {
        role: "Pubcare System (Full Stack) · 04/2026 - Hiện tại",
        highlights: [
          "Xây dựng quy trình y tế end-to-end: Thiết kế chức năng xếp hàng chờ khám, đặt lịch hẹn trực tuyến và thông báo tự động bằng Next.js, React và PHP Laravel.",
          "Tối ưu API & trải nghiệm người dùng: Tái cấu trúc quản lý state phía frontend và tinh gọn các RESTful API backend cho nhân viên y tế, tích hợp phân quyền theo vai trò (RBAC) và kiểm tra dữ liệu chặt chẽ.",
          "Bàn giao suôn sẻ cho khách hàng: Chủ động dẫn dắt các buổi trao đổi yêu cầu với khách hàng và xử lý các vấn đề nghiêm trọng trong UAT để duy trì độ ổn định cao của sản phẩm.",
        ],
      },
      ucaro: {
        role: "University Admission & Registration System (Front End) · 05/2025 - 04/2026",
        highlights: [
          "Thiết kế quy trình web hiệu năng cao: Xây dựng luồng tuyển sinh và đăng ký thích ứng (responsive), thân thiện SEO bằng Next.js, TypeScript và Redux Toolkit, hỗ trợ hành trình người dùng đa bước phức tạp và duy trì trạng thái.",
          "Tối ưu kiểm tra dữ liệu biểu mẫu và hiệu suất: Xây dựng các thành phần biểu mẫu có thể tái sử dụng với cơ chế kiểm tra chặt chẽ bằng React Hook Form, Yup và TypeScript, tăng 15% hiệu suất phát triển và giảm thiểu lỗi khi gửi biểu mẫu.",
          "Đảm bảo độ tin cậy của ứng dụng: Duy trì chất lượng mã và độ bao phủ kiểm thử cao thông qua unit test với Jest, kiến trúc thành phần vững chắc và tiêu chuẩn frontend nhất quán.",
        ],
      },
      nehop: {
        role: "Hospitality Management System (Full Stack) · 05/2024 - 05/2025",
        highlights: [
          "Kiến trúc & thiết kế end-to-end: Viết tài liệu Thiết kế chi tiết (DD) và Kiểm thử đơn vị (UT), đồng thời thiết kế các luồng end-to-end kết nối frontend Next.js với các dịch vụ backend Java Spring Boot.",
          "API backend & logic nghiệp vụ: Phát triển các RESTful API an toàn bằng Java Spring Boot để xử lý các quy trình nhà hàng - khách sạn phức tạp, bao gồm xếp hàng đặt chỗ, đặt bàn và tính hóa đơn.",
          "Tối ưu cơ sở dữ liệu: Thiết kế và tối ưu cấu trúc cơ sở dữ liệu PostgreSQL nhằm đảm bảo tính nhất quán dữ liệu và tốc độ truy vấn cao.",
          "Triển khai frontend & chất lượng: Xây dựng giao diện web thích ứng và các thành phần biểu mẫu tái sử dụng bằng Next.js, Redux Toolkit và React Hook Form, đồng thời duy trì độ bao phủ kiểm thử với Jest.",
        ],
      },
      "core-banking": {
        role: "Banking Transaction System (Front End) · 05/2022 - 05/2024",
        highlights: [
          "Phát triển các mô-đun tài chính trọng yếu: Dẫn dắt phát triển các quy trình ngân hàng cốt lõi bao gồm xử lý gửi tiền và cho vay bằng Next.js và TypeScript.",
          "Quản lý luồng dữ liệu bất đồng bộ phức tạp: Triển khai xử lý side effect của API và quản lý state nâng cao bằng Redux Saga để xử lý an toàn các quy trình giao dịch tài chính.",
          "Xây dựng hệ thống thiết kế có khả năng mở rộng: Tạo các UI component tái sử dụng trong hệ thống thiết kế nội bộ, tăng tính nhất quán và hiệu suất phát triển giữa các nhóm.",
          "Dẫn dắt kỹ thuật & chất lượng: Tích cực tham gia code review, hướng dẫn lập trình viên junior về các phương pháp lập trình tốt và đóng góp công cụ nội bộ để tối ưu hiệu năng frontend.",
        ],
      },
    },
  },
  contact: {
    title: "Liên hệ",
    subtitle:
      "Bạn có dự án cần thực hiện hoặc muốn kết nối? Tôi rất sẵn lòng lắng nghe.",
    info: {
      email: "Email",
      phone: "Điện thoại",
      location: "Địa chỉ",
    },
    form: {
      name: "Họ tên",
      email: "Email",
      message: "Tin nhắn",
      namePlaceholder: "Nhập họ tên của bạn",
      emailPlaceholder: "ban@example.com",
      messagePlaceholder: "Hãy kể cho tôi về dự án của bạn...",
      submit: "Gửi tin nhắn",
      submitted: "Đã gửi tin nhắn!",
    },
  },
  footer: {
    copyright: "Portfolio. Xây dựng bằng React & Tailwind CSS.",
  },
};
