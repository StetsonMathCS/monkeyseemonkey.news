import React from 'react';
const SearchFS = () => {
    return (
        <form class=" max-w-sm">
            <div class="w-screen items-center border-b border-b-2 border-blue py-2">
                <input class=" w-4/5 w-4/5 flex-grow appearance-none bg-transparent border-none text-grey-darker mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Jane Doe" aria-label="Full name"/>
                <button class="w-1/10 flex-no-shrink bg-blue hover:bg-blue-dark border-blue hover:border-blue-dark text-sm border-4 text-white py-1 px-2 rounded" type="button">
                Sign Up
                </button>
            </div>
        </form>
    );
}

export default SearchFS