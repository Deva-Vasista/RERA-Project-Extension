const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

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

app.post('/api/Submit', async (req, res) => {

  try {
    console.log(req.body)
    const {
      extendToDate,
      reasonForExtension,
      supportingDocuments,
      supportingDocumentsOptions,
      documentDate,
      declarationFormB,
      authorizedSignatory,
      contactDetails,
      DevelopmentDateB1,
      DevelopmentDeclarationFormB1,
      DevelopmentAuthorizedSignatoryB1,
      contactB1,
      DevelopmentDateB2,
      DevelopmentDeclarationFormB2,
      LandOwnerB2,
      contactB2,
      order45,
      project_id, // Assuming you also send the project_id from the frontend
    } = req.body;

    const result = await prisma.projectExtension.create({
      data: {
        extendToDate,
        reasonForExtension,
        supportingDocuments,
        supportingDocumentsOptions,
        documentDate,
        declarationFormB,
        authorizedSignatory,
        contactDetails,
        DevelopmentDateB1,
        DevelopmentDeclarationFormB1,
        DevelopmentAuthorizedSignatoryB1,
        contactB1,
        DevelopmentDateB2,
        DevelopmentDeclarationFormB2,
        LandOwnerB2,
        contactB2,
        order45,
        project_id
      },
      // Exclude the 'id' field from the create query
    });

    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
