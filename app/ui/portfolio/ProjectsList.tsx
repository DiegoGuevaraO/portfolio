import { getFilteredProjects } from "@/app/lib/data";

export default function ProjectsList({keyword}: {keyword: string}){
    const projects = getFilteredProjects(keyword);

    return(
        <>
            {projects.map((project, key) => {
                return(
                    <div key={key} className="rounded-lg p-4 bg-secondary relative">
                        <img src={project.img} alt={project.name} className="w-full h-48 rounded-md object-cover" />
                        <div className="px-1 py-4">
                            <div className="font-bold text-xl mb-2">
                                {project.name}
                            </div>
                            <p className="">
                                {project.description}
                            </p>
                        </div>
                        <div className="mt-4 flex flex-wrap items-center gap-5 max-w-fit mb-20">
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
                        <a href={project.href} target="_blank" className="text-active-link absolute bottom-4 left-4 rounded">
                        <button
                            className="middle none center rounded-lg py-3 px-6 font-sans text-xs font-bold uppercase text-active-link transition-all hover:bg-main active:bg-back disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            data-ripple-dark="true"
                        >
                            Check it out!
                        </button>
                        </a>
                    </div>
                );
            })

            }
        </>
    );
}