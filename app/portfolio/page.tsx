import ProjectsList from '../ui/portfolio/ProjectsList';
import SearchBar from '../ui/portfolio/SearchBar';


export default function Page({searchParams}: {searchParams?: {keyword?: string}}) {


    return(
        <>
            <SearchBar />
            <div className="mt-36 flex items-center justify-center lg:h-screen">
                <div className="container mx-auto p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                        {/* Aquí van los proyectos dependiendo de la barra de búsqueda */}
                        <ProjectsList query='' />
                    </div>
                </div>
            </div>
        </>
    );
}