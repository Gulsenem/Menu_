
var is_btn_akt = false;

function aktivieren(element)
{
    var aktiv = document.createElement("div");
    aktiv.classList.add("aktiv");

    if (!is_btn_akt)
    {
        is_btn_akt = true;
    }
    else
    {}

}