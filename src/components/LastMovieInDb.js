import React from 'react';
import {useState, useEffect} from 'react';



function LastMovieInDb(){
    const [product,setProduct] = useState([]);
    useEffect(()=>{
        fetch("api/productos")
        .then(response=>
            response.json()
        ).then(data => {
            
                setProduct(data.ultimoproduct)
                console.log(data.ultimoproduct)
                console.log(data.img)
                
            
        })
        .catch(error => console.log(error))
    },[])


    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Último producto cargado:<br></br> {product.name}</h5>
                </div>
                <div className="card-body">
    
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}}  src={product.imagen}alt="producto"/>
                    </div>
                    <p>{product.description}</p>
                
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href = {product.detail}>Ver detalle</a>
                </div>
            </div>
        </div>
    )
}

export default LastMovieInDb;