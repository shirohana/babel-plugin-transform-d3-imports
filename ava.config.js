export default function factory () {
  return {
    files: [
      'test/**/*.test.js'
    ],
    sources: [
      'src/**/*.js'
    ],
    cache: true,
    failFast: true,
    failWithoutAssertions: true,
    environmentVariables: {},
    verbose: true
  }
}
