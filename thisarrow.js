var name = "person";

var obj = {
    name: "hafeez",
    addres: "kpk",
    fun: function () {
        console.log(this.name);

        function hi() {
            console.log(this.name);

        }
        hi();
    }
}
obj.fun();



