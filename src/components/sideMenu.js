import React, { useState } from 'react';
import { Menu, Input } from 'antd';
import { SwitcherOutlined } from '@ant-design/icons/lib/icons';
import { useNavigate } from 'react-router-dom';

const { Item } = Menu;
const { Search } = Input;

function Sidemenu() {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    const handleMenuClick = ({ key }) => {
        navigate(key);
    };


    return (
        <div>
            <Menu
                onClick={handleMenuClick}
                mode="vertical" // or "horizontal" based on your layout
                selectedKeys={[searchQuery]}
            >
                <Item key="/project-extension" icon={<SwitcherOutlined />}>
                    Project Extension Detail
                </Item>
                <Item key="/assign-professionals" icon={<SwitcherOutlined />}>
                    Assign Professionals
                </Item>
                <Item key="/perform-certification" icon={<SwitcherOutlined />}>
                    Perform Certification
                </Item>
                <Item key="/payment" icon={<SwitcherOutlined />}>
                    Payment
                </Item>
            </Menu>
        </div>
    );
}

export default Sidemenu;