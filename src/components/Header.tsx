import React from 'react';
import styled from "styled-components";

/*shift+f6 for å endre globalt.
ctrl + d for å kopiere.
ctrl + w for å markere også slette
padding, 2 parameter: top/bot left/right

shift+alt opp eller ned for å flytte
*/


interface IMenuItem {
    label: string;
    anchorPoint: string;
}

const menuItems: IMenuItem[] = [
    {
        label: 'Hjem',
        anchorPoint: '../components/MainView.tsx'
    },
    {
        label: 'Om meg',
        anchorPoint: '../components/AboutMe.tsx'
    },
    {
        label: 'Kontakt',
        anchorPoint: '../components/Contacts.tsx'
    }
];

const HeaderWrapper = styled.header`
    width: 100%;
    background: #3374a3;
    
`;
const MenuItemWrapper = styled.div`
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
`;
const AnchorWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`
const Anchor = styled.a`
  text-decoration: none;
  font-family: 'Open Sans Condensed', sans-serif;
    font-size: 30px;
    color: white;
    cursor: pointer;
`;

const Header: React.FC = () => {
    return (
        <HeaderWrapper>
            <MenuItemWrapper>
                {menuItems.map(menuItem =>
                    <AnchorWrapper>
                        <Anchor>
                            {menuItem.label}
                        </Anchor>
                    </AnchorWrapper>
                )}
            </MenuItemWrapper>
        </HeaderWrapper>
    );
}

export default Header;
