import React from 'react';
import Tower from "../bilder/380212.jpg";
import styled from "styled-components";

const Image = styled.img `
   width: 100%;
   opacity: 0.4;
   z-index: -1; 
`;

const MainView: React.FC = () => {
    return (
            <Image src={Tower}/>
    );
};

export default MainView;
