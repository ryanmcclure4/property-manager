// @flow
import React from 'react';
import { Base, Message } from './styles';
import { ThemeContext, View, Icon } from 'general';

type $Props = {
  icon?: string,
  message: string,
};

const EmptyView = ({ icon, message }: $Props) => (
  <Base>
    {icon ? <Icon icon={icon} /> : false}
    <Message>
      {message}
    </Message>
  </Base>
);

export default EmptyView;
