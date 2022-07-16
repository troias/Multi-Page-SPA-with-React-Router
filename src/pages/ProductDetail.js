import React from 'react'
import { useParams} from 'react-router-dom'

const ProductDetail = () => {
   const params = useParams()
   console.log("params", params)
    return (
        <div>
            <h1>Product Details</h1>
            {params.productId}
        </div>
    )
}

export  default ProductDetail
