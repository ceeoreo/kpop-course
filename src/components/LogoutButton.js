import Link from "next/link"
import ButtonStyles from "../styles/Button.module.css"

export default function LogoutButton() {
  return (
    <Link href="/api/auth/logout"> 
      <button className={ButtonStyles.button}> Logout</button>
    </Link>
  )
}