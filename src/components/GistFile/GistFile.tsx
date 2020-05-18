import * as React from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import './GitFile.css';

export interface GistFileProps {}

const GistFile: React.SFC<GistFileProps> = () => {
  return (
    <div className="gist-file-container material-box-shadow">
      <CodeMirror
        className="code-mirror-custom"
        value="<h1>I ♥ react-codemirror2</h1>"
        options={{
          mode: 'javascript',
          theme: 'xq-light',
          lineNumbers: true,
        }}
        onChange={(editor, data, value) => {}}
      />
    </div>
  );
};

export default GistFile;
