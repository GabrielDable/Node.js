

const {createReadStream} = require("fs");

const http = require("http");

const server = http.createServer((req, resp) =>  {

    console.log(req.headers)


    if (req.url === "/contact") {

    let Filestream = createReadStream("/Users/user/Desktop/JS/Move/Advanced/Node.js/BigData.txt","utf8");

        Filestream.on("open", (chuncks) => {

            Filestream.pipe(resp)
         
        })

        Filestream.on("error", (err) => {
            resp.write(err)
        })
    } else {
    resp.writeHead(200, {"content-type": "text-html"}) // Sends a Response Header to the Client    
    resp.write("hello");
    resp.end()

    }
})


server.listen(8000);


