
import { createBrowserRouter ,RouterProvider} from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'

function App() {
//  const router=createBrowserRouter([
//   {path:'/',element:<home/>}
//   ,{path:"/login",element:<login/>}])
  return (
    <div class="wrapper">


    <Home/>
      
    </div>
  )
}

export default App
