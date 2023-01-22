import Categories from "./Categories";
import HomePageHeader from "./HomePageHeader";
import ProductCard from "./ProductCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductFilters from "./ProductFilters";

export default function HomePage() {
  const products = [
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
  ];
  return (
    <>
      <HomePageHeader />
      <br />
      <br />
      <br />
      <Categories />

      <br />
      <Container className="me-5 ms-5" >
        <Row>
            <Col lg={3}>
            <ProductFilters/>
            </Col>
            <Col>
            <Row>
          {products.map((product) => (
            <Col>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
            </Col>
        </Row>
        
      </Container>

      <br />
    </>
  );
}
