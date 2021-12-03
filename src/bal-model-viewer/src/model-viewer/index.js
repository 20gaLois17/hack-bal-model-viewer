import { image as icon } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';

import './style.scss';

import edit from './edit';

export const name = 'bal-model-viewer/model-viewer';

export const settings = {
    apiVersion: 2,
    title: __( 'Model Viewer', 'bal-model-viewer' ),
    attributes: {
        model: {
            type: 'object', 
        }
    },
    icon,
    edit,
    save: () => null
}
