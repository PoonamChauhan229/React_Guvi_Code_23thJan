import UseFetch from "./UseFetch";

function Product() {
     const {data,loading,error}=UseFetch("https://api.escuelajs.co/api/v1/products")
  console.log(data,loading,error)
  
//   loading states and error states
// loading >> true | false
if(loading) return <h2 style={{color:"blue"}}>Loading...</h2>
if(error) return <h2 style={{color:"red"}}>{error}</h2>
    return (
        // description
        // images
        // title
        <div>
            <div>
                
            </div>
        </div>
    );
}
export default Product