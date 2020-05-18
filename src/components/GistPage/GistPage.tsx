import * as React from 'react';
import { useParams } from 'react-router-dom';
import GistInfo from '../GistInfo/GistInfo';

export interface GistPageProps {}

const GistPage: React.SFC<GistPageProps> = () => {
  const { id } = useParams();
  return (
    <div>
      User Gist:
      {id}
      <GistInfo />
    </div>
  );
};

export default GistPage;
