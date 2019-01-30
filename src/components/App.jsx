import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import unsplash from '../api/unsplash';
export default class App extends Component {
    state = {
		data: {
            search: '',
            images: []
		}
    };
    handleInputChange = (e) => {
         const data = {...this.state.data.search}
        data[e.currentTarget.name] = [e.currentTarget.value]
        this.setState({data})
    };
    handleSubmit = async (e) => {
		e.preventDefault();
        // console.log(this.state.data.search.toString());
        const res = await unsplash.get('/search/photos', {
            params: {query: this.state.data.search.toString()}
        })
        this.setState({images: res.data.results})
    };
    getImage () {
        if (!this.state.images ) return <div>No image</div>
        else {
            return <ImageList display={this.state.images}/>
        }
    }
	render() {
		return (
			<div className="ui container">
				<SearchBar onSubmit={this.handleSubmit} onChange={this.handleInputChange} value={this.state.data.search}/>
                {this.getImage()}
			</div>
		);
	}
}
