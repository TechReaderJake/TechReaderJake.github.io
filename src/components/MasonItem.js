import React from 'react'

function MasonItem(props) {
    return (
        <div className={"mason-item"}>
            <div className="img-overlay"></div>
            <img src={props.src} className="img-fluid" alt="Design" />
            <div className="middle">
                <div className="mason-text">
                    {props.text}
                </div>
            </div>
        </div>
    )
}
export default MasonItem;