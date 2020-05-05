const data = require('./../config/people'); //gets json value

const listByGender = (gender) => {
	if(typeof gender != 'string') return false //checks for string value

	data.people.map(item => {
		if(item.gender === gender.toUpperCase()) console.log(item)
	})
}

Array.prototype.groupByDepartment = function() {
	return this.reduce(function(group, item) {
	  const value = item['department']
	  group[value] = group[value] || []
	  group[value].push(item)

	  return group
	}, {})
}

console.log("*********************************************")
console.log("******** OUTPUTS listByGender('M')***********")
console.log("*********************************************")
listByGender('M')

console.log("*********************************************")
console.log("******** OUTPUTS listByGender('F')***********")
console.log("*********************************************")
listByGender('F')

console.log("***********************************************")
console.log("******** OUTPUTS groupByDepartment()***********")
console.log("***********************************************")
let result = data.people.groupByDepartment('department');
console.log('result: ', result)


//node app/controllers/challengeOneController.js 