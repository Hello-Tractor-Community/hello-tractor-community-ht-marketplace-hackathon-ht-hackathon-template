import React from "react";

function postitem() {
  return (
    <div className="h-full">
      <div className="dark:bg-slate-900 bg-gray-100 flex h-full items-center py-16">
        <div className="w-full max-w-md mx-auto p-6">
          <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className="p-4 sm:p-7">
              <div className="text-center">
                <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                  Post Item
                </h1>
              </div>

              <div className="mt-5">
                <form>
                  <div className="grid gap-y-4">
                    <div>
                      <label className="block text-sm mb-2 dark:text-white">
                        Name of the item
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                          required
                          aria-describedby="email-error"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm mb-2 dark:text-white">
                        Category
                      </label>
                      <div className="relative">
                        <input
                          type="password"
                          id="password"
                          name="password"
                          className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                          required
                          aria-describedby="password-error"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm mb-2 dark:text-white">
                        VaIue
                      </label>
                      <div className="relative">
                        <input
                          type="password"
                          id="confirm-password"
                          name="confirm-password"
                          className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                          required
                          aria-describedby="confirm-password-error"
                        />
                      </div>
                      <p
                        className="hidden text-xs text-red-600 mt-2"
                        id="confirm-password-error"
                      >
                        Password does not match the password
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm mb-2 dark:text-white">
                        Description
                      </label>
                      <div className="relative">
                        <input
                          type="password"
                          id="confirm-password"
                          name="confirm-password"
                          className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                          required
                          aria-describedby="confirm-password-error"
                        />
                      </div>
                      <p
                        className="hidden text-xs text-red-600 mt-2"
                        id="confirm-password-error"
                      >
                        Password does not match the password
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm mb-2 dark:text-white">
                        Condition
                      </label>
                      <div className="relative">
                        <input
                          type="password"
                          id="confirm-password"
                          name="confirm-password"
                          className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                          required
                          aria-describedby="confirm-password-error"
                        />
                      </div>
                      <p
                        className="hidden text-xs text-red-600 mt-2"
                        id="confirm-password-error"
                      >
                        Password does not match the password
                      </p>
                    </div>

                    <label
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      
                    >
                      Upload multiple files
                    </label>

                    <div className="flex items-center justify-center w-full">
                      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg
                            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 16"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                            />
                          </svg>
                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">
                              Click to upload
                            </span>{" "}
                            or drag and drop
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            SVG, PNG, JPG or GIF (MAX. 800x400px)
                          </p>
                        </div>
                        <input
                          id="dropzone-file"
                          type="file"
                          className="hidden"
                        />
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      Post
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default postitem;
