import * as React from 'react';
import { useParams } from 'react-router-dom';

export interface GistPageProps {}

const GistPage: React.SFC<GistPageProps> = () => {
  const { id } = useParams();
  return (
    <div>
      User Gist:
      {id}
    </div>
  );
};

export default GistPage;
