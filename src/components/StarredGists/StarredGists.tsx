import * as React from 'react';
import GridGists from '../GistsGrid/GistsGrid';

export interface StarGistsProps {}

const StarGists: React.SFC<StarGistsProps> = () => {
  return (
    <div className="starred-gists-container">
      <section>
        <h3>You Starred Gists</h3>
        <GridGists gists={[]} />
      </section>
    </div>
  );
};

export default StarGists;
