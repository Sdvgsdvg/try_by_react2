import React from 'react'
import { BallTriangle } from 'react-loader-spinner';
import axios from 'axios';
import { useQuery } from 'react-query';

export default function Categories() {
  function getCategories(){
    return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
  
}

let {data , isLoading}= useQuery("getCategories" , getCategories)
console.log(data?.data.data);


return <>
{isLoading? <div className='w-100 d-flex justify-content-center py-5'>
<BallTriangle
height={100}
width={100}
radius={5}
color="#4fa94d"
ariaLabel="ball-triangle-loading"
wrapperClass={{}}
wrapperStyle=""
visible={true}
/></div>:<div className="row">
      
          {data?.data.data.map((category) => {
            return <div className="col-md-4" key={category._id}>
              <div className="product m-4 p-1">
                <img className='w-100 mb-2' src={category.image} alt="brand" width={90} height={300}/>
                <h5 className='text-center text-main fw-bolder'>{category.name}</h5>
              </div>
</div>
          })}
        
    </div>
  }
  </>
}
