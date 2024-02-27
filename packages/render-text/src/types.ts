import React from 'react';

export interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  numberOfLines?: number | string;
}
