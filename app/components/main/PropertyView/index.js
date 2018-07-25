import React, { Component } from 'react';
import { View, Header } from '../../general';
import { db, Contact } from '../../../api';
import { css } from 'aphrodite';
import style from './style';

class PropertyView extends Component {
  render() {
    console.log('PROEPRTYY', this.props.property);
    return (
      <View title={this.props.property && this.props.property.name} styles={style.base}>
      </View>
    );
  }
}

export default PropertyView;
