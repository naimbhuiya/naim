const http = require("http")
const fs = require("fs")


const handle = (file , statusCode , req , res)=>{
    fs.readFile(file , (err , data)=>{
        res.writeHead(statusCode)
        res.write(data)
        res.end();
    })
}

const server = http.createServer((req , res )=>{
     if(req.url == "/"){
        handle("page/index.html" , 200 , req , res)
     }else if (req.url == "/contact"){
        handle("page/contact.html" , 201 , req , res)
     }else if (req.url == "/about"){
      handle("page/about.html" , 202 , req , res)
   } else{
        res.end(
            "<h1>404 || not find</h1>"
        )
     }
})



const port = 3000 ;
server.listen(port, (err , data)=>{
   console.log("i am running -------!!")
})
