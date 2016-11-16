import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

export default class Location extends Component {
  static propTypes = {
    locations: PropTypes.arrayOf(PropTypes.object).isRequired,
    categories: PropTypes.arrayOf(PropTypes.object).isRequired,
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
    route: PropTypes.shape({
      mode: PropTypes.string.isRequired,
    }),
    router: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }),
  }

  constructor(props) {
    super(props);
    const locationEmpty = { name: '', address: '', coordinates: '', categories: [] };
    const location = props.locations.find(c => c.id === props.params.id) || locationEmpty;
    this.state = { location, validation: {} };
    this.mode = this.props.route.mode;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMultipleSelect = this.handleMultipleSelect.bind(this);
  }

  handleChange(event) {
    this.setState({ location: {
      ...this.state.location,
      [event.target.name]: event.target.value,
    } });
  }

  handleMultipleSelect(event) {
    const options = event.target.options;
    const categories = [];
    Array.from(options).forEach(o => (o.selected ? categories.push(o.value) : false));

    this.setState({ location: { ...this.state.location, categories } });
  }

  handleSubmit(event) {
    event.preventDefault();
    const location = this.state.location;
    const name = location.name.trim();
    const address = location.address.trim();
    const coordinates = location.coordinates.trim();

    if (name.length < 1) {
      this.setState({ validation: { name: true } });
      return true;
    }

    this.setState({ validation: { name: false } });

    if (address.length < 1
        || coordinates.length < 1
        || location.categories.length < 1) {
      return true;
    }

    this.props[`${this.mode}Location`](this.state.location);
    this.props.router.push('/locations');

    return false;
  }

  renderViewMode() {
    return (
      <div>
        <p className="lead"><span className="text-muted">Location details</span></p>
        <dl className="row">
          <dt className="col-sm-2">name</dt>
          <dd className="col-sm-10">{this.state.location.name}</dd>

          <dt className="col-sm-2">address</dt>
          <dd className="col-sm-10">{this.state.location.address}</dd>

          <dt className="col-sm-2">coordinates</dt>
          <dd className="col-sm-10">{this.state.location.coordinates}</dd>

          <dt className="col-sm-2">categories</dt>
          <dd className="col-sm-10">
            {this.state.location.categories.map(cId =>
              <span key="cId">
                {this.props.categories.find(c => c.id === cId).name}
              </span>,
              )
            }
          </dd>

          <dt className="col-sm-2">id</dt>
          <dd className="col-sm-10">{this.state.location.id}</dd>
        </dl>
      </div>
    );
  }

  renderEditMode() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p className="lead text-muted">
          {this.mode === 'add' ? 'Add new location' : 'Edit location'}
        </p>
        <div className={classNames('form-group row', { 'has-danger': this.state.validation.name })}>
          <label htmlFor="location-name" className="col-sm-2 col-form-label">Location name</label>
          <div className="col-sm-10">
            <input
              autoFocus
              id="location-name"
              className="form-control"
              name="name"
              type="text"
              value={this.state.location.name}
              onChange={this.handleChange}
              placeholder="Location name"
            />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="location-address" className="col-sm-2 col-form-label">Address</label>
          <div className="col-sm-10">
            <input
              id="location-address"
              className="form-control"
              name="address"
              type="text"
              value={this.state.location.address}
              onChange={this.handleChange}
              placeholder="Address"
            />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="location-coordinates" className="col-sm-2 col-form-label">Coordinates</label>
          <div className="col-sm-10">
            <input
              id="location-coordinates"
              className="form-control"
              type="text"
              name="coordinates"
              value={this.state.location.coordinates}
              onChange={this.handleChange}
              placeholder="Coordinates"
            />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="location-categories" className="col-sm-2 col-form-label">Categories</label>
          <div className="col-sm-10">
            <select
              multiple
              className="form-control"
              id="location-categories"
              name="coordinates"
              onChange={this.handleMultipleSelect}
              value={this.state.location.categories}
            >
              {this.props.categories.map(c =>
                <option key={c.id} value={c.id}>{c.name}</option>,
              )}
            </select>
          </div>
        </div>

        <p id="passwordHelpBlock" className="form-text text-muted">
          All fields must be filled in. Chose at least one category
        </p>

        <div className="form-group row">
          <div className="offset-sm-2 col-sm-10">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </div>

      </form>
    );
  }

  render() {
    return this.mode === 'view' ? this.renderViewMode() : this.renderEditMode();
  }
}
