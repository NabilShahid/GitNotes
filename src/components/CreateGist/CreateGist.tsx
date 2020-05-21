import * as React from 'react';
import './CreateGist.css';
import GistFile from '../GistFile/GistFile';

export interface CreateGistProps {}

const CreateGist: React.SFC<CreateGistProps> = () => {
  const [fileName, setFileName]: [string, Function] = React.useState('');
  const [description, setDescription]: [string, Function] = React.useState('');
  const [gistContent, setGistContent]: [string, Function] = React.useState('');
  return (
    <div className="create-gist-container">
      <div className="create-gist-row">
        <div className="create-gist-label">File Name:</div>
        <div className="create-gist-control-container">
          <input
            type="text"
            className="create-gist-control"
            value={fileName}
            onInput={(e: any) => {
              setFileName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="create-gist-row">
        <div className="create-gist-label">Description:</div>
        <div className="create-gist-control-container">
          <textarea
            className="create-gist-control"
            value={description}
            onInput={(e: any) => {
              setDescription(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="create-gist-row">
        <div className="create-gist-label">Description:</div>
        <div className="create-gist-control-container">
          <GistFile
            fileName={fileName}
            content={gistContent}
            getUpdatedContent={(value: string) => {
              setGistContent(value);
            }}
            height="200px"
            readOnly={false}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateGist;
