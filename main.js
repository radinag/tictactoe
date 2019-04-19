// main.js (tic-tac-toe)

var winners = [
                    [1, 2, 3],
                    [4, 5, 6],
                    [7, 8, 9],
                    [1, 4, 7],
                    [2, 5, 8],
                    [3, 6, 9],
                    [1, 5, 9],
                    [3, 5, 7],
                ];
var player_turn = 1;

var player1wins = 0;
var player2wins = 0;
var ties = 0;

$('#reset').on('click', function () {
    $('table.board td').removeClass('x o');
    player_turn = 1;
    // $('#player-turn').html(player_turn);
    $('#player-turn').html(
        $('#name1').val()
    );

});

$('table.board td').removeClass('x o');

$('table.board td').on('click', function () {
    console.log('You click a square!');

    if (
        !$(this).hasClass('x') &&
        !$(this).hasClass('o')
    ) {
        if (player_turn == 1) {
            $(this).addClass('x');
            player_turn = 2;
        } else {
            $(this).addClass('o');
            player_turn = 1;
        }
    }
        // $('#player-turn').html(player_turn);
        $('#player-turn').html(
            $('#name' + player_turn).val()
        );
        console.log($('table.board td.x').length);

        
    var found_a_winner = false;
    winners.forEach(function (array_of_numbers) {
            // console.log(array_of_numbers);
            if (
                $('table td#square' + array_of_numbers[0]).hasClass('x') &&
                $('table td#square' + array_of_numbers[1]).hasClass('x') &&
                $('table td#square' + array_of_numbers[2]).hasClass('x')
            ) {
                alert('Game Over! Winner is ' + $('#name1').val());
                player1wins++;
                $('#winsplayer1').html(player1wins);
                found_a_winner = true;
            }

            if (
                $('table td#square' + array_of_numbers[0]).hasClass('o') &&
                $('table td#square' + array_of_numbers[1]).hasClass('o') &&
                $('table td#square' + array_of_numbers[2]).hasClass('o')
            ) {
                alert('Game Over! Winner is ' + $('#name2').val());
                player2wins++;
                $('#winsplayer2').html(player2wins);
                found_a_winner = true;
            }
        });
        if (
            $('table.board td.x,table.board td.o ').length == 9 && !found_a_winner
        ) {
            console.log('Board is full!');
            alert('Board is full! Game Over!');
            ties++;
            $('#numties').html(ties);
        }
  });
