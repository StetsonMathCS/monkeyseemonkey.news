import React from 'react';
import Logo from '../Logo/Logo.png'
console.log(Logo);
const Search = () => {
    return (
        <div className = "container mx-auto bg-black" >
        <center className="center">
           <img src={Logo} alt="Temp Logo"></img>
           <form className="w-full max-w-sm">
                <div className="flex items-center border-b border-b-2 border-blue py-2">
                    <input className="appearance-none bg-transparent border-none w-full text-grey-darker mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search here" aria-label="Full name"/>
                    <button className="flex-no-shrink bg-blue hover:bg-blue-dark border-blue hover:border-blue-dark text-sm border-4 text-white py-1 px-2 rounded" type="button">
                    Search </button>
                </div>
            </form>
        </center>
        </div>
    );
}

export default Search