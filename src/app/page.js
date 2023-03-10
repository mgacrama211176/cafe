"use client";

import Image from "next/image";
import Logo from "../../public/Images/logo.jpg";
import styles from "./page.module.css";
import React, { useState } from "react";

//components
import Login from "./components/Login";

export default function Home() {
  const [test, useTest] = useState();
  return (
    <main className={styles.main}>
      <Image src={Logo} alt="Picture of the author" fill className="absolute" />
      <div>
        <Login />
      </div>
    </main>
  );
}
