import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import Select from 'react-select';

import Toolbar from '../../toolbar/Toolbar';

export default class LocationsList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { filter: [], selected: [] };
    this.handleFilter = this.handleFilter.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  handleFilter(value) {
    this.setState({ filter: value });
  }

  renderFilter() {
    return (
      <div>
        <Select
          multi
          placeholder="Filter by category..."
          name="form-field-name"
          value={this.state.filter}
          options={this.props.categories}
          onChange={this.handleFilter}
          valueKey="id"
          labelKey="name"
        />
      </div>
    );
  }

  removeItem() {
    this.props.removeLocations(this.state.selected);
  }
  handleCheckbox(event) {
    const id = event.target.value;
    const selected = this.state.selected;
    if (~selected.indexOf(id)) {
      this.setState({ selected: selected.filter(s => s !== id) });
    } else {
      this.setState({ selected: [...selected, id] });
    }
  }

  render() {
    return (
      <div>
        <h2 className="alt-header">Locations List</h2>
        <div className="row mb-1">
          <div className="col-xs">
            <Toolbar
              sectionTitle="Locations"
              type="locations"
              itemIds={this.state.selected}
              removeItem={this.removeItem}
            />
          </div>
          <div className="col-xs">
            {this.renderFilter()}
          </div>
        </div>

        <div className="list-group">
          {this.props.locations
          .slice()
          .sort((a, b) => (a.name > b.name ? 1 : -1))
          .filter((l) => {
            if (this.state.filter.length > 0) {
              return l.categories.some(cId => this.state.filter.map(f => f.id).indexOf(cId) >= 0);
            }
            return true;
          })
          .map(loc =>
            <div key={loc.id} className="form-check">
              <span className="list-group-item list-group-item-action">
                <label className="form-check-label">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={loc.id}
                    onChange={this.handleCheckbox}
                    checked={~this.state.selected.indexOf(loc.id) ? true : false}
                  />
                  <h5 className="list-group-item-heading">{loc.name}</h5>
                  <p className="list-group-item-text">{loc.address}</p>
                </label>
              </span>
            </div>,
          )
        }
        </div>
      </div>
    );
  }
}
