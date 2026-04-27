export const PHONE_NUMBER = "050 220 5500";
export const PHONE_HREF = "tel:+380502205500";

export const STATS = [
  { value: "5",   unit: "хв", label: "середня подача" },
  { value: "40+", unit: "",   label: "електрокарів" },
] as const;

export const ROUTES = [
  { name: "Chizay",      emoji: "📍" },
  { name: "Бакта",       emoji: "📍" },
  { name: "Жайворонок",  emoji: "📍" },
  { name: "Лужанка",     emoji: "📍" },
] as const;

export const NAV_LINKS = [
  { label: "Про нас",       href: "#stats" },
  { label: "Замовити",      href: "#callback" },
  { label: "Маршрути",      href: "#routes" },
  { label: "Переваги",      href: "#features" },
] as const;

export const FEATURES = [
  {
    title: "Електрокари",
    desc:  "Весь автопарк — Renault Zoe. Тихо, чисто, комфортно.",
  },
  {
    title: "Знаємо кожен провулок",
    desc:  "Краще за Google Maps. Швидший маршрут завжди.",
  },
  {
    title: "Подача за 5 хвилин",
    desc:  "17 вільних авто зараз. Не змушуємо чекати.",
  },
  {
    title: "24/7",
    desc:  "Цілодобово, без вихідних і свят.",
  },
] as const;
