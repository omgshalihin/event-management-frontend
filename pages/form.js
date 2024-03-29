/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/navigation";
import styles from "../styles/Form.module.css";

const form = () => {
  const random = Math.floor(Math.random() * 100) + 1;
  const [username, setUsername] = useState("@username");
  const [email, setEmail] = useState("user@gmail.com");
  const [city, setCity] = useState("City");
  const [country, setCountry] = useState("Country");
  const [image, setImage] = useState(
    `https://avatars.dicebear.com/api/micah/${random}:seed.svg`
  );
  const router = useRouter();

  const addUser = (userDetails) => {
    fetch(
      "https://event-management-backend-production.up.railway.app/api/users",
      {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(userDetails),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    ).then(() => {
      router.push("/users");
      setTimeout(() => {
        router.refresh();
      }, 100);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({
      username,
      email,
      city,
      country,
      image,
    });
    setUsername("");
    setEmail("");
    setCity("");
    setCountry("");
    setImage("");
    router.push("/users");
  };

  const usernameInputHandler = (e) => {
    setUsername(e.target.value);
  };
  const emailInputHandler = (e) => {
    setEmail(e.target.value);
  };
  const cityInputHandler = (e) => {
    setCity(e.target.value);
  };
  const countryInputHandler = (e) => {
    setCountry(e.target.value);
  };
  const imageInputHandler = (e) => {
    setImage(e.target.value);
  };

  return (
    <>
      <Head>
        <title>Evently Social | Sign up!</title>
        <meta name="keywords" content="home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className={styles.formDesc}>
          <h1>Register here</h1>
          <p>Specify your username as your handler.</p>
          <p>Specify your email as your contact.</p>
          <p>Specify where you are currently staying.</p>
          <p>Specify where you were from.</p>
          <p>Upload your photo.</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label} htmlFor="first">
          Username
        </label>
        <input
          className={styles.input}
          type="text"
          value={username}
          onChange={usernameInputHandler}
          required
        />

        <label className={styles.label} htmlFor="last">
          Email
        </label>
        <input
          className={styles.input}
          type="text"
          value={email}
          onChange={emailInputHandler}
          required
        />

        <label className={styles.label} htmlFor="last">
          Current Location
        </label>
        <input
          className={styles.input}
          type="text"
          value={city}
          onChange={cityInputHandler}
          required
        />

        <label className={styles.label} htmlFor="last">
          Home Town
        </label>
        <input
          className={styles.input}
          type="text"
          value={country}
          onChange={countryInputHandler}
          required
        />

        <label className={styles.label} htmlFor="last">
          Image
        </label>
        <input
          className={styles.input}
          type="text"
          value={image}
          onChange={imageInputHandler}
          required
        />

        <button className="btn-submit" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default form;
