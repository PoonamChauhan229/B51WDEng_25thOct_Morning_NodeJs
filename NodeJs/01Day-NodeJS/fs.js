

// Importing the Core NODE MODULE
const fs=require('fs')

fs.writeFile("01notes.txt","This is our first file", (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
})


console.log("Welcome to Hello World, Node Modules")

fs.writeFileSync("02notes.txt","This is our second file")


console.log("Welcome to Hello World, Node Modules 2")

// Challenge:
// appendFile
// append to the 01notes.txt/ 02notes.txt
fs.appendFile('01notes.txt',"This is our brand new file", (err) => {
    if (err) throw err;
    console.log('The file has been appended!')
})

fs.unlink('test_del.js',(err)=>{
    if(err) {console.log(err)}
    else{
    console.log("File has been unlinked")
    }
})

fs.readFile('01notes.txt','utf-8',(err,data)=>{
    if(err) throw err;
    console.log(data)
})

// create file usinf a for loop
let textContent =" Hey Create a file using For Loop"
for(var i=0;i<=5;i++){
    fs.writeFile(`text${i}.txt`,textContent,(err)=>console.log(err))
}








