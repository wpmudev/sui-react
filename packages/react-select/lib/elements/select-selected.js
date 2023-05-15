import React, { createElement, Fragment, useState } from 'react';
import { isArray } from '@wpmudev/react-utils';

import { Icon } from './select-icon';
import { Input } from './select-input';

// Build "Base Button" component.
const Selected = ({ expanded, dropdownToggle, selected = '', clearSelection, isMultiselect = false, arrow, ...props }) => {

    const set = {};

    if (isArray(selected)) {
        set.selected = selected.map(({label}) => {
            return(
                <span className="sui-select--selected-options">
                    {label}
                    <Icon name="close" />
                </span>
            );
        });
    } else {
        set.selected = (
            <span className="sui-select--selected">{selected}</span>
        );
    }

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
            {set.selected}
            {isMultiselect && <Icon name='close-alt' onClick={ clearSelection }/>}
            <Icon name={arrow} />
        </div>
    );
};

const SelectedSearch = ({arrow, isSmartSearch, clearSelection, ...props }) => {
	return (
        <div className="sui-select__selection">
            <Input placeholder="Search" {...props} />
            {isSmartSearch && <Icon name='search' />}
            {!isSmartSearch && <Icon name={arrow}/>}
            {isSmartSearch && <Icon name='close-alt' onClick={ clearSelection }/>}
        </div>
    );
};

export { Selected, SelectedSearch };
