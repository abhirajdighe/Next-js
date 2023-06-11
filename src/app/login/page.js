'use client'
import Link from "next/link";
import {useRouter} from 'next/navigation'
import "./login.css"

const Login =()=>{
    const router = useRouter();
    return(
        <div>
            <h1 className="heading">Login in page</h1>
            <Link href="/">Got to Home page</Link>
            <br/>
            <br/>
            <button onClick={()=>{router.push("/login/loginstudent")}}>Login For Student</button>
            <br/>
            <br/>
            <button onClick={()=>{router.push("/login/loginteacher")}}>Login For Teacher</button>
        </div>
    )
}

export default Login;