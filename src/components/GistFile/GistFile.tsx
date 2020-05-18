import * as React from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import './GitFile.css';

export interface GistFileProps {
  content: string;
}

const GistFile: React.SFC<GistFileProps> = ({ content }: GistFileProps) => {
  return (
    <div className="gist-file-container material-box-shadow">
      <CodeMirror
        className="code-mirror-custom"
        value={content}
        options={{
          mode: 'javascript',
          theme: 'xq-light',
          lineNumbers: true,
        }}
        // onChange={(editor, data, value) => {}}
      />
    </div>
  );
};

export default GistFile;
