import ReactLogo from "./images/react.png";

export default function Header() {
    return (
      <header id="header">
        <Nav />
      </header>
    );
  }
  
function Nav() {
    return (
      <nav id="nav">
        <img id="img" src={ReactLogo} alt="" />
        <ul id="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }