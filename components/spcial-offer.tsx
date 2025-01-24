import { SpecialOfferCard } from "./card-count"

const offers= [
  {
    id: 1,
    image: "/montana-frz-molukhia.webp",
    category: "الخضار المجمدة",
    title: "ملوخية خضراء مونتانـا",
    originalPrice: 0.278,
    salePrice: 0.250,
    countdown: {
      days: 10,
      hours: 12,
      minutes: 27,
      seconds: 50,
    },
    soldOut: false,
  },
  {
    id: 2,
    image: "/rohu-myanmar-fish-20-kg.webp",
    category: "مأكولات بحرية مجمدة",
    title: "كرتون - سمك روهو مينمار 20 كيلو",
    originalPrice: 16.665,
    salePrice: 13.332,
    countdown: {
      days: 38,
      hours: 12,
      minutes: 27,
      seconds: 50,
    },
    soldOut: false,
  },
  {
    id: 3,
    image: "/zeeba-classic-basmati-rice.webp",
    category: "الأرز",
    title: "أرز بسمتي زيبا كلاسيك",
    originalPrice: 3.625,
    salePrice: 3.000,
    countdown: {
      days: 10,
      hours: 12,
      minutes: 27,
      seconds: 50,
    },
    soldOut: false,
  },
  {
    id: 4,
    image: "/zeeba-classic-basmati-rice.webp",
    category: "الأرز",
    title: "أرز بسمتي زيبا كلاسيك بلاستيك",
    originalPrice: 3.625,
    salePrice: 3.000,
    countdown: {
      days: 1,
      hours: 12,
      minutes: 27,
      seconds: 50,
    },
    soldOut: false,
  },
  {
    id: 5,
    image: "/maestro-potatoes-with-spices---2-500-kg.webp",
    category: " KAC - بطاطا  ",
    title: "بطاطا مايسترو بالبهارات - 2.500 كج",
    originalPrice: 1.750,
    salePrice: 1.157,
    countdown: {
      days: 10,
      hours: 12,
      minutes: 27,
      seconds: 50,
    },
    soldOut: false,
  },
  {
    id: 6,
    image: "/newzealand-corn-kernnel-pcs.webp",
    category: "الخضار المجمدة",
    title: "ذرة حب نيوزيلاندي هاي ماركت 1 كيلو",
    originalPrice: 1.000,
    salePrice: 0.958,
    countdown: {
      days: 38,
      hours: 12,
      minutes: 27,
      seconds: 50,
    },
    soldOut: false,
  },
  {
    id: 7,
    image: "/smoked-turkey-breast.webp",
    category: "لحوم مجمدة",
    title: "صدر ديك رومي مدخن أمريكي",
    originalPrice: 5.750,
    salePrice: 2.000,
    countdown: {
      days: 99,
      hours: 11,
      minutes: 27,
      seconds: 50,
    },
    soldOut: true,
  },
  {
    id: 8,
    image: "/indian-sugar-50-kg.webp",
    category: "حبوب",
    title: "سكر هندي 50 كيلو",
    originalPrice: 11.200,
    salePrice: 4.200,
    countdown: {
      days: 10,
      hours: 12,
      minutes: 27,
      seconds: 50,
    },
    soldOut: false,
  },
];

export function SpecialOffersSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-2">
        <h2 className="text-3xl font-bold text-center mb-2">العروض الخاصة</h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer, index) => (
            <SpecialOfferCard key={index} {...offer} />
          ))}
        </div>
      </div>
    </section>
  )
}

