'use client';

import type { Project } from "@/app/lib/definitions";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IoMdArrowRoundBack } from 'react-icons/io';

export default function DetailedDescription({project}: {project: Project}){
    const router = useRouter();

    return(
        <div className="flex flex-col items-center w-full h-full mb-10">
            {/* Project name */}
            <p className="text-4xl m-4 text-center">{project.name}</p>
            
            {/* Project image */}
            <Image
                src={project.img}
                width={600}
                height={500}
                className="rounded-md m-3"
                alt="Project screenshot."
            />

            {/* Project description */}
            <p className="text-1xl my-3 mx-10 text-justify md:text-lg md:w-3/6">{project.description}</p>

            {/* Project technologies */}
            <div className="m-4 flex flex-wrap items-center gap-5 max-w-fit">
                {project.technologies.map((tech,techKey) => {
                        return(
                            <div key={techKey} className="flex items-center gap-1">
                                {tech.icon}
                                <p className="block font-sans text-xs font-normal">
                                    {tech.name}
                                </p>
                            </div>
                        );
                    })
                }
            </div>

            {/* Go back button */}
            <div className="m-4 flex flex-wrap items-center gap-5 max-w-fit">
            <a className="text-active-link rounded mt-2" onClick={() => {router.back();}}>
                <button
                    className="middle none center rounded-lg py-3 px-6 font-sans text-xs font-bold uppercase text-active-link transition-all hover:bg-main hover:text-black active:bg-back active:text-active-link disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    data-ripple-dark="true"
                >
                    <span className="flex flex-wrap items-center gap-2"><IoMdArrowRoundBack size={20}/> <span>Go Back</span></span>
                </button>
            </a>

            {/* Check it out button */}
            <a href={project.href} target="_blank" className="text-active-link rounded mt-2">
                <button
                    className="middle none center rounded-lg py-3 px-6 font-sans text-xs font-bold uppercase text-active-link transition-all hover:bg-main hover:text-black active:bg-back active:text-active-link disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    data-ripple-dark="true"
                >
                    Check it out!
                </button>
            </a>
            </div>
        </div>
    );
}