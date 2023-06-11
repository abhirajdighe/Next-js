import Link from "next/link";
import "./about.css"

const About =()=>{
    return(
        <div>
            <h1 className="heading">
                This is About Page
            </h1>
            <br/>
            <Link href="/about/aboutcollege">Go to about college Page</Link>
            <br/>
            <br/>
            <Link href="/about/aboutstudent">Go to about Student Page</Link>
        </div>
    )
}

export default About;