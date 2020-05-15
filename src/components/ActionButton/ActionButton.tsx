import * as React from 'react';
import './ActionButton.css';

export interface ActionButtonProps {
  text: string;
}

const ActionButton: React.SFC<ActionButtonProps> = ({
  text,
}: ActionButtonProps) => {
  return (
    <button type="button" className="action-button">
      {text}
    </button>
  );
};

export default ActionButton;
