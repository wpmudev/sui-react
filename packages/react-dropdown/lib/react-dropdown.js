import React, { Component, Children, Fragment, createElement } from 'react';
import { isEmpty, isFunction, isUndefined } from '@wpmudev/react-utils';

import { Button } from '@wpmudev/react-button';
import { IconButton } from '@wpmudev/react-icon-button';

export class Dropdown extends Component {
	constructor(props) {
		super(props);

		this.state = {
			open: false,
			current: this.props.current || 0,
		};

		this.toggle = this.toggle.bind(this);

		this.wrapperRef = React.createRef();
		this.setWrapperRef = this.setWrapperRef.bind(this);
		this.handleClickOutside = this.handleClickOutside.bind(this);
	}

	toggle() {
		this.setState((state) => ({
			open: !state.open,
		}));
	}

	setWrapperRef(node) {
		this.wrapperRef = node;
	}

	handleClickOutside(e) {
		if (this.wrapperRef && !this.wrapperRef.contains(e.target)) {
			this.setState({ open: false });
		}
	}

	componentDidMount() {
		document.addEventListener('mousedown', this.handleClickOutside);
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleClickOutside);
	}

	render() {
		const { open } = this.state;
		const { current } = this.state;

		const id = this.props.id;
		const label = this.props.label || 'Select an option';
		const hasCta = this.props.hasCta || false;
		const isSmall = this.props.isSmall || false;
		const isLabelHidden = this.props.isLabelHidden || false;

		const actionProps = {
			appearance: 'secondary',
			color: 'black',
			isSmall: isSmall,
			'aria-activedescendant': open ? `${id}-${current}` : '',
			onClick: this.toggle
		};

		let actionButton = <Button iconLead="menu" iconTrail="chevron-down" {...actionProps}>{label}</Button>;

		if ( isLabelHidden ) {
			actionButton = <IconButton icon="menu" label={label} {...actionProps} />;
		}

		const options = Children.map(this.props.children, (option, index) => {
			let optTag = 'div';
			const optId = `${id}-${index}`;
			const optIcon = option.props.icon;
			const optLink = option.props.href;
			const optAction = option.props.onClick;
			const optContent = option.props.children;

			const optIconExists = !isUndefined(optIcon) && !isEmpty(optIcon);
			const optLinkExists = !isUndefined(optLink) && !isEmpty(optLink) ? true : false;
			const optActionExists = isFunction(optAction);

			if (optActionExists) {
				optTag = 'button';
			} else if (optLinkExists) {
				optTag = 'a';
			}

			const content = (
				<Fragment>
					{optIconExists && (
						<span className={`suicons suicons--${optIcon} suicons--sm`} aria-hidden="true" />
					)}
					{optContent}
				</Fragment>
			);

			return createElement(
				optTag,
				{
					role: 'option',
					...( optLinkExists && { href: optLink }),
					id: optId,
					className: 'sui-dropdown__option',
					'aria-selected': current === index ? true : false,
					onClick: (e) => {
						this.setState({ open: false });
						this.setState({ current: index });

						if (optActionExists) {
							optAction(e);
						}
					},
					...option.props
				},
				content
			);
		});

		let clazz = 'sui-dropdown';

		if (isSmall) {
			clazz += ' sui-dropdown--sm';
		}

		if ( open ) {
			clazz += ' sui-dropdown--open';
		}

		return (
			<div
				ref={this.setWrapperRef}
				className={clazz}
				onClick={(e) => e.stopPropagation()}>
				{ actionButton }
				<div
					tabIndex="-1"
					role="listbox"
					id={id}
					className="sui-dropdown__menu"
					{... (this.props.hasLabel && { 'aria-labelledby': `${id}__label` })}
					onClick={() => this.setState({ open: false })}>
					{ options }
					{ hasCta && (
						<div className="sui-dropdown__cta">
							<Button appearance="primary" color="blue" iconLead="hub" isSmall={true}>
								Unlock bonus features
							</Button>
						</div>
					)}
				</div>
			</div>
		);
	}
}
