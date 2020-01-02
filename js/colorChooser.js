import React, {Fragment} from "react";
import {Button, Popover} from "@blueprintjs/core";
import {SketchPicker} from "react-color";

export class ColorChooser extends React.Component {

    constructor(props) {
        super(props)

        this.state = {color: props.initialColor || '#333'}
    }

    render() {
        return (
            <Popover id={this.props.id}>
                <Button text={<Fragment><span>{this.state.color}</span><span className="color-square"
                                                                             style={{backgroundColor: this.state.color}}/></Fragment>}/>
                <SketchPicker color={this.state.color} onChange={(color) => {
                    this.setState({color: color.hex});
                    this.props.onColorChanged && this.props.onColorChanged(color.hex);
                }}/>
            </Popover>
        )
    }

}