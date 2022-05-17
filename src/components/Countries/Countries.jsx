import React, { useState,useEffect} from 'react';
import axios from 'axios';
import Title from '../Title';
import Cart from './Cart';
const Countries = () => {
    const [loading, setLoading] = useState(true);
    const [countries, setCountries] = useState([]);

    const urlApi = "https://restcountries.com/v2/all";

    useEffect(() => {
        (async () => {
            try {
                if (loading) {
                     await axios.get(urlApi)
                        .then(res => {
                            console.log(res.data);
                            setCountries(res.data)
                    });
                    setLoading(false);
                }
            } catch (err) {
                console.log("err2", err);
            }
        })();
    }, [loading]);

    const list=countries.map((item,index)=>
        <Cart key={index} title={item.name} flag={item.flag}/>
    );

    return (
        <>
         <Title title="List Countries"/>
         <h1 className="text">count: {countries.length}</h1>
         <div className="flexBox">
           {list}
        </div>
        </>
    );
};

export default Countries;