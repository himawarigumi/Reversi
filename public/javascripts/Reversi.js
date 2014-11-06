(function() {
    // ---定数---
    //
    var BLANK = 0;
    var BLACK = 1;
    var WHITE = 2;
    var FIELD_WIDTH  = 8;
    var FIELD_HEIGHT = 8;
    var PIECE_WIDTH  = 50;
    var PIECE_HEIGHT = 50;

    //
    // ---HTML 要素---
    //
    var mainElement;
    var messageElement;
    var piecePictures;
    var setElements = function() {
        mainElement = document.getElementById("main");
        messageElement = document.getElementById("message");
        piecePictures = [
            document.getElementById("blank"),   //配列の0
            document.getElementById("black"),   //配列の1
            document.getElementById("white")    //配列の2
        ];
    };

    //
    // ---ゲーム内で使用するデータ---
    //
    var field = [];
    var nowTurn = BLACK;
    var endGame = false;
    var initField = function() {
        for (var x = 0; x < FIELD_WIDTH + 2; x++) {
            field[x] = [];
            for (var y = 0; y < FIELD_HEIGHT + 2; y++) {
                field[x][y] = BLANK;
            }
        }

        var minCenterWidth  = ((FIELD_WIDTH  / 2) | 0);
        var maxCenterWidth  = ((FIELD_WIDTH  / 2) | 0) + 1;
        var minCenterHeight = ((FIELD_HEIGHT / 2) | 0);
        var maxCenterHeight = ((FIELD_HEIGHT / 2) | 0) + 1;
        field[minCenterWidth][minCenterHeight] = field[maxCenterWidth][maxCenterHeight] = WHITE;
        field[minCenterWidth][maxCenterHeight] = field[maxCenterWidth][minCenterHeight] = BLACK;
    };

    //
    // 盤面を描画する
    //
    var drawField = function() {
        // removeChildren(mainElement);

        mainElement.style.width  = PIECE_WIDTH  * FIELD_WIDTH  + "px";
        mainElement.style.height = PIECE_HEIGHT * FIELD_HEIGHT + "px";

        for (var x = 1; x <= FIELD_WIDTH; x++) {
            for(var y = 1; y <= FIELD_HEIGHT; y++) {
                var elem = piecePictures[field[x][y]].cloneNode(true);
                elem.style.left = ((x - 1) * PIECE_WIDTH)  + "px";
                elem.style.top  = ((y - 1) * PIECE_HEIGHT) + "px";
                mainElement.appendChild(elem); //mainのdivにdiv要素を付与していく
                //クリックしたら石を置く
                if(field[x][y] === 0) {
                    (function() {
                        var _x = x, _y = y;             //????????
                        elem.onclick = function() {
                            field[_x][_y] = 1;
                            drawField();
                        };
                    })();
                }
            }
        }
    };

    // 石を置く関数
    var putStone = function() {

    };

    //
    // メイン
    //
    onload = function() {
        setElements();
        initField();
        drawField();
    };
})();




// $(document).ready(function() {

//     //HTMLで盤面を読み込み
//     var $img_cell = $("#img-cell").clone().removeAttr("id");
//     var piece;
    
//     var showBoard = function() {
//         var b = document.getElementById("board");
//         for (var x = 1; x <= 8; ++x) {
//             for (var y = 1; y<=8; ++y) {
//                 var c = piece[board[x][y]];
//                 c.style.left = ((x - 1) * 64) + "px";
//                 c.style.top= ((y - 1) * 64) + "px";
//                 b.appendChild(c);
//             }
//         }
//     }

//     //盤面の作成
//     var board =[];
//     onload = function() {
//         piece = [$img_cell];
//         for (var i = 1; i < 10; ++i) {
//             board[i] = [];
//             for (var j = 1; j < 10; ++j) {
//                 board[i][j] = 0;
//             }
//         }
//         // alert(board);
//         showBoard();
//     }



// });
