var Student = function(pName){
    // private variable
    var name = pName

    return {
        // public variable
        age: 10,
        // public function
        print: function(){
            console.log(name, this.age)
        }
    }
}


var s1 = Student('arun')
var s2 = Student('abcd')
s1.age = 90
s1.print()
s2.print()
