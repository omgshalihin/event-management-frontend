import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";

const Navbar = () => (
  <nav className={styles.container}>
    <div className={styles.logo}>
      <Link className="logo" href="/">
        <Image href="/" src="/logo.png" width={60} height={60} alt="logo" />
      </Link>
    </div>
    <div className={styles.links}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/users">Members</Link>
      <Link href="/form">Register</Link>
    </div>
  </nav>
);

export default Navbar;
