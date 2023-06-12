import Link from "next/link";

export default function StudentList(){
    return(
        <div>
            <h1>
                Student List
            </h1>

            <ul type="none">
                <li>
                    <Link href="/studentlist/abhi">Abhi</Link>
                </li>
                <br/>
                <li>
                    <Link href="/studentlist/Ram">Ram</Link>
                </li>
                <br/>
                <li>
                    <Link href="/studentlist/Yash">Yash</Link>
                </li>
                <br/>
                <li>
                    <Link href="/studentlist/Sam">Sam</Link>
                </li>
            </ul>
        </div>
    )
}