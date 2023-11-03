import { Projects } from '@/app/lib/projects';
import type { Project } from './definitions';

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

export function getProjectById(id: string): Project | undefined{
    const filteredProject = Projects.find((project) => project.id === id);
    return filteredProject;
}