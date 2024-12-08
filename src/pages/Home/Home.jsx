
import { createBrowserRouter ,RouterProvider} from 'react-router-dom'
import './Home.css'
import { Navbar } from './Components/Navbar/navbar'
import HomeFrontSection1 from "./HomeFront1"
import HomefrontSection2 from './HomeFrontSection2'
import HomefrontSection3 from './HomeFrontSection3'
import HomefrontSection4 from './HomefrontSection4'



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
    <HomefrontSection2/>
    <HomefrontSection3/>
    <HomefrontSection4/>

     </div>
    </main>
    

     
      
    </div>
  )
}

export default Home
