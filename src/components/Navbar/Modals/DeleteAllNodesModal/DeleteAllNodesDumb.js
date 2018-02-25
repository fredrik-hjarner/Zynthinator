import React from 'react';
import { BestModal } from 'components/semantic++';

export const DeleteAllNodesDumb =
  props => (
    <BestModal
      {...props}
      form=""
      header="Delete all nodes"
      description="Simply delete all the nodes."
      okButtonString="Delete!"
    />
  );

