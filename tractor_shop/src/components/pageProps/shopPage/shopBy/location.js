import React, { useState } from "react";
import { motion } from "framer-motion";
import NavTitle from "./NavTitle";

const Color = () => {
  const [showlocation, setShowlocation] = useState(true);
  const location = [
    {
      _id: 9001,
      title: "Nyeri",
    },
    {
      _id: 9002,
      title: "Homabay",
    },
    {
      _id: 9003,
      title: "Nairobi",
    },
    {
      _id: 9004,
      title: "Mombasa",
    },
    {
      _id: 9005,
      title: "Juja",
    },
  ];

  return (
    <div>
      <div
        onClick={() => setShowlocation(!showlocation)}
        className="cursor-pointer"
      >
        <NavTitle title="Shop by location" icons={true} />
      </div>
      {showlocation && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
            {location.map((item) => (
              <li
                key={item._id}
                className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2"
              >
                <span
                  style={{ background: item.base }}
                  className={`w-3 h-3 bg-gray-500 rounded-full`}
                ></span>
                {item.title}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Color;
