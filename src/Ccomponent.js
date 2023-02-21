import React,{Component} from "react";
import Menu from "./Menu";

export default class Ccomponent extends Component {
    render() {
        return(
            <div>
                <h1>Class component{this.props.number}</h1>
            </div>
        )
    }
}
Ccomponent.defauldProps = {name: "Ibrahim"}