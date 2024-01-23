import React,{ useState } from "react";
import './ProjectExtension.css';
import { TbFileSearch } from "react-icons/tb";
import { TiDelete } from "react-icons/ti";
import InputTags from "./InputTags.js";
import { useNavigate } from "react-router-dom";
const ProjectE = () => {
    return (
      <>
      <section style={{display:"flex"}}>
        <div className="form-container">
          <h2>PROJECT EXTENSION FORM</h2>
          <hr></hr>
          <form>
            {/* Section 1 */}
            <section className="section-1">
              <div>
                <h5>1.1 Extend to Date</h5>
                <input type="date" />
              </div>
              <div className="section-2">
                <h5>1.2 Reason for Seeking Extension</h5>
                <div>
                  {/* <input
                    type="text"
                    placeholder="Add a new reason"
                  /> */}
                  {<InputTags/>}
  
                </div>
  
              </div>
            </section>
  
            <section className="table-container">
              <table>
                <thead>
                  <tr>
                    <th className="bold-text">Block Name</th>
                    <th className="bold-text">Development Start Date</th>
                    <th className="bold-text">Development End Date</th>
                    <th className="bold-text">
                      Height (in Meter) as per Section Plan of this Block
                    </th>
                    <th className="bold-text">FSI</th>
                    <th className="bold-text">Builtup Area</th>
                    <th className="bold-text">Commencement Certificcate No.</th>
                    <th className="bold-text">
                      Date of Latest Commencement Certificate
                    </th>
                    <th className="bold-text">
                      All Commencement Certificates of the block
                    </th>
                    <th className="bold-text">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-blue" : ""}>
                      <td>A</td>
                      <td>04-02-2001</td>
                      <td>05-04-2023</td>
                      <td>15</td>
                      <td>543</td>
                      <td>654</td>
                      <td>A/B/6564656556/78576576746</td>
                      <td>01-02-2021</td>
                      <td>--</td>
                      <td>
                        <button>Edit</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
  
            <section className="section-4">
              <div style={{ display: "flex" }}>
                <h5>1.3 Supporting Documents(if Any)</h5>
                <div className="options">
                  <label>
                    <input type="radio" value="yes" />
                    YES
                  </label>
                  <label>
                    <input type="radio" value="no" />
                    NO
                  </label>
                </div>
              </div>
              <table className="table-2">
                <tr>
                  <th>1</th>
                  <th>A</th>
                  <th></th>
                  <th>
                    <button className="delete-btn">Delete</button>
                  </th>
                  <th>
                  <button className="file-btn"><TbFileSearch style={{width:"15px",height:"15px"}}/>  View File / 1 </button>
                  </th>
                </tr>
              </table>
              <div className=""></div>
            </section>
  
            <section>
              <h5>1.3.1 Document</h5>
              <button className="file-btn">File upload</button>
              <p className="orange">
                Form-B(Declaration Drainage/Carpet Affidavit Along With Form-B To
                BE Uploaded Here)*
              </p>
              <p style={{ fontSize: "12px" }}>[Affidavit by Promoter]</p>
              <div className="section-5">
                <div>
                  <p>1.4 Date of Issurance of Document</p>
                  <input type="date"  />
                  <p>1.7 Declaration Form-B *</p>
                  <button className="file-btn"><TbFileSearch style={{width:"15px",height:"15px"}}/>  View File / 1 </button>
                </div>
                <div>
                  <p>1.5 Authorized Signatory of Project who has signed Form B</p>
                  <input type="text" />
                  <p>1.7.1 Declaration Form-B</p>
                  <div style={{display:"flex"}}><button className="file-btn"><TbFileSearch style={{width:"15px",height:"15px"}}/>  View File / 1 </button><button className="file2-btn" ><TiDelete  style={{width:"20px",height:"20px"}}/></button></div>
                </div>
                <div>
                  <p>1.6 Contact Details</p>
                  <input type="text" className="contact"/>
                </div>
              </div>
            </section>
            
  
            <section>
              <h2 style={{ padding: "8px" }}>IN CASE OF JOINT DEVELOPMENT</h2>
              <hr></hr>
              <p className="orange">
                Form-B(Declaration Drainage/Carpet Affidavit Along With Form-B To
                BE Uploaded Here)*
              </p>
              <p style={{ fontSize: "12px" }}>[Affidavit by Promoter]</p>
              <div className="section-5">
                <div>
                  <p>1.4 Date of Issurance of Document</p>
                  <input type="date" />
                  <p>1.7 Declaration Form-B</p>
                  <button className="file-btn"><TbFileSearch style={{width:"15px",height:"15px"}}/>  View File / 1 </button>
                </div>
                <div>
                  <p>1.5 Authorized Signatory of Project who has signed Form B</p>
                  <input type="text" />
                  <p>1.7.1 Declaration Form-B</p>
                  <div style={{display:"flex"}}><button className="file-btn"><TbFileSearch style={{width:"15px",height:"15px"}}/>  View File / 1 </button><button className="file2-btn" ><TiDelete  style={{width:"20px",height:"20px"}}/></button></div>
  
                </div>
                <div>
                  <p>1.6 Contact Details</p>
                  <input type="text"className="contact" />
                </div>
              </div>
            </section>
  
            <section>
              <p className="orange">
                Form-B(Declaration Drainage/Carpet Affidavit Along With Form-B To
                BE Uploaded Here)*
              </p>
              <p style={{ fontSize: "12px" }}>[Affidavit by Promoter]</p>
              <div className="section-5">
                <div>
                  <p>1.4 Date of Issurance of Document</p>
                  <input type="date" />
                  <p>1.7 Declaration Form-B</p>
                  <button className="file-btn"><TbFileSearch style={{width:"15px",height:"15px"}}/>  View File / 1 </button>
                </div>
                <div>
                  <p>1.5 Authorized Signatory of Project who has signed Form B</p>
                  <input type="text" />
                  <p>1.7.1 Declaration Form-B</p>
                  <div style={{display:"flex"}}><button className="file-btn"><TbFileSearch style={{width:"15px",height:"15px"}}/>  View File / 1 </button><button className="file2-btn" ><TiDelete  style={{width:"20px",height:"20px"}}/></button></div>
                </div>
                <div>
                  <p>1.6 Contact Details</p>
                  <input type="text" className="contact"/>
                </div>
              </div>
            </section>
            <section style={{paddingTop:"15px"}}>
              <p style={{ fontSize: "12px" }}>1.16 Order-45 *</p>
              <button className="file-btn"><TbFileSearch style={{width:"15px",height:"15px"}}/>  View File / 1 </button>
            </section>
  
            <button type="submit" className="file-btn" style={{ display: "block", margin: "auto" }}>Save & Next</button>
          </form>
        </div>
        </section>
      </>
    );
  };


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
      // Additional actions after form submission
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
  
              {/* Section 3 - Table Container */}
              <section className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th className="bold-text">Block Name</th>
                      <th className="bold-text">Development Start Date</th>
                      <th className="bold-text">Development End Date</th>
                      <th className="bold-text">
                        Height (in Meter) as per Section Plan of this Block
                      </th>
                      <th className="bold-text">FSI</th>
                      <th className="bold-text">Builtup Area</th>
                      <th className="bold-text">Commencement Certificate No.</th>
                      <th className="bold-text">
                        Date of Latest Commencement Certificate
                      </th>
                      <th className="bold-text">
                        All Commencement Certificates of the block
                      </th>
                      <th className="bold-text">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1, 2].map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-blue' : ''}>
                        <td>{formData.blockName[index]}</td>
                        <td>{formData.developmentStartDate[index]}</td>
                        <td>{formData.developmentEndDate[index]}</td>
                        <td>{formData.height[index]}</td>
                        <td>{formData.fsi[index]}</td>
                        <td>{formData.builtupArea[index]}</td>
                        <td>{formData.commencementCertificateNo[index]}</td>
                        <td>{formData.dateOfLatestCommencementCertificate[index]}</td>
                        <td>{formData.allCommencementCertificates[index]}</td>
                        <td>
                          <button>Edit</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
  
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
                <button className="file-btn" type="file " >File upload</button>
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
