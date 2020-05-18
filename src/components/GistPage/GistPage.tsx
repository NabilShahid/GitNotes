import * as React from 'react';
import { useEffect } from 'react';
import { AxiosResponse } from 'axios';
import { useParams } from 'react-router-dom';
import GistInfo from '../GistInfo/GistInfo';
import GistFile from '../GistFile/GistFile';
import { getGist } from '../../services/apis';

export interface GistPageProps {}

const GistPage: React.SFC<GistPageProps> = () => {
  const { id } = useParams();
  const [gist, setGist]: [any, Function] = React.useState({});
  useEffect(() => {
    getGist(id).then(async (res: AxiosResponse) => {
      setGist(res.data);
    });
  }, []);
  return (
    <div className="gist-page-container">
      {gist.owner && (
        <GistInfo
          avatarUrl={gist.owner.avatar_url}
          userName={gist.owner.login}
          gistName={Object.keys(gist.files)[0]}
        />
      )}

      <GistFile
        content={
          gist.files && Object.values(gist.files as Array<any>)[0].content
        }
      />
    </div>
  );
};

export default GistPage;
