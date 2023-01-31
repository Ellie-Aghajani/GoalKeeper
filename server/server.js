const express = require('express');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3001;

const habit = [
    {
        id:"abc",
        task:'reading',
        completed:false
    },
    {
        id:"def",
        task:'walking',
        completed:true
    },
];
//middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
 
//get
app.get('/todos', (req, res) =>{
    res.json(habit);
})

//POST 

app.post('/todos',(req,res)=>{
    console.log(req.body);
    const task = req.body.task;
    const id = Math.random().toString(36).substring(2,5);
    const completed = false;
    const newTodo = {
        task,
        completed,
        id:id,
    };
    todos.push(newTodo);
    res.json(newTodo);

});

//PATCH/todos/:id
app.patch('/todos/:id',(req,res)=> {
    const id = req.params.id;
})

app.listen(port,() => {
    console.log(`app is listening on port ${port}`)
});