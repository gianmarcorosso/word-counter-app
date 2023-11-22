# Word Counter App

This is a Node.js application that counts the number of words, letters, and spaces in a text file. It can also identify words that are repeated more than 10 times.

## Prerequisites

Make sure you have Node.js installed on your machine. You can download it from https://nodejs.org/.

## Installation

1. Clone this repository to your computer:

   ```bash
   git clone https://github.com/gianmarcorosso/word-counter-app.git

2. Navigate to the project directory:
   ```bash
   cd word-counter-app

3. Install the dependencies:
   ```bash
   npm install

## Usage

To count the words, letters, and spaces in a text file, run the following command in your console:
```bash
npm start path/al/tuo/file.txt
```
Replace path/to/your/file.txt with the path to your text file.

The application will then print the statistics in the terminal.

## Example usage

```bash
npm start docs/text_file.txt
```
This command will count the words in the example file docs/text_file.txt and print the results in the terminal.

### Testing

```bash
npm test
```
Please notice:
URLs testing available, just uncomment lines in .test.ts
Test text file:
../tests/wordCounterTXT.txt
