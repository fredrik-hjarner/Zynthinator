import React from 'react';
import {
  Segment,
  Icon,
} from 'semantic-ui-react';

export const SimpleWindowDumb = (props) => {
  const {
    children,
    title,
    settingsminimized,
  } = props;

  const childrenWithProps =
    React.Children.map(children, child =>
      React.cloneElement(child, { settingsminimized }));

  return (
    <Segment.Group compact raised size="tiny" style={{ marginLeft: '10px' }}>
      <Segment inverted>
        {title}
        <div style={{ float: 'right' }}>
          <Icon name="setting" onClick={props.onMinimizeSettings} />
          <Icon name="window minimize" onClick={props.onMinimizeWindow} />
          <Icon name="close" />
        </div>
      </Segment>
      {props.minimized ? null : <Segment>{childrenWithProps}</Segment>}
    </Segment.Group>
  );
};

