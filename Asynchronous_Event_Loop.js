/* Introduction


- Mozila : The Promise Object : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

Promises objects represents the completition or failure of a asynchronou operation and its resulting value.

Promises are objects that you attach a callback function, instead of passing the callback as function argument. */





function successCallback(result) {
  console.log(`Audio file ready at URL: ${result}`);
}

function failureCallback(error) {
  console.error(`Error generating audio file: ${error}`);
}

createAudioFileAsync(audioSettings).then(successCallback, failureCallback)

/* The guarantees of  callback function.


    Callbacks added with loops will never be run before the completition of current js evento loop.
    It is possible to chain the callback functions with several thens and therefore, setting up a Promise Chain.


A promise chain with arrow functions and then syntax */


getJson()

.then( value => {
    console.log("resolved")})
    
.then (value => {
    console.log("resolved") })

.then(value => { 
    console.log("fulfilled")}) 

.catch(error) {
    console.log(`This was ${error}`)}

/* 

A promise chain with arrow functions and await syntax */


async function foo(data) {

    try {
    const result = await getJSON(data);
    const doSomething = await doing(result);
    const doElse = await doElse(doSomething);

    } catch(error) { 

        console.log(error.stack)

    }

    return doElse
}





// The Nesting Technique:

doSomethingCritical()
  .then((result) =>
    doSomethingOptional(result)
      .then((optionalResult) => doSomethingExtraNice(optionalResult))
      .catch((e) => {}) // Catch statement has acces only of error thrown by the first then function scope, therefore erros thrown from doSomethingoptional, doSomethingExtranice. It can grasp error from doSomething Critical
  ) // Ignore if optional stuff fails; proceed.
  .then(() => moreCriticalStuff())
  .catch((e) => console.error(`Critical failure: ${e.message}`));



  /* The Promise Object Constructor Function


  Syntax */

  new Promise(executor)


  /* the executor is a bult-in function that has two parameters: resolutionFunc and rejectionFunc */

  new Promise(resolutionFunc,rejectionFunc)

/* The Promise is informed by the asynchronous code result bu the callbacks passes as arguments of the constructor. 


Example */



const  ReadFilePromise = (path) => {

    return new Promise((resolve, reject) => { // New Promise Constructor wrappes the expected code to return a promise

        fs.readFile(path , "utf8", (err, data) => {
            if(err) {
                reject(err)
            } else {
                console.log(data)
                resolve(data) // Returns Promise Object containing the read data
            }
        }
    )})
 };

  ReadFilePromise("./data.txt")
    .then((result) => console.log(result))
    .catch((error) => console.error("Failed to read data"));



    /*

- Flanagan: 



Javascript based serves tipically await for request to arrive over the network before doing anything.
Three importan js features frames the asynchrnous character of the languange.
Network Event, I/0 Process and timers are inherently asynchrnous, as node.js off-loads those operations to the Kernel
Threfore asynchrnous code is non-immediate code, differently of the synchronous code which is immediate.
Node.js ALWAYS provides the results of synchronous blocking computing before the non-blocking  asynchronoys code.
Therefore, a timer with an time equal to zero, only it will have its callback executed after the entire synchronous code had been executed. 

    Promises : Objects that represent not yet available results of asynchrinous operations
    Asynchrnous interators and for/wait loop to work with streams of asyncrnous evetns using loops that appear synchronous.




    1. Callbacks
    A function you define and pass as an argument to another function.
    The other function invokes the parameter function, calling it back.


        1.1 Timers

        setTimeout(checkForUpdates, 60000); /7 Check forupdates is callback function called after 60000 milliseconds

        1.2 Callbacks ad Events in Node

        Node.js server is ddeply asynchrnous.
        The default API f Node to read the contents of a file invokes a callback function when the contents of the file have been read. */

          fs.readFile() - /* It takes two parameter callback as its last argument. It reads the file asynchronously and then invokes the callback.
          The callback have two arguments, the first is an hypotetical error, and the second is the file contents theirself */

          fs.readFile("config.json", "utf-8", (err, text) => {
                if (err) {
                    console.warn("Could not read config file:", err);
            } else {
                Object.assign(options, JSON.parse(text));

            }
            // In either case, we can now start running the program
                startProgram(options);
                 })

/*

        2. Promisse
        
        PROMISE : a Promise is an OBJECT that represents the result of an asynchronous operation.” It is important to remember that Promises are not just abstract
        ways registering callbacks to run when some async code finishes—they represent the results of that async code.

        An OBJECT is a promise if there is callback functions passed as arguments of a THEN method appended to the PROMISE OBJECT:
        The ASYNCHRONOUS CODE return the PROMISE OBJECT it self
 

        A promise is an object result of asynchronous computation. 
        Once can only aske the Promise to call a callbackfunction when the value is ready.
        Linear promisse chain are better to read than nested indented lines of callback functions.
        Asyncrnous programming with callback functions breaks exception handling.
        Promises represents the future results of single asynchronous computation.
        Although promises can replcace setTimeout(), setInterval can not be replaced.

                 2.1 Using Promises */

                getJSON(url).then(jsonData => {}); // jsondata is the promise callbacked once the asynchronous computation has ended returning the 

                /* getJSON starts a synchrnous HTTP request, while that request is pending, it returns a promise object.
                The promise object defines then instance method then()
                Once the http arrives, the body of the response is parsed in JSON and passes to the function that we passed to then.
                THEN is a method as CALLBACK REGISTRATION.
                Idiomatically, we should append then directly to the function invocation thar RETURNS THE PROMISE, without the need
                to asing te Promise Object to a variable. 
                It is idiomatic to name asynchronous functions with verbs
                Another advantage of using promise chains rather nestedcalbback functions are the errorhandling.
                If an asynchrnous functions throws an exception, there is no way to propagate this back to the initiator. 
               



    
        2.1 Using Promises 

        Erro Handingl.
        The second argument of a .then method can be a function invoked  if the promised threw an exception.
        If not exception is thrown, the promise receives the value or promised object from the asynchronous computation. The promise for non-execption context is the first argument of .then
        Remebering, when in a synchrnous computation throws an exception, it iwill propagate up the stack until there is a catch cluas to handle. 
        When an asynchronou computation rus, the caller is no longer in the stack. Therefore, it is not possible to thorw the exception to the caller.
        But the then method of the promised object passes the error to the second argument. */


        getJSON("/api/user/profile").then(displayUserProfile,handleProfileError) // getJSON returns a promised object to the promise defined with then method that contains two callback functions as arguments.


        getJSON("/api/user/profile").then(displayUserProfile).catch(handleProfileError) 
        
       /* More idiomatic. If the callback displayUserprofile receives a promise error from getJSON or throw it during execution, the handleprofile will dea with the error despite they were previosuly thrown.


                 2.1.2 Terminology

                 the then is method of a PROMISE Object.
                 The then method has two callback functions as arguments.
                 If the promise was FULFILLED, the first callback is called. Therefore the promise was FULFILLED.
                 If the promise was REJECTED, the first callback is called.
                 If none of the callbacks were called, the promise is PENDING.
                 A promise also can be solved.

        2.2 Chaining Promises

        In older versions of js, XMLHttpRequest object was used to make an HTTP request in JS.
        Now ther is the promise .based FECTH API. 
        The HTTP API is the function fetch()
        The argument of this function is the URL, and returning value is the promise object. */

        fetch("/api/user/profile") // Initiates a HTTP GET request for a URL and return a promise I (body of URL)
            .then(response => {
                return response.json(); // the promised I is passed to the callback function that parses the promise I sa json object and return it ,a promise II. (response.json is a asynchronous code)
            })
            .then(profile => {
                displayUserProfile(profile); // json is the promise II and is passed to the callback function, returning the promise object III.
            });


/*

        2.2.3 Resolving Promises.


        Recapping the last example, actually there is a fourth object involved.
        The return value of the callback I is not the JSON object but a Promise 4 fo that JSON object.
        Th atuhor points out that the task 2 begins invoking the callback function C1 and taks 2 does not end when c1 returns. 
        Therefore, the promise returned by Fecth is resolved but will be only fulfilled if the lastchained callback is executed.

        The then method returns a PROMISE, and after that it executes the callback code returning a value v. Once V is returned P is resolved with the value v. 
        ONCE the promised is resolved with a value that is not itself a PROMISE, the PROMISE is FULFILLED
        OR if the callback returns a value that is not the PROMISE itself, p is resolved but not fulfilled.
        RESOLVING a PROMISE MEANS: the PROMISE was associated or locked onto another PROMISE */


                function c1(response) { // callback 1
                
                    let p4 = response.json();
                    return p4; // returns promise 4
                }
                function c2(profile) { // callback 2
                    displayUserProfile(profile);
                }
                
                let p1 = fetch("/api/user/profile"); // promise 1, task 1
                let p2 = p1.then(c1); // promise 2, task 2
                let p3 = p2.then(c2); // promise 3, task 3


        /* Every time you register a callback function inside a then method, js throws a Promise Object.
        Therefore, there are three promises in our late code, registered for  Fetch(), c1 and c2.
        Throughout the execution, c1 returns a value a new Promise. This promise does not resolve C1, and C1 remains nor fulfilled and becomes associated to C2, whose input is P4.
        C1 will await untill the end of the chain, when the returned value of the callback is the promise itself.
        

        jump ....



        2.4  async and await expressions 

        Those two keywords simplified the use of Pomises and allow us to write promise-based asynchronous code. 
        Those keywords make Promise-based code to hide the Promises, aking it very symple to read.



        2.4.1 Await Expressions


        We dont use await with a variable that holds a Promise, instead, we use it before the INVOKATION of a function that returns a promise. */

        let response = await fetch("/api/user/profile") ; 
        let profile = await response.json()


        /* The asynchronous code does not make your pogramm to block. 


        2.4.2 The async functions

        You can only use await keyword with functions that have been declared with async keyword. 
        What js compiler understand when we use async keyword ? It means that the return value is a promise, even if no promise-based
        code appears in the body of the function.*/

        async function getHighScore() {
            let response = await fetch("/api/user/profile");
            let profile = await response.json();
            await fs.writeFile("/.", "profile", (error) => error) // If there was no await, the function woul return profil.HighScore, with out awaint the Promisified  WriteFile
            return profile.highScore;
        } // The function it self registers a promise, and the code executed inside it register and return another promise from fetch aynchrnous execution.

/*

        One the asynchrnous function was declared, we can use it as callback fuction using the await keyword. */

        displayHighScore(await getHighScore()); // The calling function must be asynchronous too.

/*      If the calling function is nor asynchronous, onde must code in this way */


        getHighScore().then(displayHighScore).catch(console.error) /*


        Implementation Details 
        Literal Syntax for an asynchrnous function

        */

        function f(x) {
            return new Promise(function(resolve, reject) {
                try {
                    resolve((function(x) { /* body */ })(x));
                }
                catch(e) {
                    reject(e);
                }
            });
        }


/* the away keyword in terms of syntax braks the the function body into separte synchronous chunks.



       2.5 The for/await Loop

       Node mkes is readable stream synchronously interable. 
       One can read a sucessive chunck of data from a stream with form/ await loop



/* The for/ wait Loop


/* Node is Asynchronus by Default

Node was desgined for programs - like network servers . that are I/O intensive.
Node enables to implement highly concurretn servers that can handle diferent requests at the same time.

Although, Node does not obtain concurrency by multiple-threads.


    Typical asynchronous code:
        
        New Http Request.
        Timers.
        Finished File Operations.


Multiple-threads are hard to understand adn debug. Concurret programming is generally used for:

            CPU - Intensive Work

            I/O - Intesive Work 


Node can be multi-threading if you concurrently run your programm in different CPUS.
This techique is good for CPU-intense-operations. but for I/O is not necessary.
In php, each client request goes throughout a new threading. Therefore, if a synchrnous event blocks the code execution, it will not delay or block anyohter cients request.
I node.js, a blocking event or function will compromise the same thread for all the users-

How node achieve concurrency ?

        1 - Asynchrnous API
        2 - Non-blocking AP

Functions of reading or writting files in the locl system in Node.js, for example, are asynchronous and non-blocing by default.
ALmost every I/0 function in Node.js are asynchrnous and non-blocking.
Before Promises implementation, Node was asynchrnous by callback functions implementation.
Usually the first argument of the callback function is an error, and the second the data or response obtained from the asynchronous computation.


        - until.promisify()


        This function can enforce in-built node functions to return a promise, using until object. */

        const util = require("util");
        const fs = require("fs"); // Require the filesystem module
        const pfs = { // Promise-based variants of some fs functions
            readFile: util.promisify(fs.readFile)
        };
        function readConfigFile(path) {
            return pfs.readFile(path, "utf-8").then(text => {
                return JSON.parse(text); // psf read.file returns a promise, then method invokes asynchronously the callback to parse the JSON into an object.
            });
        }

/*

        We can use await and sync for the same code */

        async function readConfigFile(path) {
            let text = await pfs.readFile(path, "utf-8"); // Await blocks line 407, making text to await for psd.readfile()
            return JSON.parse(text);
        }

/*

        The fs object have predefined promised based functions for working with file system.
        
         const fs = require("fs"); // Require the filesystem module */
         
        fs.promise.readfile() // Call a readfile promise-based version of the function.

/*

        Most of the functions als have a synchrnous variant using a Sync at the end.

         1.3.1 The Event Loop

        The aforementioned code launched a server. This programm was not haulted because an EVENT LOOP was created by a LISTENING EVENT.
        The event loop is fundamental as node.js is single threaded. 
        The event loop is a feature of node.js, abstracted as a loop of event handlings that the compiler provides to handle synchrnous and asynchrnous programming as weel
        I/O calls of the same thread. 
        It permist I/O with no blocking as NODE offloads operations to the system kernel.
        The event loops makes the code avaiable, but only runnable when there is a proper request from the browser or from another server.
        One can unregister the event lop with a method inherited from the Process.Prototype, process.exit().


            1.3.1.1 The Event Loop Lifecycle

            Time Event: If it was registered a TIMER, the node.js will keep looping until the timer makes callback function availabe for asynchrnous execution.
            I/O Operations Pending CAll: If there is I/O operations, there is a pending callback only executable after the I/O is done. Node.js will loop until the I/O event is done.
            Poll: Retrive I/O events and execute their callbacks and pending callbacks.

                ATENTION: I/O Operations requires OS to work in the worker pool. They are very likely to be blocking operations.
                Typical Blocking Operations: disk I/O-intensive: File and DNS and CPU-intensive: Crypto and ZLIB.

            setImmediate Callbacks:
            Closed Callbacks: 

            The interation cycle can explictly be finished with process.exit() method after all calçbacks were executed. 
            The open event-listener comprises the events not yet fullfilled.
            refs is the property the tracks open event-listeners and callbacks.
            It increments for event-listeners awaiting for requests and pending callbacks.
            Serves are eternal event-listeners and therefore ref will be 1 always in a server module.
            The event loop in a server is unstopable.


        The PROCESS Object is Global Value and can be acessed wherever is needed, withtou module requesting. */


        const server = http.createServer((req, resp) => { // req: IncomingMessage.  and resp: is the outcoming message and data sent to the browser.
            console.log(req)
            process.exit() // It will end the event lop provided by the lister register with server.listen()
        })  


/*      Event Loop also handle event callback. Many callback functions are executed after a condition provided by the caller is done. 
        This condition as provided for fs.WriteCodeSync - for example - is to execute the callback function ( as its third parameter), after writting a file.
        The entire register code and synchronous code can be read, but through the same request there might be asynchronous callbacks to be handled. 
        The callback events is handled by the Evento Loop, but anyother heavy operations thrown to the OS is handled by the WORKER POLL




        - Event Based Concurrency

        Node achieves the concurrency (nonblocking API) by using operating system version fo callbacks adn event handlers. 
        When you call an asynchronous  function,  Node 

                i) Start the Operation  (Events are emited)
                ii) Register evetn handlers with the OS that will notify when the operation is ready. (Events are picked by loop)
                iii) Node invokes the callback function of the calling asynchrnous function. (Callbacks are called)


        The core of the Event-Based Concurrency is the Event-loop Abstraction.


                i) The code is started and one nonblocking function causing a callback or event handler OS is registered. (Callback and Event Queue)
                ii) When node reaches the end of the programm, it blocks until an event happens. The OS keep running again.
                iii) OS registers the event and Node invokes the pending callback functions.
                iv) The cycle restarts. 
 

        The precedence order of the event queue.

        There are the event queues in node JS. 

            a) The Main Queue

                    1 -  Timers and its callbacks
                    2 - I/O Polling and its callbacks (Networking and File Acessing)
                    3 - setImmediate Callbacks (Mode Advanced, usually nested in 1 and 2)
                    4 - Close Callbacks (Shouting down a socket or server)

            
            b) Process.NEXTTICK() // Advanced Use Case - Resembles SetImmediate Callbacks


            c) Other Microtaks Queue (Resolved Promises)

            b and c evetn can have its callback executed only after the event queue a was checked.


        Example: 

        If a API request returns a promise, its callback will be only executed after an eventual timer callback was executed or network or file manipulation got its callback executed.



HOW TO AVOIND BLOCKING

1 - Do not use Sync Versions of any method from fs, crypto and zlib.
2 - Dont perform complex calculation (loops inside loops), other wise it will block the thread.
3 - Be careful with large JSON objects. ( long time with parsing adn stringfying)
4 - Dont use too complex regular expressions.


Good Practices to bypass blocking

1 - Using Child Processes
2 - Off-loaind to the thread-pool.



What is Kernel 

The computer programm at the core of the operting system.
It is a part of the op code that is permanent resident in the memor.
Kernel constrols all hardware resources (memory, I/O)
Kernel handles memory, I/O request from software and network sockets.
Browsers, word processors and audio and video players are not within Kernel, nut in user space.
Softwares request services from Kernel invoking a SYSTEM CALL, through a WRAPPER FUNCTION.
Node.js acesses services from Kernel using system call asychronously.
Node.js register EventHandlers listening from event emitions from the Kernel informing tha output is available and subsequent callback.
The Kernel is multi.threaded, therefore Node.Js in a single thread offloads seeveral operations to Kernel that will respond in a multi-thread process.
In general programming, WF are used to call a second routine or a system call
Node.js also have a WRAPPER FUNCTION like Kernel as well.
Node.js wrappes the entire code into a WRAPPER FUNCTION.
Each file is separetely wrapped.
 */

(function (exports, require, module, __filename, __dirname) {
  //module code
});

/*


*/
