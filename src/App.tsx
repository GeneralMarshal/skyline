
import {Route, Routes} from "react-router-dom"

import './App.css'
import LandingPage from "./pages/LandingPage"

function App() {
  return (
    <div className="mx-auto w-full max-w-[1920px] min-h-screen">
      <Routes>
        <Route path="/" element={<LandingPage/>}>
        </Route>
      </Routes>
    </div>
  )
}

export default App
