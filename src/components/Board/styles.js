import styled from "styled-components"
import * as palette from "../../styles/variables"

export const BoardContainer = styled.div`
#BoardContainer {
    background: red;
    height: 100vh;
}
#BoardContainer #side_menu {
    width: 254px;
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
`