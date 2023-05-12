

/* Modules


JS, NPM, TTPS, HTTP, OS, PATHS, FS



1 HTTP Module:

Can lauch a server or send requests to another server.

1.2 HTTPS 

Can launch an server with enconded data.



        1.2.1 HTTP Introduction - Ethan Brown. 

        HTTP protocol defines a collection of request methods ( http verbs) that client uses to communicate with a server. GET and POST are the common methods.

        When a cliente type a URL into a browser or click a link, the browser issues an HTTP GET request to the server.

        What is passed by the HTTP to the server is the URL path and querystring. The querystring is defined in URL section above.

        The combination of method, path, querystring is what your app uses to determinate how to respond.

        Th server can repons with HTML documents and several other types, such as images, css scripts and files.

        POST request are usually reserved for sending information back to the server.

        Every time we are in web site, our browser send hidden information to the server in the form o request HEADER ! 



            - Methods

            Get : retrive (fetch) data from the server, such as a HTLM File, CSS, JSON or XML Data.
            POST Submit data to the server, such as a contact form.
            PUT: Update Date
            DELETE: Delete data from the server


            - THe HTTP Parts - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers


                Request or Response Messages - What is user is sending.

                    Request: Method/URL/Http/1.1
                                Headers
                                Body (Optional)

                    Response: HTTP/1.1 STATUS CODE STATUs TEXT
                              Header
                              Body (Optional)  




                Common Headers Fields (Metadata)
                        User Agent
                        Request ULR
                        Request Method: GET or POST or PUT
                        Status Code
                        Remote Address 
                        Referrer Policy 

                ------- Reponse (Metadata)
                        Server
                        Set Cookies
                        Content Type (HTLM, JSON, CSS, JPEG)
                        Content Length (Bytes)
                        Date 

                ------- Request (Metadata)
                        cookies: previsouly sent by the server
                        accept: codes and languanges the client is able to understand.
                        content type: HTLM ...
                        Content Length
                        Authorization: Tolkien from the client to acess the documents of a response.
                        User-Agent: A string with OS, Browser.
                        Referer: the site.


            OBS: IN CHROME BROWSER ONE CAN ONPEN DEVELOPERS TOOLS AN CHECK OUT IN NETWORK TAB ALL THE REQUEST MADE FROM OUR BROWSER TO THE SERVER.
            for each document requested we can see the HEADERS (GENERAL, REQUEST, RESPONSE) ; PREVIEW, REPONSE, INITIATOR AND TIMING.

            In the HEADERS, we find out the the object and metadata of the http request, as well the response metadata from the server.

            https://www.postman.com/

    


        HTTP is a client-side protocol to fetch resousrce such as HTML documents from the server therefore a http request is made by a client-browser.

        The request made form the browser fetches sub.documents to build-up a complete wed-document made up of:

                Sub-documents 

                    css for layout
                    png for image
                    hmtl for pages
                    mp4 for videos
                    jpg for adds.
                    js for scripts


            To make the request, the client uses the URL (Uniform Resource Location)
            The URL locates a resource that exist on internet.
            URL are mostly used when a client make a http request to a Server. 

            Between the client request and the server resposnse, there are several entities named proxies.

            To display a web-page:

                Client makes a http resquet - server responds with a html document - Cliet fetches the html document - The html document is parsed
                and therefore new solicitations are made to execute js scripts, css layout information and subfiles such jpgs and mp4 -
                The web browser combines the different documents and requested resources to display the wbe document.
                The web page is also a hyprtext document. It means it can have links (butons) to fetch another pages. The browser interprets
                the directions as new https requests


            Https is a necrypted version of HTTP
                
            Proxies: 
                caching
                filtering
                load balacing - Allow different servers to handle multiple request.
                authentication - to control access to different controls.
                logging - storage of historical information 


                - URL

                Is a string the locates a web document.

                The componentes for a URL and its syntax


                    scheme: the protocol to access the content from the internet (https out https)
                    host: the name indentifier of the host the holds the resource.
                    path: identifies the specific content the client wants to access. 
                    fragment_identifier: followed by a hash #. It points the web browser to a function to the intem retrieved. its commonly used to indicate sunsection in a page.
                
                    example: notion kanban boards are subsections indicated with the fragment identifier of the web documnt url. 


                    scheme://host:port/path?query

                    https://www.ibm.com/docs/en/cics-ts/5.3?topic=concepts-components-url#dfhtl_uricomp


                    path: /docs/en/cics-ts/5.3
                    query: topic=concepts-components-url
                    host: IBM
                    protocol: http. 
                    fragment_indentifier: #dfhtl_uricomp




        
        - Udemy Course . Cf Ethan Brown p.50

        1.3 Launching a server 
        
        The core philosophy behind ode is the event-drive programming.
        
        
        */


        const http = require("http");

        

        const server = http.createServer((req, resp) => { // req: IncomingMessage, metadata provided by the browser. and resp: is the outcoming message and data sent to the browser. 
            console.log(req)
            console.log(req.url, req.method, req.headers)
        })  
        
        /*http.prototype.createServer has callback function as parameter dubbed  as requestListener(). This function must have two arguments, 
        the first is the instante request header object and the second the response header object. The method, thus, return
        a server object. This static method executes the callback function every time the server receices a HTTP request. 
        How the application responds to the navigation event is known as routing.

        Req is an object with dozens of properties. The most commonly used for programmers are the metada from the headers, method and URL properties.


*/

        server.listen(/* portnumber: number, hostnmae: string, backlog: number, listeningListener?: () => void): http.server */)

        /* HTTTP.server.listen is method that returns a callback function that mantain the server running for new connections.
        This function makes the implemented server to listen on a specif port of the server machine). It creates a listener in a port. 
        Every time a request comes from the browser or another server, the line code inside the callbackfunction of http.createServer is executed. 
        Implictly, the callback function of http.createServer is invoked after event.listen catches a request. Therefore, there is a asynchronous computation.


        Routing 

        Refers to the mechanism for serving the client with the content it has asked. The content is specified with the URL (path * querystring)
        Therefore a input button in HTML document might update the client URL with a new path and query string, and a new request with a proper method, routing the client.
        
        */



/*

        1.3.1 The Event Loop

        The aforementioned code launched a server. This programm was not haulted because an EVENT LOOP was created by a LISTENING EVENT.
        The event loop is fundamental as node.js is single threaded. 
        The event loop is a feature of node.js, abstracted as a loop of event handlings that the compiler provides to handle synchrnous and asynchrnous programming as weel
        I/O calls of the same thread.
        The event loops makes the code avaiable, but only runnable when there is a proper request from the browser or from another server.
        One can unregister the event lop with a method inherited from the Process.Prototype, process.exit().


            1.3.1.1 The Event Loop Lifecycle
*/
        const server = http.createServer((req, resp) => { // req: IncomingMessage.  and resp: is the outcoming message and data sent to the browser.
            console.log(req)
            process.exit() // It will end the event lop provided by the lister register with server.listen()
        })  
/*

        1.3.2 The Response */


            const server = http.createServer((req, resp) => {
                console.log(req.url, req.headers, req.method)
                resp.setHeader("Contet-Type", "text/html") // Sets the header of the response
                resp.write("<html>") // Writes the data in html document to the be built-up in the browser.
                resp.end() // ends the response. 
                process.exit()
            })  

            /*  With specific modules, rather than writing te HTML, there is a function o fetch an HTML itself and send the response with the netire document metadata.


            1.3.3 Routing the Response */


             const server = http.createServer((req, resp) => {

                console.log(req.url, req.headers, req.method)

                let url = req.url
                let method = req.method

                    if (url === '/') {// The url has no inner path
                        resp.write('<html>');
                        resp.write('<head><title>Enter Message</title><head>');
                        resp.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'); // A form was post and the url is /message
                        resp.write('</html>');
                        return resp.end(); // Must return to stop the execution of the callback function
                      }

                      if (url === '/message' && method === 'POST') { // In the privous statement, line 230 routed the browser to url /message and sent a new request with POST METHOD
                        fs.writeFileSync('message.txt', 'DUMMY');
                        resp.statusCode = 302;
                        resp.setHeader('Location', '/');
                        return resp.end();
                      }

                      resp.setHeader('Content-Type', 'text/html'); // If the URL sent is not /message and required method from the resquest is not POST, FIRST PAGE HTML is fetched
                      resp.write('<html>');
                      resp.write('<head><title>My First Page</title><head>');
                      resp.write('<body><h1>Hello from my Node.js Server!</h1></body>');
                      resp.write('</html>');
                      resp.end();
                    });
                    
                    server.listen(3000);

                

                /* 1.3.4 Buffers and Streams

                The metadata from the request is parsed entirely by node.js, in a STREAM
                This could take a lot of time. One can grasp the specific needed fiel from the response body with a BUFFER. */


                const http = require('http');
                const fs = require('fs');

                const server = http.createServer((req, res) => { // Register a callback listener to an eventemitter. Http and Server is Eventmitter 
                const url = req.url;
                const method = req.method;

                if (url === '/') {
                    res.write('<html>');
                    res.write('<head><title>Enter Message</title><head>');
                    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
                    res.write('</html>');
                    return res.end();
                }
                if (url === '/message' && method === 'POST') {
                    const body = [];
                    req.on('data', (chunk) => { // A listening function with a callback. The argument of the callbacj is each value of the input, that will be interated in the functional scope
                    console.log(chunk);
                    body.push(chunk);
                    });
                    req.on('end', () => {  // Once the interation is finished, req.on with end argument ends the call back
                    const parsedBody = Buffer.concat(body).toString(); // Buffer is a global object, actually a subclass of Uint8Array. Buffer receveis the concateneted body values and transformed in a string 
                    const message = parsedBody.split('=')[1]; // message = "body", acessing the first index
                    fs.writeFileSync('message.txt', message); // writes a text file with the message. This method differently of fs.prototype.writeFile blocks the conde execution untill the file was written.
                    });
                    res.statusCode = 302;
                    res.setHeader('Location', '/');
                    return res.end();
                }
                res.setHeader('Content-Type', 'text/html');
                res.write('<html>');
                res.write('<head><title>My First Page</title><head>');
                res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
                res.write('</html>'); // Informe the response data is done.
                res.end();
                });

                server.listen(3000) // A listening port with Number 3000. It is a EventEmitter with a listener function routing a port

/*              Ports and Sockets.


                PORT - It is a number to indetify a connection endpoint and direct data to specific service or application. 
                At software level the port identify a specific process or aplication. 
                A port is indetified by 16 bit-number, a combination fo adress and transport protocol.


                INTERNET SOCKET - It is a file descriptor that associates TRANSPORT PROTOCOL, IP ADDRESS and PORT NUMBER.
                They are used to send and receive messages via network.

                The OS transmit outgoing data from applications to the network. 
                The OS foward network packts to the proper service by matching IP address and port number with a web scoket.

                Applications uses well known port numbers to receive request from clients via network and directing this request to specif process. 
                This process of handlig network request by port-numbers are known as listeners. It is a listening port 




            FS Module 

       fs.writeFileSync('message.txt', message, callback function to be executed)

    


            -  NPM and Third-Part Packages

            It is ubiquitous node package for NODES package and dependencies management.

            syntax

                npm install -g nodemon

                    The -g flag tells npm to instal the package globally, it means to the entire system

                npm init

                    Initiates a uility to create a package.json file. */

                    {
                        "name": "udemy",
                        "version": "1.0.0",
                        "description": "Script to Start the Program",
                        "main": "Path.js",
                        "scripts": {
                            "test": "echo \"Error: no test specified\" && exit 1",
                            "start": "node server.js"
                        },
                        "author": "Gabriel Dias",
                        "license": "ISC"
                    }
                    
                /* A package.json is created in NODE.js/Server Path. 
                The key scripts have reserved words such as starts and test.
                The scrip with the key starts allow us to execute a command or script using the console.
                This is resourcefull, onde a project in node can have dozens of files and you can reserve the propr module that initiate the program there
                The syntax to start the programm is 

                npm start // It will execute node server.js through the Terminal

                Start is reserved word. If we create new keys for script nested object, the syntax is different.

                npm run SCRIPT_NAME

                DEPENDECIES are installed third-part packages.
                NPM access packages from its own cloud repository.

                - PACKAGES FOR DEVELOPMENT AND PACKAGES FOR RUNNING APLICATIONS

                Several packages only provide value during development time. When the application is deployed, they are not used anymore.
                Thats the case of nomemon, for example. It is a facility only for development. 
                Thats the difference between production dependency and development dependency

                Syntax 

                npm install nodemon --save--dev (Development dependecy for working code)
                npm install nodemon -g (Install globaly and used every where - Rare)
                sudo npm install nodemon -g (Mac - Rare)
                npm install nodemon -- save (Production Dependency)
                npm install nodemon (Local dependecy)
               

                One we run the instalation promtp, a folder named node-modules was created in the directory of the module, containing nodemon scripts and other 34 packages that nodemon is dependent.
                We can delete this folder, and just reinstanll all them qhen needed using npm install again because the dependencies are register in package.json
                npm install execute the instalation of all dependencies listed in package.json 

                Global dependencies can be run directly from the terminal
                Dev and Production can only be run through npm scripts.

                added 33 packages, and audited 34 packages in 2s ( Console)

                If you want to run a package only instanlled localy, you can not execute it derecty from the terminal line (nodemon server.js)
                We can do that with npm because it is globally installed.

                How to handle the initialization of local packages in specific modules

                The created package with npm init, we use the start key word writting the script to run nodemon in a specif module and type npm start on the console */

                    {
                        "name": "udemy",
                        "version": "1.0.0",
                        "description": "Script to Start the Program",
                        "main": "Path.js",
                        "scripts": {
                            "test": "echo \"Error: no test specified\" && exit 1",
                            "start": "nodemon server.js"
                        },
                        "author": "Gabriel Dias",
                        "license": "ISC"
                    }

        /* Terminal 

        > udemy@1.0.0 start

        > nodemon server.js

        [nodemon] 2.0.19
        [nodemon] to restart at any time, enter `rs`
        [nodemon] watching path(s): *.*
        [nodemon] watching extensions: js,mjs,json
        [nodemon] starting `node server.js`


        NPM SCRIPTS.

        The SCRIPT property of package.json, supports built-in scripts as well arbitrary scripts 
        They can be run with the syntax npm run script. This is resourcefull o run locally available production packages
        There also short syntax for Pre and Post. 



        Wrapping Up:

        npm can be used to manage node projects and its dependencies
        One can initialize a project with npm init, passing the node aplication.js as an script with start property of package.json
        Another script properties can be defined to be run in NPM shortcut commands.
        Start and Test are reserved keywords for script definition in package.json. 

        the syntax to run a script is r



