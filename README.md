# Class Transformer plainToClass Error Reproduction

# Problem

[plainToClass](https://github.com/typestack/class-transformer#plaintoclass) function from [class-transformer](https://github.com/typestack/class-transformer) package, works as it expected in **development** but not in **test** environment.

# Expectation

It should've transformed the `_id` to `id` correctly in a testing environment.

# Setup

`npm install` or `yarn`

# Reproduction

1- `npm run start` or `yarn start`

2-  `curl http://localhost:3333/api` or open in your browser

4- You should get a response:
```json
{
  "id":"600c2a7fa1e71ed8c30493a2"
}
```
5- `npm test`

6- You get: 
```text
Expected path: "id"
    Received path: []
    Received value: {"_id": "600c2ae6950f2cdb6cb999e3"}
```
