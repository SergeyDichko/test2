import styled from '@emotion/styled'


export const Statistic = styled.section`
     background-color: rgb(0, 0, 111);
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 50px;
`;

export const Title = styled.h2`
 font-size: 1.4rem;
        color: white;
`;

export const List = styled.ul`
  display: flex;
        list-style: none;
        justify-content: center;
        width: 70%;
        border-radius: 20px;
`;

export const Items = styled.li`
 display: flex;
        flex-direction: column;
        gap: 10px;
        flex-grow: 1;
        background-color: ${getRandomHexColor};
        padding: 10px;

`;
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}