"use client";

import { useScrollProgress } from "../hooks/useScrollProgress"
import { ProgressiveBar } from "./progressiveBar"

export const ScrollBar = () => {
    const percent = useScrollProgress()

    return (
        <ProgressiveBar progress={percent} className="fixed bottom-0 left-0 w-full h-1 bg-primary" />
    )
}