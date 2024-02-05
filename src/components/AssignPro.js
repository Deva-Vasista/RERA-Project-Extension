  import React, { useState,useEffect } from 'react';
  import './Assignpro.css';
  import { PrismaClient } from '@prisma/client';
  import axios from 'axios'


  // let details = [
  //   {
  //     pan: 12234,
  //     name: "Kalyani Shivamani",
  //     UID: "AR/111/55555",
  //     Occupation: "Architect",
  //     Contact: "9000975246",
  //     Status: "Available",
  //     email: "kalyani@example.com",
  //   },
  //   {
  //     pan: 56789,
  //     name: "Suresh Kumar",
  //     UID: "EN/222/77777",
  //     Occupation: "Engineer",
  //     Contact: "9876543210",
  //     Status: "Assigned",
  //     email: "suresh@example.com",
  //   },
  //   {
  //     pan: 98765,
  //     name: "Priya Patel",
  //     UID: "CA/333/99999",
  //     Occupation: "Interior Designer",
  //     Contact: "8765432109",
  //     Status: "Unavailable",
  //     email: "priya@example.com",
  //   },
  //   {
  //     pan: 34567,
  //     name: "Raj Singh",
  //     UID: "EN/444/12345",
  //     Occupation: "Engineer",
  //     Contact: "7654321098",
  //     Status: "Available",
  //     email: "raj@example.com",
  //   },
  //   {
  //     pan: 12345,
  //     name: "Amit Sharma",
  //     UID: "AR/555/67890",
  //     Occupation: "Architect",
  //     Contact: "9876543211",
  //     Status: "Available",
  //     email: "amit@example.com",
  //   },
  //   {
  //     pan: 67890,
  //     name: "Pooja Verma",
  //     UID: "EN/666/23456",
  //     Occupation: "Engineer",
  //     Contact: "8765432101",
  //     Status: "Assigned",
  //     email: "pooja@example.com",
  //   },
  //   {
  //     pan: 11111,
  //     name: "Neha Gupta",
  //     UID: "CA/777/34567",
  //     Occupation: "Chartered Accountant",
  //     Contact: "7654321090",
  //     Status: "Available",
  //     email: "neha@example.com",
  //   },
  //   {
  //     pan: 22222,
  //     name: "Ravi Choudhary",
  //     UID: "EN/888/45678",
  //     Occupation: "Engineer",
  //     Contact: "8765432102",
  //     Status: "Available",
  //     email: "ravi@example.com",
  //   },
  //   {
  //     pan: 33333,
  //     name: "Mitali Kapoor",
  //     UID: "AR/999/56789",
  //     Occupation: "Architect",
  //     Contact: "7654321089",
  //     Status: "Available",
  //     email: "mitali@example.com",
  //   },
  //   {
  //     pan: 44444,
  //     name: "Vikram Singh",
  //     UID: "CA/000/67890",
  //     Occupation: "Chartered Accountant",
  //     Contact: "9876543212",
  //     Status: "Available",
  //     email: "vikram@example.com",
  //   },
  //   {
  //     pan: 55555,
  //     name: "Anjali Verma",
  //     UID: "EN/123/78901",
  //     Occupation: "Engineer",
  //     Contact: "8765432103",
  //     Status: "Available",
  //     email: "anjali@example.com",
  //   },
  // ];

  const AssignPro = () => {
    const [details,setdetails] = useState([])
    const getprof = async ()=>{
      const res = await axios.get('http://localhost:3001/api/getAssignProfessional');
      setdetails(res.data)
    }
    useEffect(()=>{
      getprof();
    },[])
    console.log(details);
    const [inputNumberFormOne, setInputNumberFormOne] = useState('');
    const [inputNumberFormTwo, setInputNumberFormTwo] = useState('');
    const [inputNumberFormThree, setInputNumberFormThree] = useState('');

    const [filteredDetailsFormOne, setFilteredDetailsFormOne] = useState([]);
    const [filteredDetailsFormTwo, setFilteredDetailsFormTwo] = useState([]);
    const [filteredDetailsFormThree, setFilteredDetailsFormThree] = useState([]);

    const [currentFormOne, setCurrentFormOne] = useState(null);
    const [currentFormTwo, setCurrentFormTwo] = useState(null);
    const [currentFormThree, setCurrentFormThree] = useState(null);

    const [panNotFound, setPanNotFound] = useState(null);

    const handleInputChange = (formType, e) => {
      const value = e.target.value;
      if (formType === 'Form One') {
        setInputNumberFormOne(value);
      } else if (formType === 'Form Two') {
        setInputNumberFormTwo(value);
      } else if (formType === 'Form Three') {
        setInputNumberFormThree(value);
      }
    };

    const handleSubmit = (formType) => {
      const inputNumber = getInputNumberByFormType(formType);
      console.log(details,inputNumber)
      const filtered = details.filter(
        (element) => element.pan === inputNumber && element.Status === 'AVAILABLE'
      );

      if (filtered.length === 0) {
        if (formType === 'Form One') {
          setFilteredDetailsFormOne([]);
        } else if (formType === 'Form Two') {
          setFilteredDetailsFormTwo([]);
        } else if (formType === 'Form Three') {
          setFilteredDetailsFormThree([]);
        }

        // Display "Pan not found" message
        setPanNotFound(formType);
        return;
      }

      setPanNotFound(null);

      if (formType === 'Form One') {
        setFilteredDetailsFormOne(filtered);
        setCurrentFormOne(formType);
      } else if (formType === 'Form Two') {
        setFilteredDetailsFormTwo(filtered);
        setCurrentFormTwo(formType);
      } else if (formType === 'Form Three') {
        setFilteredDetailsFormThree(filtered);
        setCurrentFormThree(formType);
      }
    };

    const handleReassign = (formType) => {
      if (formType === 'Form One') {
        setInputNumberFormOne('');
        setFilteredDetailsFormOne([]);
        setCurrentFormOne(null);
      } else if (formType === 'Form Two') {
        setInputNumberFormTwo('');
        setFilteredDetailsFormTwo([]);
        setCurrentFormTwo(null);
      } else if (formType === 'Form Three') {
        setInputNumberFormThree('');
        setFilteredDetailsFormThree([]);
        setCurrentFormThree(null);
      }
    };

    const tables = (filteredDetails, formType) => {
      const getInputNumber = getInputNumberByFormType(formType);

      if (getInputNumber === '' || filteredDetails.length === 0) {
        return (
          <div>
            {getInputNumber === '' && <p>Please enter a valid {formType === 'Form One' ? 'COA' : 'PAN'} Number</p>}
            {filteredDetails.length === 0 && getInputNumber !== '' && <p>Pan not found</p>}
            <input
              type='text'
              value={getInputNumber}
              onChange={(e) => handleInputChange(formType, e)}
              placeholder={`Enter ${formType === 'Form One' ? 'COA' : 'PAN'} Number`}
            />
            <button className="InBtn" type='submit'>Check Availability</button>
          </div>
        );
      }

      const status = filteredDetails[0].Status;

      return (
        <div>
          {status === 'Unavailable' || status === 'Assigned' ? (
            <p>Person Busy</p>
          ) : (
            <table className='form-table'>
              <thead>
                <tr>
                  <th>UID</th>
                  <th>Consultant Name</th>
                  <th>Consultant Profession</th>
                  <th>Email Id</th>
                  <th>Mobile No</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredDetails.map((element) => (
                  <tr key={element.pan}>
                    <td>{element.uid}</td>
                    <td>{element.Consultant_Name}</td>
                    <td>{element.Consultant_Profession}</td>
                    <td>{element.Email_Id}</td>
                    <td>{element.Mobile_No}</td>
                    <td>{element.Status}</td>
                    <td>
                      <button className="reassign-button" onClick={() => handleReassign(formType)}>
                        Re-Assign
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      );
    };



    

    const getInputNumberByFormType = (formType) => {
      if (formType === 'Form One') {
        return inputNumberFormOne;
      } else if (formType === 'Form Two') {
        return inputNumberFormTwo;
      } else if (formType === 'Form Three') {
        return inputNumberFormThree;
      }

      return '';
    };
    return (
      <div>
        <div>
          <h2>{currentFormOne || 'Form One'}</h2>
          {currentFormOne === null && (
            <form onSubmit={(e) => { e.preventDefault(); handleSubmit('Form One'); }}>
              <input
                type='text'
                value={inputNumberFormOne}
                onChange={(e) => handleInputChange('Form One', e)}
                placeholder='Enter COA Number'
              />
              <button type='submit' className='reassign-button'>Check Availability</button>
            </form>
          )}

          {currentFormOne === 'Form One' && filteredDetailsFormOne.length > 0 && (
            <div>
              {tables(filteredDetailsFormOne, 'Form One')}
            </div>
          )}
          {currentFormOne === 'Form One' && panNotFound && <p style={{backgroundColor: 'red'}}>Pan not found</p>}
        </div>

        <div>
          <h2>{currentFormTwo || 'Form Two'}</h2>
          {currentFormTwo === null && (
            <form onSubmit={(e) => { e.preventDefault(); handleSubmit('Form Two'); }}>
              <input
                type='text'
                value={inputNumberFormTwo}
                onChange={(e) => handleInputChange('Form Two', e)}
                placeholder='Enter COA Number'
              />
              <button type='submit' className='reassign-button'>Check Availability</button>
            </form>
          )}

          {currentFormTwo === 'Form Two' && filteredDetailsFormTwo.length > 0 && (
            <div>
              {tables(filteredDetailsFormTwo, 'Form Two')}
            </div>
          )}
          {currentFormTwo === 'Form Two' && panNotFound && <p style={{backgroundColor: 'red'}}>Pan not found</p>}
        </div>

        <div>
          <h2>{currentFormThree || 'Form Three'}</h2>
          {currentFormThree === null && (
            <form onSubmit={(e) => { e.preventDefault(); handleSubmit('Form Three'); }}>
              <input
                type='text'
                value={inputNumberFormThree}
                onChange={(e) => handleInputChange('Form Three', e)}
                placeholder='Enter PAN Number'
                className='inbtn'
              />
              <button type='submit' className='reassign-button'>Check Availability</button>
            </form>
          )}

          {currentFormThree === 'Form Three' && filteredDetailsFormThree.length > 0 && (
            <div>
              {tables(filteredDetailsFormThree, 'Form Three')}
            </div>
          )}
          {currentFormThree === 'Form Three' && panNotFound && <p style={{backgroundColor: 'red'}}>Pan not found</p>}
        </div>

      </div>
    );
  };

  export default AssignPro;

