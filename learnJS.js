
// Syntax parser inserts semicolon after return, this is a
// problem with automatic semicolon insertion
// Helpful to always put curley brackets directly after the end of function.


// Faking Namespaces
// Container for vars and functions JS doesn't use these because of the nature of objects in JS

//  First class functions
//  JS uses First class functions which call be passed around, created on the fly and generally used in the same way sas other types. 
//  Can be anonymous, or without a name.
//  Code: are where the actual lines of code sit.
//  The function is an object with many properties, code is one of those properties but it is not the funciton. 
//  code is invokeable function()

//  Function statment does work... A function expression creates a value that is not necessarly saved to a variable. 
//  Mutate - to change something and if it's immuitable that means it can't be changed

function a(){
	console.log(this);
	this.newvariable="hello";
}
a();

var b = function(){
	console.log(this);
};

b();

console.log(newvariable);




var c = {
	name: 'the c object',
	log: function(){
		var self = this;
		self.name = 'Updated c object when funciton invoked';
		self.locatoin = "2";
		console.log(self);
		var setName = function(newName){
			self.name=newName;

		};
		setName('updated again! the c object');
		console.log(self);
	},
	location: 1,
	size: 10
};

console.log(c);
c.log();
console.log(c);



