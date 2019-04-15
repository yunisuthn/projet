
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TableRow extends Component {
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.nom}
          </td>
          <td>
            {this.props.obj.prenom}
          </td>
          <td>
                <Link to={"/edit/"+this.props.obj.id} className="btn btn-primary"><button>Edit</button></Link>
          </td>
          <td>
            <button className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;