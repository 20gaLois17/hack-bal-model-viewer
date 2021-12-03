import { paragraph as icon } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';

import './style.scss';

import edit from './edit';

export const name = 'bal-model-viewer/model-viewer';

export const settings = {
    apiVersion: 2,
    title: __( 'Model Viewer', 'iv-custom-blocks' ),
    icon,
    edit,
    save: () => null
}
