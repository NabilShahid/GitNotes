import * as React from 'react';
import { useEffect } from 'react';
import { AxiosResponse } from 'axios';
import { getGist } from '../../services/apis';
import GistInfo from '../GistInfo/GistInfo';

export interface GistCardProps {
  gist: any;
}

const GistCard: React.SFC<GistCardProps> = ({ gist }: GistCardProps) => {
  const [gistContent, setGistContent]: [string, Function] = React.useState('');
  useEffect(() => {
    getGist(gist.id).then(async (res: AxiosResponse) => {
      setGistContent(Object.values(res.data.files as Array<any>)[0].content);
    });
  }, []);
  return (
    <div className="gist-card material-box-shadow">
      {' '}
      {gist.owner && (
        <div>
          <GistInfo
            avatarUrl={gist.owner.avatar_url}
            userName={gist.owner.login}
            gistName={Object.keys(gist.files)[0]}
          />
        </div>
      )}
    </div>
  );
};

export default GistCard;
