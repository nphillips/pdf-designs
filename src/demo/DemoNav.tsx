import { animus } from "@animus-ui/core"
import { DemoNavLink } from "./DemoNavLink"

export const DemoNavContainer = animus
    .styles({
        'a:hover': {
            color: '#1E4BD2' as any,

        },
        'a': {
            color: '#1A1E28' as any,
            textDecoration: 'none',
        },

    })
    .asElement('div')

export const DemoNavHeader = animus
    .styles({
        height: 48,
        display: 'flex',
        alignItems: 'center',
        px: 8,
        boxShadow: '0 1px #CCD0D7',
        fontWeight: '600',
        color: '#1A1E28' as any,

        '.animus-prototypes-home-link': {
            pr: 4 as any,

        },
        '.animus-prototypes-home-link a': {
            height: 40,
            display: 'inline-flex',
            alignItems: 'center',
        },

        '.animus-prototypes-date': {
            display: 'inline-block',
        }

    })
    .asElement('div')

export default function DemoNav() {
    return (
        <DemoNavContainer>
            <DemoNavHeader> <span className="animus-prototypes-home-link"><a href="/" className="site-title">Animus prototypes</a> ›</span> <span className="animus-prototypes-date">July 2022:</span></DemoNavHeader>
            <DemoNavLink href="/220719-input">220719-input: Updating Input and TextArea styles </DemoNavLink>
            <DemoNavLink href="/220713-as">220713-as: Variant prop 'as' </DemoNavLink>
            <DemoNavLink href="/220712-variants">220712-variants: Simple variants example </DemoNavLink>
            <DemoNavLink href="/220712-mode">220712-mode: Simple example of mode props (light, dark) </DemoNavLink>
        </DemoNavContainer>
    )
}

