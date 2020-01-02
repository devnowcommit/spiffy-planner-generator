import React from "react";
import {Select} from "@blueprintjs/select";
import {Button, MenuItem} from "@blueprintjs/core";

export class MonthChooser extends React.Component {

    constructor(props) {
        super(props)

        this.months = [];

        const date = new Date();
        for (let i = 0; i < 12; i++) {
            date.setMonth(i);
            this.months.push(
                {
                    ordinal: i + 1,
                    name: date.toLocaleDateString(window.navigator.language, {month: 'long'})
                }
            );
        }

        this.state = {month: (props.initialMonth && this.months.find(item => item.ordinal === props.initialMonth)) || this.months[0]};
    }

    render() {
        return (
            <Select id={this.props.id}
                    activeItem={this.state.month}
                    items={this.months}
                    itemRenderer={(month, {handleClick, modifiers}) => {
                        if (!modifiers.matchesPredicate) {
                            return null;
                        }
                        return (<MenuItem
                            active={modifiers.active}
                            key={month.ordinal}
                            onClick={handleClick}
                            text={month.name}
                        />)
                    }}
                    onItemSelect={(item) => {
                        this.setState({month: item});
                        this.props.onMonthChanged && this.props.onMonthChanged(item.ordinal);
                    }}>
                <Button text={this.state.month.name}
                        rightIcon="double-caret-vertical"/>
            </Select>
        )
    }

}