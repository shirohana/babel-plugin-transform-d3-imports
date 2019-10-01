export default function factory () {
  return {
    files: [
      'test/**/*.test.js'
    ],
    sources: [
      'src/**/*.js'
    ],
    cache: false,
    failFast: false,
    failWithoutAssertions: false,
    environmentVariables: {},
    verbose: true
  }
}
