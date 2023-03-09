# JavaScript TDD Project

## Step 1 
`npm create vite@latest` then select vanilla JS project.

## Step 2 
`npm i jest`

## Step 3
Create `/test` directory with a `stack.test.js` file.

## Step 4
To run the code and execute jest runner, add to package.json a new script 
```json
"test": "jest --watchAll --verbose"
```

## Step 6
Add types for Jest
`npm i @types/jest -D`
Create a `jsconfig.json` file with following type acquisiton :
```json
{
    "typeAcquisition": {
        "include": [
            "jest"
        ]
    }
}
```

## Step 5
Add code coverage report : back in the `package.json`, update the test script to include the flag `--coverage`
