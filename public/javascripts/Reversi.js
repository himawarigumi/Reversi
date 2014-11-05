$(document).ready(function() {

    //HTMLで盤面を読み込み
    var $img_cell = $("#cell");
    
    var showBoard = function() {
            var $img_cell = $("#cell");
            while()
    }

    //盤面の作成
    var board =[];
    onload = function() {
        for (var i = 1; i < 10; ++i) {
            board[i] = [];
            for (var j = 1; j < 10; ++j) {
                board[i][j] = $img_cell;
            }
        }
        showBoard();
    }



});
