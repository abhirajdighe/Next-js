import Link from "next/link";
import "./login.css";

export default function Layout({ children }) {
  return (
    <div>
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
      {children}
      {/* <h1>common footer for login</h1> */}
    </div>
  );
}