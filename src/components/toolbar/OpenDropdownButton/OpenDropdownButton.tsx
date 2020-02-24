import * as React from 'react';
import styled, { css } from 'styled-components';
import NavFrontendChevron from 'nav-frontend-chevron';
import themes from '../../../styles/themes';
import SearchIcon from '../../../img/icons/SearchIcon';

interface ButtonDivProps {
    active: boolean;
}

const activeStyle = css`
  &:hover {
    text-decoration: underline;
  }
  & > * {
    color: ${themes.color.navBla}
  }
`;

const SearchIconBlue = styled(SearchIcon)`
  fill: ${themes.color.navBla};
  position: absolute;
  margin-left: -1em;
`;

const ButtonDiv = styled.div`
  display: flex;
  cursor: pointer;
  border-left: 1px solid ${themes.color.navGra20};
  align-items: center;
  justify-content: flex-start;
  height: 100%

  ${(props: ButtonDivProps) => props.active && activeStyle};
`;

const DropdownButtonButton = styled.button`
  padding: 1em 2em 1em 1em;
  margin: 0;
  width: 100%;
  background: none;
  cursor: pointer;
  border: none;

  &::after {
    background-image: 1;
  }
`;

const DropdownButtonChevron = styled(NavFrontendChevron)`
  transform: translateX(50%);
`;

const SearchIconWrapper = styled.span`
  padding: 1em;
`;

interface AssignToVeilederButtonProps {
    text: string;
    userIsChecked: boolean;
    onClick: () => void;
    showList: boolean;
    search: boolean;
}

const chevronType = (showList: boolean) => {
    return showList
        ? 'opp'
        : 'ned';
};

const OpenDropdownButton = (props: AssignToVeilederButtonProps) => {
    return (<ButtonDiv className="openDropdownButton" active={props.userIsChecked}>
        <DropdownButtonButton className="openDropdownButton__button" onClick={props.onClick}>
            {props.search &&
                <SearchIconWrapper>
                    <SearchIconBlue className="inputWithSearchIcon__icon"/>
                </SearchIconWrapper>
            }
            {props.text}
            <DropdownButtonChevron className="openDropdownButton__chevron" type={chevronType(props.showList)}/>
        </DropdownButtonButton>
    </ButtonDiv>);
};

export default OpenDropdownButton;
