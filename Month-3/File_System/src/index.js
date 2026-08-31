import fs from "fs"

// //error first callback
// fs.readFile("./input.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log(err);
//         return 
//     }
//     console.log(data)
    
// })
// console.log("Reading completed")

// fs.writeFile("./input.txt","naeem is asking some questions",(err)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log("Writing completed");
// })
//Append 
// fs.appendFile("./input.txt"," This is appended content to this file",(err)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log("Appended to input.txt");
// })



// //append only if read successfull
// fs.readFile("./input.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log(err);
//         return 
//     }
//     console.log(data);
//     fs.appendFile("./input.txt","Appending the content",(err)=>{
//         if(err) {
//             console.log(err);
//             return
//         }
//         console.log("Append Sucessfull");
//     })
    
// })


//handling file synchronously
try {
    const data = fs.readFileSync("./input.txt", "utf-8");

    console.log(data);

    fs.writeFileSync("./Sync.txt", "Hello Sync");

    console.log("Writing completed");
} catch (err) {
    console.log(err);
}

console.log("Program finished");