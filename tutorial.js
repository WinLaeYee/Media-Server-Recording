/* File name and Directory output

let dir = __dirname;
console.log(dir);

let file = __filename;
console.log(file);

let data = file.split('\\');
console.log(data[data.length-1]);

*/

/* app.js

var help = require('./helper.js');
help("Brighter Myanmar");

*/

/* helper.js

module.exports = function(val){
    console.log("I will be helping you soon! =>" + val);
}

*/

/* Multiple Module export */

/* helper.js

var fonky = function(){
    console.log("I am fronky method");
}

var goofy = function(){
    console.log("I am goofy method");
}

module.exports.fonky = fonky;
module.exports.goofy = goofy;

*/
/* module.exports = {
    fonky:fonky,
    goofy:goofy
}*/

/* app.js

var help = require('./helper');

help.fonky();
help.goofy();

*/

/*var tester = function(){
    console.log("I am from test module");
}

module.exports = tester;*/

/* Event Emitter*/
/*var event = require('events');

var myEmitter = new event.EventEmitter();

myEmitter.on("startW", function(){
    console.log("I am start working");
});

//myEmitter.emit("startW");

let i = 0;

setInterval(function(){
    i++;
    if((i%3)===0)
     myEmitter.emit('startW');
     else
     console.log("Waiting to emit......")
},2000)*/

/* Event Emitter with argument value */

// event emitter => events

//event listen, emit

/*var event = require('events');

var myEmitter = new event.EventEmitter();

myEmitter.on('donow', function(val){
    console.log(`I am start working ${val}`);
});

myEmitter.emit('donow', 'Brighter Myanmar');

*/

/* For In && For Of

let students = ["Mg Mg","Aung Aung","Tun Tun","Su Su"];

// for (let i=0; i<students.length;i++){
//     console.log(students[i]);
// }
// ====> get value of array
for (let i of students){
    console.log(i);
}///////Mg Mg,Aung Aung,Tun Tun,Su Su


// ====> get index of array
for(let i in students){
    console.log(i);
}//////0,1,2,3 => for in ka index number ko output

for(let i in students){
    console.log(students[i]);
}

*/

/* For Each */

/*let ary = ["Mg Mg","Aung Aung","Tun Tun","Su Su","Soe Soe","Moe Moe"];

for (let i =0; i<ary.length; i++){
    let index = i;
    console.log("Staff " + ++index + " is "+ ary[i])
}

ary.forEach(function(data){
    console.log(data);
});

*/

/* Write File */

/*let fs = require ('fs');


let data = "There is no Internet connection pls try checking the network cable, reconnecting to wi-fi running windows network ";


//fs.writeFileSync("text.txt", "Hello Testing file");

fs.writeFileSync("text.txt", data);

*/

/* Read File */

/* let fs = require ('fs');

let data=fs.readFileSync('text.txt', 'utf-8');

console.log(data);

*/

/*
let fs = require('fs');

let data = fs.readFileSync('mine.txt','utf-8');

fs.writeFileSync('text.txt',data);
*/

/* Append file (Add data) */

/*
let fs = require('fs');

fs.appendFileSync('text.txt', "Data add to the text file")
*/

/*let fs = require('fs');

let myReadStr = fs.createReadStream('text.txt','utf-8');
let myWriteStr = fs.createWriteStream('new.txt');

myReadStr.on('data',function(){
   // myWriteStr.write(chunk);
   myReadStr.pipe(myWriteStr);
})
*/

/* Readable String */
/*
let fs = require('fs');

let myReadableStr = fs.createReadStream('text.txt');

myReadableStr.on('data',function(chunk){
    console.log('We got buffer chunk!!!')
    console.log(chunk);
})
*/

/* Writeable Stream */

/*
let fs = require('fs');

let myReadableStr = fs.createReadStream('text.txt','utf-8');
let myWriteStr = fs.createWriteStream('new.txt');

myReadableStr.on('data',function(chunk){
    myWriteStr.write(chunk);
})
*/

/* Creating Server */

/*

let http = require('http');

let port = 3000;

let server = http.createServer(function(req,res){
   res.writeHead(200,{'Content-Type':'text/html'});
    res.end("Hello Biberkolar");
});

server.listen(port,function(){
    console.log("Server is running at Port" + port);
});

*/

/* Piping Readstr to Response */

/*

let http = require('http');

let fs = require('fs');

let myReadStr = fs.createReadStream('text.txt','utf-8');

let server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    myReadStr.pipe(res);
});



server.listen(3000,function(){
    console.log('Server is running at port 3000')
});

*/

/* Servering html file */

/*

let http = require('http');

let fs = require ('fs');

let myReadStr = fs.createReadStream('index.html','utf-8');

let server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    myReadStr.pipe(res);
});




server.listen(3000,function(){
    console.log('Server is running at port 3000!')
});

*/

/* Serving JSON Data *?

/*

let http = require('http');

let server = http.createServer(function(req,res){
    res.writeHead(200, {'content-Type':'application/json'});
    let obj = {
        name:"Mg Mg",
        age:30,
        family:{
            father : "U Mya",
            mother : "Daw Nu"
        }
    }
    res.end(JSON.stringify(obj));
});

server.listen(3000, function(){
    console.log("Server is running")
})

*/

/* Basic Routing */

/*

let http = require('http');

let fs = require('fs');


let server = http.createServer(function(req,res){
    if(req.url === "/" || req.url === "/home" ){
        let myReadStr = fs.createReadStream('index.html');
        res.writeHead(200,{'Content-Type':'text/html'});
        myReadStr.pipe(res);
    }else if(req.url === '/about'){
        let myReadStr = fs.createReadStream('about.html');
        res.writeHead(200,{'Content-Type':'text/html'});
        myReadStr.pipe(res);
    }else if(req.url === '/fbresult'){
        let myReadStr = fs.createReadStream('fbresult.html');
        res.writeHead(200,{'Content-Type':'text/html'});
        myReadStr.pipe(res);
    }else if(req.url === '/api/fb'){
        var obj ={
            name : "Mg Mg",
            age : 30
        }
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(obj));
    }else{
        res.writeHead(200,{'Content-Type':"text/plain"})
        res.end("No result found");
    }
 
});

server.listen(3000, function(){
    console.log("Server is running")
});

*/

/* Nodemon Installation and Usage */

/*
let http = require('http');



let server = http.createServer(function(req,res){
    var obj = {
        name: "Brighter Myanmar",
        group: "72coder",
        establish: 7,
        members: 8,
        build: 2005,
        founder: "Michael",
        test: 10,
        like: 'true'


        
    };
    res.writeHead(200,{'Content-Type':'application/json'});
    res.end(JSON.stringify(obj));
});


server.listen(3000,function(){
    console.log("Server is running!")
});

*/

/* Using Express */

/*

let express = require('express');

let app = express();

app.get('/',function(req,res){
    res.send('Home Page')
});

app.get('/contact',(req,res)=>{
    res.send('Contact Page')
});

app.get('/about',(req,res)=>{
    res.send('About Page')
});

app.listen(3000);

*/

/* Request Method */

/*

let http = require('http');

let routes = {
    "GET":{
        "/":()=>console.log("Method GET and path / "),
        "/home":()=>console.log("Method GET and path /home")

    },
    "POST":{
        "/":() =>console.log("Method POST and path / "),
        "/about":()=>console.log("Method POST and path /about")

    }
}

let start = (req,res)=>{
    let reqMethod = req.method;
    let url = req.url;
    routes[reqMethod][url]();
}

let server = http.createServer(start);
server.listen(3000, ()=>{
    console.log("Server is running at port 3000")
})

*/








