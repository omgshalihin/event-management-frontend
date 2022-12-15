import React from "react";
import styles from "../styles/About.module.css";

const about = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>About</h1>
    <p className={styles.description}>
      Have you ever wanted to go to an event but had no one to go with? Well
      then you are in luck because we have a website for you to discover new
      friends to go to the upcoming event with. The website allows you to
      register as a member and then you will get access to other members on the
      platform. As a member, you can choose to go solo or let others know you
      are open to going together. Are you a belieber and finding someone to go
      with, then you will be damned!
    </p>
  </div>
);

export default about;
