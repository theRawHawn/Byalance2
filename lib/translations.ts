export type Language = 'en' | 'hi' | 'kn' | 'mr' | 'te' | 'ta';

export interface Translations {
  nav: {
    home: string;
    about: string;
    services: string;
    pricing: string;
    contact: string;
    allServices: string;
    whatsapp: string;
  };
  hero: {
    subtitle: string;
    description: string;
    bookConsultation: string;
    whatsappNow: string;
  };
  sections: {
    whyChooseUs: string;
    whySubtitle: string;
    about: string;
    services: string;
    servicesSubtitle: string;
    pricing: string;
    pricingSubtitle: string;
    contact: string;
    contactSubtitle: string;
    getInTouch: string;
  };
  features: {
    transparentPricing: string;
    transparentPricingDesc: string;
    localLanguage: string;
    localLanguageDesc: string;
    compliance: string;
    complianceDesc: string;
    microFriendly: string;
    microFriendlyDesc: string;
  };
  cta: {
    bookConsultation: string;
    contactCustom: string;
    choosePlan: string;
    learnMore: string;
    sendMessage: string;
    sending: string;
    chatWhatsApp: string;
  };
  pricing: {
    starter: string;
    starterPrice: string;
    growth: string;
    growthPrice: string;
    pro: string;
    proPrice: string;
    recommended: string;
    perMonth: string;
    notIdeal: string;
    notIdealDesc: string;
    starterFeatures: string[];
    growthFeatures: string[];
    proFeatures: string[];
  };
  contact: {
    sendMessage: string;
    phone: string;
    email: string;
    address: string;
    hours: string;
    hoursValue: string[];
    preferWhatsApp: string;
    preferWhatsAppDesc: string;
    name: string;
    mobile: string;
    businessType: string;
    message: string;
    namePlaceholder: string;
    mobilePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    contactInfo: string;
    emailLabel: string;
    businessTypes: {
      retail: string;
      micro: string;
      small: string;
      startup: string;
      msme: string;
      other: string;
    }
    businessTypePlaceholder: string;
  };
  footer: {
    quickLinks: string;
    services: string;
    contactInfo: string;
    rights: string;
    privacyPolicy: string;
    dataHandlingPolicy: string;
    phone: string[];
    email: string[];
    address: string[];
    gstin: string;
  };
  services: {
    accounting: {
      title: string;
      description: string;
      features: string[];
    };
    itr: {
      title: string;
      description: string;
      features: string[];
    };
    gst: {
      title: string;
      description: string;
      features: string[];
    };
    tds: {
      title: string;
      description: string;
      features: string[];
    };
    payroll: {
      title: string;
      description: string;
      features: string[];
    };
  };
  about: {
    title: string;
    p1: string;
    p2: string;
    missionTitle: string;
    missionText: string;
    features: {
      trusted: {
        title: string;
        description: string;
      };
      growth: {
        title: string;
        description: string;
      };
      timely: {
        title: string;
        description: string;
      };
    };
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      pricing: 'Pricing',
      contact: 'Contact',
      allServices: 'All Services',
      whatsapp: 'WhatsApp',
    },
    hero: {
      subtitle: 'Simplifying Accounting, Powering Growth.',
      description: 'We handle your GST, TDS, Payroll, and Full Accounting — so you focus on your business.',
      bookConsultation: 'Book Free Consultation',
      whatsappNow: 'WhatsApp Now',
    },
    sections: {
      whyChooseUs: 'Why Choose BYALANCE?',
      whySubtitle: 'Professional accounting services tailored for growing businesses',
      about: 'About Byalance',
      services: 'Our Services',
      servicesSubtitle: 'Complete accounting solutions tailored for your business',
      pricing: 'Transparent Pricing',
      pricingSubtitle: 'Choose the plan that fits your business needs',
      contact: 'Get In Touch',
      contactSubtitle: "Ready to simplify your Compliance? Let's start the conversation.",
      getInTouch: 'Send us a message',
    },
    features: {
      transparentPricing: 'Transparent Pricing',
      transparentPricingDesc: 'Clear, upfront pricing with no hidden costs. Know exactly what you pay for.',
      localLanguage: 'Local Language Support',
      localLanguageDesc: 'Communicate in your preferred language. We understand local business needs.',
      compliance: 'End-to-End Compliance',
      complianceDesc: 'Complete compliance management from registration to filing and beyond.',
      microFriendly: 'Micro Business Friendly',
      microFriendlyDesc: 'Services available even for the smallest businesses. Grow with confidence.',
    },
    cta: {
      bookConsultation: 'Book Free Consultation',
      contactCustom: 'Contact for Custom Pricing',
      choosePlan: 'Choose',
      learnMore: 'Learn More',
      sendMessage: 'Send Message',
      sending: 'Sending...',
      chatWhatsApp: 'Chat on WhatsApp',
    },
    pricing: {
      starter: 'Starter Plan',
      starterPrice: '₹1,999 – ₹6,999',
      growth: 'Growth Plan',
      growthPrice: '₹7,499 – ₹14,999',
      pro: 'Pro Plan',
      proPrice: '₹15,499 – ₹20,000+',
      recommended: 'Recommended',
      perMonth: 'per month',
      notIdeal: 'Not an Ideal Pricing?',
      notIdealDesc: 'Need a custom solution? Let\'s discuss your specific requirements.',
      starterFeatures: ["GST Returns", "Basic Bookkeeping", "Sales & Purchase Entries", "Monthly Financial Reports"],
      growthFeatures: ["GST Returns & Compliance", "TDS Returns & Filing", "Full Accounting & Bookkeeping", "Bank Reconciliation", "Financial Reports (P&L, Balance Sheet)"],
      proFeatures: ["GST & TDS Complete Management", "Payroll Processing", "Complete Accounting Services", "Advanced Financial Reports", "Priority Support"]
    },
    contact: {
      sendMessage: 'Send us a message',
      phone: 'Phone',
      email: 'Email',
      address: 'Address',
      hours: 'Business Hours',
      hoursValue: ['Monday – Saturday: 9:00 AM – 6:00 PM', 'Sunday: Closed'],
      preferWhatsApp: 'Prefer WhatsApp?',
      preferWhatsAppDesc: 'Get instant responses to your queries on WhatsApp.',
      name: 'Full Name',
      mobile: 'Mobile Number',
      businessType: 'Business Type',
      message: 'Message',
      namePlaceholder: 'Enter your name',
      mobilePlaceholder: 'Enter your mobile number',
      emailPlaceholder: 'Enter your Email ID',
      messagePlaceholder: 'Tell us about your accounting needs...',
      contactInfo: 'Contact Information',
      emailLabel: 'Email *',
      businessTypePlaceholder: 'Select your business type',
      businessTypes: {
        retail: 'Retail Store',
        micro: 'Micro Business',
        small: 'Small Business',
        startup: 'Startup',
        msme: 'MSME',
        other: 'Other',
      }
    },
    footer: {
      quickLinks: 'Quick Links',
      services: 'Services',
      contactInfo: 'Contact Info',
      rights: '© 2026 Byalance. All rights reserved.',
      privacyPolicy: 'Privacy Policy',
      dataHandlingPolicy: 'Data Handling Policy',
      phone: ['+91 74062 96116', '+91 96111 93492'],
      email: ['info@byalance.in'],
      address: ['4th Phase, JP Nagar', 'Bengaluru, Karnataka 560078'],
      gstin: 'GSTIN: ',
    },
    services: {
      accounting: {
        title: "Accounting & Bookkeeping",
        description: "Comprehensive accounting services to keep your books accurate and up-to-date.",
        features: [
          "Sales, Purchase, Expense Entries",
          "Bank Reconciliation",
          "Cash Book Maintenance",
          "Journal Entries & Depreciation",
          "Ledgers/Vendors Reconciliation",
          "Trial Balance, P&L, Balance Sheet",
          "Receivables & Payables Tracking",
          "Data Setup & Cleanup",
          "Month-End & Year-End Closing Support",
        ],
      },
      itr: {
        title: "ITR Services",
        description: "Expert ITR filing services for individuals and businesses.",
        features: [
          "Applicability Check (Mandatory/Voluntary)",
          "PAN-Aadhaar Linking Verification",
          "Computation of Total Income & Tax",
          "Form 26AS, AIS & TIS Review",
          "Filing Correct ITR Form (ITR-1 to ITR-7)",
          "Notice & Scrutiny Support",
        ],
      },
      gst: {
        title: "GST Services",
        description: "Complete GST compliance and filing services to keep your business tax-compliant.",
        features: [
          "GST Registration",
          "GSTR-1, 3B, 9 Filing",
          "GST Input Credit Matching (2B vs Books)",
          "E-Invoice & E-Way Bill Compliance",
          "Late Fee and Penalty Resolution",
        ],
      },
      tds: {
        title: "TDS Services",
        description: "Comprehensive TDS management and filing services for your business.",
        features: [
          "TAN Application",
          "Filing of Form 24Q, 26Q",
          "Advance Tax & Challan Management",
          "Form 16/16A Generation",
          "TDS Default & Demand Resolution",
        ],
      },
      payroll: {
        title: "Payroll Services",
        description: "Complete payroll management with accurate calculations and statutory compliance.",
        features: [
          "Employee Master Data Management",
          "Salary Structuring & Monthly Calculations",
          "Accurate Payslips & Payroll Register",
          "Payroll Register & Salary Slips",
          "TDS on Salary & Form 16/16A",
          "PF/ESI/PT/EDLI Registration & Return Filing",
          "Full & Final Settlement",
        ],
      },
    },
    about: {
      title: "About Byalance",
      p1: "Byalance is a modern virtual accounting firm dedicated to serving the unique needs of startups and small businesses in Tier 1, 2 and Tier 3 cities across India. We understand that growing businesses need reliable, affordable, and professional accounting services.",
      p2: "We specialise in working with startups, retailers, traders, service providers, and MSMEs who need comprehensive accounting support without the complexity and high costs of traditional accounting firms.",
      missionTitle: "Our Mission",
      missionText: "Making compliance stress-free, affordable, and professional for every business.",
      features: {
        trusted: {
          title: "Trusted Partner",
          description: "Building long-term relationships with our clients based on trust and reliability.",
        },
        growth: {
          title: "Growth Focused",
          description: "Supporting businesses at every stage of their growth journey.",
        },
        timely: {
          title: "Timely Service",
          description: "Meeting all deadlines and keeping your business compliant on time.",
        },
      },
    },
  },

  hi: {
    nav: {
      home: 'होम',
      about: 'हमारे बारे में',
      services: 'सेवाएँ',
      pricing: 'मूल्य',
      contact: 'संपर्क',
      allServices: 'सभी सेवाएँ',
      whatsapp: 'व्हाट्सऐप',
    },
    hero: {
      subtitle: 'लेखांकन को सरल बनाना, विकास को सशक्त बनाना।',
      description: 'हम आपके GST, TDS, पेरोल और पूर्ण लेखांकन का प्रबंधन करते हैं — ताकि आप अपने व्यवसाय पर ध्यान दें।',
      bookConsultation: 'नि:शुल्क परामर्श बुक करें',
      whatsappNow: 'अभी व्हाट्सऐप करें',
    },
    sections: {
      whyChooseUs: 'BYALANCE क्यों चुनें?',
      whySubtitle: 'बढ़ते व्यवसायों के लिए पेशेवर लेखांकन सेवाएँ',
      about: 'Byalance के बारे में',
      services: 'हमारी सेवाएँ',
      servicesSubtitle: 'आपके व्यवसाय के लिए संपूर्ण लेखांकन समाधान',
      pricing: 'पारदर्शी मूल्य निर्धारण',
      pricingSubtitle: 'अपने व्यवसाय की जरूरत के अनुसार योजना चुनें',
      contact: 'संपर्क करें',
      contactSubtitle: 'अनुपालन को सरल बनाने के लिए तैयार हैं? बातचीत शुरू करते हैं।',
      getInTouch: 'हमें संदेश भेजें',
    },
    features: {
      transparentPricing: 'पारदर्शी मूल्य निर्धारण',
      transparentPricingDesc: 'कोई छिपी लागत नहीं। जानें कि आप किसके लिए भुगतान करते हैं।',
      localLanguage: 'स्थानीय भाषा समर्थन',
      localLanguageDesc: 'अपनी पसंदीदा भाषा में संवाद करें। हम स्थानीय व्यापार की जरूरतें समझते हैं।',
      compliance: 'संपूर्ण अनुपालन',
      complianceDesc: 'पंजीकरण से फाइलिंग तक पूर्ण अनुपालन प्रबंधन।',
      microFriendly: 'सूक्ष्म व्यवसाय अनुकूल',
      microFriendlyDesc: 'सबसे छोटे व्यवसायों के लिए भी सेवाएँ उपलब्ध। आत्मविश्वास के साथ बढ़ें।',
    },
    cta: {
      bookConsultation: 'नि:शुल्क परामर्श बुक करें',
      contactCustom: 'कस्टम मूल्य के लिए संपर्क करें',
      choosePlan: 'चुनें',
      learnMore: 'अधिक जानें',
      sendMessage: 'संदेश भेजें',
      sending: 'भेज रहे हैं...',
      chatWhatsApp: 'व्हाट्सऐप पर चैट करें',
    },
    pricing: {
      starter: 'स्टार्टर योजना',
      starterPrice: '₹1,999 – ₹6,999',
      growth: 'ग्रोथ योजना',
      growthPrice: '₹7,499 – ₹14,999',
      pro: 'प्रो योजना',
      proPrice: '₹15,499 – ₹20,000+',
      recommended: 'अनुशंसित',
      perMonth: 'प्रति माह',
      notIdeal: 'आदर्श मूल्य नहीं?',
      notIdealDesc: 'कस्टम समाधान चाहिए? आपकी विशिष्ट आवश्यकताओं पर चर्चा करते हैं।',
      starterFeatures: ["जीएसटी रिटर्न", "बेसिक बहीखाता", "बिक्री और खरीद प्रविष्टियाँ", "मासिक वित्तीय रिपोर्ट"],
      growthFeatures: ["जीएसटी रिटर्न और अनुपालन", "टीडीएस रिटर्न और फाइलिंग", "पूर्ण लेखा और बहीखाता", "बैंक समाधान", "वित्तीय रिपोर्ट (पी एंड एल, बैलेंस शीट)"],
      proFeatures: ["जीएसटी और टीडीएस पूर्ण प्रबंधन", "पेरोल प्रसंस्करण", "पूर्ण लेखा सेवाएं", "उन्नत वित्तीय रिपोर्ट", "प्राथमिकता समर्थन"]
    },
    contact: {
      sendMessage: 'हमें संदेश भेजें',
      phone: 'फोन',
      email: 'ईमेल',
      address: 'पता',
      hours: 'व्यावसायिक घंटे',
      hoursValue: ['सोमवार – शनिवार: सुबह 9:00 – शाम 6:00', 'रविवार: बंद'],
      preferWhatsApp: 'व्हाट्सऐप पसंद करते हैं?',
      preferWhatsAppDesc: 'व्हाट्सऐप पर अपने प्रश्नों का तुरंत उत्तर पाएं।',
      name: 'पूरा नाम',
      mobile: 'मोबाइल नंबर',
      businessType: 'व्यवसाय का प्रकार',
      message: 'संदेश',
      namePlaceholder: 'अपना नाम दर्ज करें',
      mobilePlaceholder: 'अपना मोबाइल नंबर दर्ज करें',
      emailPlaceholder: 'अपना ईमेल आईडी दर्ज करें',
      messagePlaceholder: 'अपनी लेखांकन जरूरतों के बारे में बताएं...',
      contactInfo: 'संपर्क जानकारी',
      emailLabel: 'ईमेल *',
      businessTypePlaceholder: 'अपने व्यवसाय का प्रकार चुनें',
      businessTypes: {
        retail: 'खुदरा स्टोर',
        micro: 'सूक्ष्म व्यवसाय',
        small: 'छोटा व्यवसाय',
        startup: 'स्टार्टअप',
        msme: 'एमएसएमई',
        other: 'अन्य',
      }
    },
    footer: {
      quickLinks: 'त्वरित लिंक',
      services: 'सेवाएँ',
      contactInfo: 'संपर्क जानकारी',
      rights: '© 2026 Byalance. सर्वाधिकार सुरक्षित।',
      privacyPolicy: 'गोपनीयता नीति',
      dataHandlingPolicy: 'डेटा हैंडलिंग नीति',
      phone: ['+91 74062 96116', '+91 96111 93492'],
      email: ['info@byalance.in'],
      address: ['चौथा चरण, जेपी नगर', 'बेंगलुरु, कर्नाटक 560078'],
      gstin: 'जीएसटीआईएन: ',
    },
    services: {
      accounting: {
        title: "लेखांकन और बहीखाता",
        description: "आपकी बहियों को सटीक और अद्यतित रखने के लिए व्यापक लेखांकन सेवाएँ।",
        features: [
          "बिक्री, खरीद, व्यय प्रविष्टियाँ",
          "बैंक समाधान",
          "रोकड़ बही रखरखाव",
          "जर्नल प्रविष्टियाँ और मूल्यह्रास",
          "खातों/विक्रेताओं का समाधान",
          "परीक्षण शेष, लाभ-हानि, बैलेंस शीट",
          "प्राप्य और देय ट्रैकिंग",
          "डेटा सेटअप और सफाई",
          "माह-अंत और वर्ष-अंत समापन समर्थन",
        ],
      },
      itr: {
        title: "आईटीआर सेवाएँ",
        description: "व्यक्तियों और व्यवसायों के लिए विशेषज्ञ आईटीआर फाइलिंग सेवाएँ।",
        features: [
          "प्रयोज्यता जाँच (अनिवार्य/स्वैच्छिक)",
          "पैन-आधार लिंकिंग सत्यापन",
          "कुल आय और कर की गणना",
          "फॉर्म 26AS, AIS और TIS समीक्षा",
          "सही आईटीआर फॉर्म दाखिल करना (ITR-1 से ITR-7)",
          "नोटिस और जांच समर्थन",
        ],
      },
      gst: {
        title: "जीएसटी सेवाएँ",
        description: "आपके व्यवसाय को कर-अनुपालन रखने के लिए पूर्ण जीएसटी अनुपालन और फाइलिंग सेवाएँ।",
        features: [
          "जीएसटी पंजीकरण",
          "GSTR-1, 3B, 9 फाइलिंग",
          "जीएसटी इनपुट क्रेडिट मिलान (2B बनाम बहियाँ)",
          "ई-चालान और ई-वे बिल अनुपालन",
          "विलंब शुल्क और जुर्माना समाधान",
        ],
      },
      tds: {
        title: "टीडीएस सेवाएँ",
        description: "आपके व्यवसाय के लिए व्यापक टीडीएस प्रबंधन और फाइलिंग सेवाएँ।",
        features: [
          "टैन आवेदन",
          "फॉर्म 24Q, 26Q दाखिल करना",
          "अग्रिम कर और चालान प्रबंधन",
          "फॉर्म 16/16A बनाना",
          "टीडीएस डिफॉल्ट और मांग समाधान",
        ],
      },
      payroll: {
        title: "पेरोल सेवाएँ",
        description: "सटीक गणना और वैधानिक अनुपालन के साथ पूर्ण पेरोल प्रबंधन।",
        features: [
          "कर्मचारी मास्टर डेटा प्रबंधन",
          "वेतन संरचना और मासिक गणना",
          "सटीक वेतन पर्ची और पेरोल रजिस्टर",
          "पेरोल रजिस्टर और वेतन पर्ची",
          "वेतन पर टीडीएस और फॉर्म 16/16A",
          "पीएफ/ईएसआई/पीटी/ईडीएलआई पंजीकरण और रिटर्न फाइलिंग",
          "पूर्ण और अंतिम निपटान",
        ],
      },
    },
    about: {
      title: "Byalance के बारे में",
      p1: "Byalance एक आधुनिक वर्चुअल अकाउंटिंग फर्म है जो भारत भर के टियर 1, 2 और टियर 3 शहरों में स्टार्टअप और छोटे व्यवसायों की अनूठी जरूरतों को पूरा करने के लिए समर्पित है। हम समझते हैं कि बढ़ते व्यवसायों को विश्वसनीय, सस्ती और पेशेवर लेखांकन सेवाओं की आवश्यकता है।",
      p2: "हम स्टार्टअप, खुदरा विक्रेताओं, व्यापारियों, सेवा प्रदाताओं और एमएसएमई के साथ काम करने में विशेषज्ञ हैं, जिन्हें पारंपरिक लेखा फर्मों की जटिलता और उच्च लागत के बिना व्यापक लेखांकन सहायता की आवश्यकता है।",
      missionTitle: "हमारा लक्ष्य",
      missionText: "हर व्यवसाय के लिए अनुपालन को तनाव-मुक्त, सस्ता और पेशेवर बनाना।",
      features: {
        trusted: {
          title: "विश्वसनीय साथी",
          description: "विश्वास और विश्वसनीयता के आधार पर हमारे ग्राहकों के साथ दीर्घकालिक संबंध बनाना।",
        },
        growth: {
          title: "विकास केंद्रित",
          description: "उनके विकास के हर चरण में व्यवसायों का समर्थन करना।",
        },
        timely: {
          title: "समय पर सेवा",
          description: "सभी समय सीमा को पूरा करना और आपके व्यवसाय को समय पर अनुपालन में रखना।",
        },
      },
    },
  },

  kn: {
    nav: {
      home: 'ಮನೆ',
      about: 'ನಮ್ಮ ಬಗ್ಗೆ',
      services: 'ಸೇವೆಗಳು',
      pricing: 'ಬೆಲೆ',
      contact: 'ಸಂಪರ್ಕ',
      allServices: 'ಎಲ್ಲಾ ಸೇವೆಗಳು',
      whatsapp: 'ವಾಟ್ಸ್‌ಆ್ಯಪ್',
    },
    hero: {
      subtitle: 'ಲೆಕ್ಕಪತ್ರವನ್ನು ಸರಳಗೊಳಿಸುವುದು, ಬೆಳವಣಿಗೆಯನ್ನು ಉತ್ತೇಜಿಸುವುದು.',
      description: 'ನಿಮ್ಮ GST, TDS, ವೇತನ ಮತ್ತು ಸಂಪೂರ್ಣ ಲೆಕ್ಕಪತ್ರವನ್ನು ನಾವು ನಿರ್ವಹಿಸುತ್ತೇವೆ — ನೀವು ನಿಮ್ಮ ವ್ಯವಹಾರದ ಮೇಲೆ ಗಮನ ಕೇಂದ್ರೀಕರಿಸಿ.',
      bookConsultation: 'ಉಚಿತ ಸಮಾಲೋಚನೆ ಬುಕ್ ಮಾಡಿ',
      whatsappNow: 'ಈಗಲೇ ವಾಟ್ಸ್‌ಆ್ಯಪ್ ಮಾಡಿ',
    },
    sections: {
      whyChooseUs: 'BYALANCE ಅನ್ನು ಏಕೆ ಆಯ್ಕೆ ಮಾಡಬೇಕು?',
      whySubtitle: 'ಬೆಳೆಯುತ್ತಿರುವ ವ್ಯವಹಾರಗಳಿಗೆ ವೃತ್ತಿಪರ ಲೆಕ್ಕಪತ್ರ ಸೇವೆಗಳು',
      about: 'Byalance ಬಗ್ಗೆ',
      services: 'ನಮ್ಮ ಸೇವೆಗಳು',
      servicesSubtitle: 'ನಿಮ್ಮ ವ್ಯವಹಾರಕ್ಕೆ ಅನುಕೂಲವಾದ ಸಂಪೂರ್ಣ ಲೆಕ್ಕಪತ್ರ ಪರಿಹಾರಗಳು',
      pricing: 'ಪಾರದರ್ಶಕ ಬೆಲೆ',
      pricingSubtitle: 'ನಿಮ್ಮ ವ್ಯವಹಾರದ ಅಗತ್ಯಕ್ಕೆ ಸರಿಹೊಂದುವ ಯೋಜನೆ ಆಯ್ಕೆ ಮಾಡಿ',
      contact: 'ಸಂಪರ್ಕಿಸಿ',
      contactSubtitle: 'ಅನುಪಾಲನೆಯನ್ನು ಸರಳಗೊಳಿಸಲು ಸಿದ್ಧರಿದ್ದೀರಾ? ಮಾತುಕತೆ ಪ್ರಾರಂಭಿಸೋಣ.',
      getInTouch: 'ನಮಗೆ ಸಂದೇಶ ಕಳುಹಿಸಿ',
    },
    features: {
      transparentPricing: 'ಪಾರದರ್ಶಕ ಬೆಲೆ',
      transparentPricingDesc: 'ಯಾವುದೇ ಗುಪ್ತ ವೆಚ್ಚಗಳಿಲ್ಲ. ನೀವು ಏನಕ್ಕಾಗಿ ಪಾವತಿಸುತ್ತೀರಿ ಎಂದು ತಿಳಿಯಿರಿ.',
      localLanguage: 'ಸ್ಥಳೀಯ ಭಾಷೆ ಬೆಂಬಲ',
      localLanguageDesc: 'ನಿಮ್ಮ ಆದ್ಯತೆಯ ಭಾಷೆಯಲ್ಲಿ ಸಂವಹನ ಮಾಡಿ.',
      compliance: 'ಸಂಪೂರ್ಣ ಅನುಪಾಲನೆ',
      complianceDesc: 'ನೋಂದಣಿಯಿಂದ ಸಲ್ಲಿಕೆವರೆಗೆ ಸಂಪೂರ್ಣ ಅನುಪಾಲನೆ ನಿರ್ವಹಣೆ.',
      microFriendly: 'ಸೂಕ್ಷ್ಮ ವ್ಯವಹಾರ ಸ್ನೇಹಿ',
      microFriendlyDesc: 'ಅತ್ಯಂತ ಸಣ್ಣ ವ್ಯವಹಾರಗಳಿಗೂ ಸೇವೆಗಳು ಲಭ್ಯ.',
    },
    cta: {
      bookConsultation: 'ಉಚಿತ ಸಮಾಲೋಚನೆ ಬುಕ್ ಮಾಡಿ',
      contactCustom: 'ಕಸ್ಟಮ್ ಬೆಲೆಗಾಗಿ ಸಂಪರ್ಕಿಸಿ',
      choosePlan: 'ಆಯ್ಕೆ ಮಾಡಿ',
      learnMore: 'ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ',
      sendMessage: 'ಸಂದೇಶ ಕಳುಹಿಸಿ',
      sending: 'ಕಳುಹಿಸಲಾಗುತ್ತಿದೆ...',
      chatWhatsApp: 'ವಾಟ್ಸ್‌ಆ್ಯಪ್‌ನಲ್ಲಿ ಚಾಟ್ ಮಾಡಿ',
    },
    pricing: {
      starter: 'ಸ್ಟಾರ್ಟರ್ ಯೋಜನೆ',
      starterPrice: '₹1,999 – ₹6,999',
      growth: 'ಗ್ರೋತ್ ಯೋಜನೆ',
      growthPrice: '₹7,499 – ₹14,999',
      pro: 'ಪ್ರೊ ಯೋಜನೆ',
      proPrice: '₹15,499 – ₹20,000+',
      recommended: 'ಶಿಫಾರಸು ಮಾಡಲಾಗಿದೆ',
      perMonth: 'ಪ್ರತಿ ತಿಂಗಳು',
      notIdeal: 'ಆದರ್ಶ ಬೆಲೆ ಅಲ್ಲವೇ?',
      notIdealDesc: 'ಕಸ್ಟಮ್ ಪರಿಹಾರ ಬೇಕೇ? ನಿಮ್ಮ ನಿರ್ದಿಷ್ಟ ಅವಶ್ಯಕತೆಗಳ ಬಗ್ಗೆ ಚರ್ಚಿಸೋಣ.',
      starterFeatures: ["ಜಿಎಸ್ಟಿ ರಿಟರ್ನ್ಸ್", "ಮೂಲ ಬುಕ್ಕೀಪಿಂಗ್", "ಮಾರಾಟ ಮತ್ತು ಖರೀದಿ ನಮೂದುಗಳು", "ಮಾಸಿಕ ಹಣಕಾಸು ವರದಿಗಳು"],
      growthFeatures: ["ಜಿಎಸ್ಟಿ ರಿಟರ್ನ್ಸ್ ಮತ್ತು ಅನುಸರಣೆ", "ಟಿಡಿಎಸ್ ರಿಟರ್ನ್ಸ್ ಮತ್ತು ಫೈಲಿಂಗ್", "ಪೂರ್ಣ ಅಕೌಂಟಿಂಗ್ ಮತ್ತು ಬುಕ್ಕೀಪಿಂಗ್", "ಬ್ಯಾಂಕ್ ಸಾಮರಸ್ಯ", "ಹಣಕಾಸು ವರದಿಗಳು (ಪಿ & ಎಲ್, ಬ್ಯಾಲೆನ್ಸ್ ಶೀಟ್)"],
      proFeatures: ["ಜಿಎಸ್ಟಿ ಮತ್ತು ಟಿಡಿಎಸ್ ಸಂಪೂರ್ಣ ನಿರ್ವಹಣೆ", "ವೇತನದಾರರ ಸಂಸ್ಕರಣೆ", "ಸಂಪೂರ್ಣ ಲೆಕ್ಕಪತ್ರ ಸೇವೆಗಳು", "ಸುಧಾರಿತ ಹಣಕಾಸು ವರದಿಗಳು", "ಆದ್ಯತೆಯ ಬೆಂಬಲ"]
    },
    contact: {
      sendMessage: 'ನಮಗೆ ಸಂದೇಶ ಕಳುಹಿಸಿ',
      phone: 'ಫೋನ್',
      email: 'ಇಮೇಲ್',
      address: 'ವಿಳಾಸ',
      hours: 'ವ್ಯಾಪಾರ ಸಮಯ',
      hoursValue: ['ಸೋಮವಾರ – ಶನಿವಾರ: 9:00 AM – 6:00 PM', 'ಭಾನುವಾರ: ಮುಚ್ಚಿರುತ್ತದೆ'],
      preferWhatsApp: 'ವಾಟ್ಸ್‌ಆ್ಯಪ್ ಬಯಸುತ್ತೀರಾ?',
      preferWhatsAppDesc: 'ವಾಟ್ಸ್‌ಆ್ಯಪ್‌ನಲ್ಲಿ ತ್ವರಿತ ಉತ್ತರಗಳನ್ನು ಪಡೆಯಿರಿ.',
      name: 'ಪೂರ್ಣ ಹೆಸರು',
      mobile: 'ಮೊಬೈಲ್ ಸಂಖ್ಯೆ',
      businessType: 'ವ್ಯವಹಾರದ ಪ್ರಕಾರ',
      message: 'ಸಂದೇಶ',
      namePlaceholder: 'ನಿಮ್ಮ ಹೆಸರನ್ನು ನಮೂದಿಸಿ',
      mobilePlaceholder: 'ನಿಮ್ಮ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ',
      emailPlaceholder: 'ನಿಮ್ಮ ಇಮೇಲ್ ಐಡಿ ನಮೂದಿಸಿ',
      messagePlaceholder: 'ನಿಮ್ಮ ಲೆಕ್ಕಪತ್ರ ಅವಶ್ಯಕತೆಗಳ ಬಗ್ಗೆ ತಿಳಿಸಿ...',
      contactInfo: 'ಸಂಪರ್ಕ ಮಾಹಿತಿ',
      emailLabel: 'ಇಮೇಲ್ *',
      businessTypePlaceholder: 'ನಿಮ್ಮ ವ್ಯಾಪಾರದ ಪ್ರಕಾರವನ್ನು ಆಯ್ಕೆಮಾಡಿ',
      businessTypes: {
        retail: 'ಚಿಲ್ಲರೆ ಅಂಗಡಿ',
        micro: 'ಮೈಕ್ರೋ ಬಿಸಿನೆಸ್',
        small: 'ಸಣ್ಣ ವ್ಯಾಪಾರ',
        startup: 'ಸ್ಟಾರ್ಟ್ಅಪ್',
        msme: 'ಎಂಎಸ್‌ಎಂಇ',
        other: 'ಇತರೆ',
      }
    },
    footer: {
      quickLinks: 'ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು',
      services: 'ಸೇವೆಗಳು',
      contactInfo: 'ಸಂಪರ್ಕ ಮಾಹಿತಿ',
      rights: '© 2026 Byalance. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.',
      privacyPolicy: 'ಗೌಪ್ಯತೆ ನೀತಿ',
      dataHandlingPolicy: 'ಡೇಟಾ ನಿರ್ವಹಣೆ ನೀತಿ',
      phone: ['+91 74062 96116', '+91 96111 93492'],
      email: ['info@byalance.in'],
      address: ['4ನೇ ಹಂತ, ಜೆಪಿ ನಗರ', 'ಬೆಂಗಳೂರು, ಕರ್ನಾಟಕ 560078'],
      gstin: 'ಜಿಎಸ್ಟಿಐಎನ್: ',
    },
    services: {
      accounting: {
        title: "ಅಕೌಂಟಿಂಗ್ ಮತ್ತು ಬುಕ್ಕೀಪಿಂಗ್",
        description: "ನಿಮ್ಮ ಪುಸ್ತಕಗಳನ್ನು ನಿಖರವಾಗಿ ಮತ್ತು ಅಪ್-ಟು-ಡೇಟ್ ಆಗಿಡಲು ಸಮಗ್ರ ಅಕೌಂಟಿಂಗ್ ಸೇವೆಗಳು.",
        features: [
          "ಮಾರಾಟ, ಖರೀದಿ, ವೆಚ್ಚ ನಮೂದುಗಳು",
          "ಬ್ಯಾಂಕ್ ಸಾಮರಸ್ಯ",
          "ನಗದು ಪುಸ್ತಕ ನಿರ್ವಹಣೆ",
          "ಜರ್ನಲ್ ನಮೂದುಗಳು ಮತ್ತು ಸವಕಳಿ",
          "ಖಾತೆಗಳು/ಮಾರಾಟಗಾರರ ಸಾಮರಸ್ಯ",
          "ಪ್ರಯೋಗ ಬಾಕಿ, ಲಾಭ ಮತ್ತು ನಷ್ಟ, ಬ್ಯಾಲೆನ್ಸ್ ಶೀಟ್",
          "ಸ್ವೀಕೃತಿಗಳು ಮತ್ತು ಪಾವತಿಗಳ ಟ್ರ್ಯಾಕಿಂಗ್",
          "ಡೇಟಾ ಸೆಟಪ್ ಮತ್ತು ಸ್ವಚ್ಛಗೊಳಿಸುವಿಕೆ",
          "ತಿಂಗಳ-ಕೊನೆ ಮತ್ತು ವರ್ಷ-ಕೊನೆ ಮುಕ್ತಾಯ ಬೆಂಬಲ",
        ],
      },
      itr: {
        title: "ಐಟಿಆರ್ ಸೇವೆಗಳು",
        description: "ವ್ಯಕ್ತಿಗಳು ಮತ್ತು ವ್ಯವಹಾರಗಳಿಗೆ ಪರಿಣಿತ ಐಟಿಆರ್ ಫೈಲಿಂಗ್ ಸೇವೆಗಳು.",
        features: [
          "ಅನ್ವಯಿಸುವಿಕೆ ಪರಿಶೀಲನೆ (ಕಡ್ಡಾಯ/ಸ್ವಯಂಪ್ರೇರಿತ)",
          "ಪ್ಯಾನ್-ಆಧಾರ್ ಲಿಂಕ್ ಪರಿಶೀಲನೆ",
          "ಒಟ್ಟು ಆದಾಯ ಮತ್ತು ತೆರಿಗೆಯ ಲೆಕ್ಕಾಚಾರ",
          "ಫಾರ್ಮ್ 26AS, AIS ಮತ್ತು TIS ವಿಮರ್ಶೆ",
          "ಸರಿಯಾದ ಐಟಿಆರ್ ಫಾರ್ಮ್ ಫೈಲಿಂಗ್ (ITR-1 ರಿಂದ ITR-7)",
          "ನೋಟಿಸ್ ಮತ್ತು ಪರಿಶೀಲನೆ ಬೆಂಬಲ",
        ],
      },
      gst: {
        title: "ಜಿಎಸ್ಟಿ ಸೇವೆಗಳು",
        description: "ನಿಮ್ಮ ವ್ಯವಹಾರವನ್ನು ತೆರಿಗೆ-ಅನುಸರಣೆಯಾಗಿಡಲು ಸಂಪೂರ್ಣ ಜಿಎಸ್ಟಿ ಅನುಸರಣೆ ಮತ್ತು ಫೈಲಿಂಗ್ ಸೇವೆಗಳು.",
        features: [
          "ಜಿಎಸ್ಟಿ ನೋಂದಣಿ",
          "GSTR-1, 3B, 9 ಫೈಲಿಂಗ್",
          "ಜಿಎಸ್ಟಿ ಇನ್ಪುಟ್ ಕ್ರೆಡಿಟ್ ಹೊಂದಾಣಿಕೆ (2B ವರ್ಸಸ್ ಪುಸ್ತಕಗಳು)",
          "ಇ-ಇನ್ವಾಯ್ಸ್ ಮತ್ತು ಇ-ವೇ ಬಿಲ್ ಅನುಸರಣೆ",
          "ವಿಳಂಬ ಶುಲ್ಕ ಮತ್ತು ದಂಡ ಪರಿಹಾರ",
        ],
      },
      tds: {
        title: "ಟಿಡಿಎಸ್ ಸೇವೆಗಳು",
        description: "ನಿಮ್ಮ ವ್ಯವಹಾರಕ್ಕಾಗಿ ಸಮಗ್ರ ಟಿಡಿಎಸ್ ನಿರ್ವಹಣೆ ಮತ್ತು ಫೈಲಿಂಗ್ ಸೇವೆಗಳು.",
        features: [
          "ಟಿಎಎನ್ ಅಪ್ಲಿಕೇಶನ್",
          "ಫಾರ್ಮ್ 24Q, 26Q ಫೈಲಿಂಗ್",
          "ಮುಂಗಡ ತೆರಿಗೆ ಮತ್ತು ಚಲನ್ ನಿರ್ವಹಣೆ",
          "ಫಾರ್ಮ್ 16/16A ರಚನೆ",
          "ಟಿಡಿಎಸ್ ಡೀಫಾಲ್ಟ್ ಮತ್ತು ಬೇಡಿಕೆ ಪರಿಹಾರ",
        ],
      },
      payroll: {
        title: "ವೇತನ ಸೇವೆಗಳು",
        description: "ನಿಖರವಾದ ಲೆಕ್ಕಾಚಾರಗಳು ಮತ್ತು ಶಾಸನಬದ್ಧ ಅನುಸರಣೆಯೊಂದಿಗೆ ಸಂಪೂರ್ಣ ವೇತನ ನಿರ್ವಹಣೆ.",
        features: [
          "ನೌಕರರ ಮಾಸ್ಟರ್ ಡೇಟಾ ನಿರ್ವಹಣೆ",
          "ವೇತನ ರಚನೆ ಮತ್ತು ಮಾಸಿಕ ಲೆಕ್ಕಾಚಾರಗಳು",
          "ನಿಖರವಾದ ವೇತನ ಚೀಟಿಗಳು ಮತ್ತು ವೇತನ ರಿಜಿಸ್ಟರ್",
          "ವೇತನ ರಿಜಿಸ್ಟರ್ ಮತ್ತು ಸಂಬಳದ ಚೀಟಿಗಳು",
          "ವೇತನದ ಮೇಲೆ ಟಿಡಿಎಸ್ ಮತ್ತು ಫಾರ್ಮ್ 16/16A",
          "ಪಿಎಫ್/ಇಎಸ್ಐ/ಪಿಟಿ/ಇಡಿಎಲ್ಐ ನೋಂದಣಿ ಮತ್ತು ರಿಟರ್ನ್ ಫೈಲಿಂಗ್",
          "ಪೂರ್ಣ ಮತ್ತು ಅಂತಿಮ ಇತ್ಯರ್ಥ",
        ],
      },
    },
    about: {
      title: "Byalance ಬಗ್ಗೆ",
      p1: "Byalance ಭಾರತದಾದ್ಯಂತ ಶ್ರೇಣಿ 1, 2 ಮತ್ತು ಶ್ರೇಣಿ 3 ನಗರಗಳಲ್ಲಿನ ಆರಂಭಿಕ ಮತ್ತು ಸಣ್ಣ ವ್ಯವಹಾರಗಳ ಅನನ್ಯ ಅಗತ್ಯಗಳನ್ನು ಪೂರೈಸಲು ಮೀಸಲಾಗಿರುವ ಆಧುನಿಕ ವರ್ಚುವಲ್ ಅಕೌಂಟಿಂಗ್ ಸಂಸ್ಥೆಯಾಗಿದೆ. ಬೆಳೆಯುತ್ತಿರುವ ವ್ಯವಹಾರಗಳಿಗೆ ವಿಶ್ವಾಸಾರ್ಹ, ಕೈಗೆಟುಕುವ ಮತ್ತು ವೃತ್ತಿಪರ ಲೆಕ್ಕಪತ್ರ ಸೇವೆಗಳ ಅಗತ್ಯವಿದೆ ಎಂದು ನಾವು ಅರ್ಥಮಾಡಿಕೊಂಡಿದ್ದೇವೆ.",
      p2: "ಸಾಂಪ್ರದಾಯಿಕ ಲೆಕ್ಕಪತ್ರ ಸಂಸ್ಥೆಗಳ ಸಂಕೀರ್ಣತೆ ಮತ್ತು ಹೆಚ್ಚಿನ ವೆಚ್ಚಗಳಿಲ್ಲದೆ ಸಮಗ್ರ ಲೆಕ್ಕಪತ್ರ ಬೆಂಬಲದ ಅಗತ್ಯವಿರುವ ಆರಂಭಿಕ, ಚಿಲ್ಲರೆ ವ್ಯಾಪಾರಿಗಳು, ವ್ಯಾಪಾರಿಗಳು, ಸೇವಾ ಪೂರೈಕೆದಾರರು ಮತ್ತು ಎಂಎಸ್‌ಎಂಇಗಳೊಂದಿಗೆ ಕೆಲಸ ಮಾಡುವುದರಲ್ಲಿ ನಾವು ಪರಿಣತಿ ಹೊಂದಿದ್ದೇವೆ.",
      missionTitle: "ನಮ್ಮ ಗುರಿ",
      missionText: "ಪ್ರತಿ ವ್ಯವಹಾರಕ್ಕಾಗಿ ಅನುಸರಣೆಯನ್ನು ಒತ್ತಡ-ಮುಕ್ತ, ಕೈಗೆಟುಕುವ ಮತ್ತು ವೃತ್ತಿಪರವಾಗಿಸುವುದು.",
      features: {
        trusted: {
          title: "ವಿಶ್ವಾಸಾರ್ಹ ಪಾಲುದಾರ",
          description: "ನಂಬಿಕೆ ಮತ್ತು ವಿಶ್ವಾಸಾರ್ಹತೆಯ ಆಧಾರದ ಮೇಲೆ ನಮ್ಮ ಗ್ರಾಹಕರೊಂದಿಗೆ ದೀರ್ಘಕಾಲೀನ ಸಂಬಂಧಗಳನ್ನು ನಿರ್ಮಿಸುವುದು.",
        },
        growth: {
          title: "ಬೆಳವಣಿಗೆ ಕೇಂದ್ರಿತ",
          description: "ವ್ಯವಹಾರಗಳನ್ನು ಅವರ ಬೆಳವಣಿಗೆಯ ಪ್ರಯಾಣದ ಪ್ರತಿಯೊಂದು ಹಂತದಲ್ಲೂ ಬೆಂಬಲಿಸುವುದು.",
        },
        timely: {
          title: "ಸಕಾಲಿಕ ಸೇವೆ",
          description: "ಎಲ್ಲಾ ಗಡುವುಗಳನ್ನು ಪೂರೈಸುವುದು ಮತ್ತು ನಿಮ್ಮ ವ್ಯವಹಾರವನ್ನು ಸಮಯಕ್ಕೆ ಸರಿಯಾಗಿ ಅನುಸರಣೆಯಲ್ಲಿಡುವುದು.",
        },
      },
    },
  },

  mr: {
    nav: {
      home: 'मुखपृष्ठ',
      about: 'आमच्याबद्दल',
      services: 'सेवा',
      pricing: 'किंमत',
      contact: 'संपर्क',
      allServices: 'सर्व सेवा',
      whatsapp: 'व्हाट्सअ‍ॅप',
    },
    hero: {
      subtitle: 'लेखाकाम सुलभ करणे, विकासाला चालना देणे.',
      description: 'आम्ही तुमचे GST, TDS, पेरोल आणि संपूर्ण लेखाकाम सांभाळतो — तुम्ही तुमच्या व्यवसायावर लक्ष केंद्रित करा.',
      bookConsultation: 'मोफत सल्ला बुक करा',
      whatsappNow: 'आत्ता व्हाट्सअ‍ॅप करा',
    },
    sections: {
      whyChooseUs: 'BYALANCE का निवडावे?',
      whySubtitle: 'वाढत्या व्यवसायांसाठी व्यावसायिक लेखाकाम सेवा',
      about: 'Byalance बद्दल',
      services: 'आमच्या सेवा',
      servicesSubtitle: 'तुमच्या व्यवसायासाठी संपूर्ण लेखाकाम उपाय',
      pricing: 'पारदर्शक किंमत',
      pricingSubtitle: 'तुमच्या व्यवसायाच्या गरजेनुसार योजना निवडा',
      contact: 'संपर्क करा',
      contactSubtitle: 'अनुपालन सोपे करण्यास तयार आहात? संवाद सुरू करूया.',
      getInTouch: 'आम्हाला संदेश पाठवा',
    },
    features: {
      transparentPricing: 'पारदर्शक किंमत',
      transparentPricingDesc: 'कोणतेही छुपे शुल्क नाही. तुम्ही नक्की कशासाठी पैसे देता ते जाणून घ्या.',
      localLanguage: 'स्थानिक भाषा समर्थन',
      localLanguageDesc: 'तुमच्या आवडत्या भाषेत संवाद साधा. आम्हाला स्थानिक व्यवसायाच्या गरजा समजतात.',
      compliance: 'संपूर्ण अनुपालन',
      complianceDesc: 'नोंदणीपासून फाइलिंगपर्यंत संपूर्ण अनुपालन व्यवस्थापन.',
      microFriendly: 'सूक्ष्म व्यवसाय अनुकूल',
      microFriendlyDesc: 'सर्वात लहान व्यवसायांसाठीही सेवा उपलब्ध. आत्मविश्वासाने वाढा.',
    },
    cta: {
      bookConsultation: 'मोफत सल्ला बुक करा',
      contactCustom: 'सानुकूल किंमतीसाठी संपर्क करा',
      choosePlan: 'निवडा',
      learnMore: 'अधिक जाणून घ्या',
      sendMessage: 'संदेश पाठवा',
      sending: 'पाठवत आहे...',
      chatWhatsApp: 'व्हाट्सअ‍ॅपवर चॅट करा',
    },
    pricing: {
      starter: 'स्टार्टर योजना',
      starterPrice: '₹1,999 – ₹6,999',
      growth: 'ग्रोथ योजना',
      growthPrice: '₹7,499 – ₹14,999',
      pro: 'प्रो योजना',
      proPrice: '₹15,499 – ₹20,000+',
      recommended: 'शिफारस केलेले',
      perMonth: 'प्रति महिना',
      notIdeal: 'आदर्श किंमत नाही?',
      notIdealDesc: 'सानुकूल उपाय हवा आहे? तुमच्या विशिष्ट गरजांबद्दल चर्चा करूया.',
      starterFeatures: ["जीएसटी रिटर्न", "मूलभूत बुककीपिंग", "विक्री आणि खरेदी नोंदी", "मासिक आर्थिक अहवाल"],
      growthFeatures: ["जीएसटी रिटर्न आणि अनुपालन", "टीडीएस रिटर्न आणि फाइलिंग", "पूर्ण लेखा आणि बुककीपिंग", " बँक सलोखा", "आर्थिक अहवाल (पी अँड एल, ताळेबंद)"],
      proFeatures: ["जीएसटी आणि टीडीएस संपूर्ण व्यवस्थापन", "पेरोल प्रक्रिया", "पूर्ण लेखा सेवा", "प्रगत आर्थिक अहवाल", "प्राधान्य समर्थन"]
    },
    contact: {
      sendMessage: 'आम्हाला संदेश पाठवा',
      phone: 'फोन',
      email: 'ईमेल',
      address: 'पत्ता',
      hours: 'व्यवसाय वेळ',
      hoursValue: ['सोमवार – शनिवार: सकाळी 9:00 – संध्याकाळी 6:00', 'रविवार: बंद'],
      preferWhatsApp: 'व्हाट्सअ‍ॅप पसंत आहे?',
      preferWhatsAppDesc: 'व्हाट्सअ‍ॅपवर तुमच्या प्रश्नांची त्वरित उत्तरे मिळवा.',
      name: 'पूर्ण नाव',
      mobile: 'मोबाइल नंबर',
      businessType: 'व्यवसायाचा प्रकार',
      message: 'संदेश',
      namePlaceholder: 'तुमचे नाव प्रविष्ट करा',
      mobilePlaceholder: 'तुमचा मोबाइल नंबर प्रविष्ट करा',
      emailPlaceholder: 'तुमचा ईमेल आयडी प्रविष्ट करा',
      messagePlaceholder: 'तुमच्या लेखाकाम गरजांबद्दल सांगा...',
      contactInfo: 'संपर्क माहिती',
      emailLabel: 'ईमेल *',
      businessTypePlaceholder: 'तुमच्या व्यवसायाचा प्रकार निवडा',
      businessTypes: {
        retail: 'किरकोळ दुकान',
        micro: 'सूक्ष्म व्यवसाय',
        small: 'लहान व्यवसाय',
        startup: 'स्टार्टअप',
        msme: 'एमएसएमई',
        other: 'इतर',
      }
    },
    footer: {
      quickLinks: 'त्वरित दुवे',
      services: 'सेवा',
      contactInfo: 'संपर्क माहिती',
      rights: '© 2026 Byalance. सर्व हक्क राखीव.',
      privacyPolicy: 'गोपनीयता धोरण',
      dataHandlingPolicy: 'डेटा हाताळणी धोरण',
      phone: ['+91 74062 96116', '+91 96111 93492'],
      email: ['info@byalance.in'],
      address: ['चौथा टप्पा, जेपी नगर', 'बंगळूर, कर्नाटक 560078'],
      gstin: 'जीएसटीआयएन: ',
    },
    services: {
      accounting: {
        title: "हिशेब आणि पुस्तपालन",
        description: "तुमची पुस्तके अचूक आणि अद्ययावत ठेवण्यासाठी व्यापक हिशेब सेवा.",
        features: [
          "विक्री, खरेदी, खर्च नोंदी",
          "बँक सामंजस्य",
          "कॅश बुक देखभाल",
          "जर्नल नोंदी आणि घसारा",
          "खाते/विक्रेते सामंजस्य",
          "ताळेबंद, नफा-तोटा, बॅलन्स शीट",
          "प्राप्य आणि देय ट्रॅकिंग",
          "डेटा सेटअप आणि स्वच्छता",
          "महिन्याच्या-शेवटी आणि वर्षाच्या-शेवटी बंद समर्थन",
        ],
      },
      itr: {
        title: "आयटीआर सेवा",
        description: "व्यक्ती आणि व्यवसायांसाठी तज्ञ आयटीआर फाइलिंग सेवा.",
        features: [
          "लागूता तपासणी (अनिवार्य/ऐच्छिक)",
          "पॅन-आधार लिंकिंग पडताळणी",
          "एकूण उत्पन्न आणि कराची गणना",
          "फॉर्म 26AS, AIS आणि TIS पुनरावलोकन",
          "योग्य आयटीआर फॉर्म भरणे (ITR-1 ते ITR-7)",
          "सूचना आणि छाननी समर्थन",
        ],
      },
      gst: {
        title: "जीएसटी सेवा",
        description: "तुमचा व्यवसाय कर-अनुपालक ठेवण्यासाठी पूर्ण जीएसटी अनुपालन आणि फाइलिंग सेवा.",
        features: [
          "जीएसटी नोंदणी",
          "GSTR-1, 3B, 9 फाइलिंग",
          "जीएसटी इनपुट क्रेडिट जुळवणी (2B वि पुस्तके)",
          "ई-चलन आणि ई-वे बिल अनुपालन",
          "विलंब शुल्क आणि दंड निराकरण",
        ],
      },
      tds: {
        title: "टीडीएस सेवा",
        description: "तुमच्या व्यवसायासाठी व्यापक टीडीएस व्यवस्थापन आणि फाइलिंग सेवा.",
        features: [
          "टॅन अर्ज",
          "फॉर्म 24Q, 26Q भरणे",
          "आगाऊ कर आणि चलन व्यवस्थापन",
          "फॉर्म 16/16A निर्मिती",
          "टीडीएस डिफॉल्ट आणि मागणी निराकरण",
        ],
      },
      payroll: {
        title: "पगार सेवा",
        description: "अचूक गणना आणि वैधानिक अनुपालनासह पूर्ण पगार व्यवस्थापन.",
        features: [
          "कर्मचारी मास्टर डेटा व्यवस्थापन",
          "पगार रचना आणि मासिक गणना",
          "अचूक वेतन स्लिप आणि पगार नोंदवही",
          "पगार नोंदवही आणि पगार स्लिप",
          " पगारावर टीडीएस आणि फॉर्म 16/16A",
          "पीएफ/ईएसआय/पीटी/ईडीएलआय नोंदणी आणि रिटर्न फाइलिंग",
          "पूर्ण आणि अंतिम सेटलमेंट",
        ],
      },
    },
    about: {
      title: "Byalance बद्दल",
      p1: "Byalance ही एक आधुनिक व्हर्च्युअल अकाउंटिंग फर्म आहे जी संपूर्ण भारतातील टियर 1, 2 आणि टियर 3 शहरांमधील स्टार्टअप्स आणि लहान व्यवसायांच्या अद्वितीय गरजा पूर्ण करण्यासाठी समर्पित आहे. आम्हाला समजते की वाढत्या व्यवसायांना विश्वसनीय, परवडणाऱ्या आणि व्यावसायिक लेखा सेवांची आवश्यकता असते.",
      p2: "आम्ही स्टार्टअप्स, किरकोळ विक्रेते, व्यापारी, सेवा प्रदाते आणि एमएसएमई यांच्यासोबत काम करण्यात माहिर आहोत ज्यांना पारंपारिक लेखा संस्थांच्या जटिलतेशिवाय आणि उच्च खर्चाशिवाय व्यापक लेखा समर्थनाची आवश्यकता आहे.",
      missionTitle: "आमचे ध्येय",
      missionText: "प्रत्येक व्यवसायासाठी अनुपालन तणावमुक्त, परवडणारे आणि व्यावसायिक बनवणे.",
      features: {
        trusted: {
          title: "विश्वासू भागीदार",
          description: "विश्वास आणि विश्वासार्हतेवर आधारित आमच्या क्लायंटसह दीर्घकालीन संबंध निर्माण करणे.",
        },
        growth: {
          title: "विकास केंद्रित",
          description: "व्यवसायांना त्यांच्या विकासाच्या प्रवासाच्या प्रत्येक टप्प्यावर समर्थन देणे.",
        },
        timely: {
          title: "वेळेवर सेवा",
          description: "सर्व अंतिम मुदती पूर्ण करणे आणि आपला व्यवसाय वेळेवर अनुपालनात ठेवणे.",
        },
      },
    },
  },

  te: {
    nav: {
      home: 'హోమ్',
      about: 'మా గురించి',
      services: 'సేవలు',
      pricing: 'ధర',
      contact: 'సంప్రదించు',
      allServices: 'అన్ని సేవలు',
      whatsapp: 'వాట్సాప్',
    },
    hero: {
      subtitle: 'అకౌంటింగ్‌ను సులభతరం చేయడం, వృద్ధికి శక్తినివ్వడం.',
      description: 'మీ GST, TDS, జీతాలు మరియు పూర్తి అకౌంటింగ్‌ను మేము నిర్వహిస్తాము — మీరు మీ వ్యాపారంపై దృష్టి పెట్టండి.',
      bookConsultation: 'ఉచిత సంప్రదింపు బుక్ చేయండి',
      whatsappNow: 'ఇప్పుడే వాట్సాప్ చేయండి',
    },
    sections: {
      whyChooseUs: 'BYALANCE ఎందుకు ఎంచుకోవాలి?',
      whySubtitle: 'వృద్ధి చెందుతున్న వ్యాపారాలకు వృత్తిపరమైన అకౌంటింగ్ సేవలు',
      about: 'Byalance గురించి',
      services: 'మా సేవలు',
      servicesSubtitle: 'మీ వ్యాపారానికి అనుకూలమైన సంపూర్ణ అకౌంటింగ్ పరిష్కారాలు',
      pricing: 'పారదర్శక ధర',
      pricingSubtitle: 'మీ వ్యాపార అవసరాలకు సరిపడే ప్లాన్ ఎంచుకోండి',
      contact: 'సంప్రదించండి',
      contactSubtitle: 'కంప్లయన్స్‌ను సులభతరం చేయడానికి సిద్ధంగా ఉన్నారా? సంభాషణ ప్రారంభిద్దాం.',
      getInTouch: 'మాకు సందేశం పంపండి',
    },
    features: {
      transparentPricing: 'పారదర్శక ధర',
      transparentPricingDesc: 'దాచిన ఖర్చులు లేవు. మీరు దేనికి చెల్లిస్తున్నారో తెలుసుకోండి.',
      localLanguage: 'స్థానిక భాషా మద్దతు',
      localLanguageDesc: 'మీకు ఇష్టమైన భాషలో మాట్లాడండి. స్థానిక వ్యాపార అవసరాలు మాకు అర్థమవుతాయి.',
      compliance: 'సంపూర్ణ కంప్లయన్స్',
      complianceDesc: 'నమోదు నుండి ఫైలింగ్ వరకు సంపూర్ణ కంప్లయన్స్ నిర్వహణ.',
      microFriendly: 'చిన్న వ్యాపారానికి అనుకూలమైనది',
      microFriendlyDesc: 'చిన్న వ్యాపారాలకు కూడా సేవలు అందుబాటులో ఉన్నాయి. నమ్మకంగా వృద్ధి చెందండి.',
    },
    cta: {
      bookConsultation: 'ఉచిత సంప్రదింపు బుక్ చేయండి',
      contactCustom: 'కస్టమ్ ధరకు సంప్రదించండి',
      choosePlan: 'ఎంచుకోండి',
      learnMore: 'మరింత తెలుసుకోండి',
      sendMessage: 'సందేశం పంపండి',
      sending: 'పంపుతోంది...',
      chatWhatsApp: 'వాట్సాప్‌లో చాట్ చేయండి',
    },
    pricing: {
      starter: 'స్టార్టర్ ప్లాన్',
      starterPrice: '₹1,999 – ₹6,999',
      growth: 'గ్రోత్ ప్లాన్',
      growthPrice: '₹7,499 – ₹14,999',
      pro: 'ప్రో ప్లాన్',
      proPrice: '₹15,499 – ₹20,000+',
      recommended: 'సిఫార్సు చేయబడింది',
      perMonth: 'నెలకు',
      notIdeal: 'ఆదర్శ ధర కాదా?',
      notIdealDesc: 'కస్టమ్ పరిష్కారం కావాలా? మీ నిర్దిష్ట అవసరాలను చర్చిద్దాం.',
      starterFeatures: ["జీఎస్టీ రిటర్న్స్", "ప్రాథమిక బుక్ కీపింగ్", "అమ్మకాలు & కొనుగోలు ఎంట్రీలు", "నెలవారీ ఆర్థిక నివేదికలు"],
      growthFeatures: ["జీఎస్టీ రిటర్న్స్ & కంప్లయన్స్", "టీడీఎస్ రిటర్న్స్ & ఫైలింగ్", "పూర్తి అకౌంటింగ్ & బుక్ కీపింగ్", "బ్యాంక్ సయోధ్య", "ఆర్థిక నివేదికలు (పి&ఎల్, బ్యాలెన్స్ షీట్)"],
      proFeatures: ["జీఎస్టీ & టీడీఎస్ పూర్తి నిర్వహణ", "పేరోల్ ప్రాసెసింగ్", "పూర్తి అకౌంటింగ్ సేవలు", "అధునాతన ఆర్థిక నివేదికలు", "ప్రాధాన్యత మద్దతు"]
    },
    contact: {
      sendMessage: 'మాకు సందేశం పంపండి',
      phone: 'ఫోన్',
      email: 'ఇమెయిల్',
      address: 'చిరునామా',
      hours: 'వ్యాపార వేళలు',
      hoursValue: ['సోమవారం – శనివారం: ఉదయం 9:00 – సాయంత్రం 6:00', 'ఆదివారం: మూసివేయబడింది'],
      preferWhatsApp: 'వాట్సాప్ ఇష్టపడతారా?',
      preferWhatsAppDesc: 'వాట్సాప్‌లో మీ ప్రశ్నలకు తక్షణ సమాధానాలు పొందండి.',
      name: 'పూర్తి పేరు',
      mobile: 'మొబైల్ నంబర్',
      businessType: 'వ్యాపార రకం',
      message: 'సందేశం',
      namePlaceholder: 'మీ పేరు నమోదు చేయండి',
      mobilePlaceholder: 'మీ మొబైల్ నంబర్ నమోదు చేయండి',
      emailPlaceholder: 'మీ ఇమెయిల్ ఐడీ నమోదు చేయండి',
      messagePlaceholder: 'మీ అకౌంటింగ్ అవసరాల గురించి చెప్పండి...',
      contactInfo: 'సంప్రదింపు సమాచారం',
      emailLabel: 'ఇమెయిల్ *',
      businessTypePlaceholder: 'మీ వ్యాపార రకాన్ని ఎంచుకోండి',
      businessTypes: {
        retail: 'రిటైల్ స్టోర్',
        micro: 'మైక్రో బిజినెస్',
        small: 'చిన్న వ్యాపారం',
        startup: 'స్టార్టప్',
        msme: 'ఎంఎస్ఎంఇ',
        other: 'ఇతర',
      }
    },
    footer: {
      quickLinks: 'శీఘ్ర లింక్‌లు',
      services: 'సేవలు',
      contactInfo: 'సంప్రదింపు సమాచారం',
      rights: '© 2026 Byalance. అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి.',
      privacyPolicy: 'గోప్యతా విధానం',
      dataHandlingPolicy: 'డేటా నిర్వహణ విధానం',
      phone: ['+91 74062 96116', '+91 96111 93492'],
      email: ['info@byalance.in'],
      address: ['4వ దశ, జెపి నగర్', 'బెంగళూరు, కర్ణాటక 560078'],
      gstin: 'జిఎస్టిఐఎన్: ',
    },
    services: {
      accounting: {
        title: "అకౌంటింగ్ & బుక్కీపింగ్",
        description: "మీ పుస్తకాలను కచ్చితంగా మరియు తాజాగా ఉంచడానికి సమగ్ర అకౌంటింగ్ సేవలు.",
        features: [
          "అమ్మకాలు, కొనుగోళ్లు, ఖర్చుల నమోదులు",
          "బ్యాంక్ సయోధ్య",
          "నగదు పుస్తకం నిర్వహణ",
          "జర్నల్ ఎంట్రీలు & తరుగుదల",
          "ఖాతాలు/విక్రేతల సయోధ్య",
          "ట్రయల్ బ్యాలెన్స్, పి&ఎల్, బ్యాలెన్స్ షీట్",
          "రాబడులు & చెల్లింపుల ట్రాకింగ్",
          "డేటా సెటప్ & క్లీనప్",
          "నెల-ముగింపు & సంవత్సరం-ముగింపు ముగింపు మద్దతు",
        ],
      },
      itr: {
        title: "ఐటిఆర్ సేవలు",
        description: "వ్యక్తులు మరియు వ్యాపారాల కోసం నిపుణులైన ఐటిఆర్ ఫైలింగ్ సేవలు.",
        features: [
          "వర్తింపు తనిఖీ (తప్పనిసరి/స్వచ్ఛంద)",
          "పాన్-ఆధార్ లింకింగ్ ధృవీకరణ",
          "మొత్తం ఆదాయం & పన్ను గణన",
          "ఫారం 26AS, AIS & TIS సమీక్ష",
          "సరైన ఐటిఆర్ ఫారం ఫైలింగ్ (ITR-1 నుండి ITR-7)",
          "నోటీసు & పరిశీలన మద్దతు",
        ],
      },
      gst: {
        title: "జిఎస్టి సేవలు",
        description: "మీ వ్యాపారాన్ని పన్ను-పాటించేలా ఉంచడానికి పూర్తి జిఎస్టి పాటింపు మరియు ఫైలింగ్ సేవలు.",
        features: [
          "జిఎస్టి నమోదు",
          "GSTR-1, 3B, 9 ఫైలింగ్",
          "జిఎస్టి ఇన్పుట్ క్రెడిట్ సరిపోలిక (2B వర్సెస్ పుస్తకాలు)",
          "ఇ-ఇన్వాయిస్ & ఇ-వే బిల్ పాటింపు",
          "ఆలస్య రుసుము మరియు జరిమానా పరిష్కారం",
        ],
      },
      tds: {
        title: "టిడిఎస్ సేవలు",
        description: "మీ వ్యాపారం కోసం సమగ్ర టిడిఎస్ నిర్వహణ మరియు ఫైలింగ్ సేవలు.",
        features: [
          "టాన్ అప్లికేషన్",
          "ఫారం 24Q, 26Q ఫైలింగ్",
          "ముందస్తు పన్ను & చలాన్ నిర్వహణ",
          "ఫారం 16/16A జనరేషన్",
          "టిడిఎస్ డిఫాల్ట్ & డిమాండ్ పరిష్కారం",
        ],
      },
      payroll: {
        title: "పేరోల్ సేవలు",
        description: "కచ్చితమైన గణనలు మరియు చట్టబద్ధమైన పాటింపుతో పూర్తి పేరోల్ నిర్వహణ.",
        features: [
          "ఉద్యోగి మాస్టర్ డేటా నిర్వహణ",
          "జీతం నిర్మాణం & నెలవారీ గణనలు",
          "కచ్చితమైన పేస్లిప్స్ & పేరోల్ రిజిస్టర్",
          "పేరోల్ రిజిస్టర్ & జీతం స్లిప్స్",
          "జీతంపై టిడిఎస్ & ఫారం 16/16A",
          "పిఎఫ్/ఇఎస్ఐ/పిటి/ఇడిఎల్ఐ నమోదు & రిటర్న్ ఫైలింగ్",
          "పూర్తి & తుది సెటిల్మెంట్",
        ],
      },
    },
    about: {
      title: "Byalance గురించి",
      p1: "Byalance భారతదేశం అంతటా టైర్ 1, 2 మరియు టైర్ 3 నగరాల్లోని స్టార్టప్‌లు మరియు చిన్న వ్యాపారాల ప్రత్యేక అవసరాలకు సేవ చేయడానికి అంకితమైన ఒక ఆధునిక వర్చువల్ అకౌంటింగ్ సంస్థ. పెరుగుతున్న వ్యాపారాలకు నమ్మకమైన, సరసమైన మరియు వృత్తిపరమైన అకౌంటింగ్ సేవలు అవసరమని మేము అర్థం చేసుకున్నాము.",
      p2: "సాంప్రదాయ అకౌంటింగ్ సంస్థల సంక్లిష్టత మరియు అధిక ఖర్చులు లేకుండా సమగ్ర అకౌంటింగ్ మద్దతు అవసరమైన స్టార్టప్‌లు, చిల్లర వ్యాపారులు, వ్యాపారులు, సేవా ప్రదాతలు మరియు MSMEలతో పనిచేయడంలో మేము ప్రత్యేకత కలిగి ఉన్నాము.",
      missionTitle: "మా లక్ష్యం",
      missionText: "ప్రతి వ్యాపారం కోసం సమ్మతిని ఒత్తిడి లేనిదిగా, సరసమైనదిగా మరియు వృత్తిపరమైనదిగా చేయడం.",
      features: {
        trusted: {
          title: "విశ్వసనీయ భాగస్వామి",
          description: "విశ్వాసం మరియు విశ్వసనీయత ఆధారంగా మా ఖాతాదారులతో దీర్ఘకాలిక సంబంధాలను నిర్మించడం.",
        },
        growth: {
          title: "వృద్ధి కేంద్రీకృతం",
          description: "వారి వృద్ధి ప్రయాణంలో ప్రతి దశలో వ్యాపారాలకు మద్దతు ఇవ్వడం.",
        },
        timely: {
          title: "సకాలంలో సేవ",
          description: "అన్ని గడువులను పాటించడం మరియు మీ వ్యాపారాన్ని సకాలంలో కంప్లైంట్‌గా ఉంచడం.",
        },
      },
    },
  },

  ta: {
    nav: {
      home: 'முகப்பு',
      about: 'எங்களைப் பற்றி',
      services: 'சேவைகள்',
      pricing: 'விலை',
      contact: 'தொடர்பு',
      allServices: 'அனைத்து சேவைகள்',
      whatsapp: 'வாட்ஸ்அப்',
    },
    hero: {
      subtitle: 'கணக்கியலை எளிதாக்குதல், வளர்ச்சியை சக்திப்படுத்துதல்.',
      description: 'உங்கள் GST, TDS, சம்பளம் மற்றும் முழு கணக்கியலை நாங்கள் நிர்வகிக்கிறோம் — நீங்கள் உங்கள் வணிகத்தில் கவனம் செலுத்துங்கள்.',
      bookConsultation: 'இலவச ஆலோசனை பதிவு செய்யுங்கள்',
      whatsappNow: 'இப்போதே வாட்ஸ்அப் செய்யுங்கள்',
    },
    sections: {
      whyChooseUs: 'BYALANCE ஏன் தேர்வு செய்ய வேண்டும்?',
      whySubtitle: 'வளர்ந்து வரும் வணிகங்களுக்கான தொழில்முறை கணக்கியல் சேவைகள்',
      about: 'Byalance பற்றி',
      services: 'எங்கள் சேவைகள்',
      servicesSubtitle: 'உங்கள் வணிகத்திற்கு ஏற்ற முழுமையான கணக்கியல் தீர்வுகள்',
      pricing: 'வெளிப்படையான விலை',
      pricingSubtitle: 'உங்கள் வணிக தேவைகளுக்கு ஏற்ற திட்டத்தை தேர்வு செய்யுங்கள்',
      contact: 'தொடர்பு கொள்ளுங்கள்',
      contactSubtitle: 'இணக்கத்தை எளிதாக்க தயாரா? உரையாடலை தொடங்குவோம்.',
      getInTouch: 'எங்களுக்கு செய்தி அனுப்புங்கள்',
    },
    features: {
      transparentPricing: 'வெளிப்படையான விலை',
      transparentPricingDesc: 'மறைமுக கட்டணங்கள் இல்லை. நீங்கள் எதற்கு பணம் செலுத்துகிறீர்கள் என்று அறிந்து கொள்ளுங்கள்.',
      localLanguage: 'உள்ளூர் மொழி ஆதரவு',
      localLanguageDesc: 'உங்களுக்கு விருப்பமான மொழியில் தொடர்பு கொள்ளுங்கள்.',
      compliance: 'முழுமையான இணக்கம்',
      complianceDesc: 'பதிவு முதல் தாக்கல் வரை முழுமையான இணக்க மேலாண்மை.',
      microFriendly: 'சிறு வணிகத்திற்கு ஏற்றது',
      microFriendlyDesc: 'மிகச்சிறிய வணிகங்களுக்கும் சேவைகள் கிடைக்கும். நம்பிக்கையுடன் வளருங்கள்.',
    },
    cta: {
      bookConsultation: 'இலவச ஆலோசனை பதிவு செய்யுங்கள்',
      contactCustom: 'தனிப்பயன் விலைக்கு தொடர்பு கொள்ளுங்கள்',
      choosePlan: 'தேர்வு செய்யுங்கள்',
      learnMore: 'மேலும் அறியுங்கள்',
      sendMessage: 'செய்தி அனுப்புங்கள்',
      sending: 'அனுப்புகிறது...',
      chatWhatsApp: 'வாட்ஸ்அப்பில் அரட்டை அடியுங்கள்',
    },
    pricing: {
      starter: 'ஸ்டார்டர் திட்டம்',
      starterPrice: '₹1,999 – ₹6,999',
      growth: 'க்ரோத் திட்டம்',
      growthPrice: '₹7,499 – ₹14,999',
      pro: 'ப்ரோ திட்டம்',
      proPrice: '₹15,499 – ₹20,000+',
      recommended: 'பரிந்துரைக்கப்படுகிறது',
      perMonth: 'மாதத்திற்கு',
      notIdeal: 'சரியான விலை இல்லையா?',
      notIdealDesc: 'தனிப்பயன் தீர்வு வேண்டுமா? உங்கள் குறிப்பிட்ட தேவைகளைப் பற்றி பேசலாம்.',
      starterFeatures: ["ஜிஎஸ்டி ரிட்டர்ன்ஸ்", "அடிப்படை கணக்கு வைப்பு", "விற்பனை மற்றும் கொள்முதல் பதிவுகள்", "மாதாந்திர நிதி அறிக்கைகள்"],
      growthFeatures: ["ஜிஎஸ்டி ரிட்டர்ன்ஸ் & இணக்கம்", "டிடிஎஸ் ரிட்டர்ன்ஸ் & தாக்கல்", "முழு கணக்கியல் & கணக்கு வைப்பு", "வங்கி சரிபார்ப்பு", "நிதி அறிக்கைகள் (பி&எல், இருப்புநிலை)"],
      proFeatures: ["ஜிஎஸ்டி & டிடிஎஸ் முழுமையான மேலாண்மை", "ஊதிய செயலாக்கம்", "முழுமையான கணக்கியல் சேவைகள்", "மேம்பட்ட நிதி அறிக்கைகள்", "முன்னுரிமை ஆதரவு"]
    },
    contact: {
      sendMessage: 'எங்களுக்கு செய்தி அனுப்புங்கள்',
      phone: 'தொலைபேசி',
      email: 'மின்னஞ்சல்',
      address: 'முகவரி',
      hours: 'வணிக நேரம்',
      hoursValue: ['திங்கள் – சனி: காலை 9:00 – மாலை 6:00', 'ஞாயிறு: மூடப்பட்டது'],
      preferWhatsApp: 'வாட்ஸ்அப் விரும்புகிறீர்களா?',
      preferWhatsAppDesc: 'வாட்ஸ்அப்பில் உங்கள் கேள்விகளுக்கு உடனடி பதில்கள் பெறுங்கள்.',
      name: 'முழு பெயர்',
      mobile: 'மொபைல் எண்',
      businessType: 'வணிக வகை',
      message: 'செய்தி',
      namePlaceholder: 'உங்கள் பெயரை உள்ளிடுங்கள்',
      mobilePlaceholder: 'உங்கள் மொபைல் எண்ணை உள்ளிடுங்கள்',
      emailPlaceholder: 'உங்கள் மின்னஞ்சல் ஐடியை உள்ளிடுங்கள்',
      messagePlaceholder: 'உங்கள் கணக்கியல் தேவைகளைப் பற்றி சொல்லுங்கள்...',
      contactInfo: 'தொடர்பு தகவல்',
      emailLabel: 'மின்னஞ்சல் *',
      businessTypePlaceholder: 'உங்கள் வணிக வகையைத் தேர்ந்தெடுக்கவும்',
      businessTypes: {
        retail: 'சில்லறை விற்பனையகம்',
        micro: 'சிறு வணிகம்',
        small: 'சிறு வணிகம்',
        startup: 'தொடக்க',
        msme: 'எம்எஸ்எம்இ',
        other: 'மற்றவை',
      }
    },
    footer: {
      quickLinks: 'விரைவு இணைப்புகள்',
      services: 'சேவைகள்',
      contactInfo: 'தொடர்பு தகவல்',
      rights: '© 2026 Byalance. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
      privacyPolicy: 'தனியுரிமைக் கொள்கை',
      dataHandlingPolicy: 'தரவு கையாளுதல் கொள்கை',
      phone: ['+91 74062 96116', '+91 96111 93492'],
      email: ['info@byalance.in'],
      address: ['4வது கட்டம், ஜேபி நகர்', 'பெங்களூரு, கர்நாடகா 560078'],
      gstin: 'ஜிஎஸ்டிஐஎன்: ',
    },
    services: {
      accounting: {
        title: "கணக்கியல் மற்றும் புத்தக பராமரிப்பு",
        description: "உங்கள் புத்தகங்களை துல்லியமாகவும் புதுப்பித்த நிலையில் வைத்திருக்கவும் விரிவான கணக்கியல் சேவைகள்.",
        features: [
          "விற்பனை, கொள்முதல், செலவு உள்ளீடுகள்",
          "வங்கி சரிபார்ப்பு",
          "பணப் புத்தக பராமரிப்பு",
          "ஜர்னல் உள்ளீடுகள் மற்றும் தேய்மானம்",
          "கணக்குகள்/விற்பனையாளர் சரிபார்ப்பு",
          "சோதனை இருப்பு, லாபம்-நஷ்டம், இருப்புநிலை",
          "வரவுகள் மற்றும் செலுத்தல்கள் கண்காணிப்பு",
          "தரவு அமைப்பு மற்றும் சுத்தம் செய்தல்",
          "மாத-இறுதி மற்றும் ஆண்டு-இறுதி மூடல் ஆதரவு",
        ],
      },
      itr: {
        title: "ஐடிஆர் சேவைகள்",
        description: "தனிநபர்கள் மற்றும் வணிகங்களுக்கான நிபுணர் ஐடிஆர் தாக்கல் சேவைகள்.",
        features: [
          "பொருந்தக்கூடிய சோதனை (கட்டாய/தன்னார்வ)",
          "பான்-ஆதார் இணைப்பு சரிபார்ப்பு",
          "மொத்த வருமானம் மற்றும் வரி கணக்கீடு",
          "படிவம் 26AS, AIS மற்றும் TIS ஆய்வு",
          "சரியான ஐடிஆர் படிவத்தை தாக்கல் செய்தல் (ITR-1 முதல் ITR-7)",
          "அறிவிப்பு மற்றும் ஆய்வு ஆதரவு",
        ],
      },
      gst: {
        title: "ஜிஎஸ்டி சேவைகள்",
        description: "உங்கள் வணிகத்தை வரி-இணக்கமாக வைத்திருக்க முழுமையான ஜிஎஸ்டி இணக்கம் மற்றும் தாக்கல் சேவைகள்.",
        features: [
          "ஜிஎஸ்டி பதிவு",
          "GSTR-1, 3B, 9 தாக்கல்",
          "ஜிஎஸ்டி உள்ளீட்டு கடன் பொருத்தம் (2B மற்றும் புத்தகங்கள்)",
          "இ-விலைப்பட்டியல் மற்றும் இ-வே பில் இணக்கம்",
          "தாமதக் கட்டணம் மற்றும் அபராதம் தீர்வு",
        ],
      },
      tds: {
        title: "டிடிஎஸ் சேவைகள்",
        description: "உங்கள் வணிகத்திற்கான விரிவான டிடிஎஸ் மேலாண்மை மற்றும் தாக்கல் சேவைகள்.",
        features: [
          "டான் விண்ணப்பம்",
          "படிவம் 24Q, 26Q தாக்கல்",
          "முன்கூட்டிய வரி மற்றும் சலான் மேலாண்மை",
          "படிவம் 16/16A உருவாக்கம்",
          "டிடிಎಸ್ இயல்புநிலை மற்றும் கோரிக்கை தீர்வு",
        ],
      },
      payroll: {
        title: "சம்பள சேவைகள்",
        description: "துல்லியமான கணக்கீடுகள் மற்றும் சட்டப்பூர்வ இணக்கத்துடன் முழுமையான சம்பள மேலாண்மை.",
        features: [
          "ஊழியர் முதன்மை தரவு மேலாண்மை",
          "சம்பள கட்டமைப்பு மற்றும் மாதாந்திர கணக்கீடுகள்",
          "துல்லியமான சம்பள சீட்டுகள் மற்றும் சம்பள பதிவேடு",
          "சம்பள பதிவேடு மற்றும் சம்பள சீட்டுகள்",
          "சம்பளத்தில் டிடிஎஸ் மற்றும் படிவம் 16/16A",
          "பிஎஃப்/இఎస్ஐ/பிடி/இடிఎల్ஐ பதிவு மற்றும் ரிட்டர்ன் தாக்கல்",
          "முழு மற்றும் இறுதி தீர்வு",
        ],
      },
    },
    about: {
      title: "Byalance பற்றி",
      p1: "Byalance என்பது இந்தியா முழுவதும் அடுக்கு 1, 2 மற்றும் அடுக்கு 3 நகரங்களில் உள்ள தொடக்க மற்றும் சிறு வணிகங்களின் தனிப்பட்ட தேவைகளைப் பூர்த்தி செய்வதற்காக அர்ப்பணிக்கப்பட்ட ஒரு நவீன மெய்நிகர் கணக்கியல் நிறுவனம். வளர்ந்து வரும் வணிகங்களுக்கு நம்பகமான, மலிவு மற்றும் தொழில்முறை கணக்கியல் சேவைகள் தேவை என்பதை நாங்கள் புரிந்துகொள்கிறோம்.",
      p2: "பாரம்பரிய கணக்கியல் நிறுவனங்களின் சிக்கலான மற்றும் அதிக செலவுகள் இல்லாமல் விரிவான கணக்கியல் ஆதரவு தேவைப்படும் தொடக்க, சில்லறை விற்பனையாளர்கள், வர்த்தகர்கள், சேவை வழங்குநர்கள் மற்றும் எம்எஸ்எம்இக்களுடன் பணியாற்றுவதில் நாங்கள் நிபுணத்துவம் பெற்றுள்ளோம்.",
      missionTitle: "எங்கள் நோக்கம்",
      missionText: "ஒவ்வொரு வணிகத்திற்கும் இணக்கத்தை மன அழுத்தம் இல்லாத, மலிவு மற்றும் தொழில்முறை ஆக்குதல்.",
      features: {
        trusted: {
          title: "நம்பகமான கூட்டாளர்",
          description: "நம்பிக்கை மற்றும் நம்பகத்தன்மையின் அடிப்படையில் எங்கள் வாடிக்கையாளர்களுடன் நீண்டகால உறவுகளை உருவாக்குதல்.",
        },
        growth: {
          title: "வளர்ச்சி மையப்படுத்தப்பட்டது",
          description: "வணிகங்களை அவற்றின் வளர்ச்சிப் பயணத்தின் ஒவ்வொரு கட்டத்திலும் ஆதரித்தல்.",
        },
        timely: {
          title: "சரியான நேரத்தில் சேவை",
          description: "அனைத்து காலக்கெடுவையும் பூர்த்திசெய்து, உங்கள் வணிகத்தை சரியான நேரத்தில் இணக்கமாக வைத்திருத்தல்.",
        },
      },
    },
  },
};
