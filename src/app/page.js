'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react'
import Link from 'next/link'
import {useRouter} from 'next/navigation'
 

export default function Home() {
  // const [name,setName]=useState("Abhi");
  // const fruit =()=>{
  //   // alert(item)
  //   setName("Abhiraj Dighe")
  // }

  // const InnerComp=()=>{
  //   return(
  //     <h1>Inner Component</h1>
  //   )
  // }

  const router = useRouter();
  const navigate =(name)=>{
    router.push(name)
  }
  return (
    // <main className={styles.main}>
    //   <User name="Abhiraj" />
    //   <User name = "Siddu"/>
    //   <h1>Home Page</h1>
    // </main>

        
    // <main className={styles.main}>
    //   <h1>Event and function in Next js ,Welcome {name}</h1>
    //   {/* <button onClick={()=>fruit("apple")}>click me</button> */}
    //   <InnerComp/>
      
    //   {/* {InnerComp()} */}

    //   <button onClick={()=>fruit()}>click me</button>

    // </main>



        // Linking and Navigation

    <main>
      <h1>Basic routing | Make new Pages</h1>
      <Link href="/login">Go to Login Page</Link>
      <br/>
      <Link href="/about">Go to about Page</Link>

      <br/>
      <br/>

      <button onClick={()=>router.push("/login")}>Go to Login Page</button>
      <br/>
      <button onClick={()=>navigate("/about")}>Go to About Page</button>
    </main>
  )
}

// const User=(props)=>{
//   return(
//     <div>
//       <h2>User name in {props.name}</h2>

//     </div>
//   )
// }
