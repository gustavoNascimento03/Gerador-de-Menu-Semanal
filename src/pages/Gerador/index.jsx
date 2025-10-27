import React from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import styles from "./styles.module.css";

export function Gerador() {
    return (
        <div className={styles.page}>
            <Header />
            <Footer />
        </div>
    );
}

export default Gerador;
