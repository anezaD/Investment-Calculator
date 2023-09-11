import styles from "./Header.module.css"

const Header = (props) => {
    return(
        <header className={styles.header}>
            <img src={props.imageAtr} alt="logo" />
            <h1>{props.title}</h1>
        </header>
    );
}

export default Header;