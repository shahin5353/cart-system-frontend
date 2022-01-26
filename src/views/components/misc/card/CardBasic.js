import React from 'react'
import './cardStyle.css'

export function CardBasic(props) {
    return (
        <div className='card-container'>
            <div>
                <h2 style={{ margin: 0, color:'#27267D', fontSize:'18px' }}>{props.dataTitle}</h2>
                <p style={{ fontSize: '18px', fontWeight: '500', margin: 0, color: '#000' }}>
                    {props.dataCount}
                </p>
            </div>
        </div>
    )
}