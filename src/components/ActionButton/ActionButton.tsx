import * as React from 'react';

export interface ActionButtonProps {
  text:string
}

const ActionButton: React.SFC<ActionButtonProps> = ({
  text,
}: ActionButtonProps) => {
  return <button type="button" style={{ color: 'red' }}>{text}</button>;
};

export default ActionButton;
