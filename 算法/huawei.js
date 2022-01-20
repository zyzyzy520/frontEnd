
process.stdin.resume();
process.stdin.setEncoding('utf-8');
let input = '';
process.stdin.on('data', (data) => {
    input += data;
});
process.stdin.on('end', () => {
    let inputArray = input.split('\n');
    /**
     * 待实现函数，在此函数中填入答题代码
     * doFunc()
     */
    //BFS
    //BFS队列， 是否已访问数组
    let row = parseInt(inputArray[0].split(' ')[0]), col = parseInt(inputArray[0].split(' ')[1]);
    let queue = [], visited = new Array(row).fill(0).map(element => {
        return new Array(col).fill(0);
    });
    let map = [], direction = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    for (let i = 1; i < inputArray.length; i++) {
        map.push(inputArray[i].split(' '));
    }
    let good = 0, depth = [];
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (map[i][j] == "B") {
                queue.push([i, j]);
                visited[i][j] = 1;
                depth.push(0);
            } else if (map[i][j] == "R") good++;
            else if (map[i][j] == "E") visited[i][j] = 1;
        }
    }
    let curDepth = 0;
    while (queue.length != 0) {
        let index = queue.shift();
        curDepth = depth.shift();
        let x = index[0], y = index[1];
        for (let k = 0; k < 4; k++) {
            let pulseX = direction[k][0], pulseY = direction[k][1];
            if (x + pulseX >= 0 && x + pulseX < row && y + pulseY >= 0 && y + pulseY < col &&
                visited[x + pulseX][y + pulseY] == 0) {
                visited[x + pulseX][y + pulseY] = 1, good--, queue.push([x + pulseX, y + pulseY]);
                depth.push(curDepth + 1);
            }
        }
    }
    console.log('[' + curDepth + ',' + good + ']');
    process.exit();
});




process.stdin.resume();
process.stdin.setEncoding('utf-8');
let input = '';
process.stdin.on('data', (data) => {
    input += data;
});
process.stdin.on('end', () => {
    let inputArray = input.split('\n');
    /**
     * 待实现函数，在此函数中填入答题代码
     * doFunc()
     */
    let hash = {
        'A': 'a', 'B': 'b', 'C': 'c', 'D': 'd', 'E': 'e', 'F': 'f', 'G': 'g', 'H': 'h',
        'I': 'i', 'J': 'j', 'K': 'k', 'L': 'l', 'M': 'm', 'N': 'n', 'O': 'o', 'P': 'p', 'Q': 'q',
        'R': 'r', 'S': 's', 'T': 't', 'U': 'u', 'V': 'v', 'W': 'w', 'X': 'x', 'Y': 'y', 'Z': 'z',
        'a': 'A', 'b': 'B', 'c': 'C', 'd': 'D', 'e': 'E', 'f': 'F', 'g': 'G', 'h': 'H',
        'i': 'I', 'j': 'J', 'k': 'K', 'l': 'L', 'm': 'M', 'n': 'N', 'o': 'O', 'p': 'P', 'q': 'Q',
        'r': 'R', 's': 'S', 't': 'T', 'u': 'U', 'v': 'V', 'w': 'W', 'x': 'X', 'y': 'Y', 'z': 'Z'
    }
    //let hash = { 'A': 'a','B': 'b', 'C': 'c', 'D':'d','E':'e','F':'f','G':'g','H': 'h','I':'i','J':'j', 'K': 'k','L': 'l', 'M': 'm', 'N':'n', 'O':'o','P':'p','Q':'q','R':'r','S':'s','T':'t', 'U': 'u','V':'v','W','w','X':'x','Y':'y','Z':'z', 'a': 'A','b':'B','c':'C','d':'D','e':'E','f':'F','g':'G','h':'H','i':'I','j':'J','k':'K', 'l':'L','m':'M','n':'N','o':'O','p':'P','q':'Q','r':'R','s':'S','t':'T','u':'U','v':'V','w':'W','x':'X','y':'Y','z':'Z'}
    let str = inputArray[0];
    let ans = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '*') {
            // *号，且数组不为空
            if (ans.length != 0) ans.pop();
        } else if (str[i] == '#') {
            if (ans.length != 0) ans.push(ans[ans.length - 1]);
        } else if (hash[str[i]] != undefined) {
            ans.push(hash[str[i]]);
        } else {
            ans.push(str[i]);
        }
    }
    console.log(ans.join(''));
    process.exit();
});
