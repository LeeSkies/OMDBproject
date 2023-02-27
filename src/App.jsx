import React from 'react'
// import { CarsContextProvider } from './context/CarsContext'
import { AppRoutes } from './routes/AppRoutes'

function App() {

  return (
    <div className="App">
      {/* <CarsContext.Provider> */}
      <AppRoutes/>
      {/* </CarsContext.Provider> */}
    </div>
  )
}

export default App
