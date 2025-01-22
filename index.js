const express=require('express');
const app=express();
const port=3000

app.get(`/status info`,(req,res)=>{
    const statuscode ={
        200 :"Request was successful.",
        201 :"A resource has been successfully created.",
        204 :"Request processed successfully, no content returned.",
        400 :"Bad Request: The request is invalid due to client-side errors.",
        401 :" Authentication is required to access the resource.",
        403 :" Server refuses to authorize the request.",
        404 :" The resource does not exist.",
        405 :" HTTP method not supported for this resource.",
        429 :" User has exceeded rate limits.",
        500 :" The server encountered an error.",
        502 :" The server received an invalid response from the upstream server.",
        503 :" Server temporarily overloaded or under maintenance.",
        504 :" The server did not receive a timely response from the upstream server."

}
    const code =parseInt(req.query.code);
    if(statuscode[code]){
        res.send({
            "status":code,
            "message":statuscode[code]
        });
    }
    else{
        res.status(400).send({
            "status":400,
            "message":"the request is invalid due to clinet error"
        })
    }
})

    

app.listen(port,()=>{
    console.log(`server is running in ${port}`)
});