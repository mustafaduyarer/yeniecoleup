export const supportedLanguages = ["en", "tr", "es", "fr"] as const;

export type LanguageCode = (typeof supportedLanguages)[number];

export const languageLabels: Record<LanguageCode, string> = {
  en: "English",
  tr: "Turkce",
  es: "Espanol",
  fr: "Francais",
};

export type SiteTranslations = {
  navbar: {
    features: string;
    about: string;
    academics: string;
    contact: string;
    language: string;
    login: string;
    signUp: string;
    loggedIn: string;
  };
  auth: {
    loginTitle: string;
    signupTitle: string;
    onboardingHint: string;
    fullNamePlaceholder: string;
    emailPlaceholder: string;
    passwordPlaceholder: string;
    continue: string;
    signInProgress: string;
    createAccount: string;
    createAccountProgress: string;
    googleContinue: string;
    pleaseWait: string;
    noAccount: string;
    signUpCta: string;
    alreadyRegistered: string;
    loginCta: string;
    loginFailedFallback: string;
    signupFailedFallback: string;
    googleFailedFallback: string;
  };
  dashboard: {
    adminTitle: string;
    teacherTitle: string;
    studentTitle: string;
    parentTitle: string;
    superAdminTitle: string;
    topbarTitle: string;
    sidebarTitle: string;
  };
  hero: {
    titleStart: string;
    titleAccent: string;
    titleEnd: string;
    description: string;
    programs: string;
    learnMore: string;
    imageAltTop: string;
    imageAltBottom: string;
  };
  main: {
    introBadge: string;
    introTitle: string;
    whyTitle: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
    aboutImageAlt: string;
    missionBadge: string;
    missionTitle: string;
    missionDescription: string;
    contactTitle: string;
    contactLine: string;
  };
  pricing: {
    badge: string;
    title: string;
    monthly: string;
    getStarted: string;
  };
  footer: {
    brandLine: string;
    company: string;
    privacyPolicy: string;
    termsOfService: string;
    contentRights: string;
    consentUnder16: string;
    resources: string;
    facultyPortal: string;
    support: string;
    stayConnected: string;
    quote: string;
  };
  legalCommon: {
    lastUpdated: string;
  };
  legalPages: {
    privacy: {
      title: string;
      paragraphs: [string, string, string, string];
    };
    terms: {
      title: string;
      paragraphs: [string, string, string, string];
    };
    contentRights: {
      title: string;
      paragraphs: [string, string, string];
    };
    consentUnder16: {
      title: string;
      paragraphs: [string, string, string];
    };
  };
};

export const translations: Record<LanguageCode, SiteTranslations> = {
  en: {
    navbar: {
      features: "Features",
      about: "About Us",
      academics: "Academics",
      contact: "Contact",
      language: "Language",
      login: "Login",
      signUp: "Sign Up",
      loggedIn: "Logged in",
    },
    auth: {
      loginTitle: "Login",
      signupTitle: "Sign up",
      onboardingHint: "Initial onboarding page scaffold.",
      fullNamePlaceholder: "Full name",
      emailPlaceholder: "Email",
      passwordPlaceholder: "Password",
      continue: "Continue",
      signInProgress: "Signing in...",
      createAccount: "Create account",
      createAccountProgress: "Creating account...",
      googleContinue: "Continue with Google",
      pleaseWait: "Please wait...",
      noAccount: "No account?",
      signUpCta: "Sign up",
      alreadyRegistered: "Already registered?",
      loginCta: "Login",
      loginFailedFallback: "Login failed. Please check your credentials.",
      signupFailedFallback: "Signup failed. Please try again.",
      googleFailedFallback: "Google sign-in failed. Please try again.",
    },
    dashboard: {
      adminTitle: "Admin Dashboard",
      teacherTitle: "Teacher Dashboard",
      studentTitle: "Student Dashboard",
      parentTitle: "Parent Dashboard",
      superAdminTitle: "Super Admin Dashboard",
      topbarTitle: "Dashboard Topbar",
      sidebarTitle: "Sidebar scaffold",
    },
    hero: {
      titleStart: "Education For",
      titleAccent: "Future",
      titleEnd: "Leaders",
      description:
        "We have 25 years of experience in academic curation. Unlocking potential through professional mentorship and modern technological agility.",
      programs: "Our Programs",
      learnMore: "Learn More",
      imageAltTop: "Interconnected global community",
      imageAltBottom: "Diverse students in blended learning environment",
    },
    main: {
      introBadge: "How can we help you",
      introTitle: "We Empower Your Academic Journey",
      whyTitle: "Why EcoleUP?",
      card1Title: "Interactive Learning",
      card1Desc:
        "Engagement beyond the screen. Our learning modules adapt to your pace and style.",
      card2Title: "Expert Mentors",
      card2Desc:
        "Learn directly from industry titans and academic visionaries curated for your growth path.",
      card3Title: "Global Certification",
      card3Desc: "Credentials recognized by leading global institutions.",
      aboutImageAlt: "Diverse students on a vibrant campus",
      missionBadge: "Our Mission",
      missionTitle:
        "Bridging the Gap Between Traditional Wisdom and Digital Innovation.",
      missionDescription:
        "At EcoleUP, we believe education is not a static commodity but a dynamic experience.",
      contactTitle: "Start Your Journey Today",
      contactLine: "admissions@ecoleup.edu • +1 (555) academic-up",
    },
    pricing: {
      badge: "Our Pricing Plan",
      title: "Our Academic Plans",
      monthly: "/monthly",
      getStarted: "GET STARTED",
    },
    footer: {
      brandLine: "© 2024 EcoleUP. The Dynamic Curator of Academic Excellence.",
      company: "Company",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      contentRights: "Content Rights",
      consentUnder16: "Consent Form for Under 16",
      resources: "Resources",
      facultyPortal: "Faculty Portal",
      support: "Support",
      stayConnected: "Stay Connected",
      quote:
        '"The future of education is not a destination, but a journey we curate together."',
    },
    legalCommon: {
      lastUpdated: "Last updated: April 18, 2026",
    },
    legalPages: {
      privacy: {
        title: "Privacy Policy",
        paragraphs: [
          "This Privacy Policy explains how EcoleUP collects, uses, stores, and protects your information when you use our services.",
          "We collect only the data required to provide educational platform functionality, improve user experience, and ensure account security.",
          "We do not sell personal data. We may share data only with trusted service providers where necessary to operate the platform and in compliance with legal obligations.",
          "If you would like to request data access, correction, or deletion, please contact us through our official support channels.",
        ],
      },
      terms: {
        title: "Terms of Service",
        paragraphs: [
          "These Terms of Service govern your access to and use of EcoleUP. By using the platform, you agree to comply with these terms.",
          "Users are responsible for maintaining account security and for all activity performed under their accounts.",
          "You agree to use the platform in compliance with applicable laws and not to misuse, disrupt, or attempt unauthorized access to any part of the service.",
          "We may update these terms from time to time. Continued use of the platform after updates constitutes acceptance of the revised terms.",
        ],
      },
      contentRights: {
        title: "Content Rights",
        paragraphs: [
          "All educational materials, text, visuals, and platform content on EcoleUP are protected by applicable intellectual property laws.",
          "Users may access content for personal educational use only unless explicit written permission is granted by EcoleUP.",
          "Unauthorized copying, distribution, resale, or modification of platform content is prohibited.",
        ],
      },
      consentUnder16: {
        title: "Consent Form for Under 16",
        paragraphs: [
          "If a user is under the age of 16, parent or legal guardian consent is required before creating and using an EcoleUP account.",
          "The guardian confirms permission for account creation, educational activity tracking, and communications related to the platform.",
          "To submit or revoke consent, please contact EcoleUP support through the official communication channels.",
        ],
      },
    },
  },
  tr: {
    navbar: {
      features: "Ozellikler",
      about: "Hakkimizda",
      academics: "Akademik",
      contact: "Iletisim",
      language: "Dil",
      login: "Giris",
      signUp: "Kayit Ol",
      loggedIn: "Giris yapildi",
    },
    auth: {
      loginTitle: "Giris",
      signupTitle: "Kayit Ol",
      onboardingHint: "Ilk kayit/onboarding sayfasi taslagi.",
      fullNamePlaceholder: "Ad Soyad",
      emailPlaceholder: "E-posta",
      passwordPlaceholder: "Sifre",
      continue: "Devam Et",
      signInProgress: "Giris yapiliyor...",
      createAccount: "Hesap Olustur",
      createAccountProgress: "Hesap olusturuluyor...",
      googleContinue: "Google ile Devam Et",
      pleaseWait: "Lutfen bekleyin...",
      noAccount: "Hesabiniz yok mu?",
      signUpCta: "Kayit Ol",
      alreadyRegistered: "Zaten kayitli misiniz?",
      loginCta: "Giris",
      loginFailedFallback:
        "Giris basarisiz. Lutfen bilgilerinizi kontrol edin.",
      signupFailedFallback: "Kayit basarisiz. Lutfen tekrar deneyin.",
      googleFailedFallback:
        "Google ile giris basarisiz. Lutfen tekrar deneyin.",
    },
    dashboard: {
      adminTitle: "Admin Paneli",
      teacherTitle: "Ogretmen Paneli",
      studentTitle: "Ogrenci Paneli",
      parentTitle: "Veli Paneli",
      superAdminTitle: "Super Admin Paneli",
      topbarTitle: "Panel Ust Cubugu",
      sidebarTitle: "Kenar menu taslagi",
    },
    hero: {
      titleStart: "Gelecegin",
      titleAccent: "Liderleri",
      titleEnd: "Icin Egitim",
      description:
        "Akademik planlama alaninda 25 yillik deneyime sahibiz. Profesyonel mentorluk ve modern teknoloji ile potansiyeli ortaya cikariyoruz.",
      programs: "Programlarimiz",
      learnMore: "Daha Fazla",
      imageAltTop: "Baglantili global topluluk",
      imageAltBottom: "Hibrit ogrenme ortaminda ogrenciler",
    },
    main: {
      introBadge: "Size nasil yardimci olabiliriz",
      introTitle: "Akademik Yolculugunuzu Guclendiriyoruz",
      whyTitle: "Neden EcoleUP?",
      card1Title: "Etkilesimli Ogrenme",
      card1Desc:
        "Ekranin otesinde etkilesim. Ogrenme modullerimiz hizina ve tarzina uyum saglar.",
      card2Title: "Uzman Mentorler",
      card2Desc:
        "Sektor liderleri ve akademik vizyonerlerden, gelisim yolunuza uygun ogrenin.",
      card3Title: "Global Sertifikasyon",
      card3Desc: "Belgeniz oncu global kurumlar tarafindan taninir.",
      aboutImageAlt: "Canli kampuste farkli ogrenciler",
      missionBadge: "Misyonumuz",
      missionTitle:
        "Geleneksel bilgelik ile dijital yenilik arasinda kopru kuruyoruz.",
      missionDescription:
        "EcoleUP olarak egitimin sabit bir urun degil, dinamik bir deneyim olduguna inaniyoruz.",
      contactTitle: "Yolculugunuza Bugun Baslayin",
      contactLine: "admissions@ecoleup.edu • +1 (555) academic-up",
    },
    pricing: {
      badge: "Fiyatlandirma Planimiz",
      title: "Akademik Planlarimiz",
      monthly: "/aylik",
      getStarted: "BASLAYIN",
    },
    footer: {
      brandLine: "© 2024 EcoleUP. Akademik Mukemmelligin Dinamik Kuratoru.",
      company: "Sirket",
      privacyPolicy: "Gizlilik Politikasi",
      termsOfService: "Kullanim Sartlari",
      contentRights: "Icerik Haklari",
      consentUnder16: "16 Yas Alti Icin Onay Formu",
      resources: "Kaynaklar",
      facultyPortal: "Ogretim Portali",
      support: "Destek",
      stayConnected: "Baglantiya Gecin",
      quote:
        '"Egitimin gelecegi bir varis noktasi degil, birlikte kurdugumuz bir yolculuktur."',
    },
    legalCommon: {
      lastUpdated: "Son guncelleme: 18 Nisan 2026",
    },
    legalPages: {
      privacy: {
        title: "Gizlilik Politikasi",
        paragraphs: [
          "Bu Gizlilik Politikasi, EcoleUP hizmetlerini kullanirken bilgilerinizin nasil toplandigini, kullanildigini, saklandigini ve korundugunu aciklar.",
          "Yalnizca platform islevlerini sunmak, kullanici deneyimini iyilestirmek ve hesap guvenligini saglamak icin gerekli verileri toplariz.",
          "Kisisel verileri satmayiz. Verileri yalnizca platformu isletmek icin gerekli oldugunda guvenilir hizmet saglayicilarla ve yasal yukumluluklar kapsaminda paylasabiliriz.",
          "Veri erisimi, duzeltme veya silme talebi icin resmi destek kanallarimiz uzerinden bizimle iletisime gecebilirsiniz.",
        ],
      },
      terms: {
        title: "Kullanim Sartlari",
        paragraphs: [
          "Bu Kullanim Sartlari, EcoleUP'a erisim ve kullaniminizi duzenler. Platformu kullanarak bu sartlara uymayi kabul edersiniz.",
          "Kullanicilar hesap guvenligini korumaktan ve hesaplari altinda gerceklesen tum islemlerden sorumludur.",
          "Platformu yasalara uygun sekilde kullanmayi, kotuye kullanmamayi, hizmeti bozmamayi veya yetkisiz erisim denememeyi kabul edersiniz.",
          "Bu sartlari zaman zaman guncelleyebiliriz. Guncellemeden sonra kullanima devam etmeniz yeni sartlari kabul ettiginiz anlamina gelir.",
        ],
      },
      contentRights: {
        title: "Icerik Haklari",
        paragraphs: [
          "EcoleUP uzerindeki tum egitsel materyaller, metinler, gorseller ve platform icerikleri fikri mulkiyet yasalarinca korunur.",
          "Kullanicilar, EcoleUP'tan acik yazili izin olmadikca icerigi yalnizca bireysel egitsel kullanim amaciyla kullanabilir.",
          "Icerigin izinsiz kopyalanmasi, dagitilmasi, yeniden satilmasi veya degistirilmesi yasaktir.",
        ],
      },
      consentUnder16: {
        title: "16 Yas Alti Icin Onay Formu",
        paragraphs: [
          "Kullanici 16 yas altindaysa, EcoleUP hesabi olusturmadan ve kullanmadan once ebeveyn veya yasal vasi onayi gerekir.",
          "Vasi, hesap olusturma, egitsel etkinlik takibi ve platform iletisimleri icin izin verdigini beyan eder.",
          "Onay gondermek veya geri cekmek icin resmi iletisim kanallarimizdan EcoleUP destegi ile iletisime gecebilirsiniz.",
        ],
      },
    },
  },
  es: {
    navbar: {
      features: "Funciones",
      about: "Sobre Nosotros",
      academics: "Academico",
      contact: "Contacto",
      language: "Idioma",
      login: "Iniciar Sesion",
      signUp: "Registrarse",
      loggedIn: "Sesion iniciada",
    },
    auth: {
      loginTitle: "Iniciar Sesion",
      signupTitle: "Registrarse",
      onboardingHint: "Plantilla inicial de onboarding.",
      fullNamePlaceholder: "Nombre completo",
      emailPlaceholder: "Correo electronico",
      passwordPlaceholder: "Contrasena",
      continue: "Continuar",
      signInProgress: "Iniciando sesion...",
      createAccount: "Crear cuenta",
      createAccountProgress: "Creando cuenta...",
      googleContinue: "Continuar con Google",
      pleaseWait: "Espera, por favor...",
      noAccount: "No tienes cuenta?",
      signUpCta: "Registrate",
      alreadyRegistered: "Ya estas registrado?",
      loginCta: "Iniciar Sesion",
      loginFailedFallback:
        "Error de inicio de sesion. Revisa tus credenciales.",
      signupFailedFallback: "Error de registro. Intentalo de nuevo.",
      googleFailedFallback: "Error con Google. Intentalo de nuevo.",
    },
    dashboard: {
      adminTitle: "Panel de Admin",
      teacherTitle: "Panel de Profesor",
      studentTitle: "Panel de Estudiante",
      parentTitle: "Panel de Padres",
      superAdminTitle: "Panel de Super Admin",
      topbarTitle: "Barra Superior del Panel",
      sidebarTitle: "Plantilla de barra lateral",
    },
    hero: {
      titleStart: "Educacion Para",
      titleAccent: "Futuros",
      titleEnd: "Lideres",
      description:
        "Tenemos 25 anos de experiencia en curacion academica. Impulsamos el potencial con mentoria profesional y agilidad tecnologica moderna.",
      programs: "Nuestros Programas",
      learnMore: "Mas Informacion",
      imageAltTop: "Comunidad global interconectada",
      imageAltBottom: "Estudiantes diversos en aprendizaje mixto",
    },
    main: {
      introBadge: "Como podemos ayudarte",
      introTitle: "Impulsamos tu Trayectoria Academica",
      whyTitle: "Por que EcoleUP?",
      card1Title: "Aprendizaje Interactivo",
      card1Desc:
        "Participacion mas alla de la pantalla. Nuestros modulos se adaptan a tu ritmo y estilo.",
      card2Title: "Mentores Expertos",
      card2Desc:
        "Aprende de lideres de la industria y visionarios academicos seleccionados para tu crecimiento.",
      card3Title: "Certificacion Global",
      card3Desc:
        "Credenciales reconocidas por instituciones lideres del mundo.",
      aboutImageAlt: "Estudiantes diversos en un campus vibrante",
      missionBadge: "Nuestra Mision",
      missionTitle:
        "Cerramos la brecha entre la sabiduria tradicional y la innovacion digital.",
      missionDescription:
        "En EcoleUP creemos que la educacion no es un producto estatico, sino una experiencia dinamica.",
      contactTitle: "Comienza tu Camino Hoy",
      contactLine: "admissions@ecoleup.edu • +1 (555) academic-up",
    },
    pricing: {
      badge: "Nuestro Plan de Precios",
      title: "Nuestros Planes Academicos",
      monthly: "/mensual",
      getStarted: "COMENZAR",
    },
    footer: {
      brandLine:
        "© 2024 EcoleUP. El Curador Dinamico de la Excelencia Academica.",
      company: "Compania",
      privacyPolicy: "Politica de Privacidad",
      termsOfService: "Terminos del Servicio",
      contentRights: "Derechos de Contenido",
      consentUnder16: "Formulario de Consentimiento para Menores de 16",
      resources: "Recursos",
      facultyPortal: "Portal Docente",
      support: "Soporte",
      stayConnected: "Mantente Conectado",
      quote:
        '"El futuro de la educacion no es un destino, sino un camino que construimos juntos."',
    },
    legalCommon: {
      lastUpdated: "Ultima actualizacion: 18 de abril de 2026",
    },
    legalPages: {
      privacy: {
        title: "Politica de Privacidad",
        paragraphs: [
          "Esta Politica de Privacidad explica como EcoleUP recopila, usa, almacena y protege tu informacion cuando utilizas nuestros servicios.",
          "Recopilamos solo los datos necesarios para ofrecer funciones educativas, mejorar la experiencia del usuario y garantizar la seguridad de la cuenta.",
          "No vendemos datos personales. Podemos compartir datos solo con proveedores de confianza cuando sea necesario para operar la plataforma y cumplir obligaciones legales.",
          "Si deseas solicitar acceso, correccion o eliminacion de datos, contactanos por nuestros canales oficiales de soporte.",
        ],
      },
      terms: {
        title: "Terminos del Servicio",
        paragraphs: [
          "Estos Terminos del Servicio regulan tu acceso y uso de EcoleUP. Al usar la plataforma, aceptas cumplir estos terminos.",
          "Los usuarios son responsables de mantener la seguridad de la cuenta y de toda actividad realizada bajo sus cuentas.",
          "Aceptas usar la plataforma conforme a la ley y no usarla indebidamente, no interrumpirla ni intentar acceso no autorizado.",
          "Podemos actualizar estos terminos periodicamente. El uso continuo despues de los cambios implica aceptacion de los terminos revisados.",
        ],
      },
      contentRights: {
        title: "Derechos de Contenido",
        paragraphs: [
          "Todos los materiales educativos, textos, visuales y contenidos de EcoleUP estan protegidos por leyes de propiedad intelectual aplicables.",
          "Los usuarios pueden acceder al contenido solo para uso educativo personal, salvo autorizacion escrita explicita de EcoleUP.",
          "Queda prohibida la copia, distribucion, reventa o modificacion no autorizada del contenido.",
        ],
      },
      consentUnder16: {
        title: "Formulario de Consentimiento para Menores de 16",
        paragraphs: [
          "Si un usuario es menor de 16 anos, se requiere consentimiento del padre, madre o tutor legal antes de crear y usar una cuenta en EcoleUP.",
          "El tutor confirma su permiso para creacion de cuenta, seguimiento de actividad educativa y comunicaciones relacionadas con la plataforma.",
          "Para enviar o revocar consentimiento, contacta al soporte de EcoleUP por los canales oficiales.",
        ],
      },
    },
  },
  fr: {
    navbar: {
      features: "Fonctionnalites",
      about: "A Propos",
      academics: "Academique",
      contact: "Contact",
      language: "Langue",
      login: "Connexion",
      signUp: "Inscription",
      loggedIn: "Connecte",
    },
    auth: {
      loginTitle: "Connexion",
      signupTitle: "Inscription",
      onboardingHint: "Structure initiale de la page d'accueil utilisateur.",
      fullNamePlaceholder: "Nom complet",
      emailPlaceholder: "E-mail",
      passwordPlaceholder: "Mot de passe",
      continue: "Continuer",
      signInProgress: "Connexion en cours...",
      createAccount: "Creer un compte",
      createAccountProgress: "Creation du compte...",
      googleContinue: "Continuer avec Google",
      pleaseWait: "Veuillez patienter...",
      noAccount: "Pas de compte?",
      signUpCta: "Inscrivez-vous",
      alreadyRegistered: "Deja inscrit?",
      loginCta: "Connexion",
      loginFailedFallback: "Echec de connexion. Verifiez vos identifiants.",
      signupFailedFallback: "Echec de l'inscription. Reessayez.",
      googleFailedFallback: "Echec de connexion Google. Reessayez.",
    },
    dashboard: {
      adminTitle: "Tableau de bord Admin",
      teacherTitle: "Tableau de bord Enseignant",
      studentTitle: "Tableau de bord Etudiant",
      parentTitle: "Tableau de bord Parent",
      superAdminTitle: "Tableau de bord Super Admin",
      topbarTitle: "Barre superieure du tableau de bord",
      sidebarTitle: "Structure de la barre laterale",
    },
    hero: {
      titleStart: "Education Pour",
      titleAccent: "Les Futurs",
      titleEnd: "Leaders",
      description:
        "Nous avons 25 ans d'experience en accompagnement academique. Nous revelons le potentiel grace au mentorat professionnel et a l'agilite technologique moderne.",
      programs: "Nos Programmes",
      learnMore: "En Savoir Plus",
      imageAltTop: "Communaute mondiale interconnectee",
      imageAltBottom: "Etudiants divers dans un apprentissage hybride",
    },
    main: {
      introBadge: "Comment pouvons-nous vous aider",
      introTitle: "Nous renforcons votre parcours academique",
      whyTitle: "Pourquoi EcoleUP?",
      card1Title: "Apprentissage Interactif",
      card1Desc:
        "Un engagement au-dela de l'ecran. Nos modules s'adaptent a votre rythme et a votre style.",
      card2Title: "Mentors Experts",
      card2Desc:
        "Apprenez directement des leaders du secteur et des visionnaires academiques choisis pour votre progression.",
      card3Title: "Certification Mondiale",
      card3Desc:
        "Des certifications reconnues par les principales institutions mondiales.",
      aboutImageAlt: "Etudiants divers sur un campus dynamique",
      missionBadge: "Notre Mission",
      missionTitle:
        "Combler l'ecart entre sagesse traditionnelle et innovation numerique.",
      missionDescription:
        "Chez EcoleUP, nous croyons que l'education n'est pas un produit statique mais une experience dynamique.",
      contactTitle: "Commencez votre parcours aujourd'hui",
      contactLine: "admissions@ecoleup.edu • +1 (555) academic-up",
    },
    pricing: {
      badge: "Notre Offre Tarifaire",
      title: "Nos Plans Academiques",
      monthly: "/mensuel",
      getStarted: "COMMENCER",
    },
    footer: {
      brandLine:
        "© 2024 EcoleUP. Le Curateur Dynamique de l'Excellence Academique.",
      company: "Entreprise",
      privacyPolicy: "Politique de Confidentialite",
      termsOfService: "Conditions d'Utilisation",
      contentRights: "Droits sur le Contenu",
      consentUnder16: "Formulaire de Consentement pour les Moins de 16 ans",
      resources: "Ressources",
      facultyPortal: "Portail Enseignant",
      support: "Support",
      stayConnected: "Restez Connecte",
      quote:
        "\"L'avenir de l'education n'est pas une destination, mais un parcours que nous construisons ensemble.\"",
    },
    legalCommon: {
      lastUpdated: "Derniere mise a jour: 18 avril 2026",
    },
    legalPages: {
      privacy: {
        title: "Politique de Confidentialite",
        paragraphs: [
          "Cette Politique de Confidentialite explique comment EcoleUP collecte, utilise, stocke et protege vos informations lorsque vous utilisez nos services.",
          "Nous collectons uniquement les donnees necessaires pour fournir les fonctionnalites educatives, ameliorer l'experience utilisateur et assurer la securite du compte.",
          "Nous ne vendons pas de donnees personnelles. Nous pouvons partager des donnees uniquement avec des prestataires de confiance lorsque cela est necessaire pour exploiter la plateforme et respecter les obligations legales.",
          "Si vous souhaitez demander l'acces, la correction ou la suppression des donnees, veuillez nous contacter via nos canaux officiels de support.",
        ],
      },
      terms: {
        title: "Conditions d'Utilisation",
        paragraphs: [
          "Ces Conditions d'Utilisation regissent votre acces et votre utilisation d'EcoleUP. En utilisant la plateforme, vous acceptez de respecter ces conditions.",
          "Les utilisateurs sont responsables de la securite de leur compte et de toute activite effectuee sous leur compte.",
          "Vous acceptez d'utiliser la plateforme conformement aux lois applicables et de ne pas en faire un usage abusif, de ne pas la perturber et de ne pas tenter d'acces non autorise.",
          "Nous pouvons mettre a jour ces conditions periodiquement. La poursuite de l'utilisation apres mise a jour vaut acceptation des conditions revisees.",
        ],
      },
      contentRights: {
        title: "Droits sur le Contenu",
        paragraphs: [
          "Tous les supports educatifs, textes, visuels et contenus de la plateforme EcoleUP sont proteges par les lois applicables sur la propriete intellectuelle.",
          "Les utilisateurs peuvent acceder au contenu uniquement pour un usage educatif personnel, sauf autorisation ecrite explicite d'EcoleUP.",
          "La copie, la distribution, la revente ou la modification non autorisee du contenu est interdite.",
        ],
      },
      consentUnder16: {
        title: "Formulaire de Consentement pour les Moins de 16 ans",
        paragraphs: [
          "Si un utilisateur a moins de 16 ans, le consentement d'un parent ou tuteur legal est requis avant la creation et l'utilisation d'un compte EcoleUP.",
          "Le tuteur confirme son autorisation pour la creation du compte, le suivi des activites educatives et les communications liees a la plateforme.",
          "Pour soumettre ou retirer le consentement, veuillez contacter le support EcoleUP via les canaux officiels.",
        ],
      },
    },
  },
};
