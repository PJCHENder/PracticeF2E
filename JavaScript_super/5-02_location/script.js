var lang = document.querySelector('html').lang;

var opt;

/*
if(lang == 'ja'){
    opt = document.querySelector('option[value="index_ja.html"]');
}else if(lang == 'en'){
    opt = document.querySelector('option[value="index_en.html"]');
}else if(lang == 'zh'){
    opt = document.querySelector('option[value="index.html"]');
}
*/

switch(lang){
    case 'ja':
        opt = document.querySelector('option[value="index_ja.html"]');
        break;
    case 'en':
        opt = document.querySelector('option[value="index_en.html"]');
        break;
    case 'zh':
        opt = document.querySelector('option[value="index.html"]');
        break;
}
opt.selected = true;

document.getElementById('form').select.onchange = function(){
    location.href = document.getElementById('form').select.value;
}