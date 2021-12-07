import React from 'react'
import Service from '../service/Service'


class ListBouquetComponent extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            bouquets: []
        }
        this.addBouquet = this.addBouquet.bind(this);
        this.editBouquet = this.editBouquet.bind(this);
        this.deleteBouquet = this.deleteBouquet.bind(this);

    }
    deleteBouquet(id){
        Service.deleteBouquet(id).then( res => {
            this.setState({bouquets: this.state.bouquets.filter(bouquet => bouquet.id !== id)});
        });
    }

    viewBouquet(id){
        this.props.history.push(`/view-bouquet/${id}`);
    }

    editBouquet(id){
        this.props.history.push(`/add-bouquet/${id}`);
    }
    componentDidMount() {
        Service.getBouquets().then((res) => {
            this.setState({bouquets: res.data})
        });
    }

    addBouquet(){
        this.props.history.push('/add-bouquet/_add');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Bouquet List</h2>
                <div className = "row">
                    <button className="btn btn-primary" onClick={this.addBouquet}> Add Bouquet</button>
                </div>
                <br></br>
                <div className = "row">
                    <table className = "table table-striped table-bordered">

                    <thead>

                    <tr>
                        <td>BouquetId</td>
                        <td>BouquetName</td>
                        <td>BouquetPrice</td>
                        <th> Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.bouquets.map(
                            bouquet =>
                                <tr key={bouquet.bouquetId}>
                                    <td>{bouquet.bouquetId}</td>
                                    <td>{bouquet.bouquetName}</td>
                                    <td>{bouquet.bouquetPrice}</td>
                            <td>
                                <button onClick={ () => this.editBouquet(bouquet.bouquetId)} className="btn btn-info">Update </button>
                                <button style={{marginLeft: "10px"}} onClick={ () => this.deleteBouquet(bouquet.bouquetId)} className="btn btn-danger">Delete </button>
                                <button style={{marginLeft: "10px"}} onClick={ () => this.viewBouquet(bouquet.bouquetId)} className="btn btn-info">View </button>
                        </td>
                                </tr>
                        )
                    }
                    </tbody>
                </table>

            </div>

            </div>
        )
    }
}

export default ListBouquetComponent