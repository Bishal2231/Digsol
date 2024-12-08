
import { createBrowserRouter ,RouterProvider} from 'react-router-dom'
import './Home.css'
import { Navbar } from './navbar'
import HomeFrontSection1 from "./HomeFront1"

function Home() {
//  const router=createBrowserRouter([
//   {path:'/',element:<home/>}
//   ,{path:"/login",element:<login/>}])
  return (
    <div class="wrapper">


    <header>
    <Navbar/>


    </header>
    <main>
    <div className="section1">
    <HomeFrontSection1/>
     </div>
    </main>

      {/* <nav> navbar</nav> */}
     
      
    </div>
  )
}

export default Home
