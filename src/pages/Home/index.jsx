import React from "react";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { Features } from "../../components/Features";
import { Functions } from "../../components/Functions";
import { Explorer } from "../../components/Explorer";
import { Footer } from "../../components/Footer";
import styles from "./styles.module.css";

export function Home() {
    return (
        <div className={styles.gradientbg}>
            <Header />
            <Hero />
            <Features />
            <Functions />
            <Explorer />
            <Footer />
        </div>
    );
}

export default Home;
