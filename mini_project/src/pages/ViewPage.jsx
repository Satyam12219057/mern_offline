
import { Link, useParams } from "react-router";
import {useState} from 'react'


const ViewPage = () => {
    const params=useParams();
    const {productId}=params;
    const [product,setProduct]=useState({});
    const getData=async()=>{
        const response=await fetch(`https://dummyjson.com/products/${productId}`);
        const data=await response.json();
        setProduct(data)
    }
    useEffect(()=>{
        getData();
    },[])
    return (
        <div>
            <main>
                <h4> Product id:{productId}</h4>
                <h2>{product.title}</h2>
                <div className="flex flex-wrap item-center  justify-center gap-6">
                    {
                        product.images?.map((imageeUrl)=>{
                            return <img key={imageeUrl} src={imageeUrl} className=""/>
                        })
                    }   
                </div>

            </main>
        </div>
    );
};

export { ViewPage };