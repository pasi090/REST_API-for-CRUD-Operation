const express = require("express");
const app = express();
const PORT = 3009;

app.use(express.json());

const convertParams = (req,res,next)=>{
    const { id } = req.params;
    req.params.id = parseInt(id);
    next();
};

app.get("/", (req, res) => {
  res.send("Successfull done the GET request from the server");
});

let blogs = [];

app.get("/blogs", (req, res) => {
  res.json(blogs);
});

app.post("/blogs/create",(req,res)=>{
    blogs.push({id: blogs.length +1, ...req.body},);
    res.send({message :`"ID: ${blogs.length} ok ,data send to the array"`}); 
} );

app.put("/blogs/update/:id",convertParams,(req,res)=>{
    const { id }= req.params;
    const index = blogs.findIndex((item) => item.id === id);
    const updatedBlog = {
            id: blogs[index].id ,
            ...req.body,
    
    };

    blogs[index] = updatedBlog;
    res.json([
            (updatedBlog),
            {response : `"Update ID : ${blogs[index].id} successfull!"`}
    ]);
   
   
});
app.get("/blogs/read/:id",convertParams,(req,res)=>{
    const { id }= req.params;
    const index = blogs.findIndex((item) => item.id === id);
    const ReadBlog = {
            id: blogs[index].id ,
            ...req.body,
    
    };

    blogs[index] = ReadBlog;
    res.json([
            (ReadBlog),
            {response : `"This is which you chosen ID : ${blogs[index].id} data blog"`}
    ]);
   

})



app.listen(PORT, () => {
  console.log(`app is listing on PORT:${PORT}`);

});
