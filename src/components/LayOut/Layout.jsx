import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import Router from "../Routers/Router"

const Layout = () => {
  return (
    <div>
        <Header/>
        <div>
            <Router/>
        </div>
        <Footer/>
    </div>
  )
}

export default Layout