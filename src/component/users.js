import React, {Component} from 'react';

class UserWindow extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div id="user-window">
                <h3>Create a new user</h3>
                <p>POST /api/exercise/new-user</p>
                <form action="/api/exercise/new-user" method="POST">
                    <input type="text" name="name" placeholder="Enter user name"></input><br />
                    <input type="text" name="age" placeholder="Enter user age"></input><br />
                    <input type="submit" placeholder="Submit" value="Submit"></input>
                </form>
            </div>
        );
    }
}

export default UserWindow