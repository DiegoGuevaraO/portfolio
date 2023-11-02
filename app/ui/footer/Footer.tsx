const Footer: React.FC = () => {
    return(
        <footer className="mt-auto bg-secondary">
            <div className="w-full h-50 bottom-0 p-8 px-16">
                <p className="text-2xl">Thank you for checking out my curriculum vitae.</p>
                <p>Check out the <a target="_blank" href="https://github.com/DiegoGuevaraO/resume" className="text-active-link hover:border-b-4 rounded-md border-main">GitHub repo</a>!</p>
                <br />
                <a className="text-lg hover:text-active-link" href="mailto:dguevaraorduna@gmail.com">dguevaraorduna@gmail.com</a>
            </div>
        </footer>
    );
}

export default Footer;