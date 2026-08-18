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
        "Lập trình viên Full-stack với hơn 4 năm kinh nghiệm phát triển các ứng dụng web quy mô doanh nghiệp, sở hữu chuyên môn vững chắc về phát triển frontend sử dụng React.js, Next.js, TypeScript và JavaScript. Có kinh nghiệm xây dựng kiến ​​trúc giao diện (UI) có khả năng mở rộng, quản lý trạng thái, tích hợp API, kiểm thử tự động và phát triển các dịch vụ backend bằng ASP.NET Core và PHP Laravel. Đã từng làm việc trong các lĩnh vực ngân hàng, giáo dục, y tế, thông tin tài chính và hệ thống quản lý doanh nghiệp; phối hợp chặt chẽ với các nhóm đa chức năng và khách hàng để triển khai các giải pháp hoàn thiện, sẵn sàng đưa vào vận hành thực tế.",
      expertiseTitle: "Lĩnh vực chính là phát triển front-end",
      expertise:
        "Luôn chủ động, có kỹ năng giải quyết vấn đề, quản lý thời gian và giao tiếp tốt, có khả năng thích ứng nhanh với công nghệ mới và yêu cầu nghiệp vụ. Có kinh nghiệm HTML5, CSS3, JavaScript/TypeScript, xây dựng ứng dụng web quy mô vừa và lớn với React và Next.js, cùng Redux, React Query, React Hook Form và unit testing với Jest và Vitest.",
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
      "core-banking": {
        role: "Banking Transaction System (Front End)",
        highlights: [
          "Phát triển và bảo trì các mô-đun ngân hàng trọng yếu, bao gồm quy trình gửi tiền và cho vay, sử dụng Next.js, React.js và TypeScript.",
          "riển khai các luồng dữ liệu bất đồng bộ phức tạp và xử lý các tác dụng phụ (side effects) của API bằng Redux Saga để hỗ trợ quy trình giao dịch tài chính.",
          "Xây dựng các thành phần giao diện (UI components) có khả năng tái sử dụng và mở rộng trong hệ thống thiết kế nội bộ, giúp tăng tính nhất quán và hiệu suất phát triển của cả nhóm.",
          "Tham gia đánh giá mã nguồn (code review) và hướng dẫn các lập trình viên cấp dưới nhằm nâng cao chất lượng mã và quy trình phát triển.",
          "Đóng góp vào việc xây dựng các công cụ phát triển nội bộ và cải tiến quy trình làm việc để tăng hiệu suất phát triển front-end.",
        ],
      },
      ucaro: {
        role: "University Admission & Registration System (Front End)",
        highlights: [
          "Thiết kế kiến ​​trúc cho quy trình tuyển sinh và đăng ký có giao diện thích ứng (responsive) và thân thiện với SEO bằng Next.js, TypeScript và Redux Toolkit; hỗ trợ các quy trình đa bước phức tạp và duy trì trạng thái người dùng xuyên suốt.",
          "Xây dựng các thành phần biểu mẫu (form) và giao diện có khả năng tái sử dụng cùng cơ chế kiểm tra dữ liệu chặt chẽ (sử dụng React Hook Form, Yup và TypeScript), giúp tăng 15% hiệu suất phát triển cho các mô-đun sau đó đồng thời giảm thiểu lỗi khi gửi biểu mẫu.",
          "Đảm bảo độ tin cậy của ứng dụng thông qua kiểm thử đơn vị (unit testing) với Jest, kiến ​​trúc thành phần có thể tái sử dụng và các quy trình phát triển front-end nhất quán.",
        ],
      },
      nehop: {
        role: "Hotel Management System (Front End)",
        highlights: [
          "Phát triển các mô-đun vận hành khách sạn cốt lõi, bao gồm đặt phòng và quản lý tài khoản, sử dụng Angular.",
          "Triển khai giao diện thích ứng (responsive) và đảm bảo độ chính xác tuyệt đối so với thiết kế (pixel-perfect), đồng thời khắc phục các lỗi nghiêm trọng phát sinh trong quá trình kiểm thử (QA) và vận hành thực tế (production).",
        ],
      },
      fis: {
        role: "Financial Information System (Full Stack)",
        highlights: [
          "Phát triển và tối ưu hóa các mô-đun cốt lõi bao gồm Lập lịch Kiểm tra và Chữ ký số bằng Vue.js và Quasar.",
          "Phối hợp trực tiếp với khách hàng để phân tích yêu cầu nghiệp vụ và chuyển đổi chúng thành các giải pháp kỹ thuật.",
          "Hỗ trợ giai đoạn Kiểm thử chấp nhận người dùng (UAT) bằng cách giải quyết các vấn đề về chức năng và làm rõ các yêu cầu kỹ thuật.",
          "Đóng góp vào việc phát triển dịch vụ backend và tạo các kịch bản kiểm thử tự động bằng GitHub Copilot, giúp giảm 20% thời gian triển khai tính năng.",
        ],
      },
      pubcare: {
        role: "Pubcare System (Full Stack)",
        highlights: [
          "Phát triển các mô-đun full-stack cho quy trình xếp hàng chờ khám, đặt lịch hẹn và hệ thống thông báo tự động.",
          "Tối ưu hóa quy trình làm việc ở giao diện người dùng (frontend) và các REST API phía máy chủ (backend) dành cho nhân viên y tế, đồng thời triển khai cơ chế kiểm tra dữ liệu đầu vào và phân quyền truy cập dựa trên vai trò.",
        ],
      },
      kwn: {
        role: "Knowledge Management System (Full Stack)",
        highlights: [
          "Hiện đại hóa ứng dụng cũ từ PHP 5 lên PHP 8 trong khi vẫn duy trì các chức năng nghiệp vụ hiện có và tăng cường tính bảo mật cho ứng dụng.",
          "Tối ưu hóa các truy vấn SQL và bảng hiển thị dữ liệu (DataTableJs) từ hệ thống cũ, giúp giảm thời gian tải trang cho các bảng điều khiển quản trị.",
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
