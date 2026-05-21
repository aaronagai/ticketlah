const REFERENCE_TODAY = new Date("2026-05-22T00:00:00");

export function getReferenceToday(): Date {
  return new Date(REFERENCE_TODAY);
}

export function parseEventDate(dateStr: string): Date {
  return new Date(dateStr + "T00:00:00");
}

export function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export function isToday(dateStr: string): boolean {
  return isSameDay(parseEventDate(dateStr), getReferenceToday());
}

export function isTomorrow(dateStr: string): boolean {
  const tomorrow = new Date(getReferenceToday());
  tomorrow.setDate(tomorrow.getDate() + 1);
  return isSameDay(parseEventDate(dateStr), tomorrow);
}

export function formatDateHeader(dateStr: string): string {
  const date = parseEventDate(dateStr);
  const weekday = date.toLocaleDateString("en-MY", { weekday: "long" });

  if (isToday(dateStr)) return `Today / ${weekday}`;
  if (isTomorrow(dateStr)) return `Tomorrow / ${weekday}`;

  const monthDay = date.toLocaleDateString("en-MY", {
    month: "short",
    day: "numeric",
  });
  return `${monthDay} / ${weekday}`;
}

export function groupEventsByDate<T extends { date: string }>(
  items: T[]
): { date: string; label: string; events: T[] }[] {
  const sorted = [...items].sort(
    (a, b) => parseEventDate(a.date).getTime() - parseEventDate(b.date).getTime()
  );

  const groups = new Map<string, T[]>();
  for (const event of sorted) {
    const existing = groups.get(event.date) ?? [];
    existing.push(event);
    groups.set(event.date, existing);
  }

  return Array.from(groups.entries()).map(([date, events]) => ({
    date,
    label: formatDateHeader(date),
    events,
  }));
}
