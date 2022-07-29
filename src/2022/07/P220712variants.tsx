import { animus } from "@animus-ui/core"

export const TestingOutProps = animus
    .styles({
        border: '1px solid red',
    })
    .variant({
        prop: 'size',
        variants: {
            large: {
                width: '300px'
            },
            medium: {
                width: '200px',
            },
            small: {
                width: '100px',
            }
        }
    })
    .asElement('div');

export default function P220712variants() {
    return <div className="page-container">
        <h1>Creating and using variant props</h1>
        <TestingOutProps size="small">Small</TestingOutProps>
        <TestingOutProps size="medium">Medium</TestingOutProps>
        <TestingOutProps size="large">Large</TestingOutProps>
    </div>
}