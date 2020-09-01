import React, { useState } from 'react'
import { Grid } from '@material-ui/core'

function App () {
  return (
      <Grid container direction='column'>
        <Grid container item>
          <Grid item xs={2}/>
          <Grid item container xs={8}>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <h1 style={{ fontSize: '4rem', letterSpacing: '.5rem' }}>Nexflix</h1>
            </Grid>
            <Grid className='intro-and-form-container'>
              <Grid className='intro-container container'>
                <p>When you are in the mood to watch something new but don’t know where to start. Fill out the questions below and then click the button to get your results.</p>
              </Grid>
              <Grid className='form-container container'>
                <form>
                  <p>Select Movie Or Show</p>
                  <button>Movie</button>
                  <button>Show</button>
                  <p>Select Genre</p>
                </form>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2}/>
        </Grid>
      </Grid>
    )
}

export default App