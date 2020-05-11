import React from 'react';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

export default function InputForm({
  onSubmit,
  itemId,
  onItemIdChange,
  itemCount,
  onItemCountChange,
  switchIp,
  onSwitchIpChange
}) {
  return (
    <Grid
      container
      spacing={3}
      direction="row"
      justify="center"
      alignItems="center"
      >
        <Grid item xs>
          <TextField id="switch-ip" label="Switch IP Address" variant="filled" />
        </Grid>
        <Grid item xs>
          <TextField id="item-id" label="Item ID" variant="filled" />
        </Grid>
        <Grid item xs>
          <TextField id="item-count" label="How Many?" variant="filled" />
        </Grid>
      </Grid>
  );
}



InputForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  itemId: PropTypes.string.isRequired,
  onItemIdChange: PropTypes.func.isRequired,
  itemCount: PropTypes.string.isRequired,
  onItemCountChange: PropTypes.func.isRequired,
  switchIp: PropTypes.string.isRequired,
  onSwitchIpChange: PropTypes.func.isRequired
};