import { TrendingUp, Users, BookOpen } from "lucide-react";

export const footerSections = [
  {
    title: "Product",
    icon: TrendingUp,
    links: [
      { name: "Overview", href: "/overview" },
      { name: "Markets", href: "/markets" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "Trading", href: "/trading" },
      { name: "Analytics", href: "/analytics" },
      { name: "API", href: "/api", badge: "New" },
    ],
  },
  {
    title: "Company",
    icon: Users,
    links: [
      { name: "About us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Press", href: "/press" },
      { name: "News", href: "/news" },
      { name: "Security", href: "/security" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    icon: BookOpen,
    links: [
      { name: "Blog", href: "/blog" },
      { name: "Newsletter", href: "/newsletter" },
      { name: "Events", href: "/events" },
      { name: "Help centre", href: "/help" },
      { name: "Tutorials", href: "/tutorials" },
      { name: "Support", href: "/support" },
    ],
  },
];

// Static data for cryptocurrency sections
export const trendingData = [
  {
    name: "Aster",
    symbol: "A",
    price: "$0.5634",
    change: "-36.5%",
    isPositive: false,
    bgColor: "bg-orange-500",
  },
  {
    name: "Mubarak",
    symbol: "M",
    price: "$0.03883",
    change: "+9.5%",
    isPositive: true,
    bgColor: "bg-green-600",
  },
  {
    name: "Linea",
    symbol: "L",
    price: "$0.028",
    change: "+7.2%",
    isPositive: true,
    bgColor: "bg-blue-500",
  },
];

export const topGainersData = [
  {
    name: "Worthless",
    symbol: "W",
    price: "$0.04445",
    change: "+120.2%",
    isPositive: true,
    bgColor: "bg-gray-800",
  },
  {
    name: "DuckChain Token",
    symbol: "D",
    price: "$0.01008",
    change: "+112.0%",
    isPositive: true,
    bgColor: "bg-yellow-500",
  },
  {
    name: "STBL",
    symbol: "S",
    price: "$0.1989",
    change: "+55.0%",
    isPositive: true,
    bgColor: "bg-gray-700",
  },
];

export const topLosersData = [
  {
    name: "CrashCoin",
    symbol: "C",
    price: "$0.00123",
    change: "-89.3%",
    isPositive: false,
    bgColor: "bg-red-600",
  },
  {
    name: "FailToken",
    symbol: "F",
    price: "$0.00456",
    change: "-67.8%",
    isPositive: false,
    bgColor: "bg-purple-600",
  },
  {
    name: "DropCoin",
    symbol: "DC",
    price: "$0.00789",
    change: "-45.2%",
    isPositive: false,
    bgColor: "bg-pink-600",
  },
];
