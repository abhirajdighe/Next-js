import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      <ul type="none" className="about-menu">
      <li>
            <h4>About Navbar</h4>
        </li>
        <li>
            <Link href="/about">About Main</Link>
        </li>
        <li>
            <Link href="/about/aboutcollege">About College</Link>
        </li>
        <li>
            <Link href="/about/aboutstudent">About Student</Link>
        </li>

      </ul>
      {children}
      {/* <h1>common footer for login</h1> */}
    </div>
  );
}
