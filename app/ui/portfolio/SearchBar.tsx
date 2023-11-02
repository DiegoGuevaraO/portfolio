"use client";

import { useSearchParams, useRouter, usePathname } from 'next/navigation';

import {FaSearch } from 'react-icons/fa';

export default function SearchBar() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    return(
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
    );
}