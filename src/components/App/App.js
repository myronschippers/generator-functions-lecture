import React, { Component } from 'react';
import './App.css';
import '../../modules/generator.fn';
import * as giphyApi from '../../modules/giphy.api';

class App extends Component {
    state = {
        images: [],
        search: '',
    }

    componentDidMount() {
        giphyApi.getGiphyOffice().then((response) => {
            this.setState({
                images: response.data.data,
            })
        })
    }

    changeSearchEntered = (event) => {
        const inputVal = event.target.value;
        this.setState({
            search: inputVal,
        })
    }

    updateSearchData = (event) => {
        giphyApi.getNewSearch(this.state.search)
            .then((response) => {
            this.setState({
                images: response.data.data,
            })
        })
    }

    render() {
        const imageMarkup = this.state.images.map((imgData, imgIndex) => {
            return <img key={imgIndex} src={imgData.images.downsized_medium.url} alt={imgData.title} />;
        })
        return (
            <div className="container">
                <h2>Generator Functions, What Are they?</h2>
                <p>function* myGenerator ()</p>
                <div>
                    <input
                        type="text"
                        placholder="Search"
                        onChange={this.changeSearchEntered}
                    />
                    <button onClick={this.updateSearchData}>SEARCH</button>
                </div>

                <div>
                    {imageMarkup}
                </div>
            </div>
        );
    }
}

export default App;