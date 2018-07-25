import React, { Component } from 'react';
import { css } from 'aphrodite';
import styles from './style';
import CategoryButton from './CategoryButton';
import PropertiesCategory from './PropertiesCategory';

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
      <div className={css(styles.base)}>
        <div className={css(styles.categories)}>
          {categories.map(({ label, value, icon }) => (
            <CategoryButton
              icon={icon}
              label={label}
              isActive={category === value}
              onClick={() => this.handleSetCategory(value)}
            />
          ))}
        </div>
        <div className={css(styles.categoryHeader)}>
          {selectedCategory.label.toUpperCase()}
        </div>
        <PropertiesCategory properties={this.props.properties} setActiveProperty={this.props.setActiveProperty} />
      </div>
    );
  }
}

export default Navigation;
