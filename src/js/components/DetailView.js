import React from 'react';

export const DetailView = ({children, myKind}) => (
      <li mykind={myKind} role="presentation" aria-live="polite">
        {children}
      </li>
    )
