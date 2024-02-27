import React from 'react';

export interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href?: string;
}
