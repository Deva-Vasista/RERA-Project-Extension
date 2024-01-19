import React from 'react'
import {Menu} from 'antd';
import {SwitcherOutlined} from '@ant-design/icons/lib/icons'
import {useNavigate} from 'react-router-dom';

function Sidemenu() {
    const navigate=useNavigate();
  return (
    <div>
    <Menu 
    onClick={({key})=>{
        navigate(key);
    }}
    items={[{label:"Project Extension Detail",key:"/project-extension-detail",icon:<SwitcherOutlined />},
    {label:"Assign Professionals",key:"/assign-professionals",icon:<SwitcherOutlined />},
    {label:"Perform Certification",key:"/perform-certification", icon:<SwitcherOutlined />},
    {label:"Payment",key:"/payment",icon:<SwitcherOutlined />},
    ]}></Menu>
    </div>
  )
}

export default Sidemenu