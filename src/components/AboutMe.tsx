import React from 'react';
import styled from "styled-components";

const H1Wrapper = styled.h1`
    display: flex;
    justify-content: center;
`;
const AboutMe: React.FC = () => {
    return (
        <H1Wrapper>
        <h1>Rambi Ji Nguyen</h1>
        </H1Wrapper>
    );
}

export default AboutMe;
