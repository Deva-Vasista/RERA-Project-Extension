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
            <td>cao name</td>
            <td>Architect Name</td>
            <td>Email Id</td>
            <td>Mobile No</td>
            <td>Status</td>
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
          <td>License Number</td>
          <td>Engineer Name</td>
          <td>Email Id</td>
          <td>Mobile No</td>
          <td>Status</td>
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
        <td>CA No</td>
          <td>CA name</td>
          <td>Email Id</td>
          <td>Mobile No</td>
          <td>Status</td>
          <td><button className="reassign-button">Re-Assign</button></td>
        </tr>
      </tbody>
    </table>
</div>
    </div>



  );
}

export default AssignPro;
