export function formatRelativeTime(date: Date, locale = 'id-ID') {
  if (!(date instanceof Date)) {
    throw new Error("Invalid date object");
  }

  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });
  const diffInSeconds = Math.round((date.getTime() - Date.now()) / 1000);

  const timeUnits = [
    { unit: "year", value: 31536000 },
    { unit: "month", value: 2592000 },
    { unit: "week", value: 604800 },
    { unit: "day", value: 86400 },
    { unit: "hour", value: 3600 },
    { unit: "minute", value: 60 },
    { unit: "second", value: 1 },
  ];

  for (const { unit, value } of timeUnits) {
    if (Math.abs(diffInSeconds) >= value || unit === "second") {
      return rtf.format(Math.round(diffInSeconds / value), unit as Intl.RelativeTimeFormatUnit);
    }
  }
}
