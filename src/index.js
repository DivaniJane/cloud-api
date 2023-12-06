const express = require ('express');

const foodsRoutes = require('./routes/foods');

const middlewareLogRequest = require('./middleware/logs');

const app = express();

app.use(middlewareLogRequest);
app.use(express.json());

app.use('/foods', foodsRoutes);

app.listen(4000, () => {
    console.log('Server running di port 4000');
    
})