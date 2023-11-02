"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
    {
        name: 'Résumé',
        href: '/',
    },
    {
        name: 'Portfolio',
        href: '/portfolio',
    },
]

const NavLinks: React.FC = () => {
    const pathname = usePathname();
    
    return(
        <>
            {links.map((link) => {
                return(
                    <Link 
                    key={link.name}
                    href={link.href}
                    className={clsx(
                        "text-left hover:text-active-link hover:border-b-4 rounded-md border-secondary",
                        {
                            "text-active-link": pathname === link.href 
                        }
                    )}
                    >
                        <li key={link.name}>{link.name}</li>
                    </Link>
                );
            })

            }
        </>
    );
}

export default NavLinks;