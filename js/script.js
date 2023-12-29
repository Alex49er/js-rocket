
// hey this is an invisible comment.
let currentClassName = document.getElementById('cool').className = 'cool red';

if (currentClassName == 'cool'){
    document.getElementById('cool').className = 'cool red';
} else{
    document.getElementById('cool').className = 'cool';
}

let doCoolStuff = function(){
    document.getElementById('cool').className = 'cool red';
}

let sayMyName = function(name){
    alert('My name is: '+name);
}

let car = {
                make: 'VW',
                type: 'Polo',
                color: 'blue',
                isTurnedOn:  false,
                numberOfWheels: 4,
                seats: ['seat1', 'seat2', 'seat3', 'seat4'],
                turnOn: function(){
                    this.isTurnedOn = true;
                },
                fly: function(){
                    alert('fly');
                },
                    
                switchCar: function(isOn){
                console.log('turn car '+isOn);
                    if(isOn == true){
                        this.isTurnedOn = true;
                    } else{
                        this.isTurnedOn = false;
                    }
                }   
            };
        console.log('hello there friends!');