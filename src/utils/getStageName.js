export default function getStageName(index = []) {
    const data = [
        'Various',
        'Sparrows',
        'Forest',
        'Songbirds',
        'Predators',
        'Seabirds'
    ];

    return typeof index === "object"
        ? data
        : data[index];
}