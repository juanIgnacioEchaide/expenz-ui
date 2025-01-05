import { primaryButton, secondaryButton } from "@/app/styles"
import { useCallback } from "react"

export type BaseButtonProps = {
    primary?: boolean
    secondary?: boolean
    link: string
    title: string
    width?: string
}
export const BaseButton = ({ primary, secondary, link, title, width }: BaseButtonProps) => {

    const setStyle = useCallback(() => {
        if (primary) return primaryButton
        if (secondary) return secondaryButton
        return primaryButton
    }, [])

    return <a
        style={{ 'width': width ? `${width}vw` : '10vw' }}
        className={setStyle()}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
    >
        {title}
    </a>
}