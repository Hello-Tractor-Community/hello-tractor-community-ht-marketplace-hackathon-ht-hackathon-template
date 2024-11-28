import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";

const tractorProducts = [
  {
    _id: "1011",
    img: "https://ht-mobileassets.s3.amazonaws.com/tractorModels/470-removebg-preview.png",
    productName: "470 Xtra",
    price: "45,000.00",
    color: "Green",
    badge: true,
    des: "A reliable tractor for various farming tasks.",
  },
  {
    _id: "1012",
    img: "https://ht-mobileassets.s3.amazonaws.com/tractorModels/John_Deere_5082E.png",
    productName: "John Deere 5082E",
    price: "50,000.00",
    color: "Green",
    badge: false,
    des: "High-performance tractor with advanced features.",
  },
  {
    _id: "1013",
    img: "https://ht-mobileassets.s3.amazonaws.com/tractorModels/MAN_33.464.png",
    productName: "MAN 33.464",
    price: "55,000.00",
    color: "Yellow",
    badge: true,
    des: "Heavy-duty tractor for large-scale farming.",
  },
  {
    _id: "1014",
    img: "https://ht-mobileassets.s3.amazonaws.com/tractorModels/YTO_X804.png",
    productName: "YTO X804",
    price: "52,000.00",
    color: "Red",
    badge: false,
    des: "Versatile and reliable for all your farming needs.",
  },
  // {
  //   _id: "1015",
  //   img: "https://ht-mobileassets.s3.amazonaws.com/tractorModels/kubota-removebg-preview.png",
  //   productName: "Kubota M9540",
  //   price: "48,000.00",
  //   color: "Orange",
  //   badge: true,
  //   des: "Efficient and powerful for various applications.",
  // },
  // {
  //   _id: "1016",
  //   img: "https://ht-mobileassets.s3.amazonaws.com/tractorModels/new_holand-removebg-preview.png",
  //   productName: "TS6.110 4WD",
  //   price: "60,000.00",
  //   color: "Blue",
  //   badge: true,
  //   des: "Designed for maximum productivity and comfort.",
  // },
  // {
  //   _id: "1017",
  //   img: "https://ht-mobileassets.s3.amazonaws.com/tractorModels/Farmall_100JX.png",
  //   productName: "Farmall 100JX",
  //   price: "54,000.00",
  //   color: "Red",
  //   badge: false,
  //   des: "Ideal for small to medium-sized farms.",
  // },
  // {
  //   _id: "1018",
  //   img: "https://ht-mobileassets.s3.amazonaws.com/tractorModels/Ford_4000.png",
  //   productName: "Ford 4000",
  //   price: "47,000.00",
  //   color: "Blue",
  //   badge: false,
  //   des: "Reliable and efficient for all farming tasks.",
  // },
  // {
  //   _id: "1019",
  //   img: "https://ht-mobileassets.s3.amazonaws.com/tractorModels/images-removebg-preview.png",
  //   productName: "New Holland TS6110",
  //   price: "58,000.00",
  //   color: "Blue",
  //   badge: true,
  //   des: "Perfect for both field and transport work.",
  // },
  // {
  //   _id: "1020",
  //   img: "https://ht-mobileassets.s3.amazonaws.com/tractorModels/zoomLn-removebg-preview.png",
  //   productName: "Zoomlion RC 904",
  //   price: "65,000.00",
  //   color: "Green",
  //   badge: true,
  //   des: "Designed for maximum efficiency in farming.",
  // },
  // {
  //   _id: "1021",
  //   img: "https://ht-mobileassets.s3.amazonaws.com/tractorModels/Massey_Ferguson_275.png",
  //   productName: "Massey Ferguson 275",
  //   price: "62,000.00",
  //   color: "Red",
  //   badge: true,
  //   des: "A powerful tractor designed for efficiency.",
  // },
];

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Featured Tractors" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
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

export default BestSellers;
