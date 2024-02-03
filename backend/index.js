const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

// Define a route to handle form submissions
app.post('/api/submitForm', async (req, res) => {
  try {
    const { id, name, gender } = req.body;

    // Assuming you want to save the form data to the 'test' table
    const result = await prisma.test.create({
      data: {
        id: parseInt(id),
        name,
        gender,
      },
    });

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Set up a basic route for testing
app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.get('/api/getBlockDetails', async (req, res) => {
    try {
        const blockDetails = await prisma.blocks.findMany();
        res.json(blockDetails);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
