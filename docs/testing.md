# Testing Methodologies

First off, give these great articles a read:

- [Static vs Unit vs Integration vs E2E Testing for Frontend Apps](https://kentcdodds.com/blog/unit-vs-integration-vs-e2e-tests)
- [The Practical Test Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html)
- [Testing Behavior vs. Testing Implementation](https://teamgaslight.com/blog/testing-behavior-vs-testing-implementation)
- [Why I Never Use Shallow Rendering](https://kentcdodds.com/blog/why-i-never-use-shallow-rendering)

## Unit/Integration Testing

A mistake I made early on in my career was only focusing on pure, isolated unit tests over any other form of testing - thinking it was "THE right way" to do things. Another mistake I made early on was testing implementation details instead of behavior.

The goal is to have tests that mimic the real world as much as possible. In this way, you'll notice your tests trend more towards integration testing - more so than pure, isolated unit testing.

**In summary, don't worry too much about "unit" vs "integration" testing. Good testing tests behavior (not implementation details) in real world conditions (as few mocks/stubs as possible).**