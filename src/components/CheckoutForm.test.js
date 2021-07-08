import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";


// Write up the two tests here and make sure they are testing what the title shows
beforeEach( () => {
  render( <CheckoutForm /> );
})

test( "form header renders", () => {
  expect( screen.queryByText( "Checkout Form" ) ).toBeVisible();
});

test( "form shows success message on submit with form details", () => {
  fireEvent.change( screen.getByRole( "textbox", { name: "First Name:" } ), { target: { value: "Johnny" } } );
  fireEvent.change( screen.getByRole( "textbox", { name: "Last Name:" } ), { target: { value: "Dangerously" } } );
  fireEvent.change( screen.getByRole( "textbox", { name: "Address:" } ), { target: { value: "1234 8th Ave W" } } );
  fireEvent.change( screen.getByRole( "textbox", { name: "City:" } ), { target: { value: "Portland" } } );
  fireEvent.change( screen.getByRole( "textbox", { name: "State:" } ), { target: { value: "Oregon" } } );
  fireEvent.change( screen.getByRole( "textbox", { name: "Zip:" } ), { target: { value: "87654" } } );
  fireEvent.click( screen.getByText( "Checkout" ) );
  expect( screen.getByTestId( "successMessage" ) ).toBeVisible();
} );
