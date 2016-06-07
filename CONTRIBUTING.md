# Contributing

## Reporting Issues
Before opening an issue, please search the
[issue tracker](https://github.com/esentire/old-major/issues) to make sure your
issue hasn't already been reported.


### Bugs and Improvements

We use the issue tracker to keep track of bugs and improvements to Redux itself,
its examples, and the documentation. We encourage you to open issues to discuss
improvements, architecture, theory, internal implementation, etc. If a topic has
been discussed before, we will ask you to join the previous discussion.


### Development

Old Major was written using the Angular-CLI tool. Try to conform to the
[Angular2 style guide](https://angular.io/styleguide). When adding a new
component/pipe/etc to the app, use the Angular2-CLI generator to ensure that it
is added to the build properly. Run `ng lint` to check your code with TSLint and
`ng test` to run Karma for unit testing.

### Sending a Pull Request

For non-trivial changes, please open an issue with a proposal for a new feature
or refactoring before starting on the work. We don't want you to waste your
efforts on a pull request that we won't want to accept.

On the other hand, sometimes the best way to start a conversation *is* to send a
pull request. Use your best judgement!

In general, the contribution workflow looks like this:

* Open a new issue in the
[Issue tracker](https://github.com/esentire/old-major/issues).
* Fork the repo.
* Create a new feature branch based off the `master` branch.
* Make sure all tests pass and there are no linting errors.
* Submit a pull request, referencing any issues it addresses.

Please try to keep your pull request focused in scope and avoid including
unrelated commits.

After you have submitted your pull request, we'll try to get back to you as soon
as possible. We may suggest some changes or improvements.