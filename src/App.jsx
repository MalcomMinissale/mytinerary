import NavBar from "./components/NavBar"
import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home"

import { RouterProvider } from "react-router-dom"
import router from "./Router"

function App() {

 return (
   <RouterProvider router={router} />
  )
}

export default App