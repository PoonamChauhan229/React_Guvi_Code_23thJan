import React from "react";
import { useFormik } from "formik";
import * as yup from 'yup'

const BasicForm = () => {

    const formValidationSchema=yup.object({
        email:yup.string().min(3).required().email(),
        password:yup.string().min(3,"Atleast 3 char").max(8)

    })

    const formik=useFormik({
        //it takes an initial value.
        // we dont use any useState
        initialValues:{
            email:"anusha@gmail.com",
            password:"anusha"
        },
        validationSchema:formValidationSchema,
        onSubmit:(values)=>{
            console.log(values)
        }
        // How we will use in form
    })

  return (
    <>
      {/* <div>        
        <input type="email" name="" id="" />
        <input type="password" name="" id="" />
       <button>Submit</button>
    </div>

      <form>
      
        <input type="email" name="" id="" />
        <input type="password" name="" id="" />
        <button>Submit</button>
      </form> */}

    <form onSubmit={formik.handleSubmit}>
      <input type="email" name="email" id="email" value={formik.values.email}
    //   in this Onchange we dont have any useState to setState so what we will do here?
    // so we will let formik handle the change
    // here name attribute plays an major role here
    //name attribute should be same as the key name in initialState values
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      />
      {formik.errors.email}
      <input type="password" name="password" id="password" value={formik.values.password}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      />
      {/* Display the messages whrn uits touched and moved away */}


      {formik.touched.password && formik.errors.password?formik.errors.password:""}
      <button type="submit">Submit</button>
    {/* Just to see */}
    {JSON.stringify(formik.values)}
    {JSON.stringify(formik.errors)}
    {JSON.stringify(formik.touched)}
   
    </form>

    </>
  );
};

export default BasicForm;
