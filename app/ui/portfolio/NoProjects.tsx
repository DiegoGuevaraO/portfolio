import { FaRegSadTear } from "react-icons/fa";

export default function NoProjects(){
    return(
        <div className="flex flex-col items-center w-full h-96">
            <FaRegSadTear size={100} className="m-auto mb-0"/>
            <p className="text-2xl m-auto mt-5">No projects were found.</p>
        </div>
    );
}