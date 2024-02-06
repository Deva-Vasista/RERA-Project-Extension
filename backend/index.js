/*const express = require('express');
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

app.get('/api/getAssignProfessional',async (req,res)=>{
  try{
    const formdetails = await prisma.form.findMany();
    res.json(formdetails)
  }catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
}
}
  )

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});*/
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

app.get('/api/getAssignProfessional', async (req, res) => {
  try {
    const formType = req.query.formType; // Assuming the form type is sent as a query parameter

    let professionFilter = {};

    // Customize the filter based on the form type
    if (formType === 'Form One') {
      professionFilter = { Consultant_Profession: 'CA' };
    } else if (formType === 'Form Two') {
      professionFilter = { Consultant_Profession: 'Architect' };
    } else if (formType === 'Form Three') {
      professionFilter = { Consultant_Profession: 'Engineer' };
    }

    const formDetails = await prisma.form.findMany({
      where: {
        ...professionFilter,
        // Add any other conditions if needed
      },
    });

    res.json(formDetails);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
