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
  };
  contact: {
    sendMessage: string;
    phone: string;
    email: string;
    address: string;
    hours: string;
    hoursValue: string;
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
  };
  footer: {
    quickLinks: string;
    services: string;
    contactInfo: string;
    rights: string;
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
    },
    contact: {
      sendMessage: 'Send us a message',
      phone: 'Phone',
      email: 'Email',
      address: 'Address',
      hours: 'Business Hours',
      hoursValue: 'Monday – Saturday: 9:00 AM – 6:00 PM\nSunday: Closed',
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
    },
    footer: {
      quickLinks: 'Quick Links',
      services: 'Services',
      contactInfo: 'Contact Info',
      rights: '© 2026 Byalance. All rights reserved.',
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
    },
    contact: {
      sendMessage: 'हमें संदेश भेजें',
      phone: 'फोन',
      email: 'ईमेल',
      address: 'पता',
      hours: 'व्यावसायिक घंटे',
      hoursValue: 'सोमवार – शनिवार: 9:00 AM – 6:00 PM\nरविवार: बंद',
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
    },
    footer: {
      quickLinks: 'त्वरित लिंक',
      services: 'सेवाएँ',
      contactInfo: 'संपर्क जानकारी',
      rights: '© 2026 Byalance. सर्वाधिकार सुरक्षित।',
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
    },
    contact: {
      sendMessage: 'ನಮಗೆ ಸಂದೇಶ ಕಳುಹಿಸಿ',
      phone: 'ಫೋನ್',
      email: 'ಇಮೇಲ್',
      address: 'ವಿಳಾಸ',
      hours: 'ವ್ಯಾಪಾರ ಸಮಯ',
      hoursValue: 'ಸೋಮವಾರ – ಶನಿವಾರ: 9:00 AM – 6:00 PM\nಭಾನುವಾರ: ಮುಚ್ಚಿರುತ್ತದೆ',
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
    },
    footer: {
      quickLinks: 'ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು',
      services: 'ಸೇವೆಗಳು',
      contactInfo: 'ಸಂಪರ್ಕ ಮಾಹಿತಿ',
      rights: '© 2026 Byalance. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.',
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
    },
    contact: {
      sendMessage: 'आम्हाला संदेश पाठवा',
      phone: 'फोन',
      email: 'ईमेल',
      address: 'पत्ता',
      hours: 'व्यवसाय वेळ',
      hoursValue: 'सोमवार – शनिवार: 9:00 AM – 6:00 PM\nरविवार: बंद',
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
    },
    footer: {
      quickLinks: 'त्वरित दुवे',
      services: 'सेवा',
      contactInfo: 'संपर्क माहिती',
      rights: '© 2026 Byalance. सर्व हक्क राखीव.',
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
    },
    contact: {
      sendMessage: 'మాకు సందేశం పంపండి',
      phone: 'ఫోన్',
      email: 'ఇమెయిల్',
      address: 'చిరునామా',
      hours: 'వ్యాపార వేళలు',
      hoursValue: 'సోమవారం – శనివారం: 9:00 AM – 6:00 PM\nఆదివారం: మూసివేయబడింది',
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
    },
    footer: {
      quickLinks: 'శీఘ్ర లింక్‌లు',
      services: 'సేవలు',
      contactInfo: 'సంప్రదింపు సమాచారం',
      rights: '© 2026 Byalance. అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి.',
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
    },
    contact: {
      sendMessage: 'எங்களுக்கு செய்தி அனுப்புங்கள்',
      phone: 'தொலைபேசி',
      email: 'மின்னஞ்சல்',
      address: 'முகவரி',
      hours: 'வணிக நேரம்',
      hoursValue: 'திங்கள் – சனி: 9:00 AM – 6:00 PM\nஞாயிறு: மூடப்பட்டது',
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
    },
    footer: {
      quickLinks: 'விரைவு இணைப்புகள்',
      services: 'சேவைகள்',
      contactInfo: 'தொடர்பு தகவல்',
      rights: '© 2026 Byalance. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
    },
  },
};
