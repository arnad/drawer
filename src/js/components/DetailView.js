import React from 'react';

export const DetailView = ({children, myKind, id}) => (
  <li id={id} mykind={myKind} role="presentation" aria-live="polite">
    {children}
  </li>
)
