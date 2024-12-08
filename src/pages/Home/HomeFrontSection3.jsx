import { useState } from "react"
import "./HomeFrontSection3.css"
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export default function  HomeFrontSection3(){
    const [hovered,Sethovered]=useState(false)

    const styles={width: hovered?"50px":"150px"
    }
    return(
        <>
        <div className="thirdpage">

            <div className="thirdPageSocial">
                <div className="facebook" style={styles} onMouseEnter={()=>Sethovered(true)} onMouseLeave={()=>Sethovered(false)}>  <a href=" "><FaFacebook /> faceboook  </a> </div>
                <div className="instagram" style={styles} onMouseEnter={()=>Sethovered(true)} onMouseLeave={()=>Sethovered(false)}><a href="">  <AiFillInstagram /> instagram  </a> </div>
                <div className="github" style={styles} onMouseEnter={()=>Sethovered(true)} onMouseLeave={()=>Sethovered(false)}><a href="">    <FaGithub />  gitub  </a> </div>    
                <div className="linkedin" style={styles} onMouseEnter={()=>Sethovered(true)} onMouseLeave={()=>Sethovered(false)}   ><a href=""> <FaLinkedin /> linkedin </a>  </div>
                
                
                 </div> 
            <div className="middle">
            <div className="thirdpagecontainer">
                <div className="content">  
                <div className="top">Testimonials</div>
                <div className="second"> Meet our happy clients
                </div>
                <div className="third"> Working with Sakhaa has
                     been a game-changer for us! They’ve transformed
               our social media presence with fresh, engaging 
               content and a strategic approach that has truly
                helped us connect with our audience. Their team
                 is professional, creative, and always in sync 
                with our brand's vision. Highly recommend Sakhaa
                 to anyone looking for reliable and innovative
                  digital solutions in Nepal. Thank you, Sakhaa,
                   for helping us leave a lasting digital footprint!
                   </div>
                   <div className="aatish"> Aatish Shah
                   </div>
        <div className="ceo">CEO Of Nepali Footprint

</div>
</div>
</div>  </div>
   </div>

        
        
        </>
    )
}