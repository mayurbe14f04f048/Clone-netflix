import React,{useState,useEffect} from "react";
import "./Nav.css";

function Nav() {
    const [show,handleShow] = useState(false)

    const tansitionNav = () =>{
        if (window.scrollY > 100){
            handleShow(true)
        }else{
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',tansitionNav);
        return () => window.removeEventListener("scroll",tansitionNav)
    }, [])
  return (
    <div className={`nav ${ show && "nav_black"}`}>
      <div className="Nav_container">
        <img
          className="Nav__logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <img
          className="Nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
        
        
      </div>
    </div>
  );
}

export default Nav;
