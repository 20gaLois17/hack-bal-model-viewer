import { __ } from '@wordpress/i18n';

import './editor.scss';

import {
    MediaUpload,
    MediaUploadCheck,
    useBlockProps,
} from '@wordpress/block-editor';

import { Button } from '@wordpress/components';

export default function Edit( { attributes, setAttributes } ) {

    const { model } = attributes;
    const blockProps = useBlockProps();

	return (
        <div { ...blockProps }>
            <MediaUploadCheck >
                <MediaUpload
                    allowedTypes={ [] }
                    multiple={ false }
                    value={ model ? model.id : '' }
                    onSelect={ model => setAttributes( { model: model } ) }
                    render={ ( { open } ) => (
                        model ?
                        <div>
                            <div>{ model.filename }</div>
                            <Button onClick={ () => setAttributes( { model: '' } ) }
                                    className="button is-small">{ __( 'Model entfernen' , 'bal-model-viewer' ) }
                            </Button>

                        </div> :
                        <Button onClick={ open } className="button">{ __( 'Model hochladen', 'bal-model-viewer' ) }</Button>
                    )}
                />
            </MediaUploadCheck>
        </div>
    );
}
