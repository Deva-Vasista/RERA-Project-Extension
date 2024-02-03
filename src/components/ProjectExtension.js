import React,{ useState,useEffect } from "react";
import './ProjectExtension.css';
import { TbFileSearch } from "react-icons/tb";
import { TiDelete } from "react-icons/ti";
import InputTags from "./InputTags.js";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import Blockdetails from "./Blockdetails.js";
import FileUploadButton from './FileuploadBtn.js'

const ProjectExtension = () => {
    let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/assign-professionals`; 
    navigate(path);
  }
const [formData, setFormData] = useState({
      extendToDate: '',
      reasonForExtension: '',
      blockName: ['A','B'],
      developmentStartDate: ['12-03-2017','15-07-2020'],
      developmentEndDate: ['30-05-2019','12-05-2022'],
      height: ['200','3000'],
      fsi: ['123','456'],
      builtupArea: [2000,350],
      commencementCertificateNo: ['A/B/6564656556/785765','QS/B/1234567/1325678'],
      dateOfLatestCommencementCertificate: ['23-05-2022','12-06-2024'],
      allCommencementCertificates: ['Y','Y'],
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
      documentDate: '',
      declarationFormB: '',
      authorizedSignatory: '',
      declarationFormBTable: [
        {
          id: 1,
          viewFile: 1,
        },
      ],
      contactDetails: '',
      jointDevelopmentDate: '',
      jointDevelopmentDeclarationFormB: '',
      jointDevelopmentAuthorizedSignatory: '',
      jointDevelopmentDeclarationFormBTable: [
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
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form Data:', formData);
      
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
  
            <form onSubmit={handleSubmit}>
              {/* Section 1 */}
              <section className="section-1">
                {/* Extend to Date */}
                <div>
                  <h5>1.1 Extend to Date</h5>
                  <input
                    type="date"
                    name="extendToDate"
                    value={formData.extendToDate}
                    onChange={handleInputChange}
                  />
                </div>
  
                {/* Reason for Seeking Extension */}
                <div className="section-2">
                  <h5>1.2 Reason for Seeking Extension</h5>
                  <div>
                    {/* Use your InputTags component here */}
                    {<InputTags />}
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
  
        <Blockdetails/>
  
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
                    <input type="date" name="documentDate" value={formData.documentDate} onChange={handleInputChange} />
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
                  Form-B(Declaration Drainage/Carpet Affidavit Along With Form-B To
                  BE Uploaded Here)*
                </p>
                <p style={{ fontSize: '12px' }}>[Affidavit by Promoter]</p>
                <div className="section-5">
                  <div>
                    <p>1.4 Date of Issuance of Document</p>
                    <input type="date" name="jointDevelopmentDate" value={formData.jointDevelopmentDate} onChange={handleInputChange} />
                    <p>1.7 Declaration Form-B</p>
                    <button className="file-btn">
                      <TbFileSearch style={{ width: '15px', height: '15px' }} /> View File / {formData.jointDevelopmentDeclarationFormBTable[0].viewFile}
                    </button>
                  </div>
                  <div>
                    <p>1.5 Authorized Signatory of Project who has signed Form B</p>
                    <input type="text" name="jointDevelopmentAuthorizedSignatory" value={formData.jointDevelopmentAuthorizedSignatory} onChange={handleInputChange} />
                    <p>1.7.1 Declaration Form-B</p>
                    <div style={{ display: 'flex' }}>
                      <button className="file-btn">
                        <TbFileSearch style={{ width: '15px', height: '15px' }} /> View File / {formData.jointDevelopmentDeclarationFormBTable[0].viewFile}
                      </button>
                      <button className="file2-btn">
                        <TiDelete style={{ width: '20px', height: '20px' }} />
                      </button>
                    </div>
                  </div>
                  <div>
                    <p>1.6 Contact Details</p>
                    <input type="text" className="contact" name="jointDevelopmentContactDetails" value={formData.jointDevelopmentContactDetails} onChange={handleInputChange} />
                  </div>
                </div>
              </section>
  
              {/* Section 7 */}
              <section>
                <p className="orange">
                  Form-B(Declaration Drainage/Carpet Affidavit Along With Form-B To
                  BE Uploaded Here)*
                </p>
                <p style={{ fontSize: '12px' }}>[Affidavit by Promoter]</p>
                <div className="section-5">
                  <div>
                    <p>1.4 Date of Issuance of Document</p>
                    <input type="date" name="order45Date" value={formData.order45Date} onChange={handleInputChange} />
                    <p>1.7 Declaration Form-B</p>
                    <button className="file-btn">
                      <TbFileSearch style={{ width: '15px', height: '15px' }} /> View File / {formData.order45Table[0].viewFile}
                    </button>
                  </div>
                  {/* Add more fields as needed */}
                </div>
              </section>
  
              {/* Submit button */}
              
              <button type="submit" className="file-btn" style={{ display: 'block', margin: 'auto' }}>
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
