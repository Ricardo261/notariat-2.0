import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const axios = require('axios').default;

export default class Notaires extends React.Component {
    state = {
        persons: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/annuaire/notaires')
        .then(function (response) {
          // handle success
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(res => {
            const persons = res.data;
            this.setState({ persons });
          })
    }
  
    render() {
        return (
          <ul>
            { this.state.persons.map(person => <li>{person.name}</li>)}
          </ul>
        )
    }
}