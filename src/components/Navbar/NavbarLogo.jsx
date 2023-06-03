import Image from "next/image"
import logo from '../../assets/logo.png'
import Link from "next/link"

export const NavbarLogo = () => {
    return (
        <Link className="navbar__link" href="/">
            <Image src={logo} alt="Logo" />
            <span className="navbar__logoText">
                Trust
            </span>
        </Link>
    )
}