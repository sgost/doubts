import React from 'react';
import { PopupContainer } from './styles';
import user from '../../data/assets/user.svg';
import leave_type from '../../data/assets/leave_type.svg';
import cal from '../../data/assets/pop_Calendar.svg';
import Edit from '../../data/assets/Edit.svg';

const SideModal = () => {
    return (
        <PopupContainer>
            <div id="popup">
                <h1>Apply for Leave</h1>
                <div id="name_block">
                    <img src={user} alt="img" />
                    <p>Vignesh</p>
                </div>
                <div id="name_block">
                    <img src={cal} alt="img" />
                    <p>Feb25, 2022<span></span>Full day</p>
                </div>
                <div id="name_block">
                    <img src={leave_type} alt="img" />
                    <input type='text' id="input" placeholder='Select leave type' />
                </div>
                <div id="name_block">
                    <img src={Edit} alt="img" />
                    <textarea id="textarea" placeholder='Add reason for leave (optional)' />
                </div>
                <div id="buttons">
                    <button style={{ color: '#3751FF', border: '1px solid #3751FF' }}>Cancel</button>
                    <button style={{ background: '#3751FF', color: 'white' }}>Submit</button>
                </div>
            </div>
        </PopupContainer>
    )
}
export default SideModal;