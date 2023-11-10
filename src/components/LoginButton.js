import Link from "next/link";
import ButtonStyles from "../styles/Button.module.css"

export default function LoginButton() {
  return (
    <Link href="/api/auth/login"> 
      <button className={ButtonStyles.button}> Login</button>
    </Link>
  )
}