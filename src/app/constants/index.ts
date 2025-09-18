import { 
   
    TrendingUp, 
    
    Users, 
    BookOpen, 
    
  } from "lucide-react"

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
        { name: "API", href: "/api", badge: "New" }
      ]
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
        { name: "Contact", href: "/contact" }
      ]
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
        { name: "Support", href: "/support" }
      ]
    }
  ]