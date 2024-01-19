import React from "react";
import './ProjectExtension.css';
import { TbFileSearch } from "react-icons/tb";
import { TiDelete } from "react-icons/ti";
import InputTags from "./InputTags.js";


const ProjectExtension = () => {
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
                  <input type="date" required />
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
  const placeholderData = [
    {
      blockName: 'Block A',
      startDate: '2022-01-01',
      endDate: '2022-12-31',
      height: 15,
      fsiArea: 1000,
      certificateNo: '123456',
      acs:"---",
      latestCertificateDate: '2022-01-01'
    },
    {
      blockName: 'Block B',
      startDate: '2023-01-01',
      endDate: '2023-12-31',
      height: 20,
      fsiArea: 2000,
      certificateNo: '789012',
      acs:"---",
      latestCertificateDate: '2023-01-01'
    },
    // Add more data as needed
  ];

export default ProjectExtension;  