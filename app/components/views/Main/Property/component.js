import React, { Component } from 'react';
import {
  View,
  EmptyView,
  InlineEditInput,
  HorizontalNavigation,
} from 'general';

import { baseStyle } from './styles';
import { get } from 'lodash';

type $Props = {
  property: {
    _id: string,
    name: string,
  },
  updateProperty: Object => {},
};

type $State = {
  subView: string,
};

const subViews = [
  {
    label: 'Overview',
    value: 'overview',
  },
  {
    label: 'Payments',
    value: 'payments',
  },
  {
    label: 'Tenants',
    value: 'tenants',
  },
];

class PropertyView extends Component<$Props, $State> {
  state = {
    subView: 'overview',
  }

  handleSetSubView = (subView: string): void => this.setState({ subView })

  _renderField = (field: string, index, label?: string): React.Element<*> => {
    const { updateProperty, property } = this.props;
    return (
      <InlineEditInput
        value={property[field]}
        label={label || field}
        tabIndex={index}
        onChange={(e) => (
          updateProperty({
            ...property,
            [field]: e.target.value,
          })
        )}
      />
    );
  }

  render() {
    const { property, updateProperty } = this.props;
    const { subView } = this.state;
    console.log('RENDER PROPERTY', property);
    if (!property) {
      return <EmptyView message="Select a Property" />
    }
    return (
      <View
        title={property.name}
        subtitle={get(property, 'address.street1')}
        style={baseStyle}
      >
        <HorizontalNavigation
          items={subViews}
          activeItem={subView}
          onSelect={this.handleSetSubView}
        />
        <div style={{ padding: 20 }}>
          {this._renderField('name', 1)}
          {this._renderField('address.street1', 2, 'street 1')}
          {this._renderField('address.street2', 3, 'street 2')}
          <div style={{ display: 'flex' }}>
            {this._renderField('address.city', 4, 'city')}
            {this._renderField('address.state', 5, 'state')}
            {this._renderField('address.zipCode', 5, 'zip')}
            {this._renderField('address.country', 6, 'country')}
          </div>
        </div>
      </View>
    );
  }
}

export default PropertyView;
