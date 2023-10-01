function n(x) {for (let i = 0; i<x;i++){next()}}



function n(x) {if(x==undefined){x=1;}
            var id = parseInt($('#next-btn').attr('data-id'))+x-1;console.log(id);
            if (id >= _data.length) {
                back($('#back-button'));
                message_alert("Son sorudasınız, sonraki teste geçin.", 2, 3000);
                return;
            }

            play_video(_data[id]);

            $('#previous-btn').attr('data-id', (id - 1));
            $('#next-btn').attr('data-id', (++id));
        }
function n(x) {if(x==undefined){x=1;}
            var id = $('#next-btn').attr('data-id');
            if (id >= _data.length) {
                back($('#back-button'));
                message_alert("Son sorudasınız, sonraki teste geçin.", 2, 3000);
                return;
            }

            play_video(_data[id]);

            $('#previous-btn').attr('data-id', (id - x));
            id += x;$('#next-btn').attr('data-id', (id));
        }
