import { animus } from "@animus-ui/core"

export const InputContainer = animus
    .styles({
        border: '2px solid red',
    })
    .asElement('div');

export default function P220719input() {
    return <div className="page-container">
        <h1>Update of Input and Textarea styles</h1>
        <InputContainer>
        <input type="text" value="" />
        </InputContainer>
    </div>
}