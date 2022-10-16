import React from 'react';

function Navbar() {
    return (
        <header className="text-white body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    
                    <span className="ml-3 text-3xl">Mess<span className='text-orange-600'>Me</span></span>
                </a>
                <nav className="md:ml-auto font-medium flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5 hover:text-orange-600">HOME</a>
                    <a className="mr-5 hover:text-orange-600">FAQ</a>
                    <button class="ml-4 inline-flex text-white bg-orange-600  focus:outline-none hover:bg-orange-400 rounded text-lg"><a className="mr-5 hover:text-orange-600">LOGIN / SIGNUP</a></button>
                
                </nav>
            </div>
        </header>
    )
}
export default Navbar;