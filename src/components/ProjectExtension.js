  import React,{ useState } from "react";
import './ProjectExtension.css';
import { TbFileSearch } from "react-icons/tb";
import { TiDelete } from "react-icons/ti";
import InputTags from "./InputTags.js";
import { useNavigate } from "react-router-dom";
import Blockdetails from "./Blockdetails.js";
import FileUploadButton from './FileuploadBtn.js'
import axios from "axios";

const getRandomFromList =(intList)=>{
  if (intList.length === 0) {
    console.error('Error: The list is empty.');
    return null;
  }
  const randomIndex = Math.floor(Math.random() * intList.length);
  return intList[randomIndex];
}

const ProjectExtension = () => {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/assign-professionals`; 
    navigate(path);
  }
const [formData, setFormData] = useState({
      project_id: getRandomFromList([1,2,3,4,5]),
      extendToDate: new Date().toISOString(),
      reasonForExtension: [''],
      supportingDocuments: '',
      supportingDocumentsOptions: '',
      supportingDocumentTable: [
        {
          id: 1,
          block: 'A',
          delete: '--',
          viewFile: 1,
        },
      ],
      documentDate: new Date().toISOString(),
      declarationFormB: '',
      authorizedSignatory: '',
      declarationFormBTable: [
        {
          id: 1,
          viewFile: 1,
        },
      ],
      contactDetails: '',
      DevelopmentDateB1: new Date().toISOString(),
      DevelopmentDeclarationFormB1: '',
      DevelopmentAuthorizedSignatoryB1: '',
      contactB1:'',
      DevelopmentDeclarationFormB1Table: [
        {
          id: 1,
          viewFile: 1,
        },
      ],
      DevelopmentDateB2: new Date().toISOString(),
      DevelopmentDeclarationFormB2: '',
      LandOwnerB2:'',
      contactB2:'',
      DevelopmentDeclarationFormB2Table: [
        {
          id: 1,
          viewFile: 1,
        },
      ],
      order45: '',
      order45Table: [
        {
          id: 1,
          viewFile: 1,
        },
      ],
    });
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log('Request Sent',formData)
      try {
   
        const response = await axios.post('http://localhost:3001/api/Submit', formData);
  
        // Handle the response as needed
        console.log('Server response:', response.data);
  
        // You can redirect or perform other actions based on the response
  
      } catch (error) {
        console.error('Error submitting data:', error);
        // Handle errors as needed
      }   
    };

    const updateReasonsForExtension = (updatedTags) => {
      setFormData((prevData) => ({
        ...prevData,
        reasonForExtension: updatedTags.map((tag) => tag.text),
      }));
    };
    
    const handleDateChange = (event) => {
      function toIsoString(date) {
        var tzo = -date.getTimezoneOffset(),
            pad = function(num) {
                return (num < 10 ? '0' : '') + num;
            };
      
        return date.getFullYear() +
            '-' + pad(date.getMonth() + 1) +
            '-' + pad(date.getDate()) +
            'T' + pad(date.getHours()) +
            ':' + pad(date.getMinutes()) +
            ':' + pad(date.getSeconds()) + 'Z'
      }
      

      const selectedDate = event.target.value;
      const name = event.target.name;
      const isoFormattedDate = toIsoString(new Date(selectedDate))
      setFormData((prevData) => ({ ...prevData, [name]: isoFormattedDate }));  
    };
    
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
        };
  
    return (
      <>
        <section style={{ display: 'flex' }}>
          <div className="form-container">
            <h2>PROJECT EXTENSION FORM</h2> 
            <hr />
  
            <form>
              {/* Section 1 */}
              <section className="section-1">
                {/* Extend to Date */}
                <div>
                  <h5>1.1 Extend to Date</h5>
                  <input
                    type="date"
                    name="extendToDate"
                    onChange={handleDateChange}
                  />
                </div>
  
                {/* Reason for Seeking Extension */}
                <div className="section-2">
                  <h5>1.2 Reason for Seeking Extension</h5>
                  <div>
                    {/* Use your InputTags component here */}
                    {<InputTags onTagsChange={updateReasonsForExtension}/>}
                    {/* <input
                      type="text"
                      name="reasonForExtension"
                      value={formData.reasonForExtension}
                      onChange={handleInputChange}
                      placeholder="Add a new reason"
                    /> */}
                  </div>
                </div>
              </section>
  
        <Blockdetails id={formData.project_id}/>
  
              {/* Section 4 */}
              <section className="section-4">
                <div style={{ display: 'flex' }}>
                  <h5>1.3 Supporting Documents(if Any)</h5>
                  <div className="options">
                    <label>
                      <input
                        type="radio"
                        name="supportingDocumentsOptions"
                        value="yes"
                        checked={formData.supportingDocumentsOptions === 'yes'}
                        onChange={handleInputChange}
                      />
                      YES
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="supportingDocumentsOptions"
                        value="no"
                        checked={formData.supportingDocumentsOption̥s === 'no'}
                        onChange={handleInputChange}
                      />
                      NO
                    </label>
                  </div>
                </div>
                <table className="table-2">
                  <tr>
                    <th>{formData.supportingDocumentTable[0].id}</th>
                    <th>{formData.blockName}</th>
                    <th></th>
                    <th>
                      <button className="delete-btn">Delete</button>
                    </th>
                    <th>
                      <button className="file-btn">
                        <TbFileSearch style={{ width: '15px', height: '15px' }} /> View File / {formData.supportingDocumentTable[0].viewFile}
                      </button>
                    </th>
                  </tr>
                </table>
                <div className=""></div>
              </section>
  
              {/* Section 5 */}
              <section>
                <h5>1.3.1 Document</h5>
                <FileUploadButton/>
                <p className="orange">
                  Form-B(Declaration Drainage/Carpet Affidavit Along With Form-B To
                  BE Uploaded Here)*
                </p>
                <p style={{ fontSize: '12px' }}>[Affidavit by Promoter]</p>
                <div className="section-5">
                  <div>
                    <p>1.4 Date of Issuance of Document</p>
                    <input type="date" name="documentDate" onChange={handleDateChange} />
                    <p>1.7 Declaration Form-B *</p>
                    <button className="file-btn">
                      <TbFileSearch style={{ width: '15px', height: '15px' }} /> View File / {formData.declarationFormBTable[0].viewFile}
                    </button>
                  </div>
                  <div>
                    <p>1.5 Authorized Signatory of Project who has signed Form B</p>
                    <input type="text" name="authorizedSignatory" value={formData.authorizedSignatory} onChange={handleInputChange} />
                    <p>1.7.1 Declaration Form-B</p>
                    <div style={{ display: 'flex' }}>
                      <button className="file-btn">
                        <TbFileSearch style={{ width: '15px', height: '15px' }} /> View File / {formData.declarationFormBTable[0].viewFile}
                      </button>
                      <button className="file2-btn">
                        <TiDelete style={{ width: '20px', height: '20px' }} />
                      </button>
                    </div>
                  </div>
                  <div>
                    <p>1.6 Contact Details</p>
                    <input type="text" className="contact" name="contactDetails" value={formData.contactDetails} onChange={handleInputChange} />
                  </div>
                </div>
              </section>
  
              {/* Section 6 */}
              <section>
                <h2 style={{ padding: '8px' }}>IN CASE OF JOINT DEVELOPMENT</h2>
                <hr />
                <p className="orange">
                  Form-B1 At the time of DEVELOPMENT Agreement*
                </p>
                <p style={{ fontSize: '12px' }}>[Affidavit by Promoter]</p>
                <div className="section-5">
                  <div>
                    <p>1.4 Date of Issuance of Document</p>
                    <input type="date" name="DevelopmentDateB1" onChange={handleDateChange} />
                    <p>1.7 Declaration Form-B1</p>
                    <button className="file-btn">
                      <TbFileSearch style={{ width: '15px', height: '15px' }} /> View File / {formData.DevelopmentDeclarationFormB1Table[0].viewFile}
                    </button>
                  </div>
                  <div>
                    <p>1.5 Authorized Signatory of Project who has signed Form B1</p>
                    <input type="text" name="DevelopmentAuthorizedSignatoryB1" value={formData.DevelopmentAuthorizedSignatoryB1} onChange={handleInputChange} />
                    <p>1.7.1 New Declaration Form-B1</p>
                    <div style={{ display: 'flex' }}>
                      <button className="file-btn">
                        <TbFileSearch style={{ width: '15px', height: '15px' }} /> View File / {formData.DevelopmentDeclarationFormB1Table[0].viewFile}
                      </button>
                      <button className="file2-btn">
                        <TiDelete style={{ width: '20px', height: '20px' }} />
                      </button>
                    </div>
                  </div>
                  <div>
                    <p>1.6 Contact Details</p>
                    <input type="text" className="contact" name="contactB2" value={formData.contactB2} onChange={handleInputChange} />
                  </div>
                </div>
              </section>
  
              {/* Section 7 */}
              <section>
                <hr />
                <p className="orange">
                  Form-B2 At the time of DEVELOPMENT Agreement*
                </p>
                <p style={{ fontSize: '12px' }}>[Affidavit by Promoter]</p>
                <div className="section-5">
                  <div>
                    <p>1.4 Date of Issuance of Document</p>
                    <input type="date" name="DevelopmentDateB2" onChange={handleDateChange} />
                    <p>1.7 Declaration Form-B1</p>
                    <button className="file-btn">
                      <TbFileSearch style={{ width: '15px', height: '15px' }} /> View File / {formData.DevelopmentDeclarationFormB2Table[0].viewFile}
                    </button>
                  </div>
                  <div>
                    <p>1.5 Land Owner</p>
                    <input type="text" name="LandOwnerB2" value={formData.LandOwnerB2} onChange={handleInputChange} />
                    <p>1.7.1 New Declaration Form-B1</p>
                    <div style={{ display: 'flex' }}>
                      <button className="file-btn">
                        <TbFileSearch style={{ width: '15px', height: '15px' }} /> View File / {formData.DevelopmentDeclarationFormB1Table[0].viewFile}
                      </button>
                      <button className="file2-btn">
                        <TiDelete style={{ width: '20px', height: '20px' }} />
                      </button>
                    </div>
                  </div>
                  <div>
                    <p>1.6 Contact Details</p>
                    <input type="text" className="contact" name="contactB1" value={formData.contactB1} onChange={handleInputChange} />
                  </div>
                </div>
              </section>
              <section>
                <div>
                <div className="section-5">
                  <p>1.16 Order 45*</p>
                </div>
                  <div style={{ display: 'flex' }}>
                      <button className="file-btn">
                        <TbFileSearch style={{ width: '15px', height: '15px' }}/> View File / {formData.DevelopmentDeclarationFormB1Table[0].viewFile}
                      </button>
                  </div>
                </div>
              </section>
              {/* Submit button */}
              
              <button type="submit" className="file-btn" style={{ display: 'block', margin: 'auto' }} onClick={handleSubmit}>
                Save
              </button>
              <button type="submit" onClick={routeChange} className="file-btn" style={{ display: 'block', margin: 'auto' }}>
                Next
              </button>
            </form>
          </div>
        </section>
      </>
    );
  };
  
export default ProjectExtension;