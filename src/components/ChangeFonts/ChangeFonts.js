import React, { useState } from "react";

function ChangeFonts(){
    const [fontSize, setFontSize] = useState(0);
    
    return (
    <div className="ChangeFonts">
        <button onClick={() => setFontSize(fontSize + 2)}>Font+</button>
        <button onClick={() => setFontSize(fontSize - 2)}>Font-</button>
    </div>
    
    )
}

export default ChangeFonts;

