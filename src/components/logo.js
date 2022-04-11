import react from "react"
import img1 from "../favicon_io/android-chrome-512x512.png"

const customStyle = {
    width: '100px' ,
    height: '100px' ,
};

function Logo() {
    return(
        <div className="logo" style={customStyle}>
            <img src={img1} alt="logo"></img>
        </div>
    );
}

export default Logo;