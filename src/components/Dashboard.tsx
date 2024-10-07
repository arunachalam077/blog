import React from 'react'
import { MessageSquareText, Users, BarChart3 } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardCard icon={<MessageSquareText className="h-6 w-6" />} title="Total Messages" value="1,234" />
        <DashboardCard icon={<Users className="h-6 w-6" />} title="Active Clients" value="56" />
        <DashboardCard icon={<BarChart3 className="h-6 w-6" />} title="Response Rate" value="98%" />
      </div>
    </div>
  )
}

const DashboardCard: React.FC<{ icon: React.ReactNode; title: string; value: string }> = ({ icon, title, value }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  )
}

export default Dashboard