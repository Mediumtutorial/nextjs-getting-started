import React from 'react'

const Button = () => {
    return (
        <button type="button">
            Click me
            <style jsx>
                {
                    `
                    button{
                        background: red;
                        border: unset;
                        color: #fff;
                        padding: 10px 20px;
                    }
                    `
                }
            </style>
        </button>
        
    )
}

export default Button
