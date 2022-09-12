// write a Lee class algorithm in javascript
// Lee algorithm is a path-finding algorithm that is used to find the shortest path between two points in a grid. It is a variant of breadth-first search. It is named after Edward Lee, who published it in 1984. It is used in many games, such

class Lee {
    constructor() {
        this.root = null;
    }
    lee(grid, start, end) {
        let queue = [];
        let visited = [];
        let directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        let distance = 0;
        queue.push(start);
        visited.push(start);
        while (queue.length > 0) {
            let size = queue.length;
            for (let i = 0; i < size; i++) {
                let current = queue.shift();
                if (current[0] == end[0] && current[1] == end[1]) {
                    return distance;
                }
                for (let j = 0; j < directions.length; j++) {
                    let next = [current[0] + directions[j][0], current[1] + directions[j][1]];
                    if (next[0] >= 0 && next[0] < grid.length && next[1] >= 0 && next[1] < grid[0].length && grid[next[0]][next[1]] == 0 && !visited.includes(next)) {
                        queue.push(next);
                        visited.push(next);
                    }
                }
            }
            distance++;
        }
        return -1;
    }
}
const _Lee = Lee;
export { _Lee as Lee };
