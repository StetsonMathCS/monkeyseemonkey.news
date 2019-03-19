import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const ListItem = () => {
    return (
        <Link to={`/article/:genericarticle`}>
            <div className="align-center">
                <div class="max-w-md w-full lg:flex">
                <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('https://tailwindcss.com/img/card-left.jpg')" title="Woman holding a mug">
                </div>
                <div class="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div class="mb-8">
                    <div class="text-black font-bold text-xl mb-2">Can coffee make you a better developer?</div>
                    <p class="text-grey-darker text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                    </div>
                    <div class="flex items-center">
                    <div class="text-sm">
                        <p class="text-black leading-none">Jonathan Reinink</p>
                        <p class="text-grey-dark">Aug 18</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </Link>
    );
}

export default ListItem