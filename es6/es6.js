//ESS
var x = function (x,y) {
    return x*y;
}
//es6 has classes wit constructor
//es6
const result = (x,y)=>x*y;
console.log(result(1,2));
class user{
    constructor(name,...skkils){
        this.name= name; 
        this.skkils=skkils;
    }
    eat(){
        console.log(this.name+"is eating");
        console.log(`${this.name}"is eating"`);
    }
    work(desiredSkill){
        this.skkils.forEach(skill=>{
            if(skill==desiredSkill){
                console.log(`${this.name}"is working on"${this.desiredSkill}`)
            }
        })
        console.log(this.skkils[1]);
    }
}

const u1= new user('Qwerty','java','html');
console.log(u1,name);
u1.eat();
u1.work('java');