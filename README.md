# Nest Validation Test

Demonstrates an issue with validation using `ValidationPipe`. My expectation is that both e2e tests in this repository should pass, currently one fails.

## Setup

`BodyDTO` has one property (`age`), which is protected by an `@IsNumber` decorator.

A global validation pipe is applied in `main.ts`.

There are two endpoints - `POST /works` and `POST /broken`. They both use the same `@Body`, which is declared and validated to be a `BodyDTO`.

Endpoint `POST /works` additionally passes `ValidationPipe` to the `@Body` decorator - `@Body(ValidationPipe)`

## Expectation

The validation on these endpoints is identical

## Finding

A body of `{ age: 'a string' }` fails validation for `/works` (with `ValidationPipe` passed directly to `@Body`), but passes validation for `/broken` (relying on the global validation pipe).
