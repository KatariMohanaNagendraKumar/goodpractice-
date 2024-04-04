import ut from './abc.js'
function ram(str){
    var len = str.length / 2;
    for(var i = 0; i < len; i++) {
        if(str[i].toLowerCase() !== str[str.length - 1 - i].toLowerCase()) {
            return "false";
        }
    }
    return "true";
}

var nag = "madaM";
console.log(ram(nag));
console.log(ut.add(100,200))
console.log(ut.nag(10,30))
