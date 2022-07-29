import { animus } from "@animus-ui/core"

export const UsingPropAs = animus

    .variant({
        prop: 'as',
        variants: {
            h1: {
                fontSize: 48 as any,
            },
            h2: {
                fontSize: 32 as any,
            },
            h3: {
                fontSize: 24 as any,
            },
        }
    })
    .asElement('h1');

export default function P220713as() {
    return <div className="page-container">
        <h1>Creating and using variant props</h1>
        <UsingPropAs as="h1">as="h1"</UsingPropAs>
        <UsingPropAs as="h2">as="h2"</UsingPropAs>
        <UsingPropAs as="h3">as="h3"</UsingPropAs>

    </div>
}