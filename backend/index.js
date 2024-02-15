const express = require('express');
const cors = require('cors');
const multer = require('multer')
const path = require('path');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.post('/api/upload', upload.single('file'))

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.post('/api/updateTest',async (req,res)=>{
  const {id,...data} = req.body;
  console.log(data);
  try{
    const update = await prisma.test.update({where:{
      id:id
    },
    data:{...data}
  })
  res.status(201).json({message:"Success"})
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
}
})
app.get('/api/getBlockDetails', async (req, res) => {
  const {id} = req.body; 
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
      project_id, 
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
    });

    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.post('/api/getA', async (req, res) => {
  try {
      const { pan, profession } = req.body;
      const data = await prisma.form.findUnique({
          where: {
            pan:pan,
            Consultant_Profession:profession,
          }
      });
      console.log(data)
      res.json(data);

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
      professionFilter = { Consultant_Profession: 'ARCHITECT' };
    } else if (formType === 'Form Three') {
      professionFilter = { Consultant_Profession: 'ENGINEER' };
    }

    const formDetails = await prisma.form.findMany({
      where: {
        ...professionFilter,
        // Add any other conditions if needed
      }}

)
res.json(formDetails);
  }catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
