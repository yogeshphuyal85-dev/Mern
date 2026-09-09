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
        <div> empty</div>
    );
}

export default Api_practise;