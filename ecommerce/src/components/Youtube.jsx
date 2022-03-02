import React, { Component } from 'react'
import Search from './Search'
import VideoList from './VideoList';
import YoutubeApi from './YoutubeApi'

export default class Youtube extends Component {
    //creating state

    state = {
        videosMetaInfo: [],
        selectedVideoId: null
    };

    onSearch = async keyword => {
        const response = await YoutubeApi.get("/search", {
            params: {
                q: keyword
            }
        });
        this.setState({
            videosMetaInfo: response.data.items,
            selectedVideoId: response.data.items[0].id.videoId
        });
        console.log(this.state);
    };

    //it will take videoid which is selected
    onVideoSelected = (videoId) => {
        this.setState({
            selectedVideoId: videoId
        })
    }

    render() {
        return (
            <div>
                <Search onSearch={this.onSearch} />
                <VideoList onVideoSelected={this.onVideoSelected} data={this.state.videosMetaInfo} />
            </div>
        )
    }
}
