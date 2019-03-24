import React from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../actions/userActionCreator';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const data = this.props.users && this.props.users.data;
    if (data) return (<div>{Object.values(data).map(item => (
      <div key={item.name}>{item.name},{item.profession}</div>
    ))}</div>);
    else
      return null;
  }

}

const mapStateToProps = (state) => {
  return { users: state.users };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(getUsers()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);