import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import MiladItem from '../MiladItem/MiladItem';
import './Shop.css'

const Shop = () => {
     
// usestate and useEffect for fetch data

    const [foods,setFood]= useState([]);

    useEffect(()=>{
        fetch('./milladbox.JSON')
        .then(res=>res.json())
        .then(data=>setFood(data))
        
    },[])

// usestate for pass data to cart component by onclick function
    
    const [miladitem,setMiladitem]= useState([]);
    
    const addItem=(item)=>{
        const newItem=[...miladitem,item]
        setMiladitem(newItem);
    }

    return (
        <div className="container margin">
            <div className="row">
                <div className="col-md-9">
                    <p>Milad box {foods.length} items </p><hr />
                    <h1 className="text-warning">Per box budget is 120tk. <i>think, choose items and fillup your box !</i></h1>
                    <div className="row">
                        {
                            foods.map(food=><MiladItem addItem={addItem} key={food.name} food={food}></MiladItem>)
                        }

                    </div>


                </div>
                <div className="col-md-3 position">
                    <Cart miladitem={miladitem} ></Cart>

                </div>

            </div>
            
        </div>
    );
};

export default Shop;