import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


class AllNetworks extends Component {

    componentDidMount = (props) => {
        console.log(this.props.network);
        
        if ( !this.props.networksLoaded) {
            props.getAllNetworks()
        }
    }

    render() {
        return (
            <div className="network-container">
                {this.props.networks && this.props.networks.map(network => (
                    <div className="network-box" key={network.id}>
                        <Link to={`/networks/${network.id}`} onClick={() => this.props.setNetwork(network)}>{network.name}</Link>
                    </div>
                )
                )}
            </div>
        )
    }
}

export default withRouter(AllNetworks);