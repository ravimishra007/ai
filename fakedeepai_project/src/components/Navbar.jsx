import { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <nav className="font-roboto bg-[#010314] text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img className="h-8 w-auto" src='../../logo.png' alt="Deepfake AI" />
            <span className="ml-2 font-semibold text-xl">DEEP <strong className='text-[#4030a7] ml-[-5px]'>FAKE AI</strong> <span></span></span>
          </div>
          {/* border-1 border-white */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Features</a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">How it works</a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Tokenomics</a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Roadmap</a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Why Us?</a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Chart</a>
            </div>
          </div>
          <div className="hidden lg:flex items-center space-x-4">
            <button className=" border border-grey-500   rounded-[28px] h-[50px] w-[150px] bg-[#010314] text-white px-3 py-2  text-sm font-medium">Whitepaper</button>
            <button className="border-2 border-[#9471f3]   rounded-[28px] h-[50px] w-[150px] bg-[#010314] text-white px-3 py-2  text-sm font-medium">Start Bot Now</button>
          </div>
          {/* 9471f3 */}
          <div className="lg:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-400 hover:text-white hover:bg-gray-700 p-2 rounded-md focus:outline-none">
              <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#" className="h-[50px] w-[140px] text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Features</a>
          <a href="#" className="h-[50px] w-[140px] text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">How it works</a>
          <a href="#" className="h-[50px] w-[140px] text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Tokenomics</a>
          <a href="#" className="h-[50px] w-[140px] text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Roadmap</a>
          <a href="#" className="h-[50px] w-[140px] text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Why Us?</a>
          <a href="#" className="h-[50px] w-[140px] text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Chart</a>
          <button className=" border border-grey-500   rounded-[28px] h-[50px] w-[150px] bg-[#010314] text-white px-3 py-2  text-sm font-medium">Whitepaper</button> <br />
            <button className="mt-[10px] border-2 border-[#9471f3]   rounded-[28px] h-[50px] w-[150px] bg-[#010314] text-white px-3 py-2  text-sm font-medium">Start Bot Now</button>
        </div>
      </div>
    </nav>
    </>
  );
};

