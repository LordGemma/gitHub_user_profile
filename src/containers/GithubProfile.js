import React, { Component } from 'react';
import GithubProfileView from '../components/GithubProfileView';
import Input from '../components/Input';
import { getGithubProfileInfo } from '../sevices/services';
import './style.css';

class GithubProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            githubUserName: '',
            profileData: {}
        };

        this.getChanged = this.getChanged.bind(this);
        this.sendData = this.sendData.bind(this);
        this.getData = this.getData.bind(this);
    }

    getChanged(value) {
        this.setState({
            githubUserName: value,
        })
    }

    sendData() {
        getGithubProfileInfo(this.state.githubUserName.trim(), this.getData);
        this.setState({
            githubUserName: '',
        });
    }

    getData(data) {
        this.setState({
            profileData: data
        });
    }

    render() {
        return (
            <div>
                <Input value={this.state.githubUserName} changed={this.getChanged} />
                <button onClick={this.sendData}>Submit</button>
                <div className='response'>
                    <GithubProfileView data={this.state.profileData} />
                </div>
            </div>
        );
    }
}

export default GithubProfile;