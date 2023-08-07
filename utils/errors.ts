
export function createInternalError () {
  return createError({ statusCode: 500, statusMessage: 'Something went wrong. Try again later.', fatal: true })
}

export function createNotFoundError () {
  return createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
