import * as React from 'react';
import './Table.css';

export interface TableProps {}

const Table: React.SFC<TableProps> = () => {
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
        <div className="table-body-row">
          <div className="table-col">Name</div>
          <div className="table-col">Date</div>
          <div className="table-col">Time</div>
          <div className="table-col">Keyword</div>
          <div className="table-col">Notebook Name</div>
        </div>
        <div className="table-body-row">
          <div className="table-col">Name</div>
          <div className="table-col">Date</div>
          <div className="table-col">Time</div>
          <div className="table-col">Keyword</div>
          <div className="table-col">Notebook Name</div>
        </div>
        <div className="table-body-row">
          <div className="table-col">Name</div>
          <div className="table-col">Date</div>
          <div className="table-col">Time</div>
          <div className="table-col">Keyword</div>
          <div className="table-col">Notebook Name</div>
        </div>
        <div className="table-body-row">
          <div className="table-col">Name</div>
          <div className="table-col">Date</div>
          <div className="table-col">Time</div>
          <div className="table-col">Keyword</div>
          <div className="table-col">Notebook Name</div>
        </div>
        <div className="table-body-row">
          <div className="table-col">Name</div>
          <div className="table-col">Date</div>
          <div className="table-col">Time</div>
          <div className="table-col">Keyword</div>
          <div className="table-col">Notebook Name</div>
        </div>
        <div className="table-body-row">
          <div className="table-col">Name</div>
          <div className="table-col">Date</div>
          <div className="table-col">Time</div>
          <div className="table-col">Keyword</div>
          <div className="table-col">Notebook Name</div>
        </div>
      </div>
    </div>
  );
};

export default Table;
