import React from 'react'
import { Link } from 'react-router-dom'
import { MessageSquareText } from 'lucide-react'
import { Button } from "@/components/ui/button"

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <MessageSquareText className="h-8 w-8 mr-2 text-blue-500" />
              <span className="font-semibold text-gray-900 text-lg">DM Automation</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link to="/">Dashboard</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/upload">Upload</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/analytics">Analytics</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar