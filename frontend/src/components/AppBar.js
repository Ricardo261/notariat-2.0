import React from 'react';
import { Box, Button, Heading, Grommet, Text } from 'grommet';
import { FormSearch } from 'grommet-icons';

const AppBarDesign = (props) => (
    <Box 
      tag='header'
      direction='row'
      align='center'
      justify='between'
      background='brand'
      pad={{ left: 'medium', right: 'small', vertical: 'small' }}
      elevation='medium'
      style={{ zIndex: '1' }}
      {...props}
    />
  );

  const theme = {
    global: {
      colors: {
        brand: '#228BE6'
      },
      font: {
        family: 'Roboto',
        size: '18px',
        height: '20px',
      },
    },
  };

  function AppBar() {
    return (
      <Grommet theme={theme}>
        <AppBarDesign>
            <Heading level='3' margin='none'>Notariat 2.0</Heading>
            <Button label='Annuaire' icon={<FormSearch />} onClick={() => {}} />
        </AppBarDesign>
      </Grommet>
    );
  }

  export default AppBar;