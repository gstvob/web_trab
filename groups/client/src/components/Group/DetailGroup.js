import React, {Component} from "react";

class DetailGroup extends Component {
    render = () => {
        console.log(this.props.group)
        return(<div>
            {this.props.group._id}
        </div>);
    }
}

export default DetailGroup;
