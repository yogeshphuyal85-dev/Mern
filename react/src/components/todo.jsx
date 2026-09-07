import React from "react";

function Todo() {
  return (
    <div className="min-h-screen border-2 border-black bg-[#3a1111]">

      <h1 className="text-center text-white text-5xl pt-2">
        TODO LIST
      </h1>

      {/* Search Section */}
      <div className="flex justify-center items-center mt-[20px] py-[10px]">
        <input
          className="w-1/2 border-none text-3xl bg-white"
          type="text"
          placeholder="Search"
        />

        <button className="border border-black text-2xl cursor-pointer py-[10px] px-[20px] bg-white rounded-lg">
          Add
        </button>
      </div>

      {/* Boxes Container */}
      <div className="grid grid-cols-4 gap-[20px] px-[20px] mt-[20px]">

        {/* First Box */}
        <div className="h-[33vh] border-2 border-black bg-[#124f4f]">

          <h2 className="text-center text-white text-2xl pt-[10px]">
            Title
          </h2>

          <h3 className="text-center text-white text-1xl pt-[15px]">
            Description
          </h3>

          <h3 className="text-center text-white text-1xl pt-[15px]">
            Priority
          </h3>

          <div className="mt-[20px] text-center">
            <button className="py-[10px] px-[20px] m-[5px] rounded-lg cursor-pointer border-2 border-black hover:bg-gray-300">
              Submit
            </button>

            <button className="py-[10px] px-[20px] m-[5px] rounded-lg cursor-pointer border-2 border-black hover:bg-gray-300">
              Cancel
            </button>
          </div>

        </div>


        {/* Second Box */}
        <div className="h-[33vh] border-2 border-black bg-[#124f4f]">

          <h2 className="text-center text-white text-2xl pt-[10px]">
            Title
          </h2>

          <h3 className="text-center text-white text-1xl pt-[15px]">
            Description
          </h3>

          <h3 className="text-center text-white text-1xl pt-[15px]">
            Priority
          </h3>

          <div className="mt-[20px] text-center">
            <button className="py-[10px] px-[20px] m-[5px] rounded-lg cursor-pointer border-2 border-black hover:bg-gray-300">
              Submit
            </button>

            <button className="py-[10px] px-[20px] m-[5px] rounded-lg cursor-pointer border-2 border-black hover:bg-gray-300">
              Cancel
            </button>
          </div>

        </div>


        {/* Third Box */}
        <div className="h-[33vh] border-2 border-black bg-[#124f4f]">

          <h2 className="text-center text-white text-2xl pt-[10px]">
            Title
          </h2>

          <h3 className="text-center text-white text-1xl pt-[15px]">
            Description
          </h3>

          <h3 className="text-center text-white text-1xl pt-[15px]">
            Priority
          </h3>

          <div className="mt-[20px] text-center">
            <button className="py-[10px] px-[20px] m-[5px] rounded-lg cursor-pointer border-2 border-black hover:bg-gray-300">
              Submit
            </button>

            <button className="py-[10px] px-[20px] m-[5px] rounded-lg cursor-pointer border-2 border-black hover:bg-gray-300">
              Cancel
            </button>
          </div>

        </div>


        {/* Fourth Box */}
        <div className="h-[33vh] border-2 border-black bg-[#124f4f]">

          <h2 className="text-center text-white text-2xl pt-[10px]">
            Title
          </h2>

          <h3 className="text-center text-white text-1xl pt-[15px]">
            Description
          </h3>

          <h3 className="text-center text-white text-1xl pt-[15px]">
            Priority
          </h3>

          <div className="mt-[20px] text-center">
            <button className="py-[10px] px-[20px] m-[5px] rounded-lg cursor-pointer border-2 border-black hover:bg-gray-300">
              Submit
            </button>

            <button className="py-[10px] px-[20px] m-[5px] rounded-lg cursor-pointer border-2 border-black hover:bg-gray-300">
              Cancel
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Todo;