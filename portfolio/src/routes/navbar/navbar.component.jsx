import "./navbar.styles.scss";
import { useState } from "react";
import Footer from "../../Components/footer/footer.component";
import { ReactComponent as Svg1 } from "../../assets/space-svgrepo-com.svg";
import { ReactComponent as MovileSvg } from "../../assets/icons8-menu.svg";
import MovileNav from "../../Components/movile-nav/movile-nav.component";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  const [modalActive, setmodalActive] = useState(false);
  const toggleModalhandler = () => setmodalActive(!modalActive);
  return (
    <>
      <div className="main-navbar-container">
        <div className="main-navbar-image-container-movile">
          <a onClick={toggleModalhandler} className="main-navbar-image">
            <MovileSvg className="main-navbar-svg" />
          </a>
        </div>
        <div className="main-navbar-image-container">
          <a className="main-navbar-image" href="/">
            <Svg1 className="main-navbar-svg" />
          </a>
        </div>
        <nav className="main-navbar">
          <ul>
            <li>
              <a href="proyects">Projects</a>
            </li>
            <li>
              <a href="">Education/Certification</a>
            </li>
            <li>
              <a href="">My journey</a>
            </li>
          </ul>
        </nav>
      </div>

      <MovileNav active={modalActive} toggle={toggleModalhandler} />
      <Outlet />
      <Footer />
    </>
  );
};
export default Navbar;
