import * as React from 'react';
import { useEffect } from 'react';
import './PublicGists.css';
import ICONS from '../../constants/icons';
import Table from '../Table/Table';
import { getPublicGists } from '../../services/apis';

export interface PublicGistsProps {}

const iconStyle = { width: '22px', height: '22px', fill: '#d9d9d9' };
const PublicGists: React.SFC<PublicGistsProps> = () => {
  const [gists, setGists]: [Array<any>, Function] = React.useState([]);
  useEffect(() => {
    getPublicGists(1, 50).then((res: any) => {
      setGists(res.data);
    });
  }, []);
  return (
    <div className="public-gists-main-container">
      <div className="text-align-right" style={{ margin: '20px 0px' }}>
        <div>
          <div className="public-gists-right-seperator">
            <ICONS.GridViewIcon style={iconStyle} />
          </div>
          <div style={{ display: 'inline-block' }}>
            <ICONS.ListViewIcon style={iconStyle} />
          </div>
        </div>
      </div>
      <div>
        <Table gists={gists} />
      </div>
    </div>
  );
};

export default PublicGists;
