import * as React from 'react';
import { useEffect } from 'react';
import { AxiosResponse } from 'axios';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import GistInfo from '../GistInfo/GistInfo';
import {
  getGist,
  forkGist,
  starGist,
  updateGist,
  deleteGist,
} from '../../services/apis';
import GistFile from '../GistFile/GistFile';
import './GistPage.css';
import IconButton from '../IconButton/IconButton';
import ICONS from '../../constants/icons';
import confirmDialog, { alertDialog } from '../../services/dialogService';

export interface GistPageProps {
  gistId?: string;
  fileHeight?: string;
  login?: string;
}

const GistPage: React.SFC<GistPageProps> = ({
  gistId,
  fileHeight,
  login,
}: GistPageProps) => {
  const { id } = useParams();
  const [gist, setGist]: [any, Function] = React.useState({});
  const [forksCount, setForksCount] = React.useState(0);
  const [readOnly, setReadOnly]: [boolean, Function] = React.useState(true);
  // const [userIsGistOwner, setUserIsGistOwner]: [
  //   boolean,
  //   Function,
  // ] = React.useState(false);
  let updatedFileConent = '';
  const getUpdatedContent = (value: string) => {
    updatedFileConent = value;
  };
  useEffect(() => {
    getGist(gistId || id).then((res: AxiosResponse) => {
      setGist(res.data);
      setForksCount(res.data.forks.length);
      updatedFileConent = Object.values(res.data.files as Array<any>)[0]
        .content;
    });
  }, []);
  const userIsGistOwner = gist.owner && gist.owner.login === login;
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
          {readOnly && userIsGistOwner && (
            <IconButton
              text="Edit"
              icon={ICONS.EditIcon}
              click={() => {
                setReadOnly(false);
              }}
            />
          )}
          {!readOnly && (
            <IconButton
              text="Save"
              icon={ICONS.SaveIcon}
              click={() => {
                confirmDialog().then(() => {
                  updateGist(gist.id, {
                    files: {
                      [Object.keys(gist.files as Array<string>)[0]]: {
                        content: updatedFileConent,
                      },
                    },
                  }).then(() => alertDialog('Successfully Updated !'));
                  setReadOnly(true);
                });
              }}
            />
          )}

          {userIsGistOwner && (
            <IconButton
              text="Delete"
              icon={ICONS.DeleteIcon}
              click={() => {
                deleteGist(gist.id).then(() => {});
              }}
            />
          )}
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
          getUpdatedContent={getUpdatedContent}
          height={fileHeight}
          readOnly={readOnly}
        />
      )}
    </div>
  );
};

/**
 * state to props mapping
 */
const mapStateToProps = (state: any) => {
  return {
    login: state.userReducer.User.Login,
  };
};
export default connect(mapStateToProps, null)(GistPage);
