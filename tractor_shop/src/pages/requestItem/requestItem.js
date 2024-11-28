import React, { useState } from 'react';


function PostItem() {

  return (
    <div className="h-full">
      <div className="bg-gray-100 flex h-full items-center">
        <div className="w-full max-w-lg mx-auto p-6">
          <div className="mt-7 bg-white border max-w-4xl w-full border-gray-200 rounded-xl shadow-sm">
            <div className="p-4 sm:p-7">
              <div className="text-center">
                <h1 className="block text-2xl font-bold text-black">Request an Item</h1>
              </div>
              <div className="mt-5">
                {/* <form > */}
                  <div className="grid gap-y-4 " rows="6">
                    <div>
                      <label className="block text-sm mb-2 ">
                        why do you need the item?
                      </label>
                      <div className="relative mb-6">
                        <input
                          // onChange={(e) => setValue(e.target.value)}
                          // value={value}
                          className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none border-2"
                          required
                        />
                      </div>
                    </div>

                    {/* <div>
                      <label className="block text-sm mb-2 ">
                        Description
                      </label>
                      <div className="relative">
                        <input
                          // onChange={(e) => setDescription(e.target.value)}
                          // value={description}                                                
                          className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  border-2"
                          required
                        />
                      </div>
                      
                    </div>  */}
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-black text-white "
                    >
                      <a href='/create'>
                      Next
                      </a>
                      
                    </button>
                  </div>
                {/* </form> */}
            </div>
          </div>
        </div>
        </div>
        
      </div>
        );
}

export default PostItem;
