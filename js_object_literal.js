var Student = {
    init: function(name){
        this.name = name
    },
    print: function(){
        console.log(this.name)
    }
}

var s1 = Object.create(Student)
var s2 = Object.create(Student)
s1.init('abcd')
s2.init('1234')

s1.print()
s2.print()

