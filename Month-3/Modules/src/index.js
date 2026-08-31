//common js module import using require
// const {subtract,add}=require("./utils/math_using_commonJs")

// ES module import 
import {add,subtract} from "./utils/math_using_ESModule.js"


const addition=add(9,2)
console.log(addition)
const substraction=subtract(3,2)
console.log(substraction)