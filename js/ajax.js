document.getElementById("swSubmit").addEventListener("click",getSW);

function getSW(){
    // console.log("it works")
    let swID=document.getElementById("swId").value;

    /* 
    Step 1 
        for Ajax
        the following object allows us to make requets and get back data.
        in short, this is our data retriever.
    */
    let xhr=new XMLHttpRequest()
    // console.log(xhr)

    //Step 2
    xhr.onreadystatechange=function(){
        // console.log("the ready state is changing")\
        if(xhr.readyState==4 && xhr.status==200){
            /* 
            What is the ready state?
                0=the request is not initialized
                1=server connection has been established
                2=request has been recieved
                3=processing the request
                4=request finished the response is ready

            what is the status code?
                100=Information
                200=OK
                300=Redirect
                400=client side error
                500=server side error
            */
        //    console.log(xhr.responseText)
        //    JSON is is like XML
                    // they both store and transport data
        // JSON stands for JavaScript Object Notation

        //This is called marshalling and unmarshalling (stringify and parse)
        let sw=JSON.parse(xhr.responseText);
        console.log(sw)
            setValues(sw)
        }
        /* 
        What is AJAX?
            This creates the communication between a server and our UI
            Asynchronous JavaScript and XML
        
        What is the difference between HTML and XML?
            HTML displays data
            XML stores and transports data
        XML stands for eXtensible Markup Language
        */
    }

    //step 3
    /* 
    create a connection 
    open(http method, url)
    open(http method, url, asynch)
    */
    xhr.open("GET","https://swapi.co/api/people/"+swID)

    //Step 4
    //this sends the request for information
    xhr.send();

}


function setValues(obj){
    document.getElementById("swInfo").innerHTML=obj.name
}