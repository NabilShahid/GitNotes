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
    getGist(id).then((res: AxiosResponse) => {
      setGist(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <div className="gist-page-container">
      <GistInfo avatarUrl={gist.owner && gist.owner.avatar_url} />
      <GistFile />
    </div>
  );
};

export default GistPage;
