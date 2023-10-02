import React from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';

export default class Portfolio extends React.Component {
  constructor(filters, projects) {
    super(filters, projects);
    this.state = { filter: this.props.filters[0] };
}

  render() {
    return (
      <>
        { Toolbar(this.props.filters, this.state.filter, clicked => this.setState({filter: clicked})) }
        { ProjectList(this.props.projects.filter( item => { 
            return this.state.filter === "All" || item.category === this.state.filter; 
          }))
        }
      </>
    );
  }
}

//<Toolbar filters = {this.props.filters} selected = {this.props.selected} onSelectFilter = {() => {}}/>
//<ProjectList projects = { this.props.projects.filter( item => { return this.props.selected === "All" || item.category === this.props.selected })} />
