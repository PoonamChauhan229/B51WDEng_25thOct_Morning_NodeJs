const path=require('path')

console.log(1,__dirname)// logs current directory
console.log(2,__filename)//logs current file

console.log(3,path.join("1","2"))

console.log(4,path.join(__dirname,"..")) // cd ..
console.log(5,path.join(__dirname,'../..')) // cd .. cd ..

console.log(6,path.join(__dirname,'/utilis'))
