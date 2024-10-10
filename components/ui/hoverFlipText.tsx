import { IClassName } from "@/lib/types";
import { cn } from "@/lib/utils";
import { FC } from "react";

interface Props {
    primaryText: string;
    secondaryText: string;
    className?: IClassName;
}

export const HoverFlipText: FC<Props> = ({ primaryText, secondaryText, className }) => {
    return (
        <span className={cn(`block overflow-hidden relative text-primary font-bold text-6xl 
            before:transition-all before:ease-in-out after:transition-all after:ease-in-out before:delay-100 after:delay-100
            before:content-[attr(data-primary)] before:text-nowrap before:absolute before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 hover:before:top-0 hover:before:-translate-y-full
            after:content-[attr(data-secondary)] after:text-nowrap after:absolute after:bottom-0 after:left-1/2 after:translate-y-full  after:-translate-x-1/2 hover:after:bottom-1/2 hover:after:translate-y-1/2`, className)}
            data-primary={primaryText} data-secondary={secondaryText}>
        </span>
    );
};
