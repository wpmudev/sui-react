import React, { useState } from "react"
import { Sidebar, SidebarItem, SidebarDropdown } from "../../../src"
import { BoxGroup } from "@wpmudev/sui-box"
import { Col, Row } from "@wpmudev/sui-grid"
import { Tag } from "@wpmudev/sui-tag"
import dedent from "dedent"
import { IconsNamesType } from "@wpmudev/sui-icons"

export const GeneralSidebarCode = dedent`

import React, { useState } from "react"
import { Sidebar, SidebarItem } from "@wpmudev/sui-sidebar"
import { BoxGroup } from "@wpmudev/sui-box"
import { Col, Row } from "@wpmudev/sui-grid"
import { Tag } from "@wpmudev/sui-tag"

const tag = (
    <Tag color="black" design="outlined" isSmall={true}>
       PRO
    </Tag>
)

const items = [
    { title: "General", url: "#", icon: "Settings" },
    { title: "Integrations", url: "#", icon: "Link" },
    { title: "Configs", icon: "Bell", url: "#", action: tag },
    {
        title: "Data",
        url: "#",
        icon: "Bell",
        isDisabled: true,
        action: tag,
	},
]

export const BasicSidebar = () => {
    const [selectedItem, setSelectedItem] = useState("Integrations")

    return (
        <BoxGroup>
            <Row align={{ md: "inline" }}>
                <Col size="3">
                    <Sidebar>
                       {items.map(({ title, url, icon, isDisabled, action }) => (
                           <SidebarItem
                               key={title}
                               title={title}
                               action={action}
                               url={url}
                               icon={icon}
                               isDisabled={isDisabled}
                               onClick={() => setSelectedItem(title)}
                           />
                        ))}
                    </Sidebar>
                    <SidebarDropdown selectedItemName={selectedItem}>
                        {items.map(({ title, url, icon, isDisabled, action }) => (
                            <SidebarItem
                                key={title}
                                title={title}
                                action={action}
                                url={url}
                                icon={icon}
                                isDisabled={isDisabled}
                                onClick={() => setSelectedItem(title)}
                            />
                        ))}
                    </SidebarDropdown>
                </Col>
                <Col
                    size="9"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                     {selectedItem}
                </Col>
            </Row>
       </BoxGroup>
    )
}
`

const tag = (
	<Tag color="black" design="outlined" isSmall={true}>
		PRO
	</Tag>
)

const items = [
	{ title: "General", url: "#", icon: "Settings" },
	{ title: "Integrations", url: "#", icon: "Link" },
	{ title: "Configs", icon: "Bell", url: "#", action: tag },
	{
		title: "Data",
		url: "#",
		icon: "Bell",
		isDisabled: true,
		action: tag,
	},
]

export const BasicSidebar = () => {
	const [selectedItem, setSelectedItem] = useState("Integrations")

	return (
		<BoxGroup>
			<Row align={{ md: "inline" }}>
				<Col size="3">
					<Sidebar>
						{items.map(({ title, url, icon, isDisabled, action }) => (
							<SidebarItem
								key={title}
								title={title}
								action={action}
								url={url}
								icon={icon as IconsNamesType}
								isDisabled={isDisabled}
								onClick={() => setSelectedItem(title)}
							/>
						))}
					</Sidebar>
					<SidebarDropdown selectedItemName={selectedItem}>
						{items.map(({ title, url, icon, isDisabled, action }) => (
							<SidebarItem
								key={title}
								title={title}
								action={action}
								url={url}
								icon={icon as IconsNamesType}
								isDisabled={isDisabled}
								onClick={() => setSelectedItem(title)}
							/>
						))}
					</SidebarDropdown>
				</Col>
				<Col size="9">{selectedItem}</Col>
			</Row>
		</BoxGroup>
	)
}
