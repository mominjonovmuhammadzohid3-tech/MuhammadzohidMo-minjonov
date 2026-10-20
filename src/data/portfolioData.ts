import { SkillItem, ProjectItem, ContactLink, MetricItem } from '../types';

export const PERSONAL_INFO = {
  fullName: "Muhammadzohid Mo'minjonov",
  shortName: "Muhammadzohid M.",
  age: 15,
  rolesTitle: "Yosh muhandis • Robototexnika • Dasturchi • O’qituvchi",
  tagline: "Texnologiya va amaliy muhandislik orqali kelajak ixtirolarini yaratishga va yosh avlodga ilhom berishga intilaman.",
  aboutText: "Men 15 yoshli yosh muhandis, robototexnika ixlosmandi, dasturchi va STEM yo'nalishidagi yosh ustozman. Zamonaviy mikrokontrollerlar, avtomatlashtirish, C++, Python hamda veb-texnologiyalar vositasida innovatsion apparat-dasturiy qurilmalar ishlab chiqaman. O'z bilimlarimni amaliyotda sinash bilan birga, tengdoshlarim va yosh o'quvchilarga robototexnika sirlarini o'rgatishdan cheksiz quvonch tuyaman.",
  secondaryAbout: "Har bir yangi sxema, kod qatori yoki mexanik qism men uchun kelajak sivilizatsiyasiga qo'yilgan kichik g'ishtdir. Maqsadim — xalqaro miqyosdagi innovatsion texnologiyalarni yaratuvchi yetuk muhandis bo'lish.",
  email: "mominjonovmuhammadzohid3@gmail.com",
  location: "O'zbekiston",
  status: "Faol ixtirochi va o'qituvchi",
  avatarImage: "/src/assets/images/profile_muhammadzohid_1792496821600.jpg",
};

export const KEY_METRICS: MetricItem[] = [
  {
    value: "15",
    label: "Yosh",
    subtext: "Iqtidorli yosh muhandis"
  },
  {
    value: "5+",
    label: "Texnik yo'nalishlar",
    subtext: "Dasturlash, robototexnika, STEM"
  },
  {
    value: "20+",
    label: "Amaliy prototiplar",
    subtext: "Sxemalar, robotlar, dasturlar"
  },
  {
    value: "50+",
    label: "O'qitilgan yoshlar",
    subtext: "Mahorat darslari & to'garaklar"
  }
];

export const SKILLS_DATA: SkillItem[] = [
  {
    id: "programming",
    name: "Dasturlash",
    percentage: 92,
    icon: "code",
    tagline: "Algoritmlar, mikrokontrollerlar kodi va zamonaviy veb-ishlanmalar",
    description: "C++ tili orqali apparat ta'minotini boshqarish, Python bilan ma'lumotlar tahlili va avtomatlashtirish, hamda zamonaviy TypeScript va React bilan qulay veb-interfeyslar tuzish mahorati.",
    technologies: ["C++", "Python", "JavaScript / TypeScript", "Arduino C", "Algoritmlar", "Git & GitHub"],
    highlights: ["Mikrokontrollerlar uchun past darajali kod yozish", "Algoritmik optimallashtirish va xatolarni tahlil qilish", "Zamonaviy reaktiv interfeyslar yaratish"]
  },
  {
    id: "robotics",
    name: "Robototexnika",
    percentage: 88,
    icon: "bot",
    tagline: "Avtonom tizimlar, datchiklar, motorlar va mexanik harakat",
    description: "Murakkab harakat trayektoriyalariga ega robot tizimlarini yig'ish, drayverlar orqali servomotorlarni boshqarish hamda optik, ultratovushli va giroskopik datchiklar orqali fazoviy tahlil qilish.",
    technologies: ["Arduino Uno/Nano/Mega", "ESP32 & ESP8266", "Servo & Step drayverlar", "Ultrasonic & IR sensorlar", "Kinematika"],
    highlights: ["Ko'p bo'g'inli manipulyator qo'llar yasash", "Chiziq bo'ylab va to'siqlardan aylanib o'tuvchi robotlar", "Simsiz masofadan boshqarish protokollari"]
  },
  {
    id: "engineering",
    name: "Muhandislik",
    percentage: 85,
    icon: "cpu",
    tagline: "Sxemotexnika, 3D modellashtirish va apparat konstruksiyasi",
    description: "Elektron sxemalarni loyihalash, montaj qilish, payvandlash (soldering), kuchlanish va to'k turg'unligini hisoblash hamda robot qismlarini 3D modellarini ishlab chiqish.",
    technologies: ["Sxemotexnika & PCB dizayn", "3D CAD modellashtirish", "Soldering & Montaj", "Multimetr & Diagnostika", "Elektronika asoslari"],
    highlights: ["Elektr ta'minoti va xavfsizlik zanjirlarini hisoblash", "Mexanik podshipniklar va uzatmalar montaji", "Maxsus korpuslarni loyihalash"]
  },
  {
    id: "science",
    name: "Ilm-fan",
    percentage: 86,
    icon: "atom",
    tagline: "Fizika qonuniyatlari, matematika va ilmiy eksperimentlar",
    description: "Muhandislik va robototexnika zamirida yotgan fundamental fizika (elektrodinamika, mexanika, optika) va amaliy matematika qonuniyatlarini chuqur tushunish hamda amaliy tajribalarda qo'llash.",
    technologies: ["Nazariy & Amaliy fizika", "Amaliy matematika", "Eksperimentlar metodologiyasi", "Tahlil & Modellash", "Ilmiy izlanishlar"],
    highlights: ["Fizik hodisalarni matematik modellashtirish", "Sensor ko'rsatkichlarining xatoliklarini hisoblash", "STEM fanlarini integratsiya qilish"]
  },
  {
    id: "teaching",
    name: "O’qituvchilik",
    percentage: 94,
    icon: "users",
    tagline: "STEM ta'limi, mentorlik va murakkab mavzularni sodda tushuntirish",
    description: "Tengdoshlar va yosh bolalarda ilm-fan, dasturlash va robototexnikaga qiziqish uyg'otish. Nazariyani zerikarli qilmasdan, har bir darsda yangi ishlaydigan qurilma yaratishga asoslangan interaktiv dars berish uslubi.",
    technologies: ["STEM o'quv dasturlari", "Interaktiv mahorat darslari", "Mentorlik & yo'l-yo'riq", "Pedagogik kommunikatsiya", "Ochiq taqdimotlar"],
    highlights: ["50 dan ortiq yoshlarga dastlabki robototexnika saboqlari", "Amaliy laboratoriya mashg'ulotlarini tashkil etish", "Iqtidorli bolalarni olimpiada va tanlovlarga yo'naltirish"]
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "robotic-arm",
    title: "Aqlli Robot Manipulyator",
    subtitle: "Avtomatlashtirilgan 6-eksa mexanik qo'l prototipi",
    category: "Robototexnika & Muhandislik",
    description: "Mikrokontroller va nozik servomotorlar yordamida buyumlarni tanib, saralovchi va aniq trayektoriya bo'ylab ko'chiruvchi 6 erkinlik darajali robotlashtirilgan apparat.",
    fullDetails: "Mazkur robot manipulyator ishlab chiqarishdagi konveyer avtomatizatsiyasidan ilhomlangan holda yaratilgan. Tizim Arduino Mega mikrokontrolleri orqali PCA9685 PWM drayveriga signallar uzatadi. Boshqaruv Bluetooth orqali mobil ilovadan yoki avtonom oldindan yozilgan harakat sikli yordamida amalga oshiriladi. O'rnatilgan ultratovushli sensor buyum masofasini aniqlaydi.",
    image: "/src/assets/images/project_robot_arm_1792496822427.jpg",
    technologies: ["C++", "Arduino Mega", "PCA9685 PWM", "Servo MG996R", "Kinematika"],
    metrics: [
      { label: "Erkinlik darajasi", value: "6 DOF" },
      { label: "Pozitsiya aniqligi", value: "±0.5 mm" },
      { label: "Yuk ko'tarish", value: "350 gramm" }
    ],
    hardwareOrComponents: ["Arduino Mega 2560", "6x MG996R metall tishli servolar", "Akril va alyuminiy karkas", "Bluetooth HC-05 moduli"],
    demoOrCodeLink: "https://github.com/muhammadzohid-dev"
  },
  {
    id: "stem-platform",
    title: "STEM Ta'lim va Robototexnika Portali",
    subtitle: "O'quvchilar uchun interaktiv dasturlash va sxema laboratoriyasi",
    category: "Dasturlash & O’qituvchilik",
    description: "Robototexnika va algoritmik fikrlashni yangi boshlayotgan o'quvchilar uchun vizual bloklar, animatsion elektronika komponentlari va interaktiv vazifalar tizimi.",
    fullDetails: "O'qituvchilik faoliyatimdagi tajribamdan kelib chiqib, yosh o'quvchilar kod va sxemalarni ko'rgazmali tarzda tezroq o'zlashtirishini kuzatdim. Shu sababli web-asosli interaktiv platforma ishlab chiqdim. Unda foydalanuvchilar rezistor, LED, datchik va motorlarni virtual yig'ib, kod bloklari orqali natijani real vaqtda ekranda ko'rishlari mumkin.",
    image: "/src/assets/images/project_stem_platform_1792496822279.jpg",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Interactive Canvas", "STEM Logic"],
    metrics: [
      { label: "Interaktiv modullar", value: "18 ta" },
      { label: "O'rganish tezligi", value: "+40% tezroq" },
      { label: "Foydalanuvchi qamrovi", value: "Yosh to'garaklar" }
    ],
    hardwareOrComponents: ["Virtual Arduino emulyatori", "Blokli kod generatori", "Interaktiv sxema chizmasi"],
    demoOrCodeLink: "https://github.com/muhammadzohid-dev"
  },
  {
    id: "iot-station",
    title: "IoT Aqlli Ekotizim va Xona Monitoringi",
    subtitle: "Havo sifati, namlik va mikroiqlimni nazorat qiluvchi stansiya",
    category: "IoT & Ilm-fan",
    description: "O'quv xonalari va laboratoriyalardagi harorat, namlik, karbonat angidrid (CO2) hamda chang zarralarini tahlil qilib, optimal ish muhitini saqlashga ko'maklashuvchi aqlli qurilma.",
    fullDetails: "ESP32 mikrokontrolleriga ulangan BME280 va MQ seriyali datchiklar yordamida xona havosi uzluksiz tahlil qilinadi. Ko'rsatkichlar ixcham OLED ekranda hamda WiFi orqali onlayn asboblar panelida aks etadi. Agar karbonat angidrid miqdori me'yordan oshsa, tizim ovozli signal beradi va shamollatishni tavsiya qiladi.",
    image: "/src/assets/images/project_iot_system_1792496823512.jpg",
    technologies: ["ESP32", "C++", "MQTT / WebSockets", "I2C OLED", "BME280 & MQ Sensor"],
    metrics: [
      { label: "Yangilanish vaqti", value: "Har 2 soniyada" },
      { label: "Sensor aniqligi", value: "98.5%" },
      { label: "Ishlash davomiyligi", value: "24/7 avtonom" }
    ],
    hardwareOrComponents: ["ESP32 NodeMCU", "0.96 inch I2C OLED", "BME280 datchigi", "MQ-135 havo datchigi"],
    demoOrCodeLink: "https://github.com/muhammadzohid-dev"
  }
];

export const CONTACT_CHANNELS: ContactLink[] = [
  {
    platform: "Telegram",
    username: "@muhammadzohid_mominjonov",
    url: "https://t.me/muhammadzohid_mominjonov",
    icon: "telegram",
    description: "Tezkor muloqot, savollar va loyihalar bo'yicha bog'lanish uchun eng qulay yo'l.",
    isPrimary: true
  },
  {
    platform: "Instagram",
    username: "@muhammadzohid_mominjonov",
    url: "https://instagram.com/muhammadzohid_mominjonov",
    icon: "instagram",
    description: "Kundalik muhandislik jarayonlari, darslar va ixtirolardan foto/video lavhalar.",
  },
  {
    platform: "GitHub",
    username: "muhammadzohid-dev",
    url: "https://github.com/muhammadzohid-dev",
    icon: "github",
    description: "Ochiq kodli loyihalar, robot algoritmlari va dasturiy ta'minot repozitoriylari.",
  },
  {
    platform: "Email",
    username: "mominjonovmuhammadzohid3@gmail.com",
    url: "mailto:mominjonovmuhammadzohid3@gmail.com",
    icon: "email",
    description: "Hamkorlik, takliflar, ta'limiy loyihalar va rasmiy xatlar uchun.",
    isPrimary: true
  }
];
