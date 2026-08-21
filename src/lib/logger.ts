export function logInfo(message: string, meta?: Record<string, unknown>) {
  // eslint-disable-next-line no-console
  console.info(message, meta ?? {});
}

export function logError(message: string, meta?: Record<string, unknown>) {
  // eslint-disable-next-line no-console
  console.error(message, meta ?? {});
}
