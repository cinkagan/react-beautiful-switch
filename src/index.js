import React, { useState } from 'react';
import PropTypes from "prop-types";
import './index.css';

const BeautifulSwitch = ({
    deafultValue = false,
    onText = "Yes",
    offText = "No",
    color = "#2d3a87",
    onChange
}) => {
    const [value, setValue] = useState(deafultValue);
    const _onChange = (e) => {
        setValue(!value);
        if (typeof onChange !== "undefined")
            onChange(e);
    }
    return (
        <div className="switches">
            <label className={"toggler " + (!value ? 'toggler--is-active' : '')}>{offText}</label>
            <div className="toggle" style={{ backgroundColor: color }}>
                <input type="checkbox" id="switcher" className="check" checked={value} onChange={_onChange} />
                <b className="b switch"></b>
            </div>
            <label className={"toggler " + (value ? 'toggler--is-active' : '')}>{onText}</label>
        </div>
    );
}

BeautifulSwitch.propTypes = {
    onText: PropTypes.string,
    offText: PropTypes.string,
    color: PropTypes.string,
    defaultActiveTab: PropTypes.number,
    onChange: PropTypes.func
};

export default BeautifulSwitch;
