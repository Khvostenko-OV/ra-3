import React from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';

export default class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {filter: props.filters[0]};
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
