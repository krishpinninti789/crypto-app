import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import logo from "../../../../public/crypto-high-resolution-logo-transparent.png";

export function Navigation() {
  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8  bg-white rounded-full flex items-center justify-center">
              <span className=" font-bold text-sm"></span>
            </div>
            <span className="text-xl font-bold text-gray-900">
              <img className="w-15 h-5" src={logo.src} alt="logo" />
            </span>
          </div>
          <div className="flex items-center space-x-6 text-gray-700">
            <a href="#" className="hover:text-gray-900 font-medium">
              Cryptocurrencies
            </a>
            <a href="#" className="hover:text-gray-900">
              Exchanges
            </a>
            <a href="#" className="hover:text-gray-900">
              NFT
            </a>
            <a href="#" className="hover:text-gray-900">
              Learn
            </a>
            <a href="#" className="hover:text-gray-900">
              Products
            </a>
            <a href="#" className="hover:text-gray-900">
              API
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search"
              className="pl-10 w-64 bg-gray-50 border-gray-200"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
