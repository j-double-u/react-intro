import X from "./images/x.png";
import Facebook from "./images/facebook.jpg";
import Instagram from "./images/instagram.png";
import Github from "./images/github.png";

export default function Footer() {
    return (
        <form id="Footer" action="https://google.com">
            <button>
                <img src={X} alt="" />
            </button>
            <button>
                <img src={Facebook} alt="" />
            </button>
            <button>
                <img src={Instagram} alt="" />
            </button>
            <button>
                <img src={Github} alt="" />
            </button>
        </form>
    );
}