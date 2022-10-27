export function handleSubmit(
  event: React.FormEvent<HTMLFormElement>,
  contextValue: string,
  contextHandler: (value: string) => void
) {
  event.preventDefault();
  contextHandler(contextValue);
}

export function handleKeyDown(
  event: React.KeyboardEvent<HTMLFormElement>,
  contextRef: React.RefObject<HTMLDivElement>,
  valueHandler: (value: string) => void
) {
  if (event.key === 'Escape') {
    contextRef.current?.blur();
    valueHandler('');
  }
}
