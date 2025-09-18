import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Info, TrendingDown, TrendingUp } from "lucide-react"

const StatCard = ({ title, value, change, icon: Icon, subtitle, showInfo = false }: StatCardProps) => (
    <Card className="relative overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-300">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-bold text-gray-800 flex items-center gap-2">
          <Icon className="h-4 w-4 text-blue-600" />
          {title}
          {showInfo && <Info className="h-3 w-3 text-gray-500" />}
        </CardTitle>
        {change !== undefined && (
          <div className={`flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full ${
            change > 0 ? 'text-emerald-700 bg-emerald-100' : 'text-red-600 bg-red-100'
          }`}>
            {change > 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
            {Math.abs(change).toFixed(2)}%
          </div>
        )}
      </CardHeader>
      <CardContent>
        <div className="text-lg font-bold text-gray-900">{value}</div>
        {subtitle && <p className="text-xs text-gray-600 mt-1">{subtitle}</p>}
      </CardContent>
    </Card>
  )
export default StatCard