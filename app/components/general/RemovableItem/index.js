// @flow
import React, { Component } from 'react';
import { Base } from './styles';
import { ThemeContext, IconButton } from 'general';

type $Props = {
  label: string,
  onClick?: () => {},
  onRemove?: () => {},
  style?: Object,
};

type $State = {
  isHovering: boolean,
};

class RemovableItem extends Component<$Props, $State> {

  state = {
    isHovering: false,
  }

  _handleMouseEnter = (): void => this.setState({ isHovering: true })

  _handleMouseLeave = (): void => this.setState({ isHovering: false })

  render() {
    const { label, onClick, onRemove, style } = this.props;
    const { isHovering } = this.state;

    return (
      <Base
        isHovering={isHovering}
        style={style}
        onClick={onClick}
        onMouseEnter={this._handleMouseEnter}
        onMouseLeave={this._handleMouseLeave}
      >
        {label} 
        {isHovering ?
          <IconButton
            icon="remove-circle-outline"
            onClick={onRemove}
          />
        : false}
      </Base>
    );
  }
}

export default RemovableItem;
