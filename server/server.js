const mongoose=require('mongoose');
const Document=require('./DocumentSchema.js')
require('dotenv').config();

mongoose.connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

const defaultValue=""

const io=require('socket.io')(3001,{
    cors:{
        origin:'http://localhost:3000',
        method:['GET','POST']
    }
})


io.on("connection",socket=>{
    console.log("User connected");
    socket.on('get-document',async documentId=>{
        const document= await findOrCreateDocument(documentId);
        socket.join(documentId)
        socket.emit('load-document',document.data)
        socket.on('send-changes',(delta=>{
            socket.broadcast.to(documentId).emit('recieve-changes',delta);
        }))
        socket.on('save-document',async document=>{
            await Document.findByIdAndUpdate(documentId, { data: document })
        })
    })
})

async function findOrCreateDocument(id)
{
    if(id==null)return
    const valid=await Document.findById(id);
    if(valid)
    {
        return valid;
    }
    else
    {
        return await Document.create({ _id:id, data: defaultValue})
    }
}