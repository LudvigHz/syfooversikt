import * as React from 'react';
import styled from 'styled-components';
import DropdownButton from './DropdownButton';

export interface DropdownButtonTexts {
    assign: string;
    reset: string;
}

interface DropdownButtonsProps {
    cancelButtonHandler: () => void;
    chosenVeilederIdent: string;
    chooseButtonHandler: (chosenVeilederIdent: string) => void;
    veilederIsChosen: boolean;
    texts: DropdownButtonTexts;
}

const DropdownButtonsDiv = styled.div`
  margin: 2em .5em 1em .5em;
  display: flex;
  > :nth-child(2) {
    > :nth-child(1) {
      margin-left: -2em;
    }
  }
`;

export const DropdownButtons = ((props: DropdownButtonsProps) => {
    const {
        cancelButtonHandler,
        chosenVeilederIdent,
        chooseButtonHandler,
        texts,
    } = props;

    return (<DropdownButtonsDiv className="confirmVeilederButtons">
        <DropdownButton
            classNameElement="choose"
            onClick={() => chooseButtonHandler(chosenVeilederIdent)}
            text={texts.assign}
            type={'standard'}/>

        <DropdownButton
            classNameElement="close"
            onClick={cancelButtonHandler}
            text={texts.reset}
            type={'flat'}/>
    </DropdownButtonsDiv>);
});
