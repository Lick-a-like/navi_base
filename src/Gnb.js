import React, {Component} from 'react';
// import $ from 'jqeury';
class Gnb extends Component {
    constructor(props){
        super(props);
        this.state={
            bbyLink : this.props.gnblink,
            bbyNM : this.props.gnbtext,
            bbyTarget : this.props.gnbtarget,
        }
    }
        render(){
            return(
                <li><a href={this.state.bbyLink} target={this.state.bbyTarget}>{this.state.bbyNM}</a></li>
            );
        }
}

export default Gnb;