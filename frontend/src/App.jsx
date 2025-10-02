import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card 
        img="/icon.png"
        fullname="Freddy"
        jobtitle="Software Engineer"
        description="Passionate about building scalable web applications."
        buttoncontent="Contact Me"
      />
    </div>
  )
}

export default App
