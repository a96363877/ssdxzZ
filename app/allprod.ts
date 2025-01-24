
interface ProductCardProps {
    id: string;
    image: string;
    title: string;
    salePrice: number;
    originalPrice?: number;
    isSpecialOffer?: boolean;
    category?: string;
    discount?: number;
  }
  
  export const products: ProductCardProps[] = [ 
    {
      id: '03',
      image: "/premium-turkish-olive-oil-cere-500-ml.webp",
      category: "الزيوت",
      title: "زيت زيتون تركي ممتاز - 500 مل",
      originalPrice: 1.008,
      salePrice: 1.008,
    },
    {
      id: '04',
      image: "/extra-virgin-olive-oil-qm-gold---2-liter.webp",
      category: "الزيوت",
      title: "زيت زيتون بكر ممتاز جولد ق.م - 2 لتر",
      originalPrice: 7.15,
      salePrice: 5.15,
    },
    {
      id: '05',
      image: "/turkish-cere-olive-oil.webp",
      category: "الزيوت",
      title: "زيت زيتون تركى سيرى 10 لتر",
      originalPrice: 18.0,
      salePrice: 16.0,
    },
    {
      id: '06',
      image: "/sabrina-frying-oil.webp",
      category: "الزيوت",
      title: "زيت صويا سابرينا 12 لتر",
      originalPrice: 6.5,
      salePrice: 5.5,
    },
    {
      id: '07',
      image: "/extra-virgin-olive-oil-qm-gold---1-liter.webp",
      category: "الزيوت",
      title: "زيت زيتون بكر ممتاز جولد ق.م - 1 لتر",
      originalPrice: 3.65,
      salePrice: 3.5,
    },
    {
      id: '08',
      image: "/extra-virgin-olive-oil-qm-gold---750-ml.webp",
      category: "الزيوت",
      title: "زيت زيتون بكر ممتاز جولد ق.م - 750 مل",
      originalPrice: 3.0,
      salePrice: 2.0,
    },
    {
      id: '09',
      image: "/sabrina-frying-oil.webp",
      category: "الزيوت",
      title: "زيت قلي سابرينا 17 لتر",
      originalPrice: 6.75,
      salePrice: 4.75,
    },
    {
      id: '010',
      image: "/seri-premium-turkish-olive-oil-250-ml.webp",
      category: "الزيوت",
      title: "زيت زيتون تركى ممتاز سيري 250 مل",
      originalPrice: 1.562,
      salePrice: 1.2,
    },
    {
      id: '011',
      image: "/zedola-sunflower-oil---5-liter.webp",
      category: "الزيوت",
      title: "زيت دوار الشمس زيدولا - 5 لتر",
      originalPrice: 3.541,
      salePrice: 2.541,
    },
    {
      id: '012',
      image: "/refined-sundflower-oil-0-85-ltr.webp",
      category: "الزيوت",
      title: "زيت دوار الشمس 850 مل",
      originalPrice: 0.458,
      salePrice: 0.458,
    },
    {
      id: '013',
      image: "/rifi-extra-virgin-olive-oil---750ml.webp",
      category: "الزيوت",
      title: "زيت زيتون ممتاز ريفي - 750 مل",
      originalPrice: 2.261,
      salePrice: 2.261,
    },
    {
      id: '014',
      image: "/rifi-virgin-olive-oil--2-liter.webp",
      category: "الزيوت",
      title: "زيت زيتون ممتاز ريفي - 2 لتر",
      originalPrice: 5.165,
      salePrice: 4.999,
    },
    {
      id: '015',
      image: "/premium-turkish-olive-oil---2-litres.webp",
      category: "الزيوت",
      title: "زيت زيتون تركي ممتاز - 2 لتر",
      originalPrice: 3.65,
      salePrice: 3.65,
    },
   
    {
      id: "2",
      image: "/al-fakhir-cooking-oil-1-5l.webp",
      title: "زيت الفاخر 1.5 لتر",
      salePrice: 3.50,
      originalPrice: 4.00,
      category: "وجبات خفيفة",
    },
 
    {
      id: "4",
      image: "/arbash-basmati-rce-20-kg.webp",
      title: "أرابش أرز بسمتي 20 كجم",
      salePrice: 22.50,
      originalPrice: 25.00,
      category: "أرز",
      discount: 10,
    },
    {
      id: "5",
      image: "/apricot-jam-sera-370-g-x-12-pieces.webp",
      title: "مربى المشمش سيرا 370 جرام × 12",
      salePrice: 18.99,
      originalPrice: 22.00,
      category: "مربى ومعلبات",
    },
    {
      id: "6",
      image: "/anise-seeds---1-kilo.webp",
      title: "بذور يانسون 1 كجم",
      salePrice: 8.00,
      originalPrice: 10.00,
      category: "توابل",
      discount: 20,
    },
    {
      id: "8",
      image: "/al-salam-rice-5-kg.webp",
      title: "أرز السلام 5 كجم",
      salePrice: 9.99,
      originalPrice: 12.00,
      category: "أرز",
    },


    {
      id: "11",
      image: "/zeeba-primium-basmati-rice.webp",
      title: "أرز بسمتي زيبا بريميوم",
      salePrice: 15.99,
      originalPrice: 18.00,
      category: "أرز",
    },
    {
      id: "12",
      image: "/zeeba-classic-basmati-rice-plastic.webp",
      title: "أرز بسمتي زيبا كلاسيك (عبوة بلاستيك)",
      salePrice: 10.50,
      originalPrice: 12.00,
      category: "أرز",
    },
    {
      id: "13",
      image: "/zeeba-classic-basmati-rice.webp",
      title: "أرز بسمتي زيبا كلاسيك",
      salePrice: 9.00,
      originalPrice: 10.50,
      category: "أرز",
    },
    {
      id: "14",
      image: "/zeeba-basmati-creamy-sella-5kg.webp",
      title: "أرز بسمتي زيبا كريمي سيلّا 5 كجم",
      salePrice: 20.99,
      originalPrice: 25.00,
      category: "أرز",
    },

    {
      id: "16",
      image: "/zain-alphonso-mango.webp",
      title: "مانجو ألفونسو زين",
      salePrice: 12.99,
      originalPrice: 15.00,
      category: "فاكهة",
    },
    {
      id: "17",
      image: "/white-peppercorns---1-kilo.webp",
      title: "فلفل أبيض 1 كجم",
      salePrice: 6.99,
      originalPrice: 8.00,
      category: "توابل",
    },
 
    {
      id: "19",
      image: "/vietnamese-rice---1-kilo.webp",
      title: "أرز فيتنامي 1 كجم",
      salePrice: 5.99,
      originalPrice: 7.00,
      category: "أرز",
    },

   
    {
      id: "23",
      image: "/thai-parboiled-rice---royal.webp",
      title: "أرز تايلاندي باربويلد رويال",
      salePrice: 12.50,
      originalPrice: 14.00,
      category: "أرز",
    },
    {
      id: "24",
      image: "/thai-jasmine-fragrant-rice-hom-mali.webp",
      title: "أرز ياسمين تايلاندي هوم مالي",
      salePrice: 14.00,
      originalPrice: 16.00,
      category: "أرز",
    }
  ];
  
  const specialOffers = [
    {
      image: '/placeholder.svg',
      title: 'أرز بسمتي سوبر - ١٠ كجم',
      price: '4.500',
    },
    {
      image: '/placeholder.svg',
      title: 'سمك طازج مجمد',
      price: '3.250',
    },
    {
      image: '/placeholder.svg',
      title: 'خضروات مشكلة - عبوة توفير',
      price: '2.750',
    },
    {
      image: '/placeholder.svg',
      title: 'زيت الطبخ - ٥ لتر',
      price: '3.950',
    },
  ];
  