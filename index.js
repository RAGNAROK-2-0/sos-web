$(document).ready(function () {
    mudaCorStatus("#16DA92");
    //assim que for autenticado o usuario deve retornar ao index maior
    verificaUsuarioAutenticado('');
});

function carregaPagina(pagina = "index.html") {
    $("#loadPage").load(pagina);
}

function mudaCorStatus(cor) {
    $("#status").css("background-color", cor);
}

function setCookie(name, value, duration) {
    var cookie = name + "=" + escape(value) +
        ((duration) ? "; duration=" + duration : "") +
        '; path=/';
    document.cookie = cookie;
}

function getCookie(name) {
    var cookies = document.cookie;
    var prefix = name + "=";
    var begin = cookies.indexOf("; " + prefix);

    if (begin == -1) {

        begin = cookies.indexOf(prefix);

        if (begin != 0) {
            return null;
        }

    } else {
        begin += 2;
    }

    var end = cookies.indexOf(";", begin);

    if (end == -1) {
        end = cookies.length;
    }

    return unescape(cookies.substring(begin + prefix.length, end));
}

function deleteCookie(name) {
    if (getCookie(name)) {
        document.cookie = name + "=" + "; expires=Thu, 01-Jan-70 00:00:01 GMT";
    }
}

function navigateToPage(pageToLoad) {
    window.location.replace(getBaseURL()+pageToLoad)
}

function getBaseURL() {
    const baseUrl = window.location.href;
    const httpType = baseUrl.split('//')[0]
    const urlHost = baseUrl.split('//')[1]
    const base = urlHost.split('/')[0]
    if(base =='ragnarok-2-0.github.io' ){
        return httpType+'//'+base + '/sos-web';
    }
    return httpType+'//'+base;
}

//se passar parametro a quando autenticado o usuario vai ao caminho especificado
//se não ele irá para o index maior por padrão
function verificaUsuarioAutenticado(pageToReturnAfterAuthCompleted = false){  
    if(pageToReturnAfterAuthCompleted){
        var uma_semana = new Date();
        uma_semana.setDate(uma_semana.getDate() + 1);
        let data = uma_semana.toGMTString();
        deleteCookie('x-sos-auth-callbackPage')
        setCookie('x-sos-auth-callbackPage',pageToReturnAfterAuthCompleted,data)
    }else{
        deleteCookie('x-sos-auth-callbackPage')
    }
    if(!getCookie('x-sos-auth-num_func') && window.location.href != getBaseURL()+'/pages/login/' ){
        navigateToPage('/pages/login/')
    } 
}