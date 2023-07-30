import { useState } from "react";
import styles from "./NavigationMenu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import {
  faMagnifyingGlass,
  faBagShopping,
  faTimes,
  faBars,
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { links } from "@/mock/menuData";
import Link from "next/link";

const NavigationMenu = () => {
  const [selectedSubtitle, setSelectedSubtitle] = useState(null);
  const [hoverSelectedSubtitle, setHoverSelectedSubtitle] = useState();
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setSelectedSubtitle(null)
    setClick(!click)
  };

  return (
    <>
      <div className={styles.nav}>
        <nav className={styles.navBar}>
          <span className={styles.navLogo}>
            <FontAwesomeIcon icon={faApple} size="lg" color="white" />
          </span>
          <ul className={styles.navMenu}>
            {links.map((link) => (
              <li
                key={link.title}
                className={styles.navLinks}
                onMouseEnter={() =>
                  setHoverSelectedSubtitle(
                    link.subtitle.length > 0 ? link : null
                  )
                }
              >
                <Link href={`${link.href}`} className={styles.navLinks}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.iconContainer}>
            <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" color="white" />
            <FontAwesomeIcon icon={faBagShopping} size="lg" color="white" />
            <span className={styles.menuIcon}>
              <FontAwesomeIcon
                onClick={handleClick}
                icon={click ? faTimes : faBars}
                size="lg"
                color="white"
              />
            </span>
          </div>
        </nav>
        {hoverSelectedSubtitle && (
          <div
            className={styles.subNavLinkContainer}
            onMouseLeave={() => setHoverSelectedSubtitle(null)}
          >
            <div className={styles.subNavLinkWrapper}>
              {hoverSelectedSubtitle.subtitle.map((subtitle) => (
                <div className={styles.subNavLink} key={subtitle}>
                  {subtitle}
                </div>
              ))}
            </div>
          </div>
        )}
        {!hoverSelectedSubtitle && (
          <nav className={styles.subNavBar}>
            <div className={styles.subContainer}>
              <div className={styles.subNavBrand}>Apple TV+</div>
              <button>Stream now</button>
            </div>
          </nav>
        )}
      </div>
      <div
        className={
          click
            ? [styles.navBarMobile, styles.active].join(" ")
            : styles.navBarMobile
        }
      >
        <div className={styles.mobileIconContainer}>
          {selectedSubtitle && (
            <span
              className={styles.icon}
              onClick={() => setSelectedSubtitle(null)}
            >
              <FontAwesomeIcon icon={faChevronLeft} size="lg" color="white" />
            </span>
          )}
          <span className={styles.close}>
            <FontAwesomeIcon
              onClick={handleClick}
              icon={click ? faTimes : faBars}
              size="lg"
              color="white"
            />
          </span>
        </div>
        {!selectedSubtitle &&
          links.map((link) => (
            <div
              key={link.title}
              onClick={() =>
                setSelectedSubtitle(link.subtitle.length > 0 ? link : null)
              }
              className={styles.navLinkMobile}
            >
              {link.title}
              <FontAwesomeIcon icon={faChevronRight} size="xs" color="white" />
            </div>
          ))}
        {selectedSubtitle &&
          selectedSubtitle.subtitle.map((subtitle) => (
            <div key={subtitle} className={styles.subNavLinkMobile}>
              {subtitle}
            </div>
          ))}
      </div>
    </>
  );
};

export default NavigationMenu;
