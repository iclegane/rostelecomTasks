export function isLink(string: string): boolean {
    return string.startsWith('http://') || string.startsWith('https://');
}
