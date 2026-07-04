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
    productivityLabel: "Productivity Tools:",
    items: {
      fis: {
        role: "Hệ thống thông tin tài chính (Full Stack)",
        highlights: [
          "Phát triển và tối ưu hóa các phân hệ cốt lõi bao gồm Lên lịch kiểm tra (Inspection Scheduling) và Ký số (Digital Signature), đảm bảo trải nghiệm người dùng mượt mà trên nhiều nền tảng bằng cách sử dụng Vue.js và Quasar",
          "Thiết kế các cấu trúc cơ sở dữ liệu SQL Server có khả năng mở rộng cao và tối ưu hóa các hàm thủ tục (stored procedures) phức tạp, giúp cải thiện đáng kể thời gian phản hồi truy vấn đối với các báo cáo kiểm tra có dữ liệu lớn",
          "Tận dụng hiệu quả GitHub Copilot để tăng tốc quá trình phát triển dịch vụ backend và tự động tạo các kịch bản kiểm thử, rút ngắn 20% thời gian bàn giao tính năng mới trong khi vẫn duy trì chất lượng mã nguồn ở mức cao",
          "Làm việc trực tiếp với khách hàng để phân tích yêu cầu nghiệp vụ, chuyển đổi linh hoạt các yêu cầu đó thành giải pháp kỹ thuật tối ưu và đảm bảo quá trình Kiểm thử chấp nhận sản phẩm (UAT) diễn ra thành công",
        ],
      },
      smo: {
        role: "Hệ thống sỹ quan y tế thông minh (Front End)",
        highlights: [
          "Xây dựng thành công các bảng điều khiển quản lý (dashboard) trực quan và các tính năng báo cáo phân tích bằng Google Apps Script và jQuery, cung cấp cho các bên liên quan cái nhìn toàn diện theo thời gian thực về hoạt động của bác sĩ",
          "Ứng dụng Cursor AI để đẩy nhanh tốc độ tái cấu trúc (refactor) các đoạn mã nguồn jQuery cũ và tự động hóa việc viết tài liệu Unit Test, rút ngắn đáng kể chu kỳ kiểm định chất lượng (QA validation)",
          "Hợp tác chặt chẽ với các bên liên quan để làm rõ các yêu cầu nghiệp vụ còn mơ hồ, mang lại sự cải tiến vượt trội về khả năng dễ sử dụng (usability) và mức độ hài lòng của người dùng đối với hệ thống",
        ],
      },
      ucaro: {
        role: "Hệ thống tuyển sinh & Đăng ký đại học (Front End)",
        highlights: [
          "Xây dựng kiến trúc các trang web có độ phản hồi cao (responsive) và tối ưu SEO sử dụng Next.js và TypeScript, mang lại trải nghiệm mượt mà cho hệ thống đăng ký thi trực tuyến có lượng truy cập lớn",
          "Chuẩn hóa việc quản lý trạng thái toàn cục (global state) bằng cách triển khai Redux Toolkit nhằm xử lý mượt mà các luồng quy trình đăng ký phức tạp gồm nhiều bước và duy trì tính nhất quán của dữ liệu người dùng qua các phiên làm việc",
          "Xây dựng các biểu mẫu động (dynamic forms) với cơ chế xác thực chặt chẽ bằng React Hook Form và Yup, giảm thiểu tối đa các lỗi nhập liệu phía máy khách (client-side) và nâng cao tính toàn vẹn của dữ liệu",
          "Thiết lập một thư viện thành phần UI (reusable components) có khả năng tái sử dụng cao, giúp tăng 15% hiệu suất phát triển cho các phân hệ tiếp theo trong dự án",
          "Đảm bảo tính ổn định và độ tin cậy của mã nguồn bằng cách đạt tỷ lệ bao phủ kiểm thử cao thông qua Jest unit tests",
        ],
      },
      nehop: {
        role: "Hệ thống quản lý khách sạn (Front End)",
        highlights: [
          "Phát triển các mô-đun vận hành cốt lõi của khách sạn (quản lý đặt phòng và quản lý tài khoản) sử dụng Angular, đáp ứng nghiêm ngặt các quy trình nghiệp vụ phức tạp của doanh nghiệp",
          "Bàn giao các giao diện người dùng đạt độ chính xác tuyệt đối (pixel-perfect) dựa trên các tài liệu thiết kế chi tiết, đảm bảo tính tương thích tốt trên nhiều trình duyệt và độ ổn định cao của ứng dụng",
          "Chủ động khắc phục các lỗi nghiêm trọng được phát hiện trong giai đoạn QA và vận hành thực tế, giảm thiểu rủi ro gián đoạn hệ thống vào các mùa đặt phòng cao điểm",
        ],
      },
      kwn: {
        role: "Hệ thống quản lý tri thức (Full Stack)",
        highlights: [
          "Hiện đại hóa thành công ứng dụng cũ bằng cách nâng cấp toàn bộ mã nguồn từ PHP 5 lên PHP 8, đảm bảo khả năng tương thích ngược hoàn hảo 100% đồng thời nâng cao tính bảo mật cho toàn hệ thống",
          "Tối ưu hóa các câu lệnh SQL cũ và các bảng kết xuất dữ liệu (DataTableJs), rút ngắn thời gian tải trang cho các bảng điều khiển dành cho quản trị viên",
          "Triển khai cơ chế xác thực an toàn và xây dựng toàn diện các tính năng CRUD cho các mô-đun quản trị có quyền hạn cao",
        ],
      },
      "core-banking": {
        role: "Hệ thống ngân hàng (Front End)",
        highlights: [
          "Phát triển và bảo trì các mô-đun ngân hàng doanh nghiệp cực kỳ quan trọng (tài khoản, tiền gửi, khoản vay) sử dụng Next.js và TypeScript, đáp ứng các tiêu chuẩn khắt khe về hiệu năng và bảo mật tài chính",
          "Quản lý hiệu quả các luồng dữ liệu bất đồng bộ phức tạp và các tác vụ phụ (side-effects) của API bằng cách sử dụng Redux Saga, đảm bảo tính nhất quán dữ liệu theo thời gian thực cho các giao dịch tài chính",
          "Đóng góp vào hệ thống thiết kế nội bộ (internal design system) bằng cách xây dựng các thành phần UI có khả năng mở rộng tốt, giúp tăng tốc độ bàn giao mã nguồn frontend cho toàn bộ đội ngũ phát triển",
          "Thúc đẩy sự cải tiến liên tục bằng cách tích cực tham gia đánh giá mã nguồn (code review), hướng dẫn các thành viên cấp dưới (mentoring) và xây dựng các công cụ nội bộ nhằm tối ưu hóa quy trình làm việc của đội ngũ",
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
