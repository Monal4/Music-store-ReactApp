import React,{ FC, useEffect } from "react";
import "./style.css";
import { Container } from "react-bootstrap";
import { product } from '../../types/producttypes';
import Card from "../product.card.component";

interface ProductProps {
    products?: product[]; 
    handlechange: (value: string) => void;
}

const ProductsComponent: FC<ProductProps> = props => {

    const{ products, handlechange } = props;

    return (
        <Container className="welcome">
            <div>
                <input className="SearchMusicInput" type="text" placeholder="Search Music" onChange={(e) => handlechange(e.target.value)}/>
            </div>
            {products ? 
                products.map( (p) => (
                    <Card key = {p.id}  product={p}/>
                )) : null}
        </Container>
    )
}

export default ProductsComponent;