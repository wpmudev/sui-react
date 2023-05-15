import React, { createElement, Fragment, useState } from 'react';
import { isUndefined, isEmpty, isFunction } from '@wpmudev/react-utils';

import { Icon } from './select-icon';
import { Input } from './select-input';

// Build "Base Button" component.
const Selected = ({ expanded, dropdownToggle, selected, arrow, ...props }) => {
	return (
        <div
            className="sui-select__selection" 
            onClick={dropdownToggle}
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    dropdownToggle;
                }
            }}
            tabIndex="0"
            aria-haspopup="listbox"
            aria-expanded={expanded}
            {...props}
        >
            <span className="sui-select--selected">{selected || 'Select'}</span>
            <Icon name={arrow}/>
        </div>
    );
};

const SelectedSearch = ({arrow, ...props }) => {
	return (
        <div className="sui-select__selection">
            <Input placeholder="Search" {...props} />
            <Icon name={arrow}/>
        </div>
    );
};

export { Selected, SelectedSearch };
