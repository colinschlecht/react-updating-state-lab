// Code YouTubeDebugger Component Here

import React, { Component } from "react";

class YouTubeDebugger extends Component{
    state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  }
        
    

    handleClickB = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }
    handleClickR = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }
        })
    }

    render(){
        return(
            <div>
            <button className="bitrate" onClick={this.handleClickB}>bitrate</button>
            <button className="resolution" onClick={this.handleClickR}>resolution</button>
            </div>
        )
    }
}
export default YouTubeDebugger


// {
//     errors: [],
//     user: null,
//     settings: {
//       bitrate: 8,
//       video: {
//         resolution: '1080p'
//       }
//     }
//   }