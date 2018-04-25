function minesweeper(matrix) {
    let mine = []
    for (let i = 0; i< matrix.length; i++) {
        mine[i]=[];
        for (let j = 0; j < matrix[i].length; j++){
            if (matrix[i][j] !== 'X') {
                mine[i][j]=0;
                
                if (matrix[i][j-1] === true){
                    mine[i][j]++;
                }
                if (matrix[i][j+1] != undefined){
                    if (matrix[i][j+1] === true)
                    mine[i][j]++;
                }
                if (matrix[i-1] != undefined){
                    if (matrix[i-1][j] === true)
                    mine[i][j]++;
                }
                if (matrix[i+1] != undefined){
                    if (matrix[i+1][j] === true)
                    mine[i][j]++;
                }
                if (matrix[i+1] != undefined){
                    if (matrix[i+1][j+1] === true)
                    mine[i][j]++;
                }
                if (matrix[i+1] != undefined){
                    if (matrix[i+1][j-1] === true)
                    mine[i][j]++;
                }
                if (matrix[i-1] != undefined){
                    if (matrix[i-1][j+1] === true)
                    mine[i][j]++;
                }
                if (matrix[i-1] != undefined){
                    if (matrix[i-1][j-1] === true)
                    mine[i][j]++;
                }
            }
            
        }  
    }
    
    return mine
}
