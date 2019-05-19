import * as React from 'react';

import {App} from '@/components/App/App';
import {storiesOf} from '@storybook/react';

storiesOf('App', module)
    .add('default', () => (
        <App/>
    ));
