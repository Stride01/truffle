/*
  Custom jest resolver is needed because jest 18 uses ESM version of uuid by default.

  See:
    - https://github.com/microsoft/accessibility-insights-web/pull/5421#issuecomment-1109168149
    - https://jestjs.io/docs/upgrading-to-jest28#packagejson-exports
*/

module.exports = (path, options) => {
  return options.defaultResolver(path, {
    ...options,
    packageFilter: pkg => {
      if (pkg.name === "uuid") {
        delete pkg.exports;
        delete pkg.module;
      }
      return pkg;
    }
  });
};
