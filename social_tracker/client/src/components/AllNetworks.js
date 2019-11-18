import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


class AllNetworks extends Component {
    CheckUser = (currentUser) => {
        if (currentUser == null) {
            return <Redirect to='/login' />
        }
    }
    render() {
        return (
            <div className="network-container">
                {this.CheckUser(this.props.currentUser)}
                <h2>Network List</h2>
                <div className="holder">
                    {this.props.networks && this.props.networks.map(network => (
                        <div
                            key={network.id}
                            className="person-card"
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
            </div>
        )
    }
}

export default withRouter(AllNetworks);