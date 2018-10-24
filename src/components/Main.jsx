import React, { Component, Fragment } from 'react';
import { inject, observer } from 'mobx-react';
import { observable } from 'mobx';
@inject('userStore')
@observer
class Main extends Component {
    @observable localLoading = true;

    componentDidMount() {
        console.log(this.props.userStore);
        this.props.userStore.pullUser();
        setTimeout(() => this.localLoading = false, 2000)
    }
    render() {
        const { loadingUser } = this.props.userStore;
        return (
            <Fragment>
                <div>Param: {loadingUser ? 'loading': 'loaded'}</div>
                <div>Param: {this.localLoading ? 'loading': 'loaded'}</div>
            </Fragment>
        );
    }
}

export default Main;