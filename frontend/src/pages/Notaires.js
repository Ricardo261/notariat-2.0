import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const axios = require('axios').default;
const state = {
  persons : []  
}
export default class Notaires extends React.Component {


    componentDidMount() {
        axios.get('http://127.0.0.1:8000/annuaire/notaires')
        .then(res => {
            state.persons = res.data;
          })
    }
  
    render() {
        return (
          <ul>
            { state.persons.map(person => <li>{person.notaires}</li>)}
          </ul>
        )
    }
}