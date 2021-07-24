const app = require('express')();
const server = require('http').createServer(app);
const cors = require('cors');

const io = require('socket.io')(server,{
    cors:{
        origin:'*',
        method:['GET','POST'],
    }
});
app.use(cors());

const PORT = process.env.PORT ||5000;

app.get('/',(req,res) => {
    res.send("server is running")
})
io.on('connection',(socket) => {
    socket.emit('me',socket.id )
    socket.on('disconnect',() => {
        socket.broadcast.emit('callended',)
    })
    socket.on('calluser',(userToCall,signalData,from,name) => {


    })

})

server.listen(PORT,()=>
    console.log(`server listening on port ${PORT}`))