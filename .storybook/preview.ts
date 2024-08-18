import type { Preview, ReactRenderer } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-themes";

import "../src/app/globals.css";

const preview: Preview = {
    parameters: {
        layout: "centered",
    },
    decorators: [
        withThemeByClassName<ReactRenderer>({
            themes: {
                light: "",
                dark: "dark",
            },
            defaultTheme: "light",
        }),
    ],
};

export default preview;
