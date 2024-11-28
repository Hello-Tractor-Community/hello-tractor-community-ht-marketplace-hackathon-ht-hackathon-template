import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";

const tractorProducts = [
  {
    _id: "1101",
    img: "https://ht-mobileassets.s3.amazonaws.com/tractorModels/New_Holland_TT55.png",
    productName: "New Holland TT55",
    price: "58,000.00",
    color: "Blue",
    badge: true,
    des: "Perfect for both field and transport work.",
  },
  {
    _id: "1102",
    img: "https://ht-mobileassets.s3.amazonaws.com/tractorModels/Captain_250DI.png",
    productName: "Massey Ferguson 6713",
    price: "55,000.00",
    color: "Red",
    badge: true,
    des: "High-performance tractor with advanced features.",
  },
  {
    _id: "1103",
    img: "https://ht-mobileassets.s3.amazonaws.com/tractorModels/Precision-bgL.png",
    productName: "PRECISION ONE",
    price: "52,000.00",
    color: "Blue",
    badge: true,
    des: "Versatile and reliable for all your farming needs.",
  },
  {
    _id: "1104",
    img: "https://ht-mobileassets.s3.amazonaws.com/tractorModels/John_Deere_5075.png",
    productName: "John Deere 5075",
    price: "60,000.00",
    color: "Green",
    badge: true,
    des: "Designed for maximum productivity and comfort.",
  },
  // {
  //   _id: "1105",
  //   img: "https://ht-mobileassets.s3.amazonaws.com/tractorModels/Massey_Ferguson_385.png",
  //   productName: "Massey Ferguson 385",
  //   price: "48,000.00",
  //   color: "Red",
  //   badge: false,
  //   des: "Ideal for small to medium-sized farms.",
  // },
  // {
  //   _id: "1106",
  //   img: "https://ht-mobileassets.s3.amazonaws.com/tractorModels/Ford_TW15.png",
  //   productName: "Ford TW15",
  //   price: "55,000.00",
  //   color: "Blue",
  //   badge: false,
  //   des: "Reliable and efficient for all farming tasks.",
  // },
  // {
  //   _id: "1107",
  //   img: "https://ht-mobileassets.s3.amazonaws.com/tractorModels/Captain_250DI.png",
  //   productName: "Captain 250DI",
  //   price: "50,000.00",
  //   color: "Green",
  //   badge: true,
  //   des: "A powerful tractor designed for efficiency.",
  // },
  // {
  //   _id: "1108",
  //   img: "https://ht-mobileassets.s3.amazonaws.com/tractorModels/MAN_TGA_410.png",
  //   productName: "MAN TGA 410",
  //   price: "65,000.00",
  //   color: "Yellow",
  //   badge: true,
  //   des: "Heavy-duty tractor for large-scale farming.",
  // },
  // {
  //   _id: "1109",
  //   img: "https://ht-mobileassets.s3.amazonaws.com/tractorModels/Ford_3600.png",
  //   productName: "Ford 3600",
  //   price: "47,000.00",
  //   color: "Blue",
  //   badge: false,
  //   des: "Versatile and powerful for various applications.",
  // },
  // {
  //   _id: "1110",
  //   img: "https://ht-mobileassets.s3.amazonaws.com/tractorModels/New_Holland_TT55.png",
  //   productName: "New Holland TT55",
  //   price: "58,000.00",
  //   color: "Blue",
  //   badge: true,
  //   des: "Perfect for both field and transport work.",
  // },
];

const SpecialOffers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Special Offers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10 cursor-pointer">
        {tractorProducts.map((product) => (
          <Product
            key={product._id}
            _id={product._id}
            img={product.img}
            productName={product.productName}
            price={product.price}
            color={product.color}
            badge={product.badge}
            des={product.des}
          />
        ))}
      </div>
    </div>
  );
};

export default SpecialOffers;
