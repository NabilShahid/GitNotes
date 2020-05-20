import * as React from 'react';

export interface GridGistsProps {
  gists: Array<any>;
}

const GridGists: React.SFC<GridGistsProps> = ({ gists }: GridGistsProps) => {
  const getGistsRow = (startIndex: number, rowSize: number) => {
    const gistRow = [];
    for (let i = startIndex; i < startIndex + rowSize; i += 1) {
      gistRow.push(<div>{gists[i].id}</div>);
    }
    return <div className="grid-gist-row">{gistRow}</div>;
  };
  const getGistGrid = (rowSize: number) => {
    const gistGrid = [];
    for (let i = 0; i < gists.length; i += rowSize) {
      gistGrid.push(
        <div style={{ marginTop: '20px' }}>{getGistsRow(i, rowSize)}</div>,
      );
    }
    return <div>{gistGrid}</div>;
  };
  return <div className="grid-gists-container">{getGistGrid(5)}</div>;
};

export default GridGists;
