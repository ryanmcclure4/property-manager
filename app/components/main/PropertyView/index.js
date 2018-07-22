import React, { Component } from 'react';
import { View, Header } from '../../general';
import { db, Contact } from '../../../api';
import { css } from 'aphrodite';
import style from './style';

class PropertyView extends Component {
  render() {
    console.log('PROPERTIES', this.props.properties);
    return (
      <View title="Property" styles={style.base}>
        <ul>
         {this.props.properties.map(property => (
            <li>{property.name}</li>
         ))} 
        </ul>
      </View>
    );
  }
}

export default PropertyView;
