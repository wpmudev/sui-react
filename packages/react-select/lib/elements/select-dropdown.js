import React, { Fragment } from 'react';
import { isUndefined, isEmpty, isFunction } from '@wpmudev/react-utils';

import { Checkbox } from '@wpmudev/react-checkbox';

import { Icon } from './select-icon';
import { Search } from './select-search';

const Dropdown = ({ 
    options,
    onEvent,
    isSmartSearch = false,
    selected = '',
    ...props
}) => {

    const set = {};

    set.markup = (
        <ul className="sui-select__list" role="listbox" aria-label="dropdown-options">
            {options.map(({ icon, id, label, isSelected, newLabel = label, boldLabel = '' }) => {
                return ( 
                    <li 
                        key={id} 
                        id={id} 
                        role="option" 
                        tabIndex="0"
                        className={isSelected ? 'sui-select__list--option sui-select__list--selected' : 'sui-select__list--option'} 
                        onClick={() => onEvent(id)}
                        onKeyDown={(e) => { 
                            if (e.key === 'Enter') { 
                                onEvent(id);
                            }
                        }}
                        {...props}
                    >
                        <Fragment>
                            <Icon name={icon} />
                            <span>{boldLabel && <strong>{boldLabel}</strong>}{newLabel}</span>
                        </Fragment>
                    </li>
                )
            })}
        </ul>
    );

    if (options.length === 0 && isSmartSearch && selected.length < 2) {
        set.markup = (
            <div className="sui-select__list">
                <div className="sui-select__list-empty">Please enter 2 or more characters</div>
            </div>
        );
    }

    return (
        <Fragment>
            {set.markup}
        </Fragment>
    )
}

const MultiselectDropdown = ({ 
    options,
    selected,
    onEvent,
    ...props
}) => {
    return (
        <Fragment>
            <input type="text" placeholder="search" />
            <ul className="sui-select__list" role="listbox" aria-label="dropdown-options">
                <li><Checkbox label="Select all" /></li>
                {options.map(({ icon, id, label, newLabel = label, boldLabel = '' }) => {
                    return (
                        <li 
                            key={id} 
                            id={id} 
                            role="option" 
                            tabIndex="0" 
                            className={label === selected ? 'sui-select__list--option sui-select__list--selected' : 'sui-select__list--option'} 
                            onClick={() => onEvent(label)}
                            onKeyDown={(e) => { 
                                if (e.key === 'Enter') { 
                                    onEvent(label); 
                                }
                            }}
                            {...props}
                        >
                            <Checkbox label={label} defaultValue={label === selected ? true : false} />
                        </li>
                    )
                })}
            </ul>
        </Fragment>
    )
}

export { Dropdown, MultiselectDropdown };