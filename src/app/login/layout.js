"use client";
import Link from "next/link";
import "./login.css";
import { usePathname } from "next/navigation"; // for conditional layout

export default function Layout({ children }) {
  const pathName = usePathname();
  // console.log(pathName);
  return (
    <div>
      {pathName != "/login/loginteacher" ? (
        <ul type="none" className="login-menu">
          <li>
            <h4>Login Navbar</h4>
          </li>
          <li>
            <Link href="/login">Login main</Link>
          </li>
          <li>
            <Link href="/login/loginstudent">Student Login </Link>
          </li>
          <li>
            <Link href="/login/loginteacher">Teacher Login</Link>
          </li>
        </ul>
      ) : <Link href="/login">Go to main Login Page</Link>}

      {children}
      {/* <h1>common footer for login</h1> */}
    </div>
  );
}
