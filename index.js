import express from 'express'; 
import cors from 'cors'; 

const app = express(); 

app.use(cors({
    origin: '*', // Allow all origins
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS', // Allow specific methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
    credentials: true, // Allow credentials
})); 

app.get('/test', (req, res) => {
    res.json({ message: 'It worked' }); 
}); 

app.listen(8080, () => {
    console.log("app listening on 8080"); 
}); 
