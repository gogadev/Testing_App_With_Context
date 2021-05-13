import { render, screen } from "@testing-library/react";
import Options from "../Options";

test("displays image for each scoop from the server", async () => {
  // Anything asyn use await and findBy
  render(<Options optionType="scoops" />);

  // find images
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  // confirm alt text of images //equal: arrays or objects // toBe: number or strings
  const altText = scoopImages.map((element) => element.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});
