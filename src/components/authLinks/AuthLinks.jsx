import React from 'react'
import styles from "./authLinks.module.css";
import Link from 'next/link';
const AuthLinks = () => {
    //temporário
    const stutus = "notauthicated" 

    return (
    <>
     {stutus === "notauthicated" ?(
         <Link href="/login">Login</Link> 
     ):(
        <>
          <Link href="/write">Escrever</Link>
          <span className={styles.link}>Logout</span>
        </>
     )}
    </>
  )
}

export default AuthLinks