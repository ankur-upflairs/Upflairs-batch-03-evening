const http=require('node:http')
const fs=require('node:fs')

const server=http.createServer((req,res)=>{
    // console.log(req.url)
    if(req.url=='/product'){
        //serving html files
        let htmlFile=fs.readFileSync('index.html','utf-8')
        res.setHeader('Content-Type','text/html')
        res.writeHead(200)
        res.end(htmlFile)
        // res.end('this is product page')
    }
    else if(req.url=='/services'){
        let obj={name:'sunil'}
        let obj_JSON=JSON.stringify(obj)
        res.setHeader('Content-Type','application/json')
        res.end(obj_JSON)
        // res.end('this is service page')
    }
    else if(req.url=='/contact'){
        res.setHeader('Content-Type','text/html')
        res.writeHead(200)
        res.end('<h1>contact page</h1>')
    }
    // res.write('<h1>hello world!</h1>')
    // res.end()
})
//localhost => http://127.0.0.1
server.listen(3000,'localhost',()=>console.log('server started at port 3000'))



