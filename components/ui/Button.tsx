import { ComponentProps, FC } from "react"

interface Props extends ComponentProps<"button"> { }

export const Button: FC<Props> = ({ children, ...props }) => {
    return (
        <button {...props}> {
            children
        }</button>
    )
}