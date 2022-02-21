 # Terminal Style Start Page

A terminal style start page with various themes.

## Features
 - Multiple themes
 - Quick links organized by category
 - Search with automatic input focus
 - Search engine cycling
   - UP/DOWN arrow keys when focused on input

## Install

### Chrome
Follow Steps 1-3 under the [Getting started > Create the manifest](https://developer.chrome.com/docs/extensions/mv3/getstarted/#manifest) section within the [Chrome extensions documentation](https://developer.chrome.com/docs/extensions/).

## Configuring
 - All terminal text is configurable by updating the app.html

 - Change themes by updating the stylesheet link in app.html

    `<link rel="stylesheet" href="themes/moonlightii.css">`

 - Add new themes by creating a new css file in the 'themes' directory

    ```css
    @import '../../styles.css';

    body {
      --primaryColor: #2e3440;
      --secondaryColor: #eceff4;
      --accent1: #bf616a;
      --accent2: #d08770;
      --accent3: #ebcb8b;
      --accent4: #a3be8c;
      --accent5: #b48ead;
    }
    ```
 - To change any styling outside the color palette, modify styles.css

## Screenshots

### Moonlight II
![Screenshot](/src/assets/previews/moonlightii.webp)
### Sweet
![Screenshot](/src/assets/previews/sweet.webp)
### Nord
![Screenshot](/src/assets/previews/nord.webp)
### Monochrome
![Screenshot](/src/assets/previews/monochrome.webp)