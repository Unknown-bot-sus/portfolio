import { cn } from "@/lib/utils/style";
import { type ClassValue } from "clsx";
import NextLink, { LinkProps } from "next/link";
import { FC, ReactNode } from "react";

interface Props extends LinkProps {
    children?: ReactNode;
    className?: ClassValue;
}

export const Link: FC<Props> = ({ children, className, ...props }) => {
    return (
        <NextLink className={cn("relative before:content-[''] before:absolute before:w-0 hover:before:w-full before:transition-all before:ease-in-out before:duration-200 before:h-full before:pb-6 before:border-b before:border-primary", className)} {...props}>
            {children}
        </NextLink>
    )
}