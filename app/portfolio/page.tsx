import {FaSearch } from 'react-icons/fa';

export default function Page() {
    return(
        <>
            <div className="flex items-center py-1">
                <label htmlFor="search" className="m-auto">
                    <input 
                        type="search"
                        name="search"
                        id="search"
                        placeholder="Search keywords"
                        className="bg-transparent mr-3 px-2 h-10 w-auto"
                        autoComplete='off'
                    />
                    <button className="mt-3 mr-4">
                        <FaSearch className="h-4 w-4 fill-current" />
                    </button>
                </label>
            </div>
            <div className="flex items-center justify-center lg:h-screen">
                <div className="container mx-auto p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                        {/* Aquí van los proyectos dependiendo de la barra de búsqueda */}
                    </div>
                </div>
            </div>
        </>
    );
}