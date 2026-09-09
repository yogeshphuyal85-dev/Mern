import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Api_practise = () => {
    const [value, setValue] = useState([]);


    const fetchData = async () => {
        const value = await axios.get("https://fakestoreapi.com/products");
        console.log(value.data);
        setValue(value.data);
    };
    useEffect(() => {
        fetchData();
    }, []);

    return(
        <div> 
            {value.map((product) =>(
                <div key={product.id} className="border-2 border-black bg-[#d79191] text-white p-[10px] m-[10px]">
                    <h1 className="text-2xl">{product.id}</h1>
                    <h1 className="text-2xl">{product.title}</h1>
                    <p className="text-lg">{product.description}</p>
                    <p className="text-lg">Price: ${product.price}</p>
                    <img src={product.image} alt={product.title} className="w-[100px] h-[100px]"/>
                </div>
            ))}
        </div>
    );
};

export default Api_practise;