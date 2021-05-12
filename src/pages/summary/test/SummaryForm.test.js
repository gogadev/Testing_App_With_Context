import { screen, fireEvent, render } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

test("checkbox enables the button on first click and disabled on second click", () => {
  render(<SummaryForm />);

  const button = screen.getByRole("button", { name: "Confirm order" });
  const checkbox = screen.getByRole("checkbox", {
    name: "I agree to Terms and Conditions",
  });

  expect(checkbox).not.toBeChecked();
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();
});
