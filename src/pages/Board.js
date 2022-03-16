import React, { useState } from 'react';
import login_logo from '../data/assets/login_logo.svg';
import overview from '../data/assets/overview.svg';
import overview2 from '../data/assets/overview_hover.svg';
import Calendar from '../data/assets/Calendar.svg';
import Calendar2 from '../data/assets/Calendar_hover.svg';
import settings from '../data/assets/settings.svg';
import settings2 from '../data/assets/settings_hover.svg';
import search from '../data/assets/search.svg';
import notificaton from '../data/assets/notificaton.svg';
import { BoardContainer } from '../components/Board/styles';
import { DeleteOutlined } from '@ant-design/icons';
import { Badge, Modal, Popover } from 'antd';
import SideModal from '../components/leavePopup/index'
import Notification from "../components/leavePopup/notification";

const Board = () => {

    const [popup, setPopup] = useState(false)

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
                <div id="main_menu">
                    <div id="header">
                        <h2 id="title">Home</h2>
                        <div id="mini_block">
                            <button onClick={() => setPopup(true)}>Apply Leave</button>
                            <img src={search} alt="img" id="search" />
                            <Popover placement="bottomRight" content={<Notification />} style={{ position: 'relative' }}>
                                <img src={notificaton} alt="img" id="notificaton" />
                            </Popover>

                            <div id="mini_block_name">
                                <p>Vignesh</p>
                                <img src="https://i.pinimg.com/550x/4b/0e/d9/4b0ed906554fb9f66b1afabea90eb822.jpg" alt="img" id="profile" />
                            </div>
                        </div>
                    </div>



                    <div id="score">
                        <div id="score_card">
                            <h2 id="score">16</h2>
                            <p>Available Leaves</p>
                        </div>
                        <div id="score_card">
                            <h2 id="score">08</h2>
                            <p>Previous unused Leaves</p>
                        </div>
                        <div id="score_card">
                            <h2 id="score">02</h2>
                            <p>Pending Leaves Requests</p>
                        </div>
                        <div id="score_card">
                            <h2 id="score">02</h2>
                            <p>Rejected Leaves</p>
                        </div>
                    </div>

                    <div id="message">
                        <div id="message_block1">
                            <h3>SNo</h3>
                            <h3>Type</h3>
                            <h3>From</h3>
                            <h3>To</h3>
                            <h3>Reason</h3>
                            <h3>Status</h3>
                            <h3>Action</h3>
                        </div>
                        <div id="message_block2">
                            <div id="task_container">
                                <p>1</p>
                                <p>Casual</p>
                                <p>25 Feb 2022 - 9:00 AM</p>
                                <p>25 Feb 2022 - 6:00 PM</p>
                                <p>Friend’s wedding celebration</p>
                                <p style={{ color: '#CB5A08', fontWeight: '600' }}>Pending</p>
                                <p><DeleteOutlined className='delete_icon' /></p>
                            </div>
                            <div id="task_container">
                                <p>1</p>
                                <p>Casual</p>
                                <p>25 Feb 2022 - 9:00 AM</p>
                                <p>25 Feb 2022 - 6:00 PM</p>
                                <p>Friend’s wedding celebration</p>
                                <p style={{ color: '#FF0000', fontWeight: '600' }}>Rejected</p>
                                <p><DeleteOutlined className='delete_icon' /></p>
                            </div>
                            <div id="task_container">
                                <p>1</p>
                                <p>Casual</p>
                                <p>25 Feb 2022 - 9:00 AM</p>
                                <p>25 Feb 2022 - 6:00 PM</p>
                                <p>Friend’s wedding celebration</p>
                                <p style={{ color: '#00D241', fontWeight: '600' }}>Approved</p>
                                <p><DeleteOutlined className='delete_icon' /></p>
                            </div>
                            <div id="task_container">
                                <p>1</p>
                                <p>Casual</p>
                                <p>25 Feb 2022 - 9:00 AM</p>
                                <p>25 Feb 2022 - 6:00 PM</p>
                                <p>Friend’s wedding celebration</p>
                                <p style={{ color: '#FF0000', fontWeight: '600' }}>Rejected</p>
                                <p><DeleteOutlined className='delete_icon' /></p>
                            </div>
                            <div id="task_container">
                                <p>1</p>
                                <p>Casual</p>
                                <p>25 Feb 2022 - 9:00 AM</p>
                                <p>25 Feb 2022 - 6:00 PM</p>
                                <p>Friend’s wedding celebration</p>
                                <p style={{ color: '#CB5A08', fontWeight: '600' }}>Pending</p>
                                <p><DeleteOutlined className='delete_icon' /></p>
                            </div>
                            <div id="task_container">
                                <p>1</p>
                                <p>Casual</p>
                                <p>25 Feb 2022 - 9:00 AM</p>
                                <p>25 Feb 2022 - 6:00 PM</p>
                                <p>Friend’s wedding celebration</p>
                                <p style={{ color: '#CB5A08', fontWeight: '600' }}>Pending</p>
                                <p><DeleteOutlined className='delete_icon' /></p>
                            </div>
                            <div id="task_container">
                                <p>1</p>
                                <p>Casual</p>
                                <p>25 Feb 2022 - 9:00 AM</p>
                                <p>25 Feb 2022 - 6:00 PM</p>
                                <p>Friend’s wedding celebration</p>
                                <p style={{ color: '#CB5A08', fontWeight: '600' }}>Pending</p>
                                <p><DeleteOutlined className='delete_icon' /></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <Modal
                centered
                visible={popup}
                onCancel={() => setPopup(false)}
                width={0}
                okButtonProps={{ style: { display: 'none' } }}
                cancelButtonProps={{ style: { display: 'none' } }}
                bodyStyle={{ backgroundColor: `rgb(0 0 0 / 62%)`, width: '100%', height: `100vh`, position: 'fixed' }}
                style={{ backgroundColor: `transparent`, height: `100%` }}
                maskStyle={{ backgroundColor: `transparent`, height: `fit-content`, padding: `0` }}
            >
                <SideModal />
            </Modal>
        </BoardContainer>
    )
}
export default Board;