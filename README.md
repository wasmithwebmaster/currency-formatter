Currency Input Formatter (USD)

A lightweight, dependency-free JavaScript utility that automatically formats input fields as USD currency while the user types.

This script listens for input changes and converts numeric values into a dollar format with commas (e.g. $12,345).

Usage

Include the script on your site (inline or as an external file).

Add the attribute data-format="currency" to any <input> element you want formatted.

<input type="text" data-format="currency" />


The formatter will:

Strip non-numeric characters

Apply U.S. dollar formatting

Update the input value in real time

Notes

Formatting is display-only. The underlying numeric value should be cleaned server-side before processing.

This script does not handle decimals by design.

Intended for simple forms and UI helpers, not financial calculations.

Browser Support

Works in all modern browsers that support addEventListener and toLocaleString.
