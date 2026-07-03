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
    items: {
      fis: {
        role: "Hệ thống thông tin tài chính (Full Stack) (Support Team)",
        highlights: [
          "Lên lịch kiểm tra",
          "Quản lý checklist kiểm tra",
          "Tải lên ảnh & tài liệu",
          "Chữ ký số",
          "Báo cáo lỗi",
          "Phát triển các tính năng frontend bằng Vue.js và dịch vụ backend bằng ASP.NET Core 8",
          "Triển khai các chức năng lập lịch kiểm tra, quản lý checklist, tải lên tài liệu và chữ ký số",
          "Tham gia phân tích yêu cầu và chuyển đổi các yêu cầu nghiệp vụ thành giải pháp kỹ thuật",
          "Triển khai các bản cập nhật ứng dụng và hỗ trợ quá trình kiểm thử chấp nhận người dùng (UAT)",
          "Làm việc chặt chẽ với khách hàng để rà soát tài liệu và hoàn thiện các chức năng bàn giao"
        ],
      },
      smo: {
        role: "Hệ thống sỹ quan y tế thông minh (Front End)",
        highlights: [
          "Quản lý và theo dõi hoạt động thông tin bác sĩ",
          "Phân tích và báo cáo dữ liệu thông tin bác sĩ",
          "Phát triển các dashboard quản trị và tính năng báo cáo bằng Google Apps Script và jQuery",
          "Triển khai logic nghiệp vụ để giám sát và phân tích dữ liệu hoạt động y tế",
          "Xây dựng tài liệu kỹ thuật và tài liệu Unit Test cho các tính năng đã triển khai",
          "Thực hiện kiểm thử tính năng và xác thực QA trước khi triển khai",
          "Hỗ trợ các hoạt động triển khai và xác nhận hoàn thành tính năng với khách hàng",
          "Làm việc trực tiếp với các bên liên quan để làm rõ yêu cầu và cải thiện tính khả dụng của hệ thống"
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
          "Phát triển các ứng dụng web responsive bằng Next.js và TypeScript",
          "Xây dựng các form động sử dụng React Hook Form kết hợp xác thực phía client toàn diện",
          "Quản lý trạng thái ứng dụng bằng Redux Toolkit",
          "Tích hợp RESTful API và triển khai tính năng hỗ trợ đa ngôn ngữ bằng i18n",
          "Thiết kế các component có thể tái sử dụng nhằm tối ưu tính nhất quán và hiệu suất phát triển",
          "Viết Jest unit test để đảm bảo chất lượng và khả năng bảo trì của mã nguồn",
          "Tham gia triển khai tính năng và xác nhận các chức năng đã hoàn thiện với khách hàng",
          "Phối hợp với designer, backend developer và QA engineer để hoàn thành các cột mốc (milestones) của dự án"
        ],
      },
      nehop: {
        role: "Hệ thống quản lý khách sạn (Front End)",
        highlights: [
          "Quản lý vận hành khách sạn: tài khoản, đặt phòng và quản lý phòng",
          "Phát triển các module quản lý khách sạn bằng Angular dựa trên các yêu cầu nghiệp vụ",
          "Triển khai giao diện người dùng theo tài liệu thiết kế chi tiết",
          "Xây dựng tài liệu thiết kế chi tiết (Detail Design) và tài liệu Unit Test cho các tính năng được giao",
          "Bảo trì và cải tiến các chức năng hiện có nhằm đảm bảo tính ổn định của ứng dụng",
          "Sửa các lỗi phát sinh trong quá trình kiểm thử và hỗ trợ vận hành (production support)",
          "Phối hợp với developer, QA engineer và business analyst (BA) trong suốt vòng đời dự án"
        ],
      },
      kwn: {
        role: "Hệ thống quản lý tri thức (Front End)",
        highlights: [
          "Quản lý hoạt động admin và tài khoản",
          "Thao tác CRUD và theo dõi tiến độ",
          "Tạo trang admin, đăng nhập và quản lý",
          "Phát triển các module quản trị sử dụng PHP, JavaScript, jQuery và HTML",
          "Triển khai các chức năng xác thực (authentication), quản lý người dùng và CRUD cho quản trị viên",
          "Cải tiến các tính năng hiện có và bảo trì mã nguồn cũ (legacy source code)",
          "Nâng cấp ứng dụng từ PHP 5 lên PHP 8 đồng thời đảm bảo tính tương thích ngược (backward compatibility)",
          "Tối ưu hóa các câu lệnh SQL và cải thiện hiệu suất ứng dụng",
          "Làm việc chặt chẽ với các thành viên trong nhóm để phân tích yêu cầu và bàn giao các tính năng được yêu cầu"
        ],
      },
      "core-banking": {
        role: "Hệ thống ngân hàng (Front End)",
        highlights: [
          "Quản lý hoạt động ngân hàng: tài khoản, tiền gửi và cho vay",
          "Phát triển và bảo trì các module ngân hàng doanh nghiệp (enterprise banking) sử dụng React.js, Next.js và TypeScript",
          "Xây dựng các UI component có thể tái sử dụng và mở rộng (scalable) theo design system của dự án",
          "Tích hợp các RESTful API và xử lý dữ liệu bất đồng bộ sử dụng Redux Saga",
          "Triển khai các tính năng mới và cải tiến các chức năng hiện có dựa trên các yêu cầu nghiệp vụ",
          "Viết các bản Jest unit test toàn diện nhằm đảm bảo tính tin cậy và khả năng bảo trì của ứng dụng",
          "Điều tra và khắc phục các sự cố trên môi trường production, đồng thời tối ưu hóa hiệu suất ứng dụng",
          "Phát triển các công cụ nội bộ nhằm nâng cao hiệu suất phát triển và năng suất của đội ngũ",
          "Phối hợp chặt chẽ với backend developer, QA engineer và business analyst (BA) trong suốt vòng đời phát triển",
          "Rà soát các tài liệu thiết kế và xác thực các tính năng đã triển khai trước khi bàn giao cho khách hàng"
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
