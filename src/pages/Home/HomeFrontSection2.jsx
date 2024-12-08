
import "./HomefrontSection2.css"
import style from "./all.module.css"
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export default function HomefrontSection2(){
    return(
        <>
        <div className="secondpage">
        <div className={style.links}> 
            <div className={style.facebook}> <FaFacebook /></div>
            <div className= {style.instagram}> <AiFillInstagram /></div>
            <div className={style.github}> <FaGithub /></div>
            <div className={style.linkedin}><FaLinkedin /> </div>
            
            
             </div>
        <div className="main-second"> 
            <div className="img">  </div> {/* this contain image */}
            <div className="img-description"> 
            <div className="titlefirst"> who we are</div>
            <div className="titlesecond"> We're consultant, engineers, and leaders </div>
            <div className="titlethird">Connect with us! We’re here to bring your 
                digital ideas to life. Whether you need web development, creative 
                design, digital marketing, branding, or tailored software solutions, 
                we’re here to help your brand shine. let’s make something amazing
                 together! </div>
            </div>
        </div>
         
        </div>
        
        
        
        </>
    )
}