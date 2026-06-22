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
    role: "Lập trình viên Web",
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
        "Lập trình viên Frontend với hơn 3,5 năm kinh nghiệm xây dựng các ứng dụng web có khả năng mở rộng bằng React.js, Next.js, React Native, TypeScript và các công nghệ frontend hiện đại. Thành thạo kiến trúc component, quản lý state, tích hợp API và unit testing. Đam mê sử dụng các công cụ phát triển hỗ trợ AI như ChatGPT, Cursor AI, GitHub Copilot và Gemini để nâng cao hiệu quả phát triển và chất lượng mã nguồn.",
      expertiseTitle: "Lĩnh vực chính là phát triển front-end",
      expertise:
        "Luôn chủ động, có kỹ năng giải quyết vấn đề, quản lý thời gian và giao tiếp tốt, có khả năng thích ứng nhanh với công nghệ mới và yêu cầu nghiệp vụ. Có kinh nghiệm HTML5, CSS3, JavaScript/TypeScript, xây dựng ứng dụng web quy mô vừa và lớn với React và Next.js, cùng Redux, React Query, React Hook Form và unit testing với Jest và Vitest.",
      techStackTitle: "Tech stack của tôi",
    },
  },
  experience: {
    title: "Kinh nghiệm",
    subtitle:
      "Các dự án tôi đã tham gia tại ISB Vietnam - IVC trong hơn 3,5 năm.",
    techStackLabel: "Tech stack:",
    teamSizeLabel: "Quy mô team:",
    items: {
      fis: {
        role: "Hệ thống thông tin tài chính (Full Stack) (Support Team)",
        highlights: [
          "Lên lịch kiểm tra",
          "Quản lý checklist kiểm tra",
          "Tải lên ảnh & tài liệu",
          "Chữ ký số",
          "Báo cáo lỗi",
          "Thu thập yêu cầu và phát triển tính năng hệ thống",
          "Viết QA và triển khai tính năng theo tài liệu khách hàng",
        ],
      },
      pubcare: {
        role: "Hệ thống y tế công cộng & chăm sóc (Full Stack)",
        highlights: [
          "Hệ thống quản lý y tế (PHR/EHR)",
          "Hệ thống quản lý bệnh nhân",
          "Hệ thống đặt lịch hẹn",
          "Hệ thống phối hợp chăm sóc",
          "Hệ thống quản lý dữ liệu lâm sàng",
          "Phát triển tính năng, tài liệu, QA và triển khai cho khách hàng",
        ],
      },
      smo: {
        role: "Hệ thống sỹ quan y tế thông minh (Front End)",
        highlights: [
          "Quản lý và theo dõi hoạt động thông tin bác sĩ",
          "Phân tích và báo cáo dữ liệu thông tin bác sĩ",
          "Phát triển tính năng, tài liệu, unit test và QA",
          "Triển khai và xác nhận tài liệu với khách hàng",
        ],
      },
      ucaro: {
        role: "Hệ thống tuyển sinh & Đăng ký đại học (Front End)",
        highlights: [
          "Tìm kiếm và thu thập thông tin các trường đại học",
          "Đăng ký thi trực tuyến",
          "Tải và in vé dự thi",
          "Tra cứu kết quả thi và nhận thông báo trúng tuyển",
          "Hoàn tất thủ tục nhập học",
          "Thiết kế component, giao diện, viết Jest test và QA",
        ],
      },
      nehop: {
        role: "Hệ thống quản lý khách sạn (Front End)",
        highlights: [
          "Quản lý vận hành khách sạn: tài khoản, đặt phòng và quản lý phòng",
          "Viết tài liệu Detail Design và Unit Test",
          "Triển khai code sạch, ổn định theo DD",
        ],
      },
      kwn: {
        role: "Hệ thống quản lý tri thức (Front End)",
        highlights: [
          "Quản lý hoạt động admin và tài khoản",
          "Thao tác CRUD và theo dõi tiến độ",
          "Tạo trang admin, đăng nhập và quản lý",
          "Nâng cấp PHP từ phiên bản 5.0 lên 8.0",
        ],
      },
      "core-banking": {
        role: "Hệ thống ngân hàng (Front End)",
        highlights: [
          "Quản lý hoạt động ngân hàng: tài khoản, tiền gửi và cho vay",
          "Triển khai tính năng mới và sửa lỗi theo yêu cầu khách hàng",
          "Hỗ trợ đồng nghiệp và xử lý vấn đề trong quá trình phát triển",
          "Phát triển công cụ nâng cao hiệu quả công việc",
          "Review code và hỗ trợ thành viên trong team",
          "Xác nhận tính năng và chỉnh sửa tài liệu cho khách hàng",
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
