function save_data()
{
    var form_element =document.getElementsByClassName(" ");
    var form_data =new FormData();

    for(var count =0;count<form_element.length;count++)
    {
        form_data.append(form_element[count].names,form_element[count].value);
    }
    document.getElementById('submit').disabled=true;
    var ajax_request=new XMLHttpRequest();
    ajax_request.open('POST','../action.php');
    ajax_request.send(form_data);

    ajax_request.onreadystatechange = function()
    {
        if(ajax_request.readyState == 4 && ajax_request.status == 200)
        {
            document.getElementById('submit').disabled = false;
            document.getElementById('sample_form').reset();
            document.getElementById('message').innerHTML = ajax_request.responseText;

            setTimeout(function(){
                document.getElementById('message').innerHTML = '';
            },2000);
        }
    }
}