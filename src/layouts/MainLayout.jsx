import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import { Outlet } from "react-router-dom"

export default function MainLayout({ children }) {
  return (
    <div className=" min-h-screen bg-#EBEBEB px-10 pt-[32px] pb-[399px] gap-y-[318px] flex flex-col">
    <NavBar />
    {/* {console.log(nombre2)} */}
    {/* esto es un comentario */}
    {/* */}

    {/* ACA SE DEBE INSERTAR EL CONTENIDO DINAMICO DE CADA VISTA*/}
    <Outlet />
    <Footer />
  </div> 
  )
}