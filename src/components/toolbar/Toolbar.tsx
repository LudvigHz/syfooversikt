import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import TildelVeileder from './AssignVeileder/TildelVeileder';
import themes from '../../styles/themes';
import { Veileder } from '../../store/veiledere/veiledereTypes';
import { Veilederinfo } from '../../store/veilederinfo/veilederinfoTypes';
import { Checkbox } from 'nav-frontend-skjema';
import { OverviewTabType } from '../../konstanter';
import Pagination from '../PaginationRow';
import SearchVeileder from './SearchVeileder/SearchVeileder';
import { updateVeilederIdentsFilter } from '../../store/filters/filter_actions';

export interface ToolbarProps {
  aktivVeilederInfo: Veilederinfo;
  alleMarkert: boolean;
  numberOfItemsTotal: number;
  buttonHandler: (veilederIdent: string) => void;
  checkAllHandler: (checked: boolean) => void;
  onPageChange: (startItem: number, endItem: number) => void;
  veiledere: Veileder[];
  markertePersoner: string[];
  tabType: OverviewTabType;
}

const tekster = {
  showMore: 'Se alle',
  selectAll: 'Velg alle',
  showLess: 'Vis færre',
};

const Innhold = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .5em;
  background-color: ${themes.color.white};
`;

const Element = styled.div`
  display: flex;
  border: 2px solid white;
  & > div:not(:nth-child(2)) {
    padding: 1em;
  }
`;

const TogglePagination = styled.p`
  cursor: pointer;
  :hover {
    border-bottom: 1px solid ${themes.color.navGra40};
  }
`;

const PaginationContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
`;

const VelgBoks = styled(Checkbox)`
  margin: 0 !important;
  padding: 1em 1em !important;
`;

const PAGINATED_NUMBER_OF_ITEMS = 50;

const Toolbar = (props: ToolbarProps) => {

  const [ numberOfItemsPerPage, setNumberOfItemsPerPage ] = useState(PAGINATED_NUMBER_OF_ITEMS);
  const dispatch = useDispatch();

  const onTogglePaginationClick = () => {
    if (numberOfItemsPerPage === props.numberOfItemsTotal) {
      setNumberOfItemsPerPage(PAGINATED_NUMBER_OF_ITEMS);
    } else {
      setNumberOfItemsPerPage(props.numberOfItemsTotal);
    }
  };

  const getTogglePaginationText = () => {
    if (numberOfItemsPerPage === props.numberOfItemsTotal) {
      return tekster.showLess;
    }
    return tekster.showMore;
  };

  const shouldShowTogglePagination = props.numberOfItemsTotal > PAGINATED_NUMBER_OF_ITEMS;

  const onVeilderIdentsChange = (veilederIdents: string[]) => {
    dispatch(updateVeilederIdentsFilter(veilederIdents));
  };

  return (<Innhold className="blokk-xs">
    <Element>
      <VelgBoks
        className="toolbar__velgBoks"
        label={tekster.selectAll}
        checked={props.alleMarkert}
        onChange={(event) => {
          props.checkAllHandler(event.target.checked);
        }}
      />
      <TildelVeileder {...props} />
      <SearchVeileder onSelect={onVeilderIdentsChange} {...props} />
    </Element>
    <PaginationContainer>
      {shouldShowTogglePagination &&
        <TogglePagination onClick={onTogglePaginationClick}>{getTogglePaginationText()}</TogglePagination>
      }
      <Pagination
        numberOfItems={props.numberOfItemsTotal}
        startPage={0}
        maxNumberPerPage={numberOfItemsPerPage}
        onPageChange={(start, end, pageNumber) => {
          props.onPageChange(start, end);
        }} />
    </PaginationContainer>
  </Innhold>);
};

export default Toolbar;
