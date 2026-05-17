import { BrowserRouter, Route, Routes } from "react-router-dom"
import { SpeedInsights } from '@vercel/speed-insights/react'
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
      <SpeedInsights />
    </>
  )
}

export default App
