export function formatCalendarDate(date) {
    const failure = '—';

    if (typeof date !== 'string' ||
        !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
        return failure;
    }

    const dateInstance = new Date(date);

    if (Number.isNaN(dateInstance.getTime())) return failure;

    if (date !== dateInstance.toISOString().slice(0, 10)) {
        return failure;
    }

    return dateInstance.toLocaleDateString('en-GB', { timeZone: 'UTC' });
}