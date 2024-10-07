import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ToastProvider } from "@/components/ui/toast"
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import FileUpload from './components/FileUpload'
import Analytics from './components/Analytics'

function App() {
  return (
    <Router>
      <ToastProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Navbar />
          <div className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/upload" element={<FileUpload />} />
              <Route path="/analytics" element={<Analytics />} />
            </Routes>
          </div>
        </div>
      </ToastProvider>
    </Router>
  )
}

export default App