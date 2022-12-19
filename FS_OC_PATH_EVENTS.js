/* Chapter 10 - Modules Flanagan

Modular porgramming are suitable for large programms to be assembled using modules of code from disparte authors and sources.
It allows all the code to tun correctly even in presence of posteriously added modules to the programm.
Modularity allows encapsulation and hiding PRIVATE IMPLEMENTATIO DETAILS.

Each file in node.js is treated as a MODULE.

Until recently, JS had no built-in modulatiry.

Therefore, modularities ere largely provided with the deploymente of closures, objects and classes.

CLOSURE-BASED MODULARITY was made with code-bundling tools, using the function require ()

require() based modules are fundamenal in node.js

The keywords Export and import were implemented only recently. 

There are, therefore, three methodologies to work with modues: classes, objects and clodures ; require() in node.js and ES6 modules using export, import and import()



 - GeeksforGeeks

require() is global fuction. Whe it is invoked there is a sequence of triggered steps.

Resolving and Loading - Node.js resolvers if the module is third-part module , developer module, or a built-in core module.
Wrapping - The code of the module is wrapped in a special function to be executed. Therefore, every imported module is entirely executed.
Execution - Execute the code of the imported module
return exports - values stores in module.exports as objects, or properties of export.properties are returned. 
chaching - at the first time a module is loaded, they are cached. Therefore, the execution of the wrapped code is done only once.



jump to 10.2


    10.2 Modules in Node

    Differently of the browsers that works and slow networks, Node.js gains no benefits in bundling a Node program into a single javascript file.

    Each MODULe in Node.js are independent and have private namespaces. Constant, Variables, Functions and Classes defined in one file are PRIVARE
    UNLESS YOU EXPORT THEM AND THE VALUES EXPORTED FROM ONE MODULE ARE ONLY VISIBLE IN ANOTHER MODULE IF THAT MODULE EXPLICTLY IMPORTS THEM.


    In Node.js, the require() function import modules. A module, although, export it public API setting properties of the Exports Object or by replacing module.export object entirely.


    10.2.1 Node Exports.
    
    Each file in Node.js has an object known as exports. If you want to export a value from it, you can assign to them as properties fo the export object. */

    exports.property = //   a unique functions / classes / closures / objects. 

    module.exports.property = // an object containing exportable obkects {functions / classes} etc

    /* One can pass all the functions, classes and objects to a single object and export it. 
    It is rather common to define the exports object at the end of the module
    */

    module.exports = {/* function, classes, objects*/}

        // Multiple Exportation: When a module export various objects, rathern than one; 

    /*

    10.2.2 Node Imports

    Node imports another module by calling the require()

    The argument is the name of the module to be imported.

    Two ways of importing:

        If is a a library or a Module you instaled, use the unqualified name of the module that will atuomatically turn into a file path. */

         const fs = require("fs");

         const http = require("http")

        // If it is a code of your own, the module name should be the path to the file that contains that code relative to the current modules file. 

        const o = require("/. Advanced/Data Strucutes/Hash.js") // Importing the class HashTable from another module.

//      From "/. Advanced/Data Strucutes/Hash.js:


            exports.hash = class Hash {/* implementation omitted*/}

    
    /*


    
/*      10.2.2.1 Sample of Exporting / Importing a Module with several objects.

            This module will be the importation module.
            
            We will import methods from the module Module.exports.js 
            
            
                    The export object from the imported module is an object containg a class, a instance of this class and a function
                    
                                from line 35 - "/Users/user/Desktop/JS/Move/Advanced/Modules.export.js") 
                                exports.po = {Opus, o, p} 
                                
                                
                (a) Importing the entire module export object               
                                */
                        const imp = require("../Modules.export.js")


                        imp.o.loger // 50

                        let obj = new imp.Opus(5) // Created an instance of the class

                        imp.p() // invoked the function

        /*

                (b) Desestructuring the module.export properties. */

                        const {o} = require("../Modules.export.js") // Desesctructuring property value of an object into a local variable

                        const {Opus} = require("../Modules.export.js") // Desestructuring a property value of a class object into the local vairable

                        const {p} = require("../Modules.export.js") 


    
        /*      CLOSURES ACROSS MODULES: whichever the option, if you invoke a method from a object generated from the imported module, or in this file,
                and the original class is in a closure, all the inherited methods bound to the closure will have persistent lexical scope.

                The Opus.prototype.add is inherited for both O.object from the imported file and also for a new instance created in this module. */

                let opus2 = new Opus(5)

                // Lets invoke the Opus.prototype.add both with opus2 and o and figure out the the variable b from Module.exports.js is updated.

                opus2.adde(); o.add(); // desestructured objects.
                
                imp.o.add() //  non desestructured methods.

                // Lets invoke a method to console.log x value whose original value is 50

                opus2.loger() // returns 53. Therefore Opus.prototype.add is a closure with variable x declared originally in module Module.exports.js 
                

/*



- EventEmitter 


EventEmitter is in-built class of object and cab required through the "events" module
Every object that emit events are an instance of this class.
Event object also defines the listener function for the specific event.
Evetns are handfull for occurrences requested from clients to te server (such as http request but also FS functions.)

        */

        const EventEmitter = require("events")   // The Const inherit the EventEmitter from events class  

        const myEmitter = new EventEmitter(); // Define a instance of EventEmitter

        let callback = () => console.log("An Event was emitted")

        myEmitter.on("event", callback); // Register the listener, the nameEvent (First Argument), and callback invoked once the event was emmitted

        myEmitter.emit("event") // It is a trigger. Emits the event thar the listerner was registered to await,  triggering calling the callback function registered within the listener 

        console.log(myEmitter);


        /* The listener only receives events emitted by the same instance, althoug the same object EventEmitter can subscribe several listener for the same emission.

*/
        // Create Multiple Listeners
    
        myEmitter.on("event", () => console.log("An Second Listener was callbacked"));
        myEmitter.on("event", () => console.log("An Third Listener was callbacked"));


        /* Closing and Once Event Listening Event. */

        myEmitter.removeListener("event", callback) // The First argument is the event name and the second is the listener callback. 

        /* Is important to highlt the all listeners ar in array withtin EventEmitter Instance. You registered severalcallbacks for the same event, the removeListener will
        remove only one listener for eachinvokation. 

       Every time a listener is registered, the object EventEmitter emits an event named newListener, and also emits removeListener when a event was closed.

       The EventEmitt Object. */

                EventEmitter {
                        _events: [Object: null prototype] {
                        emit1: [Function: callback1],
                        emit2: [Function: callback2]
                        },
                        _eventsCount: 2,
                        _maxListeners: undefined,
                        [Symbol(kCapture)]: false
                }


/* 

         Every time a listener is registered, the object EventEmitter emits an event named newListener, and also emits removeListener when a event was closed.



*/        

                const EventEmitter = require("events");

                let event = new EventEmitter()

                let callback1 = function(){}
                let callback2 = function(){}


                event.on("newListener", function(eventname, listener,) {
                        console.log(eventname,listener)
                        })


                event.on("removeListener", function(eventname, listener,) {
                        console.log(eventname,listener)
                        })



                event.on("emit1", callback1)
                event.addListener("event2", callback2)
                event.removeListener("emit1", callback1)


/*



        - Process Module
        Process is the primitive allocation of system resources.
        The execution of program is a process.


        It is an instance of EventEmitter Class
        It is widely used to manipulated the EventEmitter.
        Process, as an instance of EventEmitter, emits specific event.   
        It contains everal properties about he environment thar node is running.

                The Process Streams:

                They connect i/o of Node.js with its environment.
                stdout -  Standard Output Stream of a Program
                stdin - Standar Input Stream. The imput for the program. 
                stderr - Standard Error Stream.
        
        Streams are realeased in the runtime evrironment and we can pipe two programs in the same terminal

        Command-Line: node teste1.js | node teste.js 

        teste.js */

        process.stdin.on("data", data => process.stdout.write(data)) /* Sets a listener for each input stream within the process. Data is the EventEmitter Event that signs that a 

        new input stream is availabe inside the process. Process stdout.write outputs data. 


        teste1.js */ 

        process.stdout.write("eco") // The stream output of the programm

        /* If you pipe the two programms execution node teste1.js | node teste.js, The terminal will logo Eco.
        Pipe two programms make them to be executed in the same process, therefore, they arep piped and there is data streaming amongs them.


/*





/*


        - STREAMS MODULE

        Streams are instances of EventEmitter Classes, using its API to emit and listen to events.
        Streams emits events that can be used to read and write data.
        Stream are an abstraction of I/O Events in Node.js (Https Request, Files, stdin and stdnout )


                        Concepts.

                        WRITABLE STREAMS

                                Writable Streams are an abstraction for a destination to which data is written by chuncks

                                Writable Streams are an abstraction to the destiny of chuncks of data to be written

                                Such a request exposes methos write and end to write data ont the stream */

                                Stream.prototype.write()
                                Stream.prototype.end()

                                        // Examples 
                                        Res.write()
                                        Res.end()
                                        Req.write()
                                        Req.end() 


                
                                // Static Functions 

                                Fs.createWriteStream() -  /* The argument is path to define a destiny to output stream data.
                                Streams which data can be written. (Https Request, Response, FS write Streams, TCP Sockets) 

                        READABLE STREAMS

                        Readble STREAMS are an abstraction for a soucer from which data is consumed.
                        Readble Streams operates in two modes: FOLLOWING AND PAUSED. */


                        Fs.createReadStream() - // The argument is the source whereby data will be streamed

/*                              FOLLOWING: Data is read in the underlying system automatically and expose the data using EventEmitter Interface.
                                PAUSE: The Stream.Prototype.read() method must be called explicitly to read chuncks of data to the STREAM.

                                One can switch the paused mode to the following mode using the current ways:

                                        Adding "data" to the event handler - */
                                        
                                        EventEmitter("data", callback)

                        //              Calling 

                                        Stream.prototype.resume()


                       //               Calling  to send the data to the writable Stream (ex. resp)
                       
                                        Stream.prototype.pipe() // The argument is the Writable Stream.


/*                      Styles for Readble Streams

                        There are many styles to consume stream data. Developers must choose one of them. */

                        Stream.on("data", callback);
                        Stream.on("readable", callback);
                        pipe();


                        https://www.freecodecamp.org/news/node-js-streams-everything-you-need-to-know-c9141306be93/




*/
                        const {createReadStream} = require("fs") // Read Stream is a Static Function of FS Prototype

                        const Stream = createReadStream("BigData.txt"); // It returns a Evenemitter that can listen to the chuncks of read data.

                        Stream.on("data", (chuncks) => console.log(chuncks)); // Return a Buffer.

/*
        

Sending Data to a Cliete from  Readable Stream as an response */
        
        const {createReadStream} = require("fs");

        const http = require("http");

        const server = http.createServer((req, resp) =>  {

        if (req.url === "/contact") {

        let Filestream = createReadStream("/Users/user/Desktop/JS/Move/Advanced/Node.js/BigData.txt","utf8"); // Creates a EventEmitter that will listen to the chuncks of data. 

                Filestream.on("open", (chuncks) => {

                Filestream.pipe(resp)
                })

                Filestream.on("error", (err) => {
                resp.write(err)
                })
        } else {

        resp.write("hello");
        resp.end()
        }

        })

        server.listen(8000)



/*


 - OS Module - https://www.youtube.com/watch?v=Oe421EPjeBE

*/


                const os = require("os")

                os.userInfo() // { uid: 502,  gid: 20, username: 'user',  homedir: '/Users/user',  shell: '/bin/zsh'}
                os.uptime() // return the system uptime in seconds.
                os.type() // Darwin
                os.version() // Darwin Kernel Version 21.1.0: Wed Oct 13 17:33:23 PDT 2021; root:xnu-8019.41.5~1/RELEASE_X86_64
                os.release()// 21.1.0

                    
/*


- Path Module 


Excelent for inspecting how the current terminal platform manages paths

*/

                const path = require("path")
                path.sep // / - Serpator used in Kernel
                path.join("/Basics", "Fundamentals.js", "Asynchrnous.js") // /Basics/Fundamentals.js/Asynchrnous.js - Always return a normalizad path
                path.basename(path.join("/Basics", "Fundamentals.js", "Asynchrnous.js")) // Returns the leaf of a path
                __dirname // /Users/user/Desktop/JS/Move/Advanced/Node.js - Global Property containing the absolute path of the file.
                path.resolve("Modules.js" ) // Resolves the absolute path of a given segment, file and folter, returnin the absolute path of it /Users/user/Desktop/JS/Move/Advanced/Node.js/Fundamental.js/Asynchronous.js


/*


- Fs Module */


                const {writeSync, readFile} = require("fs")

                fs.writeFile(/* file, data, {encoding: "uf8", mode: "666", flag: }, callbackfunction (err, resp)*/)

                fs.readFile(/* path, encoding, callback(err, data)*/)

/*                

                Data - String or Buffer
                File - Path and File
                Option Object - If it is a string it refers to encoding property.
                        encoding - utf8 s default
                        flag - w is default 
                        mode - 666 is default




                Flag Parameters:

                Flag	Description
                r	Open file for reading. An exception occurs if the file does not exist.
                r+	Open file for reading and writing. An exception occurs if the file does not exist.
                rs	Open file for reading in synchronous mode.
                rs+	Open file for reading and writing, asking the OS to open it synchronously. See notes for 'rs' about using this with caution.
                w	Open file for writing. The file is created (if it does not exist) or truncated (if it exists).
                wx	Like 'w' but fails if the path exists.
                w+	Open file for reading and writing. The file is created (if it does not exist) or truncated (if it exists).
                wx+	Like 'w+' but fails if path exists.
                a	Open file for appending. The file is created if it does not exist.
                ax	Like 'a' but fails if the path exists.
                a+	Open file for reading and appending. The file is created if it does not exist.
                ax+	Like 'a+' but fails if the the path exist

                
                Example I 
                */

                const {writeFile} = require("fs");

                let data = function() { console.log(i)}

                writeFile("./tester.js", data.toString(), "utf8", (err) => {console.log(err)}) // Wrote a js script using a stringfied code. 

                // Example II 

                let data = {a:5}

                data = JSON.stringify(data);

                console.log(data)

                writeFile("./tester.json", data , "utf8", (err) => {console.log(err)}).


                // Example II - Promises

                       
                let fs = require("fs");
                const { templateSettings } = require("lodash");


                const {writeFile, readFile} = fs.promises

                readFile("./tester.json", "utf8", (err,data) => {
                        if(err) {return}
                        return data
                    }).then(console.log(data)) // {"a":5}


/* 

- HTTPS Module


