# Playwright Automation Project

## Overview
This project is an automation framework built using Playwright, designed for end-to-end testing of web applications. It provides a structured approach to writing tests and includes utility functions to streamline the testing process.

## Project Structure
```
playwright-automation
├── src
│   ├── tests
│   │   └── example.spec.ts
│   └── helpers
│       └── utils.ts
├── playwright.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Setup Instructions
1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd playwright-automation
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the tests**:
   ```
   npx playwright test
   ```

## Usage
- The test cases are located in the `src/tests` directory. You can add new test files or modify existing ones as needed.
- Utility functions can be found in `src/helpers/utils.ts`. These functions can be imported into your test files to assist with common tasks.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.