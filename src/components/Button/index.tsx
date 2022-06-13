import React, {PropsWithChildren} from 'react';
import {ButtonProps} from './types';
import styled from 'styled-components';

const getSelectedBackgroundColor = (style: string): string => {
  switch (style) {
    case 'secondary':
      return '#FFFFFF';
    case 'tertiary':
      return '#FAFAFA';
    case 'quaternary':
      return '#F4F4F4';
    case 'blackLine':
      return '#FFFFFF';
    case 'radiusLine':
      return '#FFFFFF';
    case 'boldAngledLine':
      return '#FFFFFF';
    default:
      return '#0075EF';
  }
};

const getDisabledBackgroundColor = (style: string): string => {
  switch (style) {
    case 'secondary':
      return '#FFFFFF';
    case 'tertiary':
      return '#FFFFFF';
    case 'quaternary':
      return '#FAFAFA';
    case 'blackLine':
      return '#FFFFFF';
    case 'radiusLine':
      return '#EEEEEE';
    case 'boldAngledLine':
      return '#EEEEEE';
    default:
      return '#B5C5D6';
  }
};

export const StyledButton = styled.button<ButtonProps>`
  width: ${({width}) => width || 'auto'};
  height: ${({height}) => height || '36px'};
  background-color: ${({style, selected, disabled}) => disabled ? getDisabledBackgroundColor(style) : selected ? getSelectedBackgroundColor(style) : '#0075EF'}
`

function Button({
    children,
    ...props
  }: PropsWithChildren<ButtonProps>): JSX.Element {
  return (
    <>
      <StyledButton {...props}>{children}</StyledButton>
    </>
  );
}

export default Button;