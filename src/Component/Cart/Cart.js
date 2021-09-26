import React from 'react';

const Cart = (props) => {
   
    const {miladitem}= props;
     
    // for find total price and item name
     
     let foodlist=[];
     let total=0;
     for (const fooditem of miladitem) {
         total= total+fooditem.price;
         foodlist.push(fooditem);
        
     }
     console.log(foodlist);

    //  budget cross alart
    if(total>120){
        alert(" Excuse me! Budget cross 😢" );
       }

    return (
        <div >
            <div>
                <h3 className="text-center mt-4">total items :{miladitem.length}</h3><hr />
            </div>
            <table class="table">
             <thead></thead>
                <tbody>
                     <tr>
                         <td >Total Price pre items:</td>
                         <td> {total} tk</td>
                       
                     </tr>
                </tbody>
            </table>
            {
                           
                foodlist.map(food=> <li>{food.name} → {food.price} tk</li>)
            }
            
            <p className="text-center"><button className="btn btn-danger mt-1">confirm</button></p>

            
        </div>
    );
};

export default Cart;