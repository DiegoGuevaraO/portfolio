import ProjectsList from '../ui/portfolio/ProjectsList';
import SearchBar from '../ui/portfolio/SearchBar';


export default function Page({searchParams}: {searchParams?: {keyword?: string}}) {
    const keyword = searchParams?.keyword || '';

    return(
        <>
            <SearchBar />
            <div className="flex items-center justify-center">
                <div className="container mx-auto p-4">
                        {/* Aquí van los proyectos dependiendo de la barra de búsqueda */}
                        <ProjectsList keyword={keyword} />
                </div>
            </div>
        </>
    );
}