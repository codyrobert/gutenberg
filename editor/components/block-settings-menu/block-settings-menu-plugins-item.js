/**
 * External dependencies
 */
import { difference } from 'lodash';

/**
 * WordPress dependencies
 */
import { IconButton } from '@wordpress/components';
import { compose } from '@wordpress/element';

/**
 * Internal dependencies
 */
import BlockSettingsMenuPluginsGroup from './block-settings-menu-plugins-group';

const shouldRenderItem = ( selectedBlockNames, allowedBlockNames ) => ! Array.isArray( allowedBlockNames ) ||
	difference( selectedBlockNames, allowedBlockNames ).length === 0;

const BlockSettingsMenuPluginsItem = ( { allowedBlocks, icon, label, onClick, small, role } ) => (
	<BlockSettingsMenuPluginsGroup>
		{ ( { selectedBlocks, onClose } ) => {
			if ( ! shouldRenderItem( selectedBlocks, allowedBlocks ) ) {
				return null;
			}
			return ( <IconButton
				className="editor-block-settings-menu__control"
				onClick={ compose( onClick, onClose ) }
				icon={ icon || 'admin-plugins' }
				label={ small ? label : undefined }
				role={ role }
			>
				{ ! small && label }
			</IconButton> );
		} }
	</BlockSettingsMenuPluginsGroup>
);

export default BlockSettingsMenuPluginsItem;
