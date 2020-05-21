import * as React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import './PublicGists.css';
import ICONS from '../../constants/icons';
import Table from '../Table/Table';
import GistsGrid from '../GistsGrid/GistsGrid';
import { getPublicGists, getGist } from '../../services/apis';
import GISTS_VIEW_TYPES, {
  PUBLIC_GISTS_TOTAL_PAGES,
  PUBLIC_GISTS_PAGE_SIZE,
} from '../../constants/common-consts';
import PaginationControl from '../PaginationControl/PaginationControl';

export interface PublicGistsProps {
  searchText?: string;
}

const iconStyle = { width: '22px', height: '22px' };
let timeout: NodeJS.Timeout;
const PublicGists: React.SFC<PublicGistsProps> = ({
  searchText,
}: PublicGistsProps) => {
  const [gists, setGists]: [Array<any>, Function] = React.useState([]);
  const [currentPage, setCurrentPage]: [number, Function] = React.useState(1);
  const [totalPages, setTotalPages]: [number, Function] = React.useState(
    PUBLIC_GISTS_TOTAL_PAGES,
  );
  const [currentView, setCurrentView]: [string, Function] = React.useState(
    GISTS_VIEW_TYPES.Table,
  );
  const getGistWithSearchAndPageNumber = () => {
    if (searchText === '') {
      getPublicGists(currentPage, PUBLIC_GISTS_PAGE_SIZE).then((res: any) => {
        setGists(res.data);
        setTotalPages(PUBLIC_GISTS_TOTAL_PAGES);
      });
      return;
    }
    getGist(searchText || '')
      .then((res) => {
        setGists([res.data]);
        setTotalPages(1);
      })
      .catch(() => {
        setGists([]);
        setTotalPages(1);
      });
  };
  useEffect(() => {
    // throttling on search text
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(getGistWithSearchAndPageNumber, 500);
  }, [searchText, currentPage]);
  return (
    <div className="public-gists-main-container">
      <div className="text-align-right" style={{ margin: '20px 0px' }}>
        <div className="cursor-pointer">
          <div className="public-gists-right-seperator">
            <ICONS.GridViewIcon
              style={{
                ...iconStyle,
                fill:
                  currentView === GISTS_VIEW_TYPES.Grid
                    ? 'var(--main-color)'
                    : '#d9d9d9',
              }}
              onClick={() => {
                setCurrentView(GISTS_VIEW_TYPES.Grid);
              }}
            />
          </div>
          <div style={{ display: 'inline-block' }}>
            <ICONS.ListViewIcon
              style={{
                ...iconStyle,
                fill:
                  currentView === GISTS_VIEW_TYPES.Table
                    ? 'var(--main-color)'
                    : '#d9d9d9',
              }}
              onClick={() => {
                setCurrentView(GISTS_VIEW_TYPES.Table);
              }}
            />
          </div>
        </div>
      </div>
      <div>
        {currentView === GISTS_VIEW_TYPES.Table ? (
          <Table gists={gists} />
        ) : (
          <GistsGrid gists={gists} />
        )}
      </div>
      <div>
        <PaginationControl
          currentPage={currentPage}
          totalPages={totalPages}
          nextPage={() => {
            if (currentPage + 1 <= totalPages) {
              setCurrentPage(currentPage + 1);
              // getGistWithSearchAndPageNumber();
            }
          }}
          prevPage={() => {
            if (currentPage - 1 >= 1) {
              setCurrentPage(currentPage - 1);
              // getGistWithSearchAndPageNumber();
            }
          }}
        />
      </div>
    </div>
  );
};
/**
 * state to props mapping
 */
const mapStateToProps = (state: any) => {
  return {
    searchText: state.commonReducer.SearchText,
  };
};

export default connect(mapStateToProps, null)(PublicGists);
