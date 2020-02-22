import React from 'react';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import LanguageMI from './LanguageMI';

function LanguageChooser (){

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Choose the language!
      </Button>
      <Menu
        id="language_choose_menu"
        anchorEl="simple-menu"
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <LanguageMI language_name="German"/>
        <LanguageMI language_name="English"/>
        <LanguageMI language_name="Turkish"/>
        <LanguageMI language_name="Arabic"/>
        <LanguageMI language_name="Hindi"/>
        <LanguageMI language_name="French"/>
        <LanguageMI language_name="Spanish"/>

      </Menu>
    </div>
  );
}

export default LanguageChooser;
