import React from 'react';
const Search = () => {
    return (
        <center className="justify-center">
            <form className="max-w-sm">
                <div className="flex items-center border-b border-b-2 border-blue py-2">
                    <input className="appearance-none bg-transparent border-none w-full text-grey-darker mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search here" aria-label="Full name"/>
                    <button className="flex-no-shrink bg-blue hover:bg-blue-dark border-blue hover:border-blue-dark text-sm border-4 text-white py-1 px-2 rounded" type="button">
                    Search </button>
                </div>
            </form>
        </center>
    );
}

export default Search