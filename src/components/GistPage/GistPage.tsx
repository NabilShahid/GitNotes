import * as React from 'react';
import { useEffect } from 'react';
import { AxiosResponse } from 'axios';
import { useParams } from 'react-router-dom';
import GistInfo from '../GistInfo/GistInfo';
import GistFile from '../GistFile/GistFile';
import { getGist, forkGist, starGist } from '../../services/apis';
import './GistPage.css';
import IconButton from '../IconButton/IconButton';
import ICONS from '../../constants/icons';

export interface GistPageProps {}

const GistPage: React.SFC<GistPageProps> = () => {
  const { id } = useParams();
  const [gist, setGist]: [any, Function] = React.useState({});
  const [forksCount, setForksCount] = React.useState(0);
  useEffect(() => {
    getGist(id).then(async (res: AxiosResponse) => {
      setGist(res.data);
      setForksCount(res.data.forks.length);
    });
  }, []);
  return (
    <div className="gist-page-container">
      <div className="gist-page-action-panel">
        {gist.owner && (
          <div style={{ flexBasis: '50%' }}>
            <GistInfo
              avatarUrl={gist.owner.avatar_url}
              userName={gist.owner.login}
              gistName={Object.keys(gist.files)[0]}
            />
          </div>
        )}
        <div className="gist-page-actions">
          <IconButton
            text="Fork"
            withCount
            count={forksCount}
            icon={ICONS.ForkIcon}
            click={() => {
              forkGist(gist.id).then(() => {
                setForksCount(forksCount + 1);
              });
            }}
          />
          <IconButton
            text="Star"
            withCount
            count={gist.forks && gist.forks.length}
            icon={ICONS.StarIcon}
            click={() => {
              starGist(gist.id).then(() => {});
            }}
          />
        </div>
      </div>
      {gist.files && (
        <GistFile
          showFileName
          fileName={Object.keys(gist.files as Array<string>)[0]}
          content={Object.values(gist.files as Array<any>)[0].content}
        />
      )}
    </div>
  );
};

export default GistPage;
