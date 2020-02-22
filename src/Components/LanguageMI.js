import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';


function LanguageMI (props) {
  return (
    <MenuItem onClick="setAnchorEl(null);">{props.language_name}</MenuItem>
  );
}

export default LanguageMI;
