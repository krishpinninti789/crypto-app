import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Bitcoin, 
  TrendingUp, 
  Mail, 
  Shield, 
  Users, 
  BookOpen, 
  FileText, 
  MessageCircle,
  Newspaper,
  Phone,
  Award,
  HelpCircle,
  Calendar,
  Headphones
} from "lucide-react"
import { footerSections } from "../../constants"

const CryptoFooter = () => {
  

  return (
    <footer className="bg-background">
      {/* Newsletter Section */}
      <div className="container mx-auto px-4 py-12">
        <Card className="mb-16 bg-white border-0 ">
          <CardContent className="p-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl font-bold text-black  mb-2 flex items-center justify-center lg:justify-start gap-2">
                  <Mail className="w-6 h-6 text-blue-600" />
                  Join 2,000+ subscribers
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg">
                  Stay in the loop with everything you need to know about crypto markets.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="sm:w-80 h-12 bg-white  border-2 border-slate-200 dark:border-slate-700 focus:border-blue-500 rounded-xl"
                />
                <Button className="h-12 px-8 bg-vprimary cursor-pointer text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
                  Subscribe
                </Button>
              </div>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 text-center lg:text-left mt-4">
              We care about your data in our{" "}
              <a href="/privacy" className="underline hover:text-blue-600 transition-colors">
                privacy policy
              </a>
            </p>
          </CardContent>
        </Card>

        {/* Main Footer Content */}
        <div className="bg-vprimary text-white w-full p-8 lg:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Logo and Description */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Bitcoin className="w-7 h-7 text-white" />
                </div>
                <span className="text-2xl font-bold">Crypto</span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                10x your crypto workflow with advanced trading tools, real-time analytics, and comprehensive market data.
              </p>
              <p className="text-xs text-white">
                Save countless hours of design and ship great looking designs faster.
              </p>
            </div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <h4 className="font-semibold text-slate-200 flex items-center gap-2 text-sm uppercase tracking-wide">
                  <section.icon className="w-4 h-4" />
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href}
                        className="text-white hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 hover:translate-x-1 transform transition-transform"
                      >
                        {link.name}
                        {link.badge && (
                          <Badge 
                            variant="secondary" 
                            className="text-xs px-2 py-0.5 bg-blue-600 text-white hover:bg-blue-700"
                          >
                            {link.badge}
                          </Badge>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white mt-12 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-white">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>© 2024 Crypto. All rights reserved.</span>
                </div>
                <div className="hidden sm:block w-1 h-1 bg-slate-500 rounded-full"></div>
                <div className="flex items-center gap-4">
                  <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                  <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
                  <a href="/cookies" className="hover:text-white transition-colors">Cookies</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-white">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>All systems operational</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default CryptoFooter