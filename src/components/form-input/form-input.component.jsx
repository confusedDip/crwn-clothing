import React from 'react';

import './form-input.styles.scss';

export default function FormInput({label, handleChange, ...otherProps}){
        return(
                <div className="group">
                        <input className="form-input" onChange={handleChange} {...otherProps}/>
                        {label ? 
                                <label className={`${otherProps.value.length?"shrink":null} form-input-label`}>
                                        {label}
                                </label>:
                        null}
                </div>
        );
}