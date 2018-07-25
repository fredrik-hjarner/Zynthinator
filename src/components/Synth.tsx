import * as React from 'react';
import {
	// AllTriggers,
	MessageModal,
	ModalWindow,
	NodeGraph,
} from '../components';

export const Synth = () => (
	<div>
		<NodeGraph />
		<ModalWindow />
		<MessageModal />
	</div>
);
