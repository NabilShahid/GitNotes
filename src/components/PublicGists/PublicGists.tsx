import * as React from 'react';
import { useEffect } from 'react';
import './PublicGists.css';
import ICONS from '../../constants/icons';
import Table from '../Table/Table';
import GistsGrid from '../GistsGrid/GistsGrid';
import { getPublicGists } from '../../services/apis';
import GISTS_VIEW_TYPES from '../../constants/common-consts';

export interface PublicGistsProps {}

const iconStyle = { width: '22px', height: '22px' };
const PublicGists: React.SFC<PublicGistsProps> = () => {
  const [gists, setGists]: [Array<any>, Function] = React.useState([]);
  const [currentView, setCurrentView]: [string, Function] = React.useState(
    GISTS_VIEW_TYPES.Table,
  );
  useEffect(() => {
    getPublicGists(1, 50).then((res: any) => {
      setGists(res.data);
    });
  }, []);
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
    </div>
  );
};

export default PublicGists;
