import React, { PropsWithChildren } from 'react';
import { TitleFontProps } from './type';
import { Title } from './style';

function TitleFont({
  title,
  size,
  weight,
  children,
}: PropsWithChildren<TitleFontProps>): JSX.Element {
  return (
    <>
      <Title>{title}</Title>
    </>
  );
}

export default TitleFont;