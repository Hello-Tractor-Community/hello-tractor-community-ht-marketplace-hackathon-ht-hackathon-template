import React, { useState } from 'react';
import axios from 'axios';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

function PostItem() {
  const [itemName, setItemName] = useState('');
  // const [category, setCategory] = useState('');
  const [value, setValue] = useState('');
  const [condition, setCondition] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  // const handleImageChange = (e) => {
  //   if (e.target.files && e.target.files[0]) {
  //     setImage(e.target.files[0]);
  //   }
  // };

  // const handleRemoveImage = () => {
  //   setImage(null);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('name', itemName);
    // formData.append('category', category);
    formData.append('valuation', value);
    formData.append('condition', condition);
    formData.append('description', description);
    if (image) formData.append('image', image);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/postitems/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        window.success('Item posted successfully!');
        setItemName('');
        // setCategory('');
        setValue('');
        setCondition('');
        setDescription('');
        setImage(null);
      }
    } catch (error) {
      window.error('Failed to post item. Please try again.');
      console.error('Error posting item:', error);
    }
  };

  return (
    <div className="h-full">
      <div className="bg-gray-100 flex h-full items-center">
        <div className="w-full max-w-lg mx-auto p-6">
          <div className="mt-7 bg-white border max-w-4xl w-full border-gray-200 rounded-xl shadow-sm">
            <div className="p-4 sm:p-7">
              <div className="text-center">
                <h1 className="block text-2xl font-bold text-black">Post Item</h1>
              </div>
              <div className="mt-5">
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-y-4">
                    <div>
                      <label className="block text-sm mb-2 ">
                        Category
                      </label>
                      <div className="relative">
                        <input
                          onChange={(e) => setItemName(e.target.value)}
                          value={itemName}
                          className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none border-2"
                          required
                        />
                      </div>
                    </div>

                    {/* <div>
                      <label className="block text-sm mb-2 ">
                        Category
                      </label>
                      <div className="relative">
                        <input
                          onChange={(e) => setCategory(e.target.value)}
                          value={category}
                          className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none border-2"
                          required
                        />
                      </div>
                    </div> */}

                    <div>
                      <label className="block text-sm mb-2 ">
                        TitIe
                      </label>
                      <div className="relative">
                        <input
                          onChange={(e) => setValue(e.target.value)}
                          value={value}
                          className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none border-2"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm mb-2 ">
                        Description
                      </label>
                      <div className="relative">
                        <input
                          onChange={(e) => setDescription(e.target.value)}
                          value={description}                                                
                          className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  border-2"
                          required
                        />
                      </div>
                      
                    </div>

                    <div>
                      <label className="block text-sm mb-2 ">
                        Condition
                      </label>
                      <div className="relative">
                        <input
                          onChange={(e) => setCondition(e.target.value)}
                          value={condition}  
                          className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm  border-2 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  "
                          required
                        />
                      </div>
                      
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
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostItem;
