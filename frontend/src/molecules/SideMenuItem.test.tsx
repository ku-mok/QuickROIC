import { render, fireEvent, screen } from "@testing-library/react";
import React from "react";
import { Router } from "react-router-dom";
import SideMenuItem from "./SideMenuItem";
import { createMemoryHistory } from "history";
it("push history to props.linkTo when clicked", () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <SideMenuItem icon={<></>} linkTo="/testlink">
        TestItem
      </SideMenuItem>
    </Router>
  );
  expect(screen.getByText("TestItem")).toBeInTheDocument();
  fireEvent.click(screen.getByText("TestItem"));
  expect(history.location.pathname).toBe("/testlink");
});
