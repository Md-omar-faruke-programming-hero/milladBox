import React from 'react';

const MiladItem = (props) => {
    
    // recive data and dstructure
    const {name,catagory,price,size,weight,img}=props.food;
    return (
        <div className="col-md-4 mt-3">
            <div class="card h-100">
                 <img src={img} class="card-img-top h-50 img-fluid" alt="..."/>
                 <div class="card-body">
                     <h5 class="card-title">{name}</h5>
                     <p class="card-text">catagory: {catagory}</p>
                     <p class="card-text">size: {size}</p>
                     <p class="card-text">weight: {weight}</p>
                     <p className="text-danger">Price: {price} tk(per piece )</p>
                </div>
                
                     <button onClick={()=>props.addItem(props.food)} className=" btn btn-success border rounded-pill w-75 m-auto mb-3"><i className="fas fa-list-ol fs-5" data-bs-toggle="modal" data-bs-target="#exampleModal"></i> Select to list item</button>
             </div>
        </div>
        
        
    );
};

export default MiladItem;