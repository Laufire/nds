# NDS

	A simple server to aid with debugging.

## Usage
```sh
$ node index.js [port=80] [pretty=Y/n] [handlerModuleString]
```

## Example
```sh
$ node index.js 5000 n ./handlers/example.js
```

## Notes

* Turning-off pretty is added essentially to help with the automation of log analysis.

* The module string could be anything parsable by the require call. Though this could be unsecure. It's by design, as the tool itslef is supposed only to use in development environments.
