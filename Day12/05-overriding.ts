

class PWWrapper{ // baseclass / parentclass

loadUrl(){
    console.log("Loading url");  
}
}


class LoginPage extends PWWrapper{ // child class
loadUrl(){
console.log("Loading login page");
}

}

const objlop = new PWWrapper()
objlop.loadUrl()
