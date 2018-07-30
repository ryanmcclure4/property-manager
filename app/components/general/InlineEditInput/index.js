// @flow
import React, { Component } from 'react';
import { Base, Input, labelStyle } from './styles';
import { withTheme } from 'styled-components';
import { ThemeContext, Label } from 'general';

type $Props = {
  value?: string,
  label?: string,
  onChange: () => {},
};

type $State = {
  isFocused: boolean,
  isHovering: boolean,
}

class InlineEditInput extends Component<$Props, $State> {

  constructor(props: $Props) {
    super(props);

    this.state = {
      isFocused: false,
      isHovering: false,
    };
  }

  _handleOnFocus = (): void => {
    this.setState({ isFocused: true }, () => {
      this.input.focus();
    });
  }

  _handleOnBlur = (): void => this.setState({ isFocused: false })

  _handleOnMouseEnter = (): void => this.setState({ isHovering: true })

  _handleOnMouseLeave = (): void => this.setState({ isHovering: false })

  render() {
    const { onChange, label, value, tabIndex, theme } = this.props;
    const { isFocused, isHovering } = this.state;
    return (
      <Base
        isFocused={isFocused}
        isHovering={isHovering}
        onClick={this._handleOnFocus}
        onMouseEnter={this._handleOnMouseEnter}
        onMouseLeave={this._handleOnMouseLeave}
        tabIndex={isFocused ? undefined : tabIndex}
        onFocus={this._handleOnFocus}
      >
        <Label
          label={label}
          style={labelStyle({ isFocused, isHovering, theme })}
        />
        {isFocused ?
          <Input
            innerRef={ref => { this.input = ref; }}
            onBlur={this._handleOnBlur}
            value={value}
            tabIndex={tabIndex}
            onChange={onChange}
          />
        :
          value
        }
      </Base>
    );
  }
}

export default withTheme(InlineEditInput);
