import React from "react";
import { useEffect } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { GetProducts } from "../redux-files/Actions/product.actions/products.action";
import { RootStore } from "../redux-files/store";

import {ProductComponent} from "../components/index";
import { useState } from "react";

const Landing = () => {

    const[search, setSearch] = useState('');

    const dispatch = useDispatch();  

    const ProductState = useSelector((state: RootStore) => state.products.products);

    useEffect(() => {
        dispatch(GetProducts());
    },[]);

    const handlechange = (value: string) => {
        setSearch(value);
    }

    const FilteredProducts = ProductState?.filter(
        (product) => product.description.toLowerCase().includes(search.toLowerCase())
    );
    
    return (
        <div className="App">
            <ProductComponent products={FilteredProducts} handlechange={handlechange}/>
        </div>
    );
}

export default Landing;
