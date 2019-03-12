import React from 'react'
import  { render } from 'react-dom'

import Global from './Global'
import registerServiceWorker from './registerServiceWorker'

render(
	<Global />,
	document.getElementById('root')
)

registerServiceWorker();
