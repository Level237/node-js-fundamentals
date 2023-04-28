const fs = require('fs');
const server = require('http').createServer();

server.on("request", (req, res) => {
    // // Solution 1
    // fs.readFile('./how-nodes-work/text-file.txt',(err,data)=>{
    //     if(err) console.log(err);
    //     res.end(data);
    // })

    // //Solution 2 : Streams
    // const readable=fs.createReadStream('./how-nodes-work/text-file.txt')
    // readable.on('data',chunck=>{
    //     res.write(chunck);
    // })
    // readable.on('end',()=>{
    //     res.end();
    // })
    // readable.on('error',err=>{
    //     console.log(err);
    //     res.statusCode=500;
    //     res.end("File Not Found");
    // })

    // Solution 3
    const readable = fs.createReadStream('./how-nodes-work/text-file.txt');
    
    // readableSource.pipe(WritableDest)
})

server.listen(8000, '127.0.0.1', () => {
    console.log("Listening....");
})