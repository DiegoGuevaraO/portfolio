export default function DownloadButton() {
    return(
        <>
            <a className="hidden text-nav-link font-bold py-2 px-4 rounded md:inline-flex items-center border-2 hover:bg-secondary hover:text-active-link" href="/CV.pdf" target="_blank">
                <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/><path d="M14 3v5h5M16 13H8M16 17H8M10 9H8"/></svg>
                <span>View or Download CV</span>
            </a>
            <a className="h-10 text-nav-link font-bold py-2 px-4 rounded md:hidden inline-flex items-center border-2" href="/CV.pdf" target="_blank">
                <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/><path d="M14 3v5h5M16 13H8M16 17H8M10 9H8"/></svg>
                <span>CV</span>
            </a>
        </>
    );
}