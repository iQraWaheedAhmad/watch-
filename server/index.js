const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const EmployeeModel = require('./models/Employee');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/employee')
  
app.post('/register', (req, res) => {
  EmployeeModel.create(req.body)
    .then(employees => res.json( employees))
        .catch(err => res.json(err))
    });


// Start server
const PORT = 3001; // Use a constant for the port number
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
