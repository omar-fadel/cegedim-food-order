import React from 'react';
import {Component} from 'react';
import Tabs from '@material-ui/core/Tabs';
import { Tab, AppBar } from '@material-ui/core';
class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            tabVal: 0
        }
    }
    getTabs = () => {
        return this.props.items.map((item,index) => {
            return (
                <Tab label = {item} value={index} key = {index}/>
            );
        })
    }
    handleChange = (event,val) => {
        this.setState({
            tabVal: val
        })
    }
    render() {
        return(
            <div>
                <AppBar position='static' color="primary">
                    <Tabs
                        centered
                        indicatorColor = 'secondary'
                        value = {this.state.tabVal}
                        onChange= {this.handleChange}
                    >
                       {this.getTabs()} 
                    </Tabs>
                </AppBar>
            </div>
        );
    }
}

export default Navbar;