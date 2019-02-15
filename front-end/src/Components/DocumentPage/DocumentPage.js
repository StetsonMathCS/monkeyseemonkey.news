import React from 'react';
import Logo from '../Logo/Logo';
import SearchFS from '../Search/SearchFS';
const DocumentPage = () => {
    return (
        <div className="w-screen">
            <div className="flex flex-row w-screen">
                <Logo />
                <SearchFS className="flex-grow"/>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-center">Document Title</div>
                    <p className="text-grey-darker text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div className="flex flex-col flex-auto text-center px-6 py-4">
                    <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#photography</span>
                    <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#travel</span>
                    <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">#winter</span>
                </div>
            </div>
        </div>
    );
}

export default DocumentPage