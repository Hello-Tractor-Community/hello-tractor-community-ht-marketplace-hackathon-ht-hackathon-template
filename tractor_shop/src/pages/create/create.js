import React, { useState } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

function PostItem() {

  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
  };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     const formData = new FormData();
//     formData.append('name', itemName);
//     // formData.append('category', category);
//     formData.append('valuation', value);
//     formData.append('condition', condition);
//     formData.append('description', description);
//     if (image) formData.append('image', image);

//     try {
//       const response = await axios.post('http://127.0.0.1:8000/api/postitems/', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       if (response.status === 200) {
//         window.success('Item posted successfully!');
//         setItemName('');
//         // setCategory('');
//         setValue('');
//         setCondition('');
//         setDescription('');
//         setImage(null);
//       }
//     } catch (error) {
//       window.error('Failed to post item. Please try again.');
//       console.error('Error posting item:', error);
//     }
//   };

  return (
    <div className="h-full">
      <div className="bg-gray-100 flex h-full items-center">
        <div className="w-full max-w-lg mx-auto p-6">
          <div className="mt-7 bg-white border max-w-4xl w-full border-gray-200 rounded-xl shadow-sm">
            <div className="p-4 sm:p-7">
              <div className="text-center">
                <h1 className="block text-2xl font-bold text-black">Upload an image</h1>
              </div>
              <div className="mt-5 mb-10">
                <label
                      className="block mb-2 text-sm font-medium text-gray-900  "
                      
                    >
                      Upload multiple files
                    </label>
                    {image && (
                      <div className="flex items-center justify-between">
                        <p>{image.name}</p>
                        <button onClick={handleRemoveImage} type="button" className=' text-red-500'>Remove</button>
                      </div>
                    )}

                    <div className="flex items-center justify-center w-full mb-10">
                      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-600">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg
                            className="w-8 h-8 mb-4 text-gray-500 "
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
                          <p className="mb-2 text-sm text-gray-100 ">
                            <span className="font-semibold">
                              Click to upload
                            </span>{" "}
                            or drag and drop
                          </p>
                          <p className="text-xs text-gray-500 ">
                            SVG, PNG, JPG or GIF (MAX. 800x400px)
                          </p>
                        </div>
                        <input
                          id="image-upload"
                          type="file"
                          onChange={handleImageChange}
                          className="hidden"
                          accept="image/*" 
                        />
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-black   text-white "
                    >
                      <a href=''>
                      Post
                      </a>
                      
                    </button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default PostItem;
