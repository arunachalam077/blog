import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
  { name: 'Mon', messages: 400, responses: 240 },
  { name: 'Tue', messages: 300, responses: 139 },
  { name: 'Wed', messages: 200, responses: 980 },
  { name: 'Thu', messages: 278, responses: 390 },
  { name: 'Fri', messages: 189, responses: 480 },
  { name: 'Sat', messages: 239, responses: 380 },
  { name: 'Sun', messages: 349, responses: 430 },
]

const Analytics: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
      <Card>
        <CardHeader>
          <CardTitle>Weekly Message Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="messages" fill="#8884d8" />
              <Bar dataKey="responses" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}

export default Analytics