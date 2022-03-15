import React from 'react';
import { NoteContainer } from './styles';

const Notification = () => {
    return (
        <NoteContainer>
            <div id="NoteContainer">
                <div id="head">
                    <h1>Notifications</h1>
                    <p>Mark all as read</p>
                </div>
                <div id="messages_contaier">
                    <div id="message" style={{ background: '#F6FAFB' }}>
                        <div id="mini_container">
                            <div id="span" style={{ background: '#00D241', color: '#00D241' }}>.</div>
                            <img src="https://i.pinimg.com/550x/4b/0e/d9/4b0ed906554fb9f66b1afabea90eb822.jpg" alt="img" id="profile" />
                            <div id="text">
                                <p id="text_title">Your leave request was <span>approved by Sabari</span></p>
                                <div id="mini_text">
                                    <p>Today at 10:00 AM</p>
                                    <p>Unread</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="message" style={{ background: 'white' }}>
                        <div id="mini_container">
                            <div id="span" style={{ background: ' rgb(203, 90, 8)', color: ' rgb(203, 90, 8)' }}>.</div>
                            <img src="https://i.pinimg.com/550x/4b/0e/d9/4b0ed906554fb9f66b1afabea90eb822.jpg" alt="img" id="profile" />
                            <div id="text">
                                <p id="text_title">Your leave request was <span>pending by Sabari</span></p>
                                <div id="mini_text">
                                    <p>Today at 10:00 AM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="message" style={{ background: 'white' }}>
                        <div id="mini_container">
                            <div id="span" style={{ background: '#FF0000', color: '#FF0000' }}>.</div>
                            <img src="https://i.pinimg.com/550x/4b/0e/d9/4b0ed906554fb9f66b1afabea90eb822.jpg" alt="img" id="profile" />
                            <div id="text">
                                <p id="text_title">Your leave request was <span>rejected by Sabari</span></p>
                                <div id="mini_text">
                                    <p>Today at 10:00 AM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </NoteContainer>
    )
}
export default Notification;