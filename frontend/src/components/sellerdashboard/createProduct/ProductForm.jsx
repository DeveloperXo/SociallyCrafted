import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import './style.css';
import { useDispatch } from "react-redux";
import { addProduct } from "../../../actions/productAction";
import Alert from 'react-bootstrap/Alert';
import { useState } from "react";

export default function ProductForm() {
    const [alert, setAlert] = useState(false);

    const dispatch = useDispatch();
    class Product {
        constructor(name, description, price, images, category, stock) {
            this.name = name;
            this.description = description;
            this.price = price;
            this.images = images;
            this.rating = 0;
            this.numOfReviews = 0;
            this.category = category;
            this.stock = stock;
            this.seller = JSON.parse(localStorage.getItem('seller'))._id;
        }
    }

    const productFormHandler = (event) => {
        event.preventDefault();
        const imageFields = document.querySelectorAll('.img-control')
        let imageArray = [];
        imageFields.forEach(function (elem, index) {
            if (elem.value.trim() !== "") {
                imageArray.push({ public_id: index, url: elem.value });
            }
        })
        const fields = {
            name: document.querySelector('.prodName').value,
            description: document.querySelector('.prodDesc').value,
            price: document.querySelector('.prodPrice').value,
            category: document.querySelector('.prodCategory').value,
            stock: document.querySelector('.prodStock').value,
        }
        const product = new Product(fields.name, fields.description, fields.price, imageArray, fields.category, fields.stock);
        dispatch(addProduct(product));
        setAlert(true)
    }

    const addImageField = () => {
        const field = document.createElement("input");
        field.classList.add('img-control');
        field.type = "text";
        field.placeholder = "Enter product image URL";
        field.name = "product_name";
        field.required = true;
        document.querySelector('.imageFieldContainer').appendChild(field);
    }

    const toggleForm = () => {
        alert ? setAlert(false) : setAlert(true)
    }
    return (
        <Container className="formContainer">
            <br /><br />
            <br /><br />
            <div className="pe-sm-0 pe-lg-5">
                <h2 style={{ "fontFamily": "poppins", color: "var(--main-color)" }}>
                    Add a new product
                </h2>
                {!alert ?
                    <Form onSubmit={productFormHandler}>
                        <Form.Group className="mb-3">
                            <Form.Label>Product name</Form.Label>
                            <Form.Control className="prodName" type="text" placeholder="Enter product name" name="product_name" required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Product description</Form.Label>
                            <Form.Control className="prodDesc" type="textarea" rows="3" placeholder="Enter product description" name="product_description" required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Price</Form.Label>
                            <Form.Control className="prodPrice" type="number" placeholder="Enter product price" name="product_price" required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Add product images</Form.Label>
                            <div className="imageFieldContainer">
                                <input className="img-control" type="text" placeholder="Enter product image url" name="product_image" required />
                            </div>
                            <br />
                            <Button
                                style={{
                                    "width": "10rem",
                                    "borderRadius": "0",
                                    "backgroundImage":
                                        "linear-gradient(96.83deg, #174066 6.48%, #00D1FF 162.22%)",
                                    "border": "None",
                                }}
                                variant="primary" type="button" onClick={addImageField}
                            >Add new image</Button>

                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Category</Form.Label>
                            <Form.Control className="prodCategory" type="text" placeholder="Enter product category" name="product_category" required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Product stock</Form.Label>
                            <Form.Control className="prodStock" type="number" placeholder="Enter product stock" name="product_name" required />
                        </Form.Group>
                        <br />
                        <Button
                            style={{
                                "width": "10rem",
                                "borderRadius": "0",
                                "backgroundImage":
                                    "linear-gradient(96.83deg, #174066 6.48%, #00D1FF 162.22%)",
                                "border": "None",
                            }}
                            variant="primary" type="submit"
                        >Publish product</Button>
                        <br /><br />
                    </Form>
                    : <><Alert className="mt-2" variant="secondary">Product Added Successfully...</Alert>
                        <Button
                            style={{
                                "width": "13rem",
                                "borderRadius": "0",
                                "backgroundImage":
                                    "linear-gradient(96.83deg, #174066 6.48%, #00D1FF 162.22%)",
                                "border": "None",
                            }}
                            variant="primary" onClick={toggleForm}
                        >Add more products</Button>
                    </>
                }
            </div>
        </Container>
    );
}