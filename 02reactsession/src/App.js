import "./App.css";
import { useState } from "react";
import Firstcode from "./Components/Firstcode";
import Secondcode_Message from "./Components/Secondcode_Message";
import Thirdcode_Message from "./Components/Thirdcode_Message";

function App() {
  const students = [
    {
      nickName: "Yamuna",
      pic: "https://i.pinimg.com/280x280_RS/e4/86/86/e4868681b6e2cc4ce83c3b9a5d010b6c.jpg",
    },

    {
      nickName: "Vindya",
      pic: "https://i.pinimg.com/736x/59/37/5f/59375f2046d3b594d59039e8ffbf485a.jpg",
    },

    {
      nickName: "Sushil",
      pic: "https://themusclemedics.com/wp-content/uploads/2018/04/Circle-Profile-PNG.png",
    },
    {
      nickName: "Bharti",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuPyLBCLuRQ2EMf1Tdz8GRtdsy2KAGUcZgAg&usqp=CAU",
    },
    {
      nickName: "Shivam",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlGf1LsCO_POD_MWK0T40UPrQZfYOjgU0SvQ&usqp=CAU",
    },
  ];
  return (
    <>
      <Firstcode />

      <div className="App">
        {/* 3 ways we can write  */}
          <div className="App">

          {/* {Secondcode_Message()} Not a correct way passing a props */}
          <Secondcode_Message
            nickName="Yamuna"
            pic="https://i.pinimg.com/280x280_RS/e4/86/86/e4868681b6e2cc4ce83c3b9a5d010b6c.jpg"
          ></Secondcode_Message>
          <Secondcode_Message
            nickName="Vindya"
            pic="https://i.pinimg.com/736x/59/37/5f/59375f2046d3b594d59039e8ffbf485a.jpg"
          />
          <Secondcode_Message
            nickName="Sushil"
            pic="https://themusclemedics.com/wp-content/uploads/2018/04/Circle-Profile-PNG.png"
          />
          <Secondcode_Message
            nickName="Bharti"
            pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuPyLBCLuRQ2EMf1Tdz8GRtdsy2KAGUcZgAg&usqp=CAU"
          />
          <Secondcode_Message
            nickName="Shivam"
            pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlGf1LsCO_POD_MWK0T40UPrQZfYOjgU0SvQ&usqp=CAU"
          />
          </div>
          <div className="App">
              {
                students.map((element)=>{
                  return <Thirdcode_Message nickName={element.nickName} pic={element.pic}/>
                })
              }
        </div>
      </div>
    </>
  );
}

export default App;
