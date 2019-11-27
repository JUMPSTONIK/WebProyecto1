import React from 'react';
import './Buttons.sass';

export const Button = props => (
    <div className ="buttons">
    {props.children}
    </div>
)

export const ButtonWh = props => (
    <div className ="buttonsWh">
    {props.children}
    </div>
)