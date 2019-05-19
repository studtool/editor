import * as React from 'react';

import {Block} from '@/components/Block/Block';
import {storiesOf} from '@storybook/react';

storiesOf('Block', module)
    .add('default', () => (
        <Block>
            Data
        </Block>
    ));
