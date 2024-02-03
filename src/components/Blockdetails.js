import React,{ useState,useEffect } from "react";
import './ProjectExtension.css';
import axios from 'axios'


export default function Blockdetails(){
    const [blockData, setBlockData] = useState([]);
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);
        return formattedDate;
      };
    const getdata = async () => {
        try {
          // Make a GET request to the Express server endpoint
          const response = await axios.get("http://localhost:3001/api/getBlockDetails");
    
          // Update the state with the fetched data
          setBlockData(response.data);
          console.log(blockData) // Assuming the response contains the block data
        } catch (error) {
          console.error("Error fetching data:", error.message);
        }
      };
    useEffect(() => {
        getdata();
      }, []);
    return (
        <>
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
                    {blockData && blockData.map((block, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-blue' : ''}>
                        <td>{block.block_name}</td>
                        <td>{formatDate(block.development_start_date)}</td>
                        <td>{formatDate(block.development_end_date)}</td>
                        <td>{block.height}</td>
                        <td>{block.fsi}</td>
                        <td>{block.built_up_area}</td>
                        <td>{block.commencement_certificate_no}</td>
                        <td>{formatDate(block.date_of_latest_commencement_certificate)}</td>
                        <td>{block.all_commencement_certificates}</td>
                        <td>
                          <button>Edit</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table> 
              </section>
        </>
    )
}