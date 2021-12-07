import React, { Component } from 'react'
import Service from '../service/Service'

class ViewBouquetComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            bouquet: {}
        }
    }

    componentDidMount(){
        Service.getBouquetById(this.state.id).then( res => {
            this.setState({bouquet: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Bouquet Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Bouquet Name: </label>
                            <div> { this.state.bouquet.bouquetName }</div>
                        </div>
                        <div className = "row">
                            <label> Bouquet Price: </label>
                            <div> { this.state.bouquet.bouquetPrice }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewBouquetComponent