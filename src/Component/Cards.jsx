import React, { useRef, useState } from 'react'
import { useContext } from 'react'
import { Cardcontext } from './Context'



function Cards(props) {

    let [count, setCount] = useContext(Cardcontext);

    let [buttonValue, setButtonValue] = useState(props.viewcard);

    function clickfunction(){
        if (buttonValue == "Add to card"){
            setCount(count + 1);
            setButtonValue("Remove from Cart");
        }
       else if(buttonValue == "Remove from Cart"){
            setCount(count - 1);
            setButtonValue("Add to card");
        }

       
    }
    
    let button = useRef()

    function salefunction(value){
        if(value == "yes"){
            return <div className="badge bg-dark text-white position-absolute" >Sale</div>
        }
    }
    function starfunction(value){
        if(value == "yes"){
            return  <div className="d-flex justify-content-center small text-warning mb-2">
            <div className="bi-star-fill">★★★★★</div>
        </div>
        }
        else{
            return <div className="d-flex justify-content-center small text-warning mb-2">
                <div className="bi-star-fill"></div>
            </div>
            
        }
    }
    
    return (
        <div>
            <div className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Sale badge--> */}
                            {salefunction(props.sale)}
             
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">{props.name}</h5>
                                    {/* <!-- Product reviews--> */}
                                    {starfunction(props.star)}
                                   
                                    {/* <!-- Product price--> */}
                                    <span className="text-muted text-decoration-line-through">{props.mutedprice}</span>
                                 {props.price}
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a ref={button} onClick={clickfunction} className="btn btn-outline-dark mt-auto" href="#"> 
                                {buttonValue}
                                </a>
                                </div>
                                
                            </div>
                        </div>
                    </div>
        </div>
    )
}

export default Cards