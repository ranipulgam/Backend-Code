const express = require('express');
const app = express();
const eventController = require('./controllers/eventController');

app.use(express.json());
app.get('/events', eventController.getAllEvents);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
