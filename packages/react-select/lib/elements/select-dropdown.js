import React, { Fragment } from 'react';
import { Checkbox } from '@wpmudev/react-checkbox';
import { Icon } from './select-icon';

const Dropdown = ({
  options,
  onEvent,
  isSmartSearch = false,
  isMultiselect = false,
  selected = '',
  ...props
}) => {
  const renderOptions = () => {
    if (isSmartSearch && selected.length < 2) {
      return (
        <div className="sui-select__list">
          <div className="sui-select__list-empty">Please enter 2 or more characters</div>
        </div>
      );
    }

    return (
      <ul className="sui-select__list" role="listbox" aria-label="dropdown-options">
        {options.map(({ icon, id, label, isSelected, newLabel = label, boldLabel = '' }) => (
          <li
            key={id}
            id={id}
            role="option"
            tabIndex="0"
            className={`sui-select__list--option ${isSelected ? 'sui-select__list--selected' : ''}`}
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
        ))}
      </ul>
    );
  };

  const renderMultiselectOptions = () => {
    return (
      <Fragment>
        <input type="text" placeholder="search" />
        <ul className="sui-select__list" role="listbox" aria-label="dropdown-options">
          <li className="sui-select__list--option" role="option">
            <Checkbox label="Select all" />
          </li>
          {options.map(({ id, label, isSelected }) => (
            <li
              key={id}
              id={id}
              role="option"
              className="sui-select__list--option"
              onClick={() => onEvent(id, isSelected)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  onEvent(id, isSelected);
                }
              }}
            >
              <Checkbox id={id} label={label} defaultValue={isSelected} />
            </li>
          ))}
        </ul>
      </Fragment>
    );
  };

  return <Fragment>{isMultiselect ? renderMultiselectOptions() : renderOptions()}</Fragment>;
};

export { Dropdown };