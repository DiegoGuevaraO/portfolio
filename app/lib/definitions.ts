import { ReactNode } from "react"

export type Project = {
    id: string,
    name: string,
    img: string,
    description: string,
    keywords: string,
    technologies:{
            name: string,
            icon: ReactNode
        }[],
    href: string
};