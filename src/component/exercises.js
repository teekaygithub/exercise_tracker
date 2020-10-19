import React, {Component} from 'react';

class ExerciseWindow extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div id="exercise-window">
                <h3>Log your exercise here</h3>
                <p>POST /api/exercise/add</p>
                <form action="/api/exercise/add" method="POST">
                    <input type="text" name="userId" placeholder="Enter the user's ID" /><br />
                    <input type="text" name="description" placeholder="What exercise did you do?" /><br />
                    <input type="text" name="duration" placeholder="How long? (in minutes)" /><br />
                    <input type="text" name="date" placeholder="Enter date in yyyy-mm-dd format" /><br />
                    <input type="submit" value="Submit" placeholder="" />
                </form>
            </div>
        );
    }
}

export default ExerciseWindow;