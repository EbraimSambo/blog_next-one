import React from 'react'
import styles from "./navbar.module.css";
import Image from 'next/image';
import Link from 'next/link';
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt="facebook-logo" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram-logo" width={24} height={24} />
        <Image src="/tiktok.png" alt="tiktok-logo" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube-logo" width={24} height={24} />
      </div>
      <div className={styles.logo}>LambBlog</div>
      <div className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/about">Sobre</Link>
        <Link href="/contact">Contactos</Link>
      </div>
    </div>
  )
}

export default Navbar