const http=require('http');
const fileSystem=require('fs');


const host='localhost';
const port=8080;
const requestListener=function(request,response){
    //Working with a single file
fileSystem.readFile('index.html', function(err,data){
      // Handle file read error
    if (err) {
      
        response.writeHead(500, { 'Content-Type': 'text/plain' });
        response.end('Internal Server Error');
        
      }else
    response.writeHead(200,{'Content-Type': 'text/html'});
  
 response.end(data);
});

}

const server=http.createServer(requestListener);
server.listen(port,host, ()=>{
    console.log('Server is running on http://'+host +'Port number '+port);
})