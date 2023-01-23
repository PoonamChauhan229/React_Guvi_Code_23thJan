import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "Divyashree";
  const time = 30;

  const students = [
    {
      name: "Ehsaan",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP_jBNGDAl_gCziVLX5q8vuci3Z8VmfK8Rrdtct54&s",
    },
    {
      name: "Leroy",
      img: "https://i.pinimg.com/280x280_RS/e4/86/86/e4868681b6e2cc4ce83c3b9a5d010b6c.jpg",
    },
    {
      name: "Pravin",
      img: "https://images.unsplash.com/photo-1628563694622-5a76957fd09c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&w=100&q=70",
    },
  ];
  return (
    <div className="App">
      <h1>Hi {name}</h1>
      <p>Time to complete {time * 4} mins</p>
    {
      students.map((element) => {

    return  <Message name={element.name} img={element.img}/>
})
  }

  {/*  */}
  <Welcome name="Poonam"/>
     
    </div>
  );
}

// object destructing
function Message({img,name}) {
  // const name="Divyashree"
  // console.log(props);
  return (
    <>
      <p>
        <img src={img} alt="" />
      </p>
      <h1>Hi,{name}😍</h1>
    </>
  );
}
// props
function Welcome(props){
  return(
    <div>
      <h1>HI, {props.name}</h1>      
    </div>
  )
}

export default App;
