import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


class AllNetworks extends Component {

    render() {
        return (
            <div className="network-container">
                {this.props.networks && this.props.networks.map(network => (
                    <div
                        key={network.id}
                        className="network-card"
                        onClick={(e) => {
                            this.props.history.push(`/networks/${network.id}`);
                            window.scrollTo(0, 0);
                        }}>
                        <h3>
                            <p>{network.name}</p>
                        </h3>
                    </div>
                )
                )}
            </div>
        )
    }
}

export default withRouter(AllNetworks);