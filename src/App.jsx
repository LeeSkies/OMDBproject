import React from 'react'
// import { CarsContextProvider } from './context/CarsContext'
import { AppRoutes } from './routes/AppRoutes'

function App() {

  return (
    <div className="App">
      <AppRoutes/>
      <footer className='w-full text-right bottom-0 p-4'>מעוז שחורי &copy;</footer>
    </div>
  )
}

export default App
