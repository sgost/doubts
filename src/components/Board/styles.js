import styled from "styled-components"

export const BoardContainer = styled.div`
#BoardContainer {
    display: flex;
    height: 100vh;
}
#BoardContainer #side_menu {
    width: 18%;
    height: 100%;
    background: #363740;
    padding: 46px 0 0 0;
}
#BoardContainer #side_menu h1 {
    font-size: 20px;
color: #A4A6B3;
opacity: 0.7;
font-size: 20px;
display: flex;
align-items: center;
padding: 0 24px;
}
#BoardContainer #side_menu h1 img {
    width: 31px;
    height: 31px;
    margin: 0 12px 0 0;
}
#BoardContainer #side_menu ul {
    margin: 62px 0 0 0;
}
#BoardContainer #side_menu ul:nth-child(3) {
    margin: 0;
    padding: 15px 0 0 0;
    border-top: 1px solid #dfe0eb38;
}
#BoardContainer #side_menu ul li {
    color: #A4A6B3;
    cursor: pointer;
    height: 56px;
    display: flex;
    align-items: center;
    padding: 0 28px;
}
#BoardContainer #side_menu ul li img {
    width: 16px;
    height: 16px;
    margin: 0 24px 0 0;
}
#BoardContainer #side_menu ul li #img2 {
    display: none;
}
#BoardContainer #side_menu ul li:hover {
    color: #DDE2FF;
    background: #9fa2b43d;
    border-left: 3px solid white;
}
#BoardContainer #side_menu ul li:hover #img1 {
    display: none;
}
#BoardContainer #side_menu ul li:hover #img2 {
    display: block;
}




#BoardContainer #main_menu {
    background: white;
    height: 100%;
    width: 85%;
    padding: 30px 33px;
}
#BoardContainer #main_menu #header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 30px 0;
}
#BoardContainer #main_menu #header h1 {
    font-size: 22px;
color: #252733;
}
#BoardContainer #main_menu #header #mini_block{
    display: flex;
    align-items: center;
}
#BoardContainer #main_menu #header #mini_block img{
    width: 16px;
    height: 16px;
    cursor: pointer;
}
#BoardContainer #main_menu #header #mini_block #notificaton{
    margin: 0 0 0 25px;
}
#BoardContainer #main_menu #header #mini_block button{
    width: 142px;
    height: 48px;
    font-size: 14px;
    color: white;
    border: none;
    outline: none;
    background: #3751FF;
    cursor: pointer;
box-shadow: 0px 4px 12px rgba(55, 81, 255, 0.24);
border-radius: 8px;
margin: 0 48px 0 0;
}
#BoardContainer #main_menu #header #mini_block #mini_block_name{
    display: flex;
    align-items: center;
    margin: 0 0 0 32px;
    padding: 0 0 0 32px;
    border-left: 1px solid #DFE0EB;
}
#BoardContainer #main_menu #header #mini_block #mini_block_name img{
    width: 44px;
    height: 44px;
    margin: 0 0 0 14px;
    border-radius: 30px;
    border: 2px solid #C4C4C4;
}




#BoardContainer #main_menu #score {
    width: 100%;
    display: grid;
    grid-template-columns: 276px 276px 276px 276px;
    grid-template-rows: 134px;
    grid-gap: 30px;
}
#BoardContainer #main_menu #score #score_card {
    background: #FFFFFF;
box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.14), 0px 18px 40px rgba(0, 0, 0, 0.06);
border-radius: 8px;
padding: 16px 0 16px 18px;
display: flex;
align-items: center;
}
#BoardContainer #main_menu #score #score_card #score {
    color: #0C1EFF;
    width: 76px;
height: 76px;
background: #F2F3FF;
display: flex;
justify-content: center;
align-items: center;
border-radius: 8px;
}
#BoardContainer #main_menu #score #score_card:nth-child(2) #score {
    color: #14DB51;
background: #F2FFF6;
}
#BoardContainer #main_menu #score #score_card:nth-child(3) #score {
    color: #FF9900;
background: #FFF7EB;
}
#BoardContainer #main_menu #score #score_card:nth-child(4) #score {
    color: #E02424;
background: #FFF8F8;
}
#BoardContainer #main_menu #score #score_card p {
    width: 120px;
    font-size: 16px;
line-height: 26px;
letter-spacing: 0.3px;
color: #252733;
margin: 0 0 0 16px;
}
#BoardContainer #main_menu #score #score_card:nth-child(2) p {
    width: 140px;
}
#BoardContainer #main_menu #score #score_card:nth-child(3) p {
    width: 140px;
}



#BoardContainer #main_menu #message #message_block1 {
    display: grid;
    grid-template-columns: 79px 147px 229px 229px 250px 129px 77px;
    grid-template-rows: 40px;
    grid-gap: 8px;
    margin: 30px 0 0 0;
}
#BoardContainer #main_menu #message #message_block1 h3 {
font-size: 16px;
font-style: normal;
font-weight: 600;
color: #252733;
padding: 0 10px;
background: #F2F3F7;
border-radius: 4px;
display: flex;
align-items: center;
}
#BoardContainer #main_menu #message #message_block2{
    width: 100%;
    height: 400px;
    overflow: scroll;
    overflow-x: hidden;
}
#BoardContainer #main_menu #message #message_block2::-webkit-scrollbar {
  width: 0;
}

#BoardContainer #main_menu #message:hover #message_block2::-webkit-scrollbar {
  width: 5px;
}

/* Track */
#BoardContainer #main_menu #message #message_block2::-webkit-scrollbar-track {
  background: none; 
}
 
/* Handle */
#BoardContainer #main_menu #message #message_block2::-webkit-scrollbar-thumb {
  background: #F2F3F7; 
}

/* Handle on hover */
#BoardContainer #main_menu #message #message_block2::-webkit-scrollbar-thumb:hover {
  background: #363740; 
}
#BoardContainer #main_menu #message #message_block2 #task_container {
    display: grid;
    grid-template-columns: 79px 147px 229px 229px 250px 129px 77px;
    grid-template-rows: 40px;
    grid-gap: 8px;
    border-bottom: 1px solid #EDEDEE;
    padding: 10px 0;
    cursor: pointer;
    transition: 0.5s ease-in-out;
}
#BoardContainer #main_menu #message #message_block2 #task_container:hover {
    border-bottom: 2px solid #EDEDEE;
}
#BoardContainer #main_menu #message #message_block2 #task_container:nth-child(1) {
    margin: 30px 0 0 0;
}
#BoardContainer #main_menu #message #message_block2 #task_container p {
    padding: 0 0 0 10px;
    display: flex;
    align-items: center;
    font-weight: 600;
font-size: 16px;
color: #252733;
}
#BoardContainer #main_menu #message #message_block2 #task_container p:nth-child(7) {
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
#BoardContainer #main_menu #message #message_block2 #task_container .delete_icon:hover {
    color: red;
    cursor: pointer;
}
`