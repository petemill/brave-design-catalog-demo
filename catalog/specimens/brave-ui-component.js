import React, { Component } from 'react'
import { Specimen, ReactSpecimen } from 'catalog'
import { ThemeProvider } from 'brave-ui/theme'
import Theme from 'brave-ui/theme/brave-default'

export default class BraveComponentSpecimen extends Component {
  render() {
    return <ThemeProvider theme={Theme}>
      <ReactSpecimen {...this.props} />
    </ThemeProvider>
  }
}
