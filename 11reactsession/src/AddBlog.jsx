export const AddBlog = () => {
// const token=localStorage.getItem("token")
const token=sessionStorage.getItem("token")
console.log(token)
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target);
    console.log(formData,"FormData")
    console.log(formData.get("blogtitle")) //name
    console.log(formData.get("blogdesc")) //name
    console.log("blogstatus",formData.get("blogstatus"))
    console.log("blogpriority",formData.get("blogpriority"))
    console.log("multipleselect",formData.getAll("multipleselect"))
    console.log("testcheckbox",formData.getAll("testcheckbox"))

    const formFeilds={
        title:formData.get("blogtitle"),//
        description:formData.get("blogdesc"), //
        status:formData.get("blogstatus"),
        priority:formData.get("blogpriority"),
        // multipleselect:formData.getAll("multipleselect"),
        // testcheckbox:formData.getAll("testcheckbox")
    }
    console.log(formFeilds)
    blogCreate(formFeilds)
  };
 
  const blogCreate=async(formData)=>{
    console.log("Trying to blogCreate...",formData)
      // POST >> URL ,{METHOD:,headers:{contenttype},body} // body >> req.body >> string >>JSON.stringfy()
    // see and view >> no need to store 
    // const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTI1NjY5MWZjYjk3Y2M5NjdmZGUxYzkiLCJpYXQiOjE3NjQ0MDQ0MjIsImV4cCI6MTc2NDQwODAyMn0._ghde-MCrlkgIldacZkUzNRO7d4xoRUkT1ssQ6BwxFE"

      let result=await fetch("http://localhost:8000/task",{
        method:"POST",
        credentials:"include",//send
        headers:{
          "Content-Type":"application/json",
          // "Authorization":`Bearer ${token}`
        },
      
        body:JSON.stringify(formData)
      })
      let newData=await result.json()
      console.log(newData)
      if(newData){
        localStorage.removeItem("myCat")
      }
    // axios
  }
  return (
    <div>
      <h1>Add Blog</h1>
      <form className="App" onSubmit={handleSubmit}>
        <input type="text" name="blogtitle" placeholder="blogtitle" /> <br/><br/>
        <input type="text" name="blogdesc" id="" placeholder="blogdesc" /> <br/> <br/>
        {/* Label +Radio  >> only 1 section */}
        {/* 1 selction >> group(name) >> 1 select */}
        {/* ["Pending","InProgress","Completed"], >> Status */}
        {/* value >> on/off(null) */}
        <input type="radio" name="blogstatus" id="Pending" value="Pending" />
        <label htmlFor="pending">Pending</label>
        
        <input type="radio" name="blogstatus" id="inprogress" value="InProgress"/>
        <label htmlFor="inprogress">InProgress</label>
        
        <input type="radio" name="blogstatus" id="completed" value="Completed"/>
        <label htmlFor="completed">Completed</label>

        <br/><br/>

        {/* Label +option/select >> */}

        <select name="blogpriority" id="">
          <option value="Select the priotity" disabled selected>Select the priority</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
          <option value="low">Low</option>          
        </select>
        <br/><br/>
        
        {/* multple reference  */}
        <select name="multipleselect" id="" multiple>
          <option value="Select the priotity" disabled selected>Select the priority</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
          <option value="low">Low</option>
           <option value="medium1">Medium1</option>
          <option value="high1">High1</option>
          <option value="low1">Low1</option>
        </select>
        <br/><br/>

        {/* checkboxes */}
        <input type="checkbox" name="testcheckbox" value="testone" id="test1" />
        <label htmlFor="test1">Test1</label>

        <input type="checkbox" name="testcheckbox" value="testtwo" id="test2" />
        <label htmlFor="test2">Test2</label>

        <input type="checkbox" name="testcheckbox" value="testthree" id="test3" />
        <label htmlFor="test3">Test3</label>

        <br/><br/>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
