import { describe, expect } from "@jest/globals";
import { render, screen, fireEvent } from "@testing-library/react";

import { Button } from "./Button.component";

const BUTTON_LABEL = "Testing";

describe("Testing Component Buttons", () => {
    it(`loads and displays ${BUTTON_LABEL}`, async () => {
        render(<Button>{BUTTON_LABEL}</Button>);
        //screen.debug();
        //screen.logTestingPlaygroundURL();
        const button = screen.getByRole("button", { name: /Testing/i });

        expect(button).toBeInTheDocument();
    });

    it("calls the onClick function when clicked", () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>{BUTTON_LABEL}</Button>);

        const buttonElement = screen.getByRole("button", { name: /Testing/i });

        fireEvent.click(buttonElement);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
