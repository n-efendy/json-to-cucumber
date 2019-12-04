# json-to-cucumber

## Description

Json to Cucumber is a QA helper tool for automation testing. It converts json data type responses into cucumber/gherkin form.
It converts
```bash
 {
    "id": 20,
    "bonus": false,
    "buying_price_percentage": 98.91392994251387,
    "category": {
      "id": 19,
      "name": "Kopi"
    }
}
```
to this
```bash
And response "$data..id" should be integer
And response "$data..bonus" should be boolean
And response "$data..buying_price_percentage" should be float
And response "$data...category.id" should be integer
And response "$data...category.name" should be string

```

## How to Use
```bash
  git clone git@github.com:n-efendy/json-to-cucumber.git
  cd json-to-cucumber
  yarn install
  yarn start
```
