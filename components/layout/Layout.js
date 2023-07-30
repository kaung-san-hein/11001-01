import styles from "./Layout.module.scss";
import NavigationMenu from "./NavigationMenu";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <NavigationMenu />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
