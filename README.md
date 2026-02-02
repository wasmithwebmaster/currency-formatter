# Currency Input Formatter (USD)

A lightweight, dependency-free JavaScript utility that automatically formats input fields as USD currency while the user types.

This script listens for input events and converts numeric values into a dollar format with commas (for example, $12,345).

## Usage

Include the script on your site, either inline or as an external file.

Add the attribute data-format="currency" to any input you want formatted.

<input type="text" data-format="currency" />


## The formatter will:

Strip all non-numeric characters

Format the value as U.S. dollars

Update the input value in real time as the user types

## Notes

Formatting is display-only. Always sanitize and convert values server-side.

Decimal handling is intentionally excluded.

Designed for UI convenience, not financial calculations.

### Browser Support

Works in all modern browsers that support addEventListener and toLocaleString.
