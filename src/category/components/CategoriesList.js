import React, { PureComponent, PropTypes } from 'react';

import Toolbar from '../../toolbar/Toolbar';

class CategoriesList extends PureComponent {
  static propTypes = {
    categories: PropTypes.arrayOf(PropTypes.object).isRequired,
    locations: PropTypes.arrayOf(PropTypes.object).isRequired,
    removeCategories: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      selected: [],
    };
    this.onCheckbox = this.onCheckbox.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.categories.length > nextProps.categories.length) {
      this.setState({ selected: [] });
    }
  }

  onCheckbox(event) {
    const id = event.target.value;
    const selected = this.state.selected;
    if (~selected.indexOf(id)) {
      this.setState({ selected: selected.filter(s => s !== id) });
    } else {
      this.setState({ selected: [...selected, id] });
    }
  }

  removeItem() {
    const isLocationUsed = this.props.locations.some(l =>
       l.categories.some(c => this.state.selected.indexOf(c) >= 0),
    );

    if (!isLocationUsed) {
      this.props.removeCategories(this.state.selected);
    } else {
      alert('Can not delete. Category is used...');
      console.error('Location used');
    }
  }

  render() {
    return (
      <div>
        <h2 className="alt-header">Categories List</h2>
        <div className="mb-1">
          <Toolbar
            sectionTitle="Categories"
            type="category"
            itemIds={this.state.selected}
            removeItem={this.removeItem}
          />
        </div>
        <div id="categories-list">
          {this.props.categories.map(cat =>
            <div key={cat.id} className="form-check">
              <label htmlFor={cat.id} className="form-check-label">
                <input
                  id={cat.id}
                  className="form-check-input"
                  type="checkbox"
                  value={cat.id}
                  onChange={this.onCheckbox}
                  checked={~this.state.selected.indexOf(cat.id)}
                /> {cat.name}
              </label>
            </div>,
          )}
        </div>
      </div>
    );
  }
}

export default CategoriesList;
