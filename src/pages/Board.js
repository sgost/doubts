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
import share from '../data/assets/share.svg';

const Board = () => {

    const [popup, setPopup] = useState(false)

    return (
        <BoardContainer>
            <div id="BoardContainer" >
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
                <div id="main_menu" style={{ background: '#FCFAFA' }}>
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



                    <div id="admin">
                        <div id="admin_block1">
                            <h1>Leave Requests</h1>
                            <p id="share"><img src={share} alt="share" />Share</p>
                        </div>
                        <div id="admin_tab">
                            <h2>All</h2>
                            <h2>Approve</h2>
                            <h2>Pending</h2>
                        </div>
                        <div id="message">
                            <div id="message_block1">
                                <h3>SNo</h3>
                                <h3>Name & ID</h3>
                                <h3>Date</h3>
                                <h3>Leave Type</h3>
                                <h3>Reason</h3>
                                <h3>Action</h3>
                            </div>
                            <div id="message_block2">
                                <div id="task_container">
                                    <p>1</p>
                                    <div id="profile_box">
                                        <img src="https://i.pinimg.com/550x/4b/0e/d9/4b0ed906554fb9f66b1afabea90eb822.jpg" alt="img" id="profile" />
                                        <div id="profile_text">
                                            <h2>Vignesh</h2>
                                            <p>FCHN017</p>
                                        </div>
                                    </div>
                                    <p>25 Feb to 26 Feb, 2022</p>
                                    <p>CL</p>
                                    <p>Friend’s wedding celebration</p>
                                    <div id="btns">
                                        <button>Approve</button>
                                        <button>Reject</button>
                                    </div>
                                </div>
                                <div id="task_container">
                                    <p>1</p>
                                    <div id="profile_box">
                                        <img src="https://i.pinimg.com/550x/4b/0e/d9/4b0ed906554fb9f66b1afabea90eb822.jpg" alt="img" id="profile" />
                                        <div id="profile_text">
                                            <h2>Vignesh</h2>
                                            <p>FCHN017</p>
                                        </div>
                                    </div>
                                    <p>25 Feb to 26 Feb, 2022</p>
                                    <p>CL</p>
                                    <p>Friend’s wedding celebration</p>
                                    <div id="btns">
                                        <button>Approve</button>
                                        <button>Reject</button>
                                    </div>
                                </div>
                                <div id="task_container">
                                    <p>1</p>
                                    <div id="profile_box">
                                        <img src="https://i.pinimg.com/550x/4b/0e/d9/4b0ed906554fb9f66b1afabea90eb822.jpg" alt="img" id="profile" />
                                        <div id="profile_text">
                                            <h2>Vignesh</h2>
                                            <p>FCHN017</p>
                                        </div>
                                    </div>
                                    <p>25 Feb to 26 Feb, 2022</p>
                                    <p>CL</p>
                                    <p>Friend’s wedding celebration</p>
                                    <div id="btns">
                                        <button>Approve</button>
                                        <button>Reject</button>
                                    </div>
                                </div>
                                <div id="task_container">
                                    <p>1</p>
                                    <div id="profile_box">
                                        <img src="https://i.pinimg.com/550x/4b/0e/d9/4b0ed906554fb9f66b1afabea90eb822.jpg" alt="img" id="profile" />
                                        <div id="profile_text">
                                            <h2>Vignesh</h2>
                                            <p>FCHN017</p>
                                        </div>
                                    </div>
                                    <p>25 Feb to 26 Feb, 2022</p>
                                    <p>CL</p>
                                    <p>Friend’s wedding celebration</p>
                                    <div id="btns">
                                        <button>Approve</button>
                                        <button>Reject</button>
                                    </div>
                                </div>
                                <div id="task_container">
                                    <p>1</p>
                                    <div id="profile_box">
                                        <img src="https://i.pinimg.com/550x/4b/0e/d9/4b0ed906554fb9f66b1afabea90eb822.jpg" alt="img" id="profile" />
                                        <div id="profile_text">
                                            <h2>Vignesh</h2>
                                            <p>FCHN017</p>
                                        </div>
                                    </div>
                                    <p>25 Feb to 26 Feb, 2022</p>
                                    <p>CL</p>
                                    <p>Friend’s wedding celebration</p>
                                    <div id="btns">
                                        <button>Approve</button>
                                        <button>Reject</button>
                                    </div>
                                </div>
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