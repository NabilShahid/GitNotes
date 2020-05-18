import * as React from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import './GitFile.css';
import ICONS from '../../constants/icons';

export interface GistFileProps {
  content: string;
  fileName: string;
  showFileName?: boolean;
}

const GistFile: React.SFC<GistFileProps> = ({
  content,
  showFileName,
  fileName,
}: GistFileProps) => {
  return (
    <div className="gist-file-container material-box-shadow">
      <div className="gist-file-name">
        <ICONS.CodeIcon
          style={{ height: '13px', width: '13px', margin: '0 5px -2px 0' }}
        />
        {showFileName && fileName}
      </div>
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
