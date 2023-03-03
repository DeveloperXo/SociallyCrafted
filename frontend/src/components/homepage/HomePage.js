import Categories from "./Categories";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

import Heroband from "./Heroband";
import FeaturedProducts from "./FeaturedProducts";

import SignPageHeader from "../signpage/SignPageHeader";

export default function HomePage() {
  /*
  products = [
    {
      name: "LED Lights",
      description: "Rustic Wall Hanging Jars with LED lights Handmade Wall Art Hanging Design Set of Two",
      price: 599,
      ratings: 3,
      numOfReviews: 10,
      images: [
        {
          public_id: 1,
          url: "https://images.meesho.com/images/products/109086297/6lsqi_256.webp",
        },
      ],
      category: "craft",
      Stock: 10,
    },
    {
        name: "LED Lights",
        description: "Rustic Wall Hanging Jars with LED lights Handmade Wall Art Hanging Design Set of Two",
        price: 599,
        ratings: 5,
        numOfReviews: 10,
        images: [
          {
            public_id: 1,
            url: "https://cdn.shopify.com/s/files/1/1305/2183/products/BulbLamp_23_1024x1024.jpg?v=1613467822",
          },
        ],
        category: "craft",
        Stock: 10,
      },
      {
        name: "LED Lights",
        description: "Rustic Wall Hanging Jars with LED lights Handmade Wall Art Hanging Design Set of Two",
        price: 599,
        ratings: 5,
        numOfReviews: 10,
        images: [
          {
            public_id: 1,
            url: "https://images.meesho.com/images/products/109086297/6lsqi_256.webp",
          },
        ],
        category: "craft",
        Stock: 10,
      },
      {
        name: "LED Lights",
        description: "Rustic Wall Hanging Jars with LED lights Handmade Wall Art Hanging Design Set of Two",
        price: 599,
        ratings: 5,
        numOfReviews: 10,
        images: [
          {
            public_id: 1,
            url: "https://5.imimg.com/data5/SELLER/Default/2022/7/QK/SS/IH/80153581/71brjvmbvxl-sl1500-1--500x500.jpg",
          },
        ],
        category: "craft",
        Stock: 10,
      },
      {
        name: "LED Lights",
        description: "Rustic Wall Hanging Jars with LED lights Handmade Wall Art Hanging Design Set of Two",
        price: 599,
        ratings: 1,
        numOfReviews: 10,
        images: [
          {
            public_id: 1,
            url: "https://images.meesho.com/images/products/109086297/6lsqi_256.webp",
          },
        ],
        category: "craft",
        Stock: 10,
      },
      {
        name: "LED Lights",
        description: "Rustic Wall Hanging Jars with LED lights Handmade Wall Art Hanging Design Set of Two",
        price: 599,
        ratings: 4,
        numOfReviews: 10,
        images: [
          {
            public_id: 1,
            url: "https://images.meesho.com/images/products/109086297/6lsqi_256.webp",
          },
        ],
        category: "craft",
        Stock: 10,
      },
      {
        name: "LED Lights",
        description: "Rustic Wall Hanging Jars with LED lights Handmade Wall Art Hanging Design Set of Two",
        price: 599,
        ratings: 5,
        numOfReviews: 10,
        images: [
          {
            public_id: 1,
            url: "https://5.imimg.com/data5/SELLER/Default/2022/7/QK/SS/IH/80153581/71brjvmbvxl-sl1500-1--500x500.jpg",
          },
        ],
        category: "craft",
        Stock: 10,
      },
      {
        name: "LED Lights",
        description: "Rustic Wall Hanging Jars with LED lights Handmade Wall Art Hanging Design Set of Two",
        price: 599,
        ratings: 5,
        numOfReviews: 10,
        images: [
          {
            public_id: 1,
            url: "https://5.imimg.com/data5/SELLER/Default/2022/7/QK/SS/IH/80153581/71brjvmbvxl-sl1500-1--500x500.jpg",
          },
        ],
        category: "craft",
        Stock: 10,
      },
  ];*/
  return (
    <>
      <SignPageHeader />
      <br />
      <br />
      <Heroband />
      <Categories />
      <br />
      <br />
      <FeaturedProducts />
      <div className="mx-auto text-center">
        <Link  to={"/products"}>
          <Button
            className="mx-auto"
            style={{

              width: "10rem",
              borderRadius: "0",
              marginLeft: "1000px",
              marginRight: "1000px"
            }}
            variant="outline-dark"
          >
            View all Products
          </Button>
        </Link>
      </div>

      <br />
      <br />
    </>
  );
}
