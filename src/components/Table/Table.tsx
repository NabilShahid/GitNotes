import * as React from 'react';
import moment from 'moment';
import './Table.css';
import { useEffect, useState } from 'react';
import { getPublicGists } from '../../services/apis';
import UserAvatar from '../UserAvatar/UserAvatar';
import history from '../../services/history';

export interface TableProps {}

const Table: React.SFC<TableProps> = () => {
  const [gists, setGists]: [any, any] = useState([]);
  useEffect(() => {
    getPublicGists(1, 50).then((res: any) => {
      setGists(res.data);
    });
  }, []);
  return (
    <div className="table-container">
      <div className="table-header">
        <div className="table-header-row">
          <div className="table-col">Name</div>
          <div className="table-col">Date</div>
          <div className="table-col">Time</div>
          <div className="table-col">Keyword</div>
          <div className="table-col">Notebook Name</div>
        </div>
      </div>
      <div className="table-body">
        {gists.length > 0 &&
          gists.map((gist: any) => {
            return (
              <div
                className="table-body-row"
                onClick={() => {
                  history.push(`gist/${gist.id}`);
                }}
                role="button"
                onKeyPress={() => {}}
                tabIndex={0}
              >
                <div className="table-col">
                  <div style={{ display: 'flex' }}>
                    <div>
                      <UserAvatar
                        src={gist.owner.avatar_url}
                        style={{ width: '30px', marginRight: '7px' }}
                      />
                    </div>
                    <div style={{ marginTop: '4px' }}>{gist.owner.login}</div>
                  </div>
                </div>
                <div className="table-col">
                  {moment(gist.created_at).format('DD-MMM-YYYY')}
                </div>
                <div className="table-col">
                  {moment(gist.created_at).format('HH:mm A')}
                </div>
                <div className="table-col">{gist.description}</div>
                <div className="table-col">{Object.keys(gist.files)[0]}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Table;
