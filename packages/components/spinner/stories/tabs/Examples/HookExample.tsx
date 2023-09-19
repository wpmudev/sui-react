import { useRef } from "react"
import { useSpinner } from "../../../src"
import { Box, BoxGroup } from "@wpmudev/sui-box"
import { Button } from "@wpmudev/sui-button"
import dedent from "dedent"

export const SpinnerHookCode = dedent`
import { useRef } from "react"
import { useSpinner } from "@wpmudev/sui-spinner"
import { Box, BoxGroup } from "@wpmudev/sui-box"
import { Button } from "@wpmudev/sui-button"

    export const SpinnerHookExample = () => {
    
        const boxRef = useRef<HTMLDivElement>(null)

        const loader = useSpinner(boxRef, {
            color: "dark",
        })

        return (
            <>
                <Button
                    appearance="secondary"
                    color="black"
                    isSmall={true}
                    onClick={() => (loader.isVisible ? loader.hide() : loader.show())}
                >
                    {loader.isVisible ? "Hide Loader" : "Show Loader"}
                </Button>

                <div
                    ref={boxRef}
                    style={{ maxWidth: "400px", border: "solid 2px black", marginTop: 20 }}
                >
                    <Box>
                        <BoxGroup>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy
                                text ever since the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries,
                            </p>
                        </BoxGroup>
                    </Box>
                </div>
            </>
        )
    }
`

export const SpinnerHookExample = () => {
    const boxRef = useRef<HTMLDivElement>(null)

	const loader = useSpinner(boxRef, {
		color: "dark",
	})

    return (
        <>
            <Button
                appearance="secondary"
                color="black"
                isSmall={true}
                onClick={() => (loader.isVisible ? loader.hide() : loader.show())}
            >
                {loader.isVisible ? "Hide Loader" : "Show Loader"}
            </Button>

            <div
				ref={boxRef}
				style={{ maxWidth: "400px", border: "solid 2px black", marginTop: 20 }}
			>
				<Box>
					<BoxGroup>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy
							text ever since the 1500s, when an unknown printer took a galley
							of type and scrambled it to make a type specimen book. It has
							survived not only five centuries,
						</p>
					</BoxGroup>
				</Box>
			</div>
        </>
    )
}