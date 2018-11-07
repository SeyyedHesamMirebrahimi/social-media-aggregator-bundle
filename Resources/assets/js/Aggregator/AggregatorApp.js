import React, { Component } from 'react';
import { getMessages} from "../api/aggregator_api";
import MessageList from './MessageList';


export default class AggregatorApp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            messages: [],
        }
    }

    componentDidMount() {
        getMessages()
            .then((data) => {
                this.setState({
                    messages: data
                })
            });
    }

    render() {
        return <MessageList
            {...this.state}
        />;
    }

}