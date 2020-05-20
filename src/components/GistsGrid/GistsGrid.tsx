import * as React from 'react';
import GistCard from '../GistCard/GistCard';
import './GistsGrid.css';

export interface GridGistsProps {
  gists: Array<any>;
}

const GridGists: React.SFC<GridGistsProps> = ({ gists }: GridGistsProps) => {
  const getGistsRow = (startIndex: number, rowSize: number) => {
    const gistRow = [];
    for (let i = startIndex; i < startIndex + rowSize; i += 1) {
      gistRow.push(
        <div
          className="grid-gist-cell"
          style={{ flexBasis: `${100 / rowSize}%`, padding: '15px' }}
        >
          <GistCard gist={gists[i]} />
        </div>,
      );
    }
    return <div className="grid-gist-row">{gistRow}</div>;
  };
  const getGistGrid = (rowSize: number) => {
    const gistGrid = [];
    for (let i = 0; i < gists.length; i += rowSize) {
      gistGrid.push(getGistsRow(i, rowSize));
    }
    return gistGrid;
  };
  return <div className="grid-gists-container">{getGistGrid(3)}</div>;
};

export default GridGists;
