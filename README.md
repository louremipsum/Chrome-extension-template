# Chrome Extension Template

This is a template for building a Chrome extension using TypeScript. It includes a basic project structure, Webpack configuration, and example code to get you started quickly.

## Project Structure

```sh
chrome-extension-template/
├── .gitignore
├── LICENSE
├── README.md
├── package.json
├── public/
│   └── manifest.json
├── src/
│   ├── background.ts
│   ├── popup/
│   │   ├── popup.css
│   │   ├── popup.html
│   │   └── popup.ts
│   └── scripts/
│       └── content.ts
├── tsconfig.json
└── webpack/
    └── webpack.config.js
```

- **.gitignore**: Specifies files and directories to be ignored by Git.
- **LICENSE**: The license for the project.
- **README.md**: This file.
- **package.json**: Contains project metadata and dependencies.
- **public/**: Contains static files like the manifest file or logos and other images.
- **src/**: Contains the source code for the extension.
  - **background.ts**: The background script for the extension.
  - **popup/**: Contains files related to the popup UI.
    - **popup.css**: Styles for the popup.
    - **popup.html**: HTML for the popup.
    - **popup.ts**: TypeScript code for the popup.
  - **scripts/**: Contains content scripts.
    - **content.ts**: An example content script.
- **tsconfig.json**: TypeScript configuration file.
- **webpack/**: Contains Webpack configuration.
  - **webpack.config.js**: Webpack configuration file.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1 Clone the repository:

```sh
git clone https://github.com/louremipsum/Chrome-extension-template.git
cd chrome-extension-template
```

2 Install dependencies:

```sh
npm install
```

### Building the Project

To build the project, run:

```sh
npm run build
```

This will create a `dist` directory with the compiled files.

### Loading the Extension in Chrome

1. Open Chrome and go to `chrome://extensions/`.
2. Enable "Developer mode" using the toggle in the top right corner.
3. Click "Load unpacked" and select the `dist` directory.

### Project Structure Details

- **manifest.json**: The manifest file for the Chrome extension. It defines the extension's properties and permissions.
- **background.ts**: The background script runs in the background and can handle events and perform tasks that don't require a UI.
- **popup/**: Contains the files for the popup UI that appears when the extension's icon is clicked.
  - **popup.html**: The HTML file for the popup.
  - **popup.css**: The CSS file for styling the popup.
  - **popup.ts**: The TypeScript file for the popup's logic.
- **scripts/**: Contains content scripts that run in the context of web pages.
  - **content.ts**: An example content script.

### Customizing the Template

To customize the template for your own extension:

1. Update the `manifest.json` file with your extension's details.
2. Modify the source files in the `src` directory to implement your extension's functionality.
3. Update the Webpack configuration in `webpack/webpack.config.js` if needed.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or bug fixes.

## Contact

If you have any questions or need further assistance, feel free to open an issue on the GitHub repository.
