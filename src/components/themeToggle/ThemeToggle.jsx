"use client";

import React, { useContext } from 'react'
import styles  from "./themeToggle.module.css";
import Image from 'next/image';

import { ThemeContext } from '@/context/ThemeContext';


const ThemeToggle = () => {
  const {toggle,theme} = useContext(ThemeContext)

  console.log(theme);
  return (
    <div className={styles.container} onClick={toggle}
    style={ 
      theme === "dark" ? {backgroundColor: "#fff"}:{backgroundColor: "#0f1750"} 
      }> 
      <Image src="/moon.png" alt='moon' width={14} height={14} />
      <div 
      className={styles.ball}
       style={ 
        theme === "dark" ? {left: 1,backgroundColor: "#0f1750"}:{ right: 1, backgroundColor: "#fff"} 
        }
        >
</div>
      <Image src="/sun.png" alt='sun' width={14} height={14} />
    </div>
  )
}

export default ThemeToggle