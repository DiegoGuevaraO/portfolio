import { FaReact, FaBootstrap } from "react-icons/fa";
import { TbBrandNextjs, TbApi } from "react-icons/tb";
import { BiLogoTailwindCss , BiLogoDjango, BiLogoPython, BiLogoPostgresql } from "react-icons/bi";
import { SiMysql } from "react-icons/si";

export const Projects = [
    {
        id: "1",
        name:"Blog Page",
        img: "/blog-app-project.png",
        description:"Blog page with an index that shows every post. The blogs are added dynaically using markdown files and can be accesed by a dynamic URL generated used the blog posts name. Made with Next.js 13 and styled with Tailwind.",
        keywords:"react, nextjs, tailwind, markdown",
        technologies:[
            {
                name:"React",
                icon:<FaReact className="h-3 w-3" />
            },
            {
                name:"Next.js 13",
                icon:<TbBrandNextjs className="h-3 w-3" />
            },
            {
                name:"Tailwind",
                icon:<BiLogoTailwindCss className="h-3 w-3" />
            },
        ],
        href:"https://nextjs-tutorial-ten-sigma.vercel.app/"
    },
    {
        id: "2",
        name:"Django Web Map",
        img: "/web-map.png",
        description:"Map where you can add markers, name them and have them be persistent. Built with Django, it uses the Leaflet JavaScript library and PostgreSQL to store all the marker data. You can visit the GitHub repository.",
        keywords:"django, python, bootstrap, mysql, database, leaflet",
        technologies:[
            {
                name:"Django",
                icon:<BiLogoDjango className="h-3 w-3" />
            },
            {
                name:"Python",
                icon:<BiLogoPython className="h-3 w-3" />
            },
            {
                name:"Bootstrap",
                icon:<FaBootstrap className="h-3 w-3" />
            },
            {
                name:"MySQL",
                icon:<SiMysql className="h-3 w-3" />
            },
        ],
        href:"https://github.com/DiegoGuevaraO/web-map"
    },
    {
        id: "3",
        name:"Next.js 14 Dashboard",
        img: "/dashboard.png",
        description:"Dashboard to manage invoices, you can add, modify or delete invoices stored in a PostgreSQL database. It has a search bar and uses dynamic routes, async data fetching, server and client rendering. Built with Next.js 14 and Tailwind. You can access it with the following credentials: user@nextmail.com password: 123456",
        keywords:"react, nextjs, tailwind, database",
        technologies:[
            {
                name:"React",
                icon:<FaReact className="h-3 w-3" />
            },
            {
                name:"Next.js 14",
                icon:<TbBrandNextjs className="h-3 w-3" />
            },
            {
                name:"Tailwind",
                icon:<BiLogoTailwindCss className="h-3 w-3" />
            },
            {
                name:"PostgreSQL",
                icon:<BiLogoPostgresql className="h-3 w-3" />
            },
        ],
        href:"https://nextjs-dashboard-xi-gilt.vercel.app/"
    },
    {
        id: "4",
        name:"Simple Weather App",
        img: "/weather-app.png",
        description:"Current weather app displaying current weather conditions of the city the user enters in the search bar. It uses OpenWeather API to fetch the data.",
        keywords:"react, nextjs, tailwind, database",
        technologies:[
            {
                name:"React",
                icon:<FaReact className="h-3 w-3" />
            },
            {
                name:"Next.js 14",
                icon:<TbBrandNextjs className="h-3 w-3" />
            },
            {
                name:"Material UI",
                icon:<FaReact className="h-3 w-3" />
            },
            {
                name:"API Handling",
                icon:<TbApi className="h-3 w-3" />
            },
        ],
        href:"https://weather-app-nu-topaz.vercel.app/"
    }
];