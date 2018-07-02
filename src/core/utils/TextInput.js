import React from 'react'

export const TextInput = ({ handler, touched, hasError, meta }, textType) => (
    <div>
        <div className="c-form-group">
            <label htmlFor={`${meta.label}`}>{`${meta.label}`}</label>
            <input type={(meta.label === 'Password') ? 'password' : textType} 
                    className="c-form-control" id={`${meta.label}`} {...handler()} />
        </div>
    </div>  
  )