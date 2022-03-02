import React, { Component } from 'react'

import '../App.css';

export default class Search extends Component {
    //creating state for title 
    state = { title: "" }

    //for changing the search items
    onSearchChange = even => {
        const newTitle = even.target.value
        //set the state whenever user changes the title
        this.setState({ title: newTitle })
    }

    //for submit/search the item
    onSubmit = even => {
        //prevent the form from autosubmitting
        even.preventDefault()
        //Receving  props  from youtube component
        this.props.onSearch(this.title)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className='form-controls'>
                        <h1>Search</h1>
                        <input value={this.state.title} onChange={this.onSearchChange} id="video-search" type="text" placeholder="Enter Serach Keywords" />
                    </div>
                </form>
            </div>
        )
    }
}
