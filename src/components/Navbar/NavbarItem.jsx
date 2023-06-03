import Link from "next/link"

const NavbarItem = ({ navitem = {} }) => {
    return (
        <li>
            <Link href={navitem.url} className="btn-text btn-text--primary" aria-current="page">
                {navitem.name}
            </Link>
        </li>
    )
}

export default NavbarItem