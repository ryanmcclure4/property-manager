import React, { Component } from 'react';
import CategoryButton from './CategoryButton';
import PropertiesCategory from './PropertiesCategory';
import { Base, Categories, CategoryHeader } from './styles';

type $Category = 'properties' | 'reminders' | 'reports';

type $Props = {

};

type $State = {
  category: $Category,
};

const categories = [
  {
    label: 'Properties',
    value: 'properties',
    icon: 'ios-home',
  },
  {
    label: 'Reminders',
    value: 'reminders',
    icon: 'ios-timer',
  },
  {
    label: 'Reports',
    value: 'reports',
    icon: 'ios-stats',
  },
];

class Navigation extends Component<$Props, $State> {
  state = {
    category: 'properties',
  }

  handleSetCategory = (category: $Category): void => {
    this.setState({
      category,
    });
  }

  render() {
    const { category } = this.state;
    const selectedCategory = categories.find($category => $category.value === category);

    return (
      <Base>
        <Categories>
          {categories.map(({ label, value, icon }) => (
            <CategoryButton
              key={`category-${label}`}
              icon={icon}
              label={label}
              isActive={category === value}
              onClick={() => this.handleSetCategory(value)}
            />
          ))}
        </Categories>
        <CategoryHeader>
          {selectedCategory.label.toUpperCase()}
        </CategoryHeader>
        <PropertiesCategory />
      </Base>
    );
  }
}

export default Navigation;
