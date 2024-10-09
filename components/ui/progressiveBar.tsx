import { cn } from "@/lib/utils/style";
import { FC } from "react";

interface Props {
    className?: string;
    progress: number;
}

export const ProgressiveBar: FC<Props> = ({ className, progress }) => {
    return (
        <div className={cn("w-0 h-1 bg-primary transition-all ease-in-out", className)} style={{
            width: `${progress}%`,
        }}></div>
    )
}