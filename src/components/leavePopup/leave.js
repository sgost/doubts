import React from 'react';
import { LeaveContainer } from './styles';

const Leave = ({ setLeavePer }) => {
    return (
        <LeaveContainer>
            <p onClick={() => setLeavePer('Full day')}>Full day</p>
            <p onClick={() => setLeavePer('First Half')}>First Half</p>
            <p onClick={() => setLeavePer('Second Half')}>Second Half</p>
        </LeaveContainer>
    )
}
export default Leave;