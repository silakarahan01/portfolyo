export type ProjectStatus = "live" | "github-only" | "live-no-repo";

// Hangi alanda olduğu — sayfada iki ayrı bölüme bölmek için kullanılır.
export type ProjectDomain = "frontend" | "data-science";

// Veri bilimi kartlarında tek bakışta sonucu gösteren metrik (ör. "%92 Doğruluk").
export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string | null;
  demo: string | null;
  screenshot: string;
  status: ProjectStatus;
  category: "web-app" | "landing" | "desktop" | "platform" | "data-science";
  domain: ProjectDomain;
  metrics?: ProjectMetric[];
}

export const projects: Project[] = [
  // ───────────────────────── Frontend & Yazılım ─────────────────────────
  {
    title: "Goal Testing — Ana Platform",
    description:
      "Goal Testing'in ana kurumsal web sitesi. Bu projede frontend (arayüz) geliştirmesinde yer aldım; modern, kullanıcı dostu arayüzle hizmet ve ürünleri sergiliyor.",
    tech: ["HTML5", "Tailwind CSS", "JavaScript"],
    github: null,
    demo: "https://goaltesting.net",
    screenshot: "/screenshots/anaplatform.png",
    status: "live-no-repo",
    category: "platform",
    domain: "frontend",
  },
  {
    title: "Goal Testing — Satış Portalı",
    description:
      "Goal Testing'in satış ekipleri için yönetim ve takip portalı. Bu projede frontend (arayüz) geliştirmesinde çalıştım.",
    tech: ["HTML5", "Tailwind CSS", "JavaScript"],
    github: null,
    demo: "https://sales.goaltesting.net",
    screenshot: "/screenshots/toefl-satıs-sitesi.png",
    status: "live-no-repo",
    category: "platform",
    domain: "frontend",
  },
  {
    title: "NEURO SOUND",
    description:
      "Django tabanlı frekans terapi platformu. Psikologlar, danışanlar ve bireysel kullanıcılar platforma girerek frekans terapisi seansları alabiliyorlar.",
    tech: ["Django", "HTML5", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/silakarahan01/Neuro-Sound",
    demo: null, // Deploy edilince: "https://neuro.silakarahan.com.tr"
    screenshot: "/screenshots/neuro-sound.png",
    status: "github-only",
    category: "web-app",
    domain: "frontend",
  },
  {
    title: "DizGitsin — Landing Page",
    description:
      "101 Okey asistanı uygulaması için landing page. GSAP + Lenis ile scroll'a bağlı sinematik canvas animasyonları ve akıcı geçişler.",
    tech: ["Next.js", "TypeScript", "GSAP", "Tailwind CSS"],
    github: "https://github.com/silakarahan01/dizgitsin-landing",
    demo: "https://dizgitsin.com",
    screenshot: "/screenshots/Dizgitsin1024x500.png",
    status: "live",
    category: "landing",
    domain: "frontend",
  },
  {
    title: "Döviz Projesi",
    description:
      "C# / WPF ile geliştirilmiş masaüstü döviz kur takip uygulaması. Gerçek zamanlı döviz verilerini görselleştiriyor.",
    tech: ["C#", "WPF", ".NET", "MVVM"],
    github: "https://github.com/silakarahan01/doviz-projesi",
    demo: null,
    screenshot: "/screenshots/csharp-net.png",
    status: "github-only",
    category: "desktop",
    domain: "frontend",
  },
  {
    title: "ATM Uygulaması",
    description:
      "Blazor ile geliştirilmiş web tabanlı ATM simülasyon uygulaması. Para çekme, yatırma ve hesap yönetimi gibi temel bankacılık işlemlerini web üzerinde simüle ediyor.",
    tech: ["C#", ".NET", "Blazor"],
    github: "https://github.com/silakarahan01/atm-dotnet",
    demo: null,
    screenshot: "/screenshots/csharp-net.png",
    status: "github-only",
    category: "web-app",
    domain: "frontend",
  },

  // ─────────────────────────── Veri Bilimi ───────────────────────────
  {
    title: "Fake News Detection",
    description:
      "Haber metinlerinin gerçek mi sahte mi olduğunu sınıflandıran NLP modeli. TF-IDF + SVM, NLTK ile metin ön işleme (tokenization, stemming, stopword) ve tahmin için Tkinter arayüzü.",
    tech: ["Python", "scikit-learn", "NLTK", "TF-IDF", "Tkinter"],
    github: "https://github.com/silakarahan01/Fake-News-Detection-",
    demo: null,
    screenshot: "/screenshots/fake-news.jpg",
    status: "github-only",
    category: "data-science",
    domain: "data-science",
  },
  {
    title: "Voice Analysis (Deep Learning)",
    description:
      "Ses kayıtlarından konuşan kişiyi/sanatçıyı tanıyan derin öğrenme modeli. Mel-spektrogram özellikleri ve 3 katmanlı CNN ile sınıflandırma.",
    tech: ["Python", "TensorFlow", "Keras", "librosa", "CNN"],
    github: "https://github.com/silakarahan01/Voice-Analysis-Project-Deep-Learning",
    demo: null,
    screenshot: "/screenshots/voice-analiz.png",
    status: "github-only",
    category: "data-science",
    domain: "data-science",
  },
  {
    title: "Melanoma Skin Cancer",
    description:
      "Cilt lezyonu görüntülerinden melanom (cilt kanseri) olup olmadığını sınıflandıran CNN tabanlı derin öğrenme modeli.",
    tech: ["Python", "Keras", "CNN", "Deep Learning"],
    github: "https://github.com/silakarahan01/Melanoma-Skin-Cancer",
    demo: null,
    screenshot: "/screenshots/melonoma-skin-cancer.jpeg",
    status: "github-only",
    category: "data-science",
    domain: "data-science",
  },
  {
    title: "USA Accidents — Veri Madenciliği",
    description:
      "~7M satırlık ABD trafik kazası verisinde (Kaggle) kaza şiddetini (1–4) tahmin eden veri madenciliği projesi. PCA + özellik mühendisliği ve gradient boosting ile sınıflandırma. Ekip projesi.",
    tech: ["Python", "Pandas", "XGBoost", "LightGBM", "scikit-learn"],
    github: "https://github.com/ahmetk60/usa-acc",
    demo: null,
    screenshot: "/screenshots/usa-acc.png",
    status: "github-only",
    category: "data-science",
    domain: "data-science",
    metrics: [
      { label: "Doğruluk", value: "~%90" },
      { label: "F1", value: "~0.85" },
    ],
  },
];
