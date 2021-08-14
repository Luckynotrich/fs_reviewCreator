import React from 'react'

function CheckBox({id,text}) {
    return (
        <>
       <div className="row">
                <div className="right-75">
        <input type="checkbox" id={id}></input>
            <span>{text}</span><br/><br/>
            </div>
            </div>

</>
    )
}

export default CheckBox
