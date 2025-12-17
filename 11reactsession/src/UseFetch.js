import React, { useCallback, useEffect, useState } from 'react'
//  useState, useEffect, and useCallback hooks as necessary.
const UseFetch = (url) => {
    const [data,setData]=useState(null) //api response
    const [loading,setLoading]=useState(true) // loading >> true || loading false >>api loaded 
    const [error,setError]=useState(null) // for errors

    // const apiUrl="https://api.escuelajs.co/api/v1/products"
    // 2+3 >> 5
    //usecallback 2+3 >>5 || 4+5
    // dependancies >> 

    const fetchData=useCallback(async()=>{
      setLoading(true) // data is loading
      try{
          const response=await fetch(url)
          const result=await response.json()
          console.log(result)
          setData(result)
          setError(null)
      }catch(e){
        setError(e.message)
        setData(null)
      }finally{
        setLoading(false)
      }
        
        
    },[url])

   useEffect(()=>{
    fetchData()
   },[fetchData])

  return {data,loading,error} //api res || false ||null 
}

export default UseFetch