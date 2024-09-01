import React from "react";
import { FaDiscord } from "react-icons/fa";

export const JoinUs = () => {
  return (
    <div>
      <div className="my-8">
        <div className="flex justify-center items-center ">
          <div className="flex items-center justify-center gap-8 flex-col md:flex-row md:justify-between p-12 md:w-[1200px] bg-blue-500 ">
            <h1 className="text-4xl text-white font-semibold text-center">
              Join our Community
            </h1>
            <div className="flex justify-center items-center gap-2">
              
              <button className="flex gap-2 px-4 py-2 text-2xl font-semibold text-white hover:text-black hover:bg-white transition duration-300 rounded-full border-white border-2">
                <span><FaDiscord className="text-4xl " /></span>Discord
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
