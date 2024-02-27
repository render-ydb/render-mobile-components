import React from 'react';

export interface ViewProps extends React.HTMLAttributes<HTMLDivElement> {
  onAppear?: () => void;
  onFirstAppear?: () => void;
  onDisappear?: () => void;
}
