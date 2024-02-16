import React, { useState, useEffect } from 'react';
import './Assignpro.css';
import axios from 'axios';
import {message} from "antd";
const AssignPro = () => {
  const [details, setDetails] = useState([]);
  const getProf = async () => {
    const res = await axios.get('http://localhost:3001/api/getAssignProfessional');
    setDetails(res.data);
  };
  console.log(details)

  useEffect(() => {
    getProf();
  }, []);

  const [inputNumberFormOne, setInputNumberFormOne] = useState('');
  const [inputNumberFormTwo, setInputNumberFormTwo] = useState('');
  const [inputNumberFormThree, setInputNumberFormThree] = useState('');

  const [filteredDetailsFormOne, setFilteredDetailsFormOne] = useState([]);
  const [filteredDetailsFormTwo, setFilteredDetailsFormTwo] = useState([]);
  const [filteredDetailsFormThree, setFilteredDetailsFormThree] = useState([]);

  const [currentFormOne, setCurrentFormOne] = useState(null);
  const [currentFormTwo, setCurrentFormTwo] = useState(null);
  const [currentFormThree, setCurrentFormThree] = useState(null);

  // const [panNotFound, setPanNotFound] = useState(null);

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
    if (formType === 'Form One') {
      const filteredFormOne = details.filter(
        (element) => element.pan === inputNumber && (element.Status === 'AVAILABLE' && element.Consultant_Profession==='CA')
      );
      if(filteredFormOne.length===0){
       message.error("PAN not found");
        setFilteredDetailsFormOne([]);
        setCurrentFormOne('Form One');
        setInputNumberFormOne('');
      }else{setFilteredDetailsFormOne(filteredFormOne);  setCurrentFormOne('Form One');
      }
    } 
    else if (formType === 'Form Two') {
      const filteredFormTwo = details.filter(
        (element) => element.pan === inputNumber && (element.Status === 'AVAILABLE' && element.Consultant_Profession==='ENGINEER')
      );
      if(filteredFormTwo.length===0){
        console.log(filteredFormTwo);
        message.error("PAN not found");
        setCurrentFormTwo('Form Two');
        setFilteredDetailsFormTwo([]);
        setInputNumberFormTwo('');
    }else{setFilteredDetailsFormTwo(filteredFormTwo); setCurrentFormTwo('Form Two');
    }
    } else if (formType === 'Form Three') {
      const filteredFormThree = details.filter(
        (element) => element.pan === inputNumber && (element.Status === 'AVAILABLE' && element.Consultant_Profession==='ARCHITECT')
      );
      if(filteredFormThree.length===0){
        message.error("PAN not found");
        setFilteredDetailsFormThree([]);
        setInputNumberFormThree('');
        setCurrentFormThree('Form Three');
    }else{setFilteredDetailsFormThree(filteredFormThree);  setCurrentFormThree('Form Three');
    }
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
          {(filteredDetails.length === 0  || getInputNumber !== '' ) && <p>Pan not found</p>}
          <input
            type='text'
            value={getInputNumber}
            onChange={(e) => handleInputChange(formType, e)}
            placeholder={`Enter ${formType === 'Form One' ? 'COA' : 'PAN'} Number`}
          />
          <button className="InBtn" type='submit' onClick={() => handleSubmit(formType)}>
            Check Availability
          </button>
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

    return 'PAN NOT FOUND';
  };

  return (
    <div>
      <div>
        <h2>{currentFormOne || 'Form One'}</h2>
        {(currentFormOne === null || filteredDetailsFormOne.length===0) && (
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
        {/* {currentFormOne === 'Form One' && panNotFound && <p style={{ backgroundColor: 'red' }}>Pan not found</p>} */}
      </div>

      <div>
        <h2>{currentFormTwo || 'Form Two'}</h2>
        {(currentFormTwo === null|| filteredDetailsFormTwo.length===0) && (
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
        {/* {currentFormTwo === 'Form Two' && panNotFound && <p style={{ backgroundColor: 'red' }}>Pan not found</p>} */}
      </div>

      <div>
        <h2>{currentFormThree || 'Form Three'}</h2>
        {(currentFormThree === null|| filteredDetailsFormThree.length===0) && (
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
        {/* {currentFormThree === 'Form Three' && panNotFound && <p style={{ backgroundColor: 'red' }}>Pan not found</p>} */}
      </div>
    </div>
  );
};

export default AssignPro;