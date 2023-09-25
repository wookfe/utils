export const getSearchParam = function (
  search: Location['search'],
  name: string
) {
  if (!search) return null
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  var r = search.slice(1).match(reg)
  if (r != null) return decodeURIComponent(r[2])
  return null
}
