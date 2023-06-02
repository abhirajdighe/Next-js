'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react'

export default function Home() {
  const [name,setName]=useState("Abhi");
  const fruit =()=>{
    // alert(item)
    setName("Abhiraj Dighe")
  }

  const InnerComp=()=>{
    return(
      <h1>Inner Component</h1>
    )
  }
  return (
    // <main className={styles.main}>
    //   <User name="Abhiraj" />
    //   <User name = "Siddu"/>
    //   <h1>Home Page</h1>
    // </main>

    <main className={styles.main}>
      <h1>Event and function in Next js ,Welcome {name}</h1>
      {/* <button onClick={()=>fruit("apple")}>click me</button> */}
      <InnerComp/>
      
      {/* {InnerComp()} */}

      <button onClick={()=>fruit()}>click me</button>

    </main>
  )
}

const User=(props)=>{
  return(
    <div>
      <h2>User name in {props.name}</h2>

    </div>
  )
}
