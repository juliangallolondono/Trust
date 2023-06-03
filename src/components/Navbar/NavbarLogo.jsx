import Image from "next/image"
import logo from '../../assets/logo.png'
import Link from "next/link"

export const NavbarLogo = () => {
    return (
        <Link className="navbar__link" href="/">
            <Image  src={logo} />
            <span className="navbar__logoText">
                Trust
            </span>
        </Link>
    )
}
{/* <>
            <a href="#" class="flex items-center">
                <Image class="h-6 w-auto mr-3 sm:h-9" src={logo} />
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                    Trust
                </span>
            </a>
        </> */}