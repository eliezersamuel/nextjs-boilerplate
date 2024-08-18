import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Button } from "./Button.component";

const meta = {
    title: "Components/Button",
    component: Button,
    // tags: ["autodocs"],
    args: {
        children: "Button",
        onClick: action("onClick"),
    },
    decorators: [
        (Story) => (
            <div className="flex justify-center flex-col items-center">
                <h1 className="mb-2">Component Button:</h1>
                <Story />
            </div>
        ),
    ],
    argTypes: {
        disabled: {
            control: "boolean",
            table: {
                type: {
                    summary: "boolean",
                },
            },
        },
        size: {
            options: ["default", "sm", "lg", "icon"],
            control: {
                type: "inline-radio",
                labels: {
                    sm: "sm (small)",
                    lg: "lg (large)",
                },
            },
            table: {
                category: "Appearance",
                type: {
                    summary: "enum (string)",
                    detail: "'default' | 'sm' | 'lg' | 'icon'",
                },
            },
        },
        variant: {
            options: [
                "default",
                "destructive",
                "outline",
                "secondary",
                "ghost",
                "link",
            ],
            control: "select",
            table: {
                category: "Appearance",
                type: {
                    summary: "enum (string)",
                    detail: "'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'",
                },
                defaultValue: {
                    summary: "default",
                },
            },
            // if: {
            //     arg: "size",
            //     eq: "default",
            // },
        },
        asChild: {
            name: "as Child (Render the child as the actual button)",
            table: {
                type: {
                    summary: "-",
                },
            },
        },
        onClick: {
            table: {
                category: "Event Listeners",
                subcategory: "Mouse events",
            },
        },
    },
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
    name: "Primary",
};

export const Secondary: Story = {
    args: {
        children: "Secondary",
        variant: "secondary",
    },
    render: (props) => (
        <Button {...props}>
            <span className="mr-1">🔥</span>
            Secondary
        </Button>
    ),
};
