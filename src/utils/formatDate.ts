export const formatDate = (timestamp: number) => {
  if (!timestamp) return;

  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    timeZone: "UTC",
  }).format(new Date(timestamp));
};
