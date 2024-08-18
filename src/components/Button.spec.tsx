/* eslint-disable react/no-children-prop */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Button } from "./Button.component";

test("loads and displays greeting", async () => {
    // ARRANGE
    const buttonRendered = render(<Button children={"Testing"} />);

    //screen.debug();
    //screen.logTestingPlaygroundURL();
    buttonRendered.getByRole("button", { name: /testing/i });
});
