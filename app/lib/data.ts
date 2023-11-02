import { Projects } from '@/app/lib/projects';

export function getFilteredProjects(query: string){
    if (query !== ''){
        const filteredData = Projects.filter((project) => {
            return Object.values(project)
                .join("")
                .toLowerCase()
                .includes(query.toLowerCase());
        });
        return filteredData;
    } else {
        return Projects;
    }

}