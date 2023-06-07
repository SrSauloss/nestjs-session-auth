export class ValidPagination {
  validPagination(headers: any) {
    let page
    let limit

    if (!headers) {
      page = 1
      limit = 10
    } else {
      page = headers.page
      limit = headers.limit
    }
    return { page, limit }
  }
}
