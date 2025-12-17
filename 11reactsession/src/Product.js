import UseFetch from "./UseFetch";

function Product() {
     const {data,loading,error}=UseFetch("https://api.escuelajs.co/api/v1/products")
  console.log(data,loading,error)
  
//   loading states and error states
// loading >> true | false
if(loading) return <h2 style={{color:"blue"}}>Loading...</h2>
if(error) return <h2 style={{color:"red"}}>{error}</h2>
    return (
        <>
        
        {/* images
            title
        */}
        <h1>Photos</h1>
        <div className="productList">
        {
            data.map((element,index)=>(
                <div key={index}>
            <div className="card">
               <div className="cardImg">
                <img src={element.images[0]} alt=""/>
            </div> 
            <div className="specs">
                <p>{element.title}</p>
            </div>
                
            </div>
        </div>
            ))
        }
        </div>
        </>
        
    );
}
export default Product