import React from 'react';
import login_logo from '../data/assets/login_logo.svg';
import overview from '../data/assets/overview.svg';
import overview2 from '../data/assets/overview_hover.svg';
import Calendar from '../data/assets/Calendar.svg';
import Calendar2 from '../data/assets/Calendar_hover.svg';
import settings from '../data/assets/settings.svg';
import settings2 from '../data/assets/settings_hover.svg';
import { BoardContainer } from '../components/Board/styles';

const Board = () => {
    return (
        <BoardContainer>
            <div id="BoardContainer">
                <div id="side_menu">
                    <h1><img src={login_logo} alt="img" />Leave Tracker</h1>
                    <ul>
                        <li><img src={overview} alt="img" id="img1" /><img src={overview2} alt="img" id="img2" />Home</li>
                        <li><img src={Calendar} alt="img" id="img1" /><img src={Calendar2} alt="img" id="img2" />Calendar</li>
                    </ul>
                    <ul>
                        <li><img src={settings} alt="img" id="img1" /><img src={settings2} alt="img" id="img2" />Settings</li>
                    </ul>
                </div>
            </div>
        </BoardContainer>
    )
}
export default Board;