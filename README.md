[![Actions Status](https://github.com/Elanieli/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/Elanieli/frontend-project-46/actions)
[![Node CI](https://github.com/Elanieli/frontend-project-46/actions/workflows/jest-test.yml/badge.svg)](https://github.com/Elanieli/frontend-project-46/actions/workflows/jest-test.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/268cb9a2d8c48bcfa805/maintainability)](https://codeclimate.com/github/Elanieli/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/268cb9a2d8c48bcfa805/test_coverage)](https://codeclimate.com/github/Elanieli/frontend-project-46/test_coverage)


# Difference Calculator

**Difference calculator** — cli programm which can compare files and show the difference. 

* Supported formats: json, yml
* Displaying the difference as: stylish, plain, json

### Requirements:
* Nodejs
* Make
* Ubuntu, Macos or WSL (for Windows)

### Setup:

1. Enter on the command line: 
```sh
git clone git@github.com:Elanieli/frontend-project-46.git
```
2. Enter on the command line: 
```sh
cd frontend-project-46
```
3. Enter on the command line: 
```sh
npm ci
```
4. Enter on the command line: 
```sh
npm link
```
5. For open instruction enter on the command line: 
```sh
gendiff -h
```
6. Choose the format and enter path to files. Defolt format is stylish. For example: 
```sh
gendiff -f plain _fixtures_/file1.yml _fixtures_/file2.json
```
7. Enjoy!

### Tests

1. To running test:
```sh
make test
```
2. To running EsLint
```sh
make lint
```
3. To running test-coverage
```sh
make test-coverage
```

### Video with examples 

**Instruction**

[![asciicast](https://asciinema.org/a/9qxC9RmXndGVukKelJEaW5mRz.svg)](https://asciinema.org/a/9qxC9RmXndGVukKelJEaW5mRz)

**Comparison of two kinds of formats**

[![asciicast](https://asciinema.org/a/djoPeMmxgZosxDFXCVeMNROaY.svg)](https://asciinema.org/a/djoPeMmxgZosxDFXCVeMNROaY)

**Format stylish**

[![asciicast](https://asciinema.org/a/Kfx8Dy6v3y0epv3zgQ522UrrR.svg)](https://asciinema.org/a/Kfx8Dy6v3y0epv3zgQ522UrrR)

**Format plain**

[![asciicast](https://asciinema.org/a/BqlXuSIllEZ45wMDj8UYMxcYb.svg)](https://asciinema.org/a/BqlXuSIllEZ45wMDj8UYMxcYb)

**Format json**

[![asciicast](https://asciinema.org/a/ml6xITEs5sl6ysNtFs1RJdO6S.svg)](https://asciinema.org/a/ml6xITEs5sl6ysNtFs1RJdO6S)