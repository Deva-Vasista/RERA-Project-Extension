import React from 'react';
import './Assignpro.css';


const AssignPro = () => {
    return (
      <div >
        <div>
      < table className="form-table">
        <thead>
        <h2>FORM ONE</h2>
          <tr>
            <th>COA No</th>
            <th>Architect Name</th>
            <th>Email Id</th>
            <th>Mobile No</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>CA/111/55555</td>
            <td>Kalyani Shivamani</td>
            <td>KalyaniShivamani12@gmail.com </td>
            <td>9876456719</td>
            <td>ASSIGNED</td>
            <td><button className="reassign-button">Re-Assign</button></td>
          </tr>
        </tbody>
      </table>
  </div>
  <div>
      < table className="form-table"> 
        <thead>
        <h2>FORM TWO</h2>
          <tr>
            <th>Engineer License Number</th>
            <th>Engineer Name</th>
          <th>Email Id</th>
          <th>Mobile No</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>ENG/2388/43226</td>
          <td>Raman Srivastavan</td>
          <td>SRaman@hotmail.com</td>
          <td>N/A</td>
          <td>ASSIGNED</td>
          <td><button className="reassign-button">Re-Assign</button></td>
        </tr>
      </tbody>
    </table>
</div>
<div>
    < table className="form-table"> 
      <thead>
      <h2>FORM THREE</h2>
        <tr>
          <th>CA Membership Number</th>
          <th>CA Name</th>
          <th>Email Id</th>
          <th>Mobile No</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <td>34678</td>
          <td>Ramya Pothuri</td>
          <td>Pothuri.Ramya@gmail.com</td>
          <td>N/A</td>
          <td>ASSIGNED</td>
          <td><button className="reassign-button">Re-Assign</button></td>
        </tr>
      </tbody>
    </table>
</div>
    </div>



  );
}

export default AssignPro;
