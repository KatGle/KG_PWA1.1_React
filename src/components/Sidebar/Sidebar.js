import React from 'react';
import { Menu } from 'antd';
import { FaEnvira } from "react-icons/fa";
import './Sidebar.css'
import { useNavigate } from "react-router-dom"

function Sidebar() {
    const navigate = useNavigate();

    return (
        <div className="Sidebar">
            <Menu
            onClick={(item)=>{
                //item.key
                navigate(item.key);
            }}
            items={[
                {
                    label: "SNEAT",
                    key: '/sneat',
                    icon: <FaEnvira/>
                },

                {
                    label: "Dashboard",
                    key: '/dashboard',
                    icon: <FaEnvira/>
                },

                {
                    label: "Layouts",
                    key: '/layouts',
                    icon: <FaEnvira/>
                },

                {
                    label: "PAGES",
                    key: '/pages',
                    icon: <FaEnvira/>
                },

                {
                    label: "Account Settings",
                    key: '/account_settings',
                    icon: <FaEnvira/>
                },

                {
                    label: "Authentications",
                    key: '/authentications',
                    icon: <FaEnvira/>
                },

                {
                    label: "Misc",
                    key: '/misc',
                    icon: <FaEnvira/>
                },

                {
                    label: "COMPONENTS",
                    key: '/components',
                    icon: <FaEnvira/>
                },
    
                {
                    label: "Cards",
                    key: '/cards',
                    icon: <FaEnvira/>
                },

                {
                    label: "User inferface",
                    key: '/user_interface',
                    icon: <FaEnvira/>
                },

                {
                    label: "Extended UI",
                    key: '/extended_ui',
                    icon: <FaEnvira/>
                },

                {
                    label: "Boxicons",
                    key: '/boxicons',
                    icon: <FaEnvira/>
                },

                {
                    label: "FORMS & TABLES",
                    key: '/forms_and_tables',
                    icon: <FaEnvira/>
                },

                {
                    label: "Form Elements",
                    key: '/form_elements',
                    icon: <FaEnvira/>
                },

            ]}
            ></Menu>
        </div>
    )
}

export default Sidebar;