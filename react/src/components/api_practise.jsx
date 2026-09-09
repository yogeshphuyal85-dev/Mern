import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Api_practise = () => {
    const [value, setValue] = useState([]);


    const fetchData = async () => {
        const vaue = await axios.get("https://fakestoreapi.com/products");
        console.log(vaue.data);
        setValue(vaue.data);
    };

export default Api_practise;