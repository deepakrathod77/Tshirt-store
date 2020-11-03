const express = require('express');

const app = express();

const port = 8000;

app.get('/',(req,res)=>{
    return res.send('Home page')
});
app.get('/signup',(req,res)=>{
    return res.send('you are at signup page')
});
app.get('/login',(req,res)=>{
    return res.send('you are at loginn page')
});

const admin = (req,res) => {
    return res.send('This is admin dashboard')
}
app.get('/admin',admin);

app.listen(port,()=>{
    console.log('server is up and running...')
})