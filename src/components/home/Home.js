import React, { Component } from 'react'
import BlogTable from '../blogtable/BlogTable'

export default class Home extends Component {
    render() {
        return (
            <>
                <BlogTable data={this.props.data} />
            </>
        )
    }
}
