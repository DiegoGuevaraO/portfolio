import type { Project } from "@/app/lib/definitions";

export default function DetailedDescription({project}: {project: Project}){
    return(
        <h1 className="text-2xl">{project.description}</h1>
    );
}