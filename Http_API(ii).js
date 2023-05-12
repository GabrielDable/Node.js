
The Http API Prorotype Chain 



(A) 


(i) - http.prototype.Server.


    Http.Prototype.createServer(options, RequestHandler) {returns http. Server} -//  Http.server instanceof Net.prototype.Server && Http.prototype && EventEmitter.prototype.

            Http.server.on("request",  function RequestHandler (Http.incomingMessage, Http.serverResponse) => {}. // Http.Server is EventEmitter and Net.Server an listen to a request event
                       
                       
(ii) - http.prototype.ClientRequest.


    Http.request(options, ResponseHandler(Http.prototype.IncomingMessage) {return Http.Prototype.OutgoingMessage.Prottype.ClientRequest}; // Http.ClientRequest instanceof Stream.prototype.Writable && Http.OutgoingMessage



(iii) http.prototype.ServerResponse. 

  http.prototype.ServerResponse instanceof stream.prototype.writable
      Http.Server.on("request", (http.prototype.IncomingMessage, https.prototype.OutgoingMessage.ServerResonse => {});


(iv) Https.prototype.OutgoingMessage.


    It is the prototype of Http.ClientRequest and Http.Prototype.ServerReponse and extends to Stream.prototype.


                       
(v) http.prototype.IncomingMessage.


    http.prototype.IncomingMessage instanceof stream.prototype.readable

    It is generated in  events within Https Apis

      Http.Server.on("request", (http.prototype.IncomingMessage, https.prototype.OutgoingMessage.ServerResonse => {});
       Http.ClientRequest.on("response", ResponseHandler(Httt.Prorotype.OugoingMessage.Prototype.IncomingMessage);


(B) METHODS and Events OF Stream.prototype.readble.https.prototype.IncomingMessage.

       Methods

      IncomingMessage.complete typeOf Boolean // If the message was fully received and parsed
      -----------------.statuscode. 
      -----------------.headers.
      -----------------.methods.

      
      Events

      Close - // The message as completed
      Aborted // Deprecated

      
        
(c) Methods and Events of Stream.prototype.writable.https.prortotype.outGoingMessage

    Methods

    OutgoingMessage.setHeadeR(name,value) // It sets one header value;
    OutgoingMessage.writeHeader(StatusCode, {headerProperty : Value};
    outgoingMessage.end(chunk[, encoding][, callback]) // Writes data to the Outgoignmessage and closes it afterwards. The returning value is THIS. 
                    Chunk - String | Buffer | Unit8Array
                    Encoding - Default UTF8
                    Callback is Optional
    outgoingMessage.write(chunk[, encoding][, callback])# // Similtar to the previous method, although it does not emit any event after flushing data into the outgoingMessage.
    
    
    Events
    
    drain. When the buffer of the message is freee again
    finish. When the transmission is finished sucessfully
    
    
 (d) http.ServerResponse

    All methods from the Prototype outgoigMessage
    
    
    Proper Methods of the Http.prototypeServerResponse

    response.req // A refence to the original request. This property does not exist in Http.Prototype.ClientRequest.

(e) http.ClientRequest


    All methods from the Prototype outgoigMessage

/*    Remembering that the headers of this WritableStream are writtinen in the http.prototype.request signature.
    Althouh it is possible to accesss any of the headers properties before closing the writable stream. */ 


     ClientRequest.path
     ClientRequest.host
     ClientRequest.protocol

    Events 
    
    Close - When the request finished.
    Finish - ?
    Response - The network returned a response within the process.
    
    
    
    
  8f) http.server

    Methods
    
    Server.Listen() 
    Server.Close(Callback)



        





 
      
                 



               
               


