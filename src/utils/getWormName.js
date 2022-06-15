export default function getWormName(score, winRound) {
    let wormName;

    if (winRound) {
        switch (score) {
            case 0:
            case 5:
                wormName = 'worms'
                break
            case 1:
            case 2:
            case 3:
            case 4:
                wormName = 'worms';
                break;
            default:
                wormName = 'worms';
        }
        return wormName
    }

    switch (score) {
        case 24:
        case 23:
        case 22:
            wormName = 'worms';
            break;
        case 21:
            wormName = 'worm';
            break;
        case 4:
        case 3:
        case 2:
            wormName = 'worms';
            break;
        case 1:
            wormName = 'worm';
            break;
        default:
            wormName = 'worms';
    }

    return wormName
}