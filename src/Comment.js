//your code here
import React, {Component} from 'react' 

class Comment extends Component {
    render() {
        return (
            <div className="comment"s>
                {this.props.commentText}
            </div>
        )
    }
}

export default Comment