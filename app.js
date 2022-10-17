let http = require('http');
let url = require('url');
let qs = require('querystring');
require('dotenv').config();

let responder =(req,res,param)=>{
    res.writeHead(200, {"Content-Type":"text/html"});
    res.end(param);
} 

let routes = {
    "GET":{
        "/":(req,res)=>{
            responder(req,res,`<h1>Get Method => /route</h1>`)
                
       },
        "/home":(req,res)=>{
            responder(req,res, `<h1>Get Method => /home route with params of ${params.query.name} and ${params.query.age}</h1>`)  } 

    },
    "POST":{
        "/":(req,res) =>{
           responder(req,res, `<h1>Post Method => /route</h1>`)
         },
        "/api/login":(req,res)=>{
            let body='';
            req.on('data', data =>{
                body+=data;
            });
            req.on('end',()=>{
                let query = qs.parse(body);
                console.log(query);
                res.end();
            })
    },
},
"NA": (req,res)=>{
   responder(req,res, `<h1>No Page for that route!</h1>`)
}

}

let start = (req,res)=>{
    let reqMethod = req.method;
     let params = url.parse(req.url, true);
    // let name = params.query.name;
    // let age = params.query.age;
    //console.log("Name", name, "Age", age);
    let  resolveRoute=routes[reqMethod][params.pathname];
    if(resolveRoute != null && resolveRoute != undefined){
        resolveRoute(req,res,params);
    }else{
        routes["NA"](req,res);
    }
}
let server = http.createServer(start);
server.listen(3000, ()=>{
    console.log("Server is running!");
});