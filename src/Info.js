import ReactLogo from "./images/react.png";
import Email from "./images/email.jpg";
import LinkedIn from "./images/linkedin.png";

export default function Info() {
    return (
        <header id="Info">
            <img id="photo" src={ReactLogo} alt="" />
            <h1 id="name">Laura Smith</h1>
            <h3 id="title">frontend Developer</h3>
            <p id="website">laurasmith.website</p>
            <form id="info-buttons" action="https://google.com">
                <button>
                    <img src={Email} alt="" />
                    <span>Email</span>
                </button>
                <button>
                    <img src={LinkedIn} alt="" />
                    <span>LinkedIn</span>
                </button>
            </form>
        </header>
    );
  }
  
