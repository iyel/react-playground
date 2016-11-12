import React, { Component } from 'react';

export default class Category extends Component {
  constructor(props) {
    super(props);

    const category = props.categories.find(c => c.id === props.params.id) || { name: '' };
    this.state = { category };
    this.mode = this.props.route.mode;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ category: {...this.state.category, name: event.target.value } });
  }

  handleSubmit(event) {
    event.preventDefault();
    const categoryName = this.state.category.name.trim();

    if (categoryName.length < 1) {
      return true;
    }

    this.props[`${this.mode}Category`](categoryName, this.props.params.id);
    this.props.router.push('/');

    return false;
  }

  renderViewMode() {
    return (
      <div>
        <p className="lead"><span className="text-muted">Category details</span></p>
        <dl className="row">
          <dt className="col-sm-1">name</dt>
          <dd className="col-sm-11">{this.state.category.name}</dd>

          <dt className="col-sm-1">id</dt>
          <dd className="col-sm-11">{this.state.category.id}</dd>
        </dl>
      </div>
    );
  }

  renderEditMode() {
    return (
      <div>
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="category-name">Category name:</label>
            {' '}
            <input
              autoFocus
              id="category-name"
              className="form-control"
              type="text"
              value={this.state.category.name}
              onChange={this.handleChange}
            />
          </div>
          {' '}
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <p id="passwordHelpBlock" className="form-text text-muted">
          Must be at least 1 characters long
        </p>
      </div>
    );
  }

  render() {
    return this.mode === 'view' ? this.renderViewMode() : this.renderEditMode();
  }
}
