import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';

const User_api = () => {
    const [value, setValue] = React.useState([]);

    const fetchData = async () => {
        await axios.get('https://fakestoreapi.com/users').then((res) => {
            console.log(res.data);
            setValue(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
                Fake Store Users
            </h1>
        </div>
    );
};

export default User_api;