export const isEmpty = function (
  data: any,
  filter: (string | number | boolean)[] = []
) {
  if (!['function', 'object'].includes(typeof data)) {
    // filter 只允许传递基本类型：boolean、string、number
    if (filter.some((item) => JSON.stringify(item) === JSON.stringify(data))) {
      return false
    }
  }

  // empty 参数为空的时候，返回 true
  if (
    typeof data === 'undefined' ||
    data === '' ||
    data === 0 ||
    data === false ||
    data === null
  ) {
    return true
  }

  if (data instanceof Array) {
    if (data.length > 0) {
      return false
    } else {
      return true
    }
  }

  if (typeof data === 'object') {
    if (Object.keys(data).length == 0) {
      return true
    }

    return false
  }

  return false
}
