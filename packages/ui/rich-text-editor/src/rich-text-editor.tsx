import React, {
	useState,
	useId,
	useCallback,
	useEffect,
	useLayoutEffect,
} from "react"

import { FormField } from "@wpmudev/sui-form-field"
import {
	SegmentedControl,
	SegmentedControlButton,
} from "@wpmudev/sui-segmented-control"
import { generateCN, isEmpty } from "@wpmudev/sui-utils"
import { Textarea } from "@wpmudev/sui-textarea"
import { useDetectRTL, useStyles } from "@wpmudev/sui-hooks"

import { RichTextEditorProps } from "./rich-text-editor.types"

declare const tinymce: Record<string, any>

/**
 * RichTextEditor Component
 *
 * A code editor component that allows displaying and editing code.
 *
 * @param  root0
 * @param  root0.textareaId
 * @param  root0.actions
 * @param  root0.tinyMCEOptions
 * @param  root0.className
 * @param  root0.isDisabled
 * @param  root0.defaultValue
 * @param  root0.onChange
 * @param  root0._style
 * @return {JSX.Element} - JSX Element representing the RichTextEditor component
 */
const RichTextEditor: React.FC<RichTextEditorProps> = ({
	textareaId = "",
	actions = null,
	tinyMCEOptions,
	className = "",
	isDisabled = false,
	defaultValue = "",
	onChange = () => null,
	_style = {},
}: RichTextEditorProps): JSX.Element => {
	const [content, setContent] = useState<string>(defaultValue ?? "")
	const [editorType, setEditorType] = useState<"visual" | "code">("visual")
	const [editor, setEditor] = useState<Record<string, any> | null>(null)
	const [ref, setRef] = useState<HTMLElement>()

	const id = useId()

	// detect RTL
	const isRTL = useDetectRTL()

	// textarea ID
	textareaId = isEmpty(textareaId) ? "sui-rich-text-editor-input" : textareaId

	// load tinyMCE
	const loadTinyMCE = useCallback(
		(tId: string) => {
			const options = {
				selector: `#${tId}`,
				menubar: false,
				plugins: "lists link",
				readonly: isDisabled ? 1 : 0,
				toolbar:
					"bold italic bullist numlist alignleft aligncenter alignright link",
				height: 200, // Set the height as needed
				body_class: "sui-rich-text-editor__tinymce--content",
				...{
					...tinyMCEOptions,
					...(isRTL && { directionality: "rtl" }),
					content_style:
						"@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap'); body { font-family: 'Roboto'; font-size: 15px; line-height: 24px; margin: -8px 16px 8px 16px }",
					setup: (ed: Record<string, any>) => {
						// set editor to local state
						setEditor(ed)

						// add custom class
						ed.on("init", () => {
							ed.getContainer().className += " sui-rich-text-editor__tinymce"
						})

						// get and set editor content
						ed.on("change", () => {
							setContent(ed.getContent())
						})
					},
				},
			}

			/**
			 * TinyMCE Initialization
			 *
			 * Note: Make sure to load the tinyMCE script, which can be done in the following ways:
			 * 1. Use the tinyMCE script bundled with WordPress.
			 * 2. Use the script from the tinyMCE website.
			 */
			tinymce?.init(options)
		},
		[isDisabled, tinyMCEOptions, isRTL],
	)

	// Update tinymce editor content
	useEffect(() => {
		if ("visual" === editorType && !!editor) {
			editor?.setContent(content)
		}
	}, [content, editor, editorType])

	// Pass content to the parent component
	useEffect(() => {
		if (onChange) {
			onChange(content)
		}
	}, [content, onChange])

	const textareaRef = useCallback((node: HTMLElement) => {
		if (!!node) {
			setRef(node)

			// Load tinymce
			if (tinymce) {
				loadTinyMCE(node.id)
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		return () => {
			// Cleanup: Destroy the editor when the component is unmounted
			if (!!ref && tinymce?.get(ref?.id)) {
				tinymce?.get(ref?.id)?.remove()
			}
		}
	}, [ref, textareaRef])

	// textarea props
	const textareaProps = {
		className: generateCN("sui-rich-text-editor__textarea-input", {
			[editorType]: true,
		}),
	}

	// Update local state when textarea input changes
	const onTextareaChange = useCallback(
		({ target }: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
			setContent(target?.value ?? content)
		},
		[content],
	)

	const { suiInlineClassname } = useStyles(_style, className ?? "")

	// Generate class names
	const classNames = generateCN(
		"sui-rich-text-editor",
		{ disabled: isDisabled },
		suiInlineClassname,
	)

	return (
		<FormField id={id} label="Label" helper="Helper text for rich text editor.">
			<div className={classNames} data-testid="rich-text-editor">
				<div className="sui-rich-text-editor__header">
					<SegmentedControl
						name="type"
						defaultValue={editorType as string}
						onChange={(type) => setEditorType(type as typeof editorType)}
					>
						<SegmentedControlButton
							value="visual"
							isDisabled={isDisabled ?? false}
						>
							Visual
						</SegmentedControlButton>
						<SegmentedControlButton
							value="code"
							isDisabled={isDisabled ?? false}
						>
							Code
						</SegmentedControlButton>
					</SegmentedControl>
					{!!actions && actions}
				</div>
				<div className="sui-rich-text-editor__content">
					<div
						className={generateCN("sui-rich-text-editor__textarea", {
							hidden: "visual" !== editorType,
							disabled: isDisabled,
						})}
					>
						<textarea
							ref={textareaRef as React.LegacyRef<HTMLTextAreaElement>}
							{...textareaProps}
							value={content}
							onChange={() => null}
							id={textareaId}
							aria-label="visual editor"
						/>
					</div>
					{"code" === editorType && (
						<Textarea
							{...textareaProps}
							rows={8}
							id={`${textareaId}-code`}
							value={content}
							onChange={onTextareaChange}
							aria-label="code editor"
						/>
					)}
				</div>
			</div>
		</FormField>
	)
}

export { RichTextEditor }
