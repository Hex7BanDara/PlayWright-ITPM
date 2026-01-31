# Project README ✅

## Quick Start

**Prerequisites**
- Node.js (v16+ recommended)
- npm (comes with Node.js)

**Install dependencies**
```bash
npm install
```

**Install Playwright browsers**
```bash
npx playwright install
```

---

## Running Tests 🔧

- Run all tests:
```bash
npx playwright test
```

- Run the specific test (Chromium) — your command:
```bash
npx playwright test tests/swifttranslator.spec.js --project=chromium
```

- Run a single spec file:
```bash
npx playwright test tests/translator.spec.js --project=chromium
```

- Run tests in headed mode (see the browser UI):
```bash
npx playwright test --headed
```

---

## Reports & Debugging 🐞

- Generate and open the HTML report after a run:
```bash
npx playwright show-report
```

- Record a trace for debugging:
```bash
npx playwright test --trace on
```

---

## Optional: Add npm scripts
Add the following to `package.json` to simplify commands:
```json
"scripts": {
  "test": "playwright test",
  "test:chromium": "playwright test tests/swifttranslator.spec.js --project=chromium"
}
```

---

If you want any extra sections (CI setup, badges, or more scripts), tell me what you'd like and I can extend this file. ✨
