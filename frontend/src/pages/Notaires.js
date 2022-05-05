import React from 'react';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/annuaire/notaires'
})


export default class Notaires extends React.Component {

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
    return (
          <ul>
            { this.state.notaires.map(notaire => <li>{notaire.nom}</li>)}
          </ul>
        )
    }
}