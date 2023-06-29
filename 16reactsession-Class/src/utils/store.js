
// Step1:
// import { configureStore } from "@reduxjs/toolkit";

// const store=configureStore({
     //the store will contain slices.
// })
// export default store;

//Step3:
import cartSlice from "./cartSlice";
import { configureStore } from "@reduxjs/toolkit";

const store=configureStore({
    //the store will contain slices.
    //we have to create the slices.
    // the reducer we will put inside the store
    //the below is reducer not reducers
    
    reducer:{
        // nameofthe slice:SLiceName
            cart:cartSlice
    }
})
export default store;