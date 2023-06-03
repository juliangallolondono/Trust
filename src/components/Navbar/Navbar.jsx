import React from 'react'
import { NavbarLogo } from './NavbarLogo'
import NavbarItem from './NavbarItem'

const navItems = [
    { name: 'Solicitar prueba', url: '/solicitar-prueba' },
    { name: 'Resultados', url: '/resultados' },
    { name: 'Clientes', url: '/clientes' },
    { name: 'Usuarios', url: '/usuarios' },
]

export const Navbar = () => {
    return (

        < nav className="navbar" >
            <NavbarLogo />
            <div className="" >
                <ul className="navbar__list">
                    {navItems.length && navItems.map(item => (
                        <NavbarItem key={item.name} navitem={item} />
                    ))}
                </ul>
            </div>
        </nav >
    )
}