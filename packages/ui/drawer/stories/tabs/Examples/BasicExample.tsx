import React, { useRef } from "react"
import { Button } from "@wpmudev/sui-button"
// Import required component
import {
	Drawer as SuiDrawer,
	DrawerActions,
	DrawerHeader,
	DrawerTypes,
} from "../../../src"

import { DrawerFooter } from "../../../src/drawer-footer"
import { DrawerBody } from "../../../src/drawer-body"

export const basicCode = `

export const BasicExample = () => {
	const toggleRef = useRef<DrawerActions | null>(null)

    return (
      <div className="sui-layout">
      	<div className="sui-layout__content">
            <SuiDrawer
            	ref={toggleRef}
            >
            	<DrawerHeader
                  title="Drawer Title"
                  hintText="Drawer Decription"
                  tooltipOptions={{ placement: "bottom" }}
            	/>
            	<DrawerBody>
                  <div style={{ padding: "16px" }}>
                  	Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  	Pellentesque rutrum sem eros, sed tempor sapien porta ac. Nullam
                  	purus metus.
                  </div>
            	</DrawerBody>
            	<DrawerFooter>
                  <div>
                  	<Button type="secondary" colorScheme="blue" isSmall={true}>
                        Secondary
                  	</Button>
                  	<Button type="primary" colorScheme="blue" isSmall={true}>
                        Primary
                  	</Button>
                  </div>
            	</DrawerFooter>
            </SuiDrawer>
            <Button
            	type="primary"
            	colorScheme="blue"
            	isSmall={true}
            	onClick={() => {
                  toggleRef?.current?.toggle()
            	}}
            >
            	{btnText}
            </Button>
      	</div>
      </div>
	)
}
`

export const withContainer = `

export const BasicExample = () => {
	const toggleRef = useRef<DrawerActions | null>(null)

    return (
      <div className="sui-layout">
      	<div className="sui-layout__content">
            <SuiDrawer
            	ref={toggleRef}
                hasContainer={true}
            >
            	<DrawerHeader
                  title="Drawer Title"
                  hintText="Drawer Decription"
                  tooltipOptions={{ placement: "bottom" }}
            	/>
            	<DrawerBody>
                  <div style={{ padding: "16px" }}>
                  	Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  	Pellentesque rutrum sem eros, sed tempor sapien porta ac. Nullam
                  	purus metus.
                  </div>
            	</DrawerBody>
            	<DrawerFooter>
                  <div>
                  	<Button type="secondary" colorScheme="blue" isSmall={true}>
                        Secondary
                  	</Button>
                  	<Button type="primary" colorScheme="blue" isSmall={true}>
                        Primary
                  	</Button>
                  </div>
            	</DrawerFooter>
            </SuiDrawer>
            <Button
            	type="primary"
            	colorScheme="blue"
            	isSmall={true}
            	onClick={() => {
                  toggleRef?.current?.toggle()
            	}}
            >
            	{btnText}
            </Button>
      	</div>
      </div>
	)
}
`

export const positionLeft = `

export const BasicExample = () => {
	const toggleRef = useRef<DrawerActions | null>(null)

    return (
      <div className="sui-layout">
      	<div className="sui-layout__content">
            <SuiDrawer
            	ref={toggleRef}
                placement="left"
            >
            	<DrawerHeader
                  title="Drawer Title"
                  hintText="Drawer Decription"
                  tooltipOptions={{ placement: "bottom" }}
            	/>
            	<DrawerBody>
                  <div style={{ padding: "16px" }}>
                  	Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  	Pellentesque rutrum sem eros, sed tempor sapien porta ac. Nullam
                  	purus metus.
                  </div>
            	</DrawerBody>
            	<DrawerFooter>
                  <div>
                  	<Button type="secondary" colorScheme="blue" isSmall={true}>
                        Secondary
                  	</Button>
                  	<Button type="primary" colorScheme="blue" isSmall={true}>
                        Primary
                  	</Button>
                  </div>
            	</DrawerFooter>
            </SuiDrawer>
            <Button
            	type="primary"
            	colorScheme="blue"
            	isSmall={true}
            	onClick={() => {
                  toggleRef?.current?.toggle()
            	}}
            >
            	{btnText}
            </Button>
      	</div>
      </div>
	)
}
`

export const BasicExample = ({
	placement,
	hasContainer,
	btnText = "",
}: {
	placement: "left" | "right"
	hasContainer: false
	btnText: string
}) => {
	const toggleRef = useRef<DrawerActions | null>(null)

	return (
		<div className="sui-layout">
			<div className="sui-layout__content">
				<SuiDrawer
					ref={toggleRef}
					placement={placement}
					hasContainer={hasContainer}
				>
					<DrawerHeader
						title="Drawer Title"
						hintText="Drawer Decription"
						tooltipOptions={{ placement: "bottom" }}
					/>
					<DrawerBody>
						<div style={{ padding: "16px" }}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Pellentesque rutrum sem eros, sed tempor sapien porta ac. Nullam
							purus metus.
						</div>
					</DrawerBody>
					<DrawerFooter>
						<div>
							<Button type="secondary" colorScheme="blue" isSmall={true}>
								Secondary
							</Button>
							<Button type="primary" colorScheme="blue" isSmall={true}>
								Primary
							</Button>
						</div>
					</DrawerFooter>
				</SuiDrawer>
				<Button
					type="primary"
					colorScheme="blue"
					isSmall={true}
					onClick={() => {
						toggleRef?.current?.toggle()
					}}
				>
					{btnText}
				</Button>
			</div>
		</div>
	)
}
