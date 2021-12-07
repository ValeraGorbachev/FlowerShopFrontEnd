import React, { Component } from 'react'
import Service from '../service/Service';

class UpdateBouquetComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            bouquetName: '',
            bouquetPrice: '',
        }
        this.changeBouquetNameHandler = this.changeBouquetNameHandler.bind(this);
        this.changeBouquetPriceHandler = this.changeBouquetPriceHandler.bind(this);
        this.saveOrUpdateBouquet = this.saveOrUpdateBouquet.bind(this);
    }

    componentDidMount(){
       Service.getBouquetById(this.state.id).then( (res) =>{
            let bouquet = res.data;
           this.setState({bouquetName: bouquet.bouquetName,
               bouquetPrice : bouquet.bouquetPrice
            });
        });
    }


    updateBouquet = (e) => {
        e.preventDefault();
        let bouquet = {bouquetName: this.state.bouquetName, bouquetPrice: this.state.bouquetPrice};
        console.log('bouquet => ' + JSON.stringify(bouquet));
        console.log('id => ' + JSON.stringify(this.state.id));
        Service.updateBouquet(bouquet, this.state.id).then( res => {
            this.props.history.push('/bouquets');
        });
    }

    changeBouquetNameHandler= (event) => {
        this.setState({bouquetName: event.target.value});
    }

    changeBouquetPriceHandler= (event) => {
        this.setState({bouquetPrice: event.target.value});
    }



    cancel(){
        this.props.history.push('/bouquets');
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Bouquet</h3>
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> Bouquet Name: </label>
                                        <input placeholder="Bouquet Name" name="bouquetName" className="form-control"
                                               value={this.state.bouquetName} onChange={this.changeBouquetNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Bouquet Price: </label>
                                        <input placeholder="Bouquet Price" name="bouquetPrice" className="form-control"
                                               value={this.state.bouquetPrice} onChange={this.changeBouquetPriceHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.updateBouquet}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default UpdateBouquetComponent
