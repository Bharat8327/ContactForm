import React from 'react';
import { SiHuggingface } from 'react-icons/si';

function Navbar() {
  return (
    <div className="flex justify-between sm:px-4 h-10 items-center bg-yellow-200">
      <div className="text-orange-500 text-3xl font-bold animate-pulse">
        Bharat.....
      </div>
      <div>
        <div className=" hover:text-pink-500 hover:text-3xl text-4xl active:text-4xl">
          <SiHuggingface />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
