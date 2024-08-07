import "./movile-nav.styles.scss";

const MovileNav = ({ active, toggle }) => {
  return (
    <>
      <div
        className={`mobile-nav-backdrop  ${
          active ? "mobile-nav-backdrop-active" : ""
        } `}
        onClick={toggle}
      />
      <nav className={`mobile-nav  ${active ? "mobile-nav-active" : ""} `}>
        <ul className="mobile-nav__items">
          <li className="mobile-nav__item">
            <a href="proyects">Proyects</a>
          </li>

          <li className="mobile-nav__item mobile-nav__item--cta">
            <a href="myjourney">My journey</a>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default MovileNav;
