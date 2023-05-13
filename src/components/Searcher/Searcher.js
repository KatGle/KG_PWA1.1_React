import React from "react";
import { Input } from 'antd';
import './Searcher.css'
const { Search } = Input;

function Searcher(){
    return <div className="Searcher">
        <Search 
            placeholder="Search..."
            onSearch={value => console.log(value)}/>
        </div>
}

export default Searcher;