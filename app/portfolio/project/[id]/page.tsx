import { getProjectById } from "@/app/lib/data";
import DetailedDescription from "@/app/ui/portfolio/DetailedDescription";
import { notFound } from "next/navigation";

export default function Page({params}: {params: {id: string}}){
    const id = params.id
    const project = getProjectById(id);

    if (!project) {
        notFound();
    }

    return(
        <DetailedDescription project={project} />
    );
}