import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as action from '../actions';


class UserList extends Component{
    componentWillMount(){
        this.props.fetchUsers();
    }

    renderUsers(){
        return this.props.users.map((user)=>
            <div className="card card-block" key={user.name}>
                <h4 className="card-title">{user.name}</h4>
                <p className="card-text">Cheese Factory</p>
                <a className="btn btn-primary">Email</a>
            </div>
        );
    }

    render(){
        return(
            <div className="user-list">
                {this.renderUsers()}
            </div>
        );
    }
}

function mapStateToProps(state){
    return { users: state.users }
}

export default connect(mapStateToProps, action)(UserList);