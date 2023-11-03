'use client';

import type { Project } from "@/app/lib/definitions";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function DetailedDescription({project}: {project: Project}){
    const router = useRouter();

    return(
        <div className="flex flex-col items-center w-full h-full mb-10">
            <p className="text-4xl m-4">{project.name}</p>
            <Image
                src={project.img}
                width={600}
                height={500}
                className="rounded-md my-3"
                alt="Project screenshot."
            />
            <p className="text-2xl my-3 mx-10 text-justify">{project.description}</p>
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
            <div className="m-4 flex flex-wrap items-center gap-5 max-w-fit">
            <a className="text-active-link rounded mt-2" onClick={() => {router.back();}}>
                <button
                    className="middle none center rounded-lg py-3 px-6 font-sans text-xs font-bold uppercase text-active-link transition-all hover:bg-main hover:text-black active:bg-back active:text-active-link disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    data-ripple-dark="true"
                >
                    Go Back
                </button>
            </a>
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