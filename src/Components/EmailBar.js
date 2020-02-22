import React from 'react';
import Icon from '@material-ui/icons';

import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Menu from '@material-ui/core/Menu';
import LanguageChooser from './LanguageChooser';
import LanguageMI from './LanguageMI';

function EmailBar (){
    return (
      <Container component="main" maxWidth="xs">
      <form>
        <LanguageChooser/>
        <TextField label="Enter your E-Mail Address" variant="outlined"/>
        <Button type="submit" variant="contained" color="primary">Send me daily Emails!</Button>
        <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="I accept the Terms of Service."
        />
      </form>
      </Container>

    );

}

export default EmailBar;
