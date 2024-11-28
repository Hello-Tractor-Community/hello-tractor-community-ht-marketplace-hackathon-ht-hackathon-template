import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const tractorProducts = [
  {
    _id: "100001",
    img: "https://ht-mobileassets.s3.amazonaws.com/tractorModels/jx_95-removebg-preview.png",
    productName: "JX 95",
    price: "45,000.00",
    color: "Green",
    badge: true,
    des: "A powerful tractor designed for efficiency and performance.",
  },
  {
    _id: "100002",
    img: "https://ht-mobileassets.s3.amazonaws.com/tractorModels/PREET-9049.png",
    productName: "PREET-9049",
    price: "50,000.00",
    color: "Red",
    badge: true,
    des: "Versatile and reliable for all your farming needs.",
  },
  {
    _id: "100003",
    img: "https://ht-mobileassets.s3.amazonaws.com/tractorModels/John_Deere_6110B.png",
    productName: "John Deere 6110B",
    price: "60,000.00",
    color: "Green",
    badge: true,
    des: "High performance tractor with advanced features.",
  },
  {
    _id: "100004",
    img: "https://ht-mobileassets.s3.amazonaws.com/tractorModels/John_Deere_D140.png",
    productName: "John Deere D140",
    price: "55,000.00",
    color: "Green",
    badge: false,
    des: "Ideal for small to medium-sized farms.",
  },
  {
    _id: "100005",
    img: "https://ht-mobileassets.s3.amazonaws.com/tractorModels/IndoFarm_3065DI_C-MESH.png",
    productName: "IndoFarm 3065DI C-MESH",
    price: "52,000.00",
    color: "Blue",
    badge: false,
    des: "Robust and durable for tough farming conditions.",
  },
  {
    _id: "100006",
    img: "https://ht-mobileassets.s3.amazonaws.com/tractorModels/16_John_Deere_6130J.png",
    productName: "John Deere 6130J",
    price: "65,000.00",
    color: "Green",
    badge: true,
    des: "Designed for maximum productivity and comfort.",
  },
  {
    _id: "100007",
    img: "https://ht-mobileassets.s3.amazonaws.com/tractorModels/John_Deere_5503.png",
    productName: "John Deere 5503",
    price: "58,000.00",
    color: "Green",
    badge: true,
    des: "Reliable and efficient for all farming tasks.",
  },
  {
    _id: "100008",
    img: "https://ht-mobileassets.s3.amazonaws.com/tractorModels/MAN_35.402.png",
    productName: "MAN 35.402",
    price: "70,000.00",
    color: "Yellow",
    badge: false,
    des: "Heavy-duty tractor for large-scale farming.",
  },
  {
    _id: "100009",
    img: "https://ht-mobileassets.s3.amazonaws.com/tractorModels/Mahindra_502703.png",
    productName: "Mahindra 502703",
    price: "48,000.00",
    color: "Red",
    badge: false,
    des: "Versatile and powerful for various applications.",
  },
  {
    _id: "100010",
    img: "https://ht-mobileassets.s3.amazonaws.com/tractorModels/17_John_Deere_6100D.png",
    productName: "John Deere 6100D",
    price: "62,000.00",
    color: "Green",
    badge: true,
    des: "Perfect for both field and transport work.",
  },
];

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        {tractorProducts.map((product) => (
          <div className="px-2" key={product._id}>
            <Product
              _id={product._id}
              img={product.img}
              productName={product.productName}
              price={product.price}
              color={product.color}
              badge={product.badge}
              des={product.des}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewArrivals;
