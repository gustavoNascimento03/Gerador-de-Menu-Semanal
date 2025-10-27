import styles from "./styles.module.css";
import { Link } from "react-router-dom";

export function Botao({ children, to, ...rest }) {
    const className = styles.botaoGenerico;

    if (to) {
        return (
            <Link to={to} className={className} {...rest}>
                {children}
            </Link>
        );
    }

    return (
        <button className={className} {...rest}>
            {children}
        </button>
    );
}
