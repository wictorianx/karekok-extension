
var infobox = document.createElement("INPUT");
infobox.setAttribute("type", "text");
let buttongroup = document.getElementById("button_group");
buttongroup.appendChild(infobox);
infobox.style="margin-top:52px";
infobox.className="btn btn-outline-danger";
infobox.textContent="1";
let nextButton = document.getElementById("next-btn");
document.body.innerHTML += `<script>
function manage(){
function next() {//if(x==undefined){x=1;}
    alert("doing")
            var x = parseInt(infobox.textContent);
            var id = parseInt($('#next-btn').attr('data-id'))+x-2;console.log(id);
            if (id >= _data.length) {
                back($('#back-button'));
                message_alert("Son sorudasınız, sonraki teste geçin.", 2, 3000);
                return;
            }

            play_video(_data[id]);

            $('#previous-btn').attr('data-id', (id - 1));
            $('#next-btn').attr('data-id', (++id));
        alert("done")}}
            setTimeout(manage, 10000);
            </script> `
nextButton.addEventListener('click', next)