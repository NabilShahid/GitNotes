import * as React from 'react';

export interface IconButtonProps {
  icon: SVGAElement;
  text: string;
  click: (event: React.MouseEvent<HTMLButtonElement>) => void;
  withCount?:number;
  count?: number;
}

const IconButton: React.SFC<IconButtonProps> = ({
  text,
  click,
}: IconButtonProps) => {
  return (
    <>
      <button type="button" onClick={click}>
        {text}
      </button>
    </>
  );
};

export default IconButton;
