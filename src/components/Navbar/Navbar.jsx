import React from 'react'
import { NavbarLogo } from './NavbarLogo'
import NavbarItem from './NavbarItem'

const navItems = [
    { name: 'Solicitar prueba', url: '/solicitar-prueba' },
    { name: 'Buscar Resultados', url: '/buscar-resultados' },
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
{/* <nav className="navbar border-gray-200 py-2.5 dark:bg-gray-900">
                <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                    <NavbarLogo />
                    <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            {navItems.length && navItems.map(item => (
                                <NavbarItem key={item.name} navitem={item} />
                            ))}
                        </ul>
                    </div>
                </div>
            </nav> */}