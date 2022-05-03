import React from 'react';
import { LeaveContainers } from './styles';

const LeaveType = ({ leaveFun }) => {
    return (
        <LeaveContainers>
            <p onClick={() => leaveFun('Paid')}>Paid Leave</p>
            <p onClick={() => leaveFun('Sick')}>Sick Leave</p>
            <p onClick={() => leaveFun('Cassual')}>Cassual Leave</p>
        </LeaveContainers>
    )
}
export default LeaveType;