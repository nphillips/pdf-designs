import { animus } from "@animus-ui/core"

export const DemoNavLinkContainer = animus
    .styles({
        'a': {
            boxShadow: '0 1px rgba(000,000,000,.1) inset',
            height: 48,
            display: 'flex',
            alignItems: 'center',
            px: 8,
            transitionTimingFunction: 'ease-in-out',
            transitionProperty: 'background, color',
            transitionDuration: '.2s',
        },
        '&:hover a': {
            background: '#DEDFE4',
            textDecoration: 'none',
    },
        '&.active a': {
        background: '#525D70',
        color: '#fff' as any,
    },
    })
    .asElement('div')

export interface DemoNavLinkProps {
    href: string
    children: any
}

export function DemoNavLink({ href, children, ...props }: DemoNavLinkProps) {
    const path = window.location.pathname

    return (
        <DemoNavLinkContainer className={path === href ? "active" : ""}>
            <a href={href} {...props}>{children}</a>
        </DemoNavLinkContainer>
    )
}