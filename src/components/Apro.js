import React, { useState, useEffect } from 'react';
import './Assignpro.css';
import axios from 'axios';


const Apro= () =>{
    const [details, setDetails] = useState({'Form One':[],'Form Two':[],'Form Three':[]});
    const [inputNumberFormOne, setInputNumberFormOne] = useState('');
    const [inputNumberFormTwo, setInputNumberFormTwo] = useState('');
    const [inputNumberFormThree, setInputNumberFormThree] = useState('');
    const [formSubmitted, setFormSubmitted] = useState({'Form One':false,'Form Two':false,'Form Three':false});

    // const [currentFormOne, setCurrentFormOne] = useState(null);
    // const [currentFormTwo, setCurrentFormTwo] = useState(null);
    // const [currentFormThree, setCurrentFormThree] = useState(null);

    // const [data,setData] = useState[[]]
    const getProf = async (pan, profession) => {
        const res = await axios.post('http://localhost:3001/api/getA', { pan: pan, profession: profession });
        console.log(res.data);
        return res.data;
    };
    

    const getInputNumberByFormType=(type)=>{
        switch(type){
            case 'Form One':
                return inputNumberFormOne;
            case 'Form Two':
                return inputNumberFormTwo;
            case 'Form Three':
                return inputNumberFormThree;
        }
    }

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


    const handleSubmit = async (formType) => {
  try {
    let result;
    if (formType === 'Form One') {
      result = await getProf(inputNumberFormOne, "CA");
      setInputNumberFormOne("");
      setFormSubmitted((prev) => ({ ...prev, [formType]: true }));
    } else if (formType === 'Form Two') {
      result = await getProf(inputNumberFormTwo, "ARCHITECT");
      setInputNumberFormTwo("");
      setFormSubmitted((prev) => ({ ...prev, [formType]: true }));
    } else if (formType === 'Form Three') {
      result = await getProf(inputNumberFormThree, "ENGINEER");
      setInputNumberFormThree("");
      setFormSubmitted((prev) => ({ ...prev, [formType]: true }));
    }
    console.log("logging result in handleSubmit function",result);
    setDetails((prevDetails) => ({
      ...prevDetails,
      [formType]: result,
    }));
    console.log("Submit",details);
  } catch (error) {
    console.error("Error fetching data:", error);
    // Handle error (e.g., show a message to the user)
  }
};



    const handleReassign = (formType) => {
        if (formType === 'Form One') {
            setInputNumberFormOne("")
            setDetails((pd)=>({...pd,'Form One':[]}))
            setFormSubmitted((prev) => ({ ...prev, 'Form One': false }));
        } else if (formType === 'Form Two') {
            setInputNumberFormTwo("")
            setDetails((pd)=>({...pd,'Form Two':[]}))
            setFormSubmitted((prev) => ({ ...prev, 'Form Two': false }));
        } else if (formType === 'Form Three') {
            setInputNumberFormThree("")
            setFormSubmitted((prev) => ({ ...prev, 'Form Three': false }));
            setFormSubmitted(false)
        }
      };

    const tables = (formType) => {
        const getInputNumber = getInputNumberByFormType(formType);
    
        if (!formSubmitted[formType]) 
            {
          return (
            <div>
              {getInputNumber === '' && <p>Please enter a valid PAN Number</p>}
              <input
                type='text'
                value={getInputNumber}
                onChange={(e) => handleInputChange(formType, e)}
                placeholder={`Enter PAN Number`}
              />
              <button className="InBtn" type='submit' onClick={() => handleSubmit(formType)}>
                Check Availability
              </button>
            </div>
          );
        }
        else {
          const formdata = details[formType]; 
          return (
          <div>
              <table className='form-table'>
                <thead>
                  <tr>
                    <th>UID</ th>
                    <th>Consultant Name</th>
                    <th>Consultant Profession</th>
                    <th>Email Id</th>
                    <th>Mobile No</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                    <tr key={formdata.pan}>
                      <td>{formdata.uid}</td>
                      <td>{formdata.Consultant_Name}</td>
                      <td>{formdata.Consultant_Profession}</td>
                      <td>{formdata.Email_Id}</td>
                      <td>{formdata.Mobile_No}</td>
                      <td>{formdata.Status}</td>
                      <td>
                        <button className="reassign-button" onClick={() => handleReassign(formType)}>
                          Re-Assign
                        </button>
                      </td>
                    </tr>
                </tbody>
              </table>
          </div>
        );
        }
      };

    return (
        <>
        <div>
        <h2>Form One</h2>
        <hr/>
        {tables("Form One")}
        <h2>Form Two</h2>
        <hr/>
        {tables("Form Two")}
        <h2>Form Three</h2>
        <hr/>
        {tables("Form Three")}
        </div>
        </>
    )
}

export default Apro;