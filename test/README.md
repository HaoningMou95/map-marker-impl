# Selenium Python Test

This repository contains a simple Selenium test written in Python.

## Prerequisites

- Python 3
- Selenium
- ChromeDriver

## Running the Test

1. Install the required dependencies:

```bash
pip install selenium
```


2. Download the appropriate web driver for your browser and add it to your `PATH`.

3. Run the test script:

```bash
pytest test.py
```


This will execute the Selenium test using the specified web driver and browser.

## Test Details

The test script (`test.py`) performs the following actions:

1. Opens a web page.
2. Interacts with the page (e.g., fills in a form and submits it).
3. Checks if the expected result is achieved.
4. If any error presents, the result is logged to the console.
