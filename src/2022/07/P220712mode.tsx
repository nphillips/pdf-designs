import { AnimusProvider } from "@animus-ui/components";
import { animus, compatTheme } from "@animus-ui/core";
import { createTheme } from "@animus-ui/theming";

const theme = createTheme({
    ...compatTheme,
    radii: { rounded: "4px" }
})
    .addColors({
        white: "white",
        black: "black",
        blue: { 100: "lightblue", 500: "blue", 800: "darkblue" }
    })
    .addColorModes("light", {
        dark: {
            text: "white",
            background: {
                _: "black",
                current: "black"
            }
        },
        light: {
            text: "black",
            background: {
                _: "white",
                current: "white"
            }
        }
    })
    .createScaleVariables("radii")
    .build();

type ThemeShape = typeof theme;

declare module "@emotion/react" {
    export interface Theme extends ThemeShape { }
}

export const Tester = animus
    .styles({
        border: '1px solid currentColor',
    })
    .asElement('div');

export default function P220712mode() {
    return (
        <AnimusProvider theme={theme} mode="dark">
            <div className="page-container">
                <h1>Simple example of mode props (light, dark)</h1>
                <Tester>lorem ipsum dolor sit</Tester>
            </div>
        </AnimusProvider>
    )
}