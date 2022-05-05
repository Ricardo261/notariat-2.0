import React from 'react';
import axios from 'axios';
import { ListGroup } from 'react-bootstrap';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/annuaire/notaires'
  })

class Notaires extends React.Component {

    state = {
        notaires: []
    }

    constructor() {
        super();
        api.get('/').then(res => {
            console.log(res.data)
            this.setState({ notaires: res.data })
        })
    }

  render() {
      return(
        <ListGroup>
            { this.state.notaires.map(notaire => <ListGroup.Item>{notaire.nom} {notaire.prenom}</ListGroup.Item>)}
      </ListGroup>
      )
  }
}

export default Notaires