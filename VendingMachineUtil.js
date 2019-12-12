function Looping(){
	// 포장마차 리필
	//for forTest
	//forEach
	//map
	//find
	//reduce
	//filter
	this.forTest = function(arr){
		let returnVal = []
		for(let i = 0; i<arr.length; i++){
			if(arr[i] % 2 == 0)	//짝수만 출력하세요!
			returnVal.push(arr[i])
		}
		return returnVal
	}
	this.forEachTest = function(arr){
		let returnVal = []
		arr.forEach( i => {if(i % 2 == 0) returnVal.push(i)})
		return returnVal
	}
	this.mapTest = function(arr){
		return arr.map(i => i*100)  //각 요소마다 내가 만든식을 다 때려준다!
	}
	this.findTest = function(arr){
		return (arr.find(function(i){ 
			return i > 5    //조건에 맞는 것 근사치  하나만 리턴!
		}))
	}
	this.findTest3 = function(arr){
		return arr.find(i=> i > 5)
	}
	this.findTest2 = function(arr, id){
		let resultVal = (arr.find(i=> i.id == id ))
		return (resultVal == undefined) ? '찾는 아이디가 없습니다.' : resultVal.name
	}
	this.reduceTest = function(arr){
		return arr.reduce((i, j) => i + j)   // 자동적으로 i,j 를 앞뒤로 인식함 이중 포룹  1,2  2,3  3,4  4,5
	}
	this.filterTest = function(arr){
		return arr.filter(i => (i % 2 == 0))
	}  //fortest 나 foreach 보다 빠르다.바로 리턴 메모리를 번쩍 잠깐 쓴다. 투입되는 값이 많은 서치엔진은 아래 4개쓴다. // 부분집합 위에
	
	this.ofTest = function(arr){
		let temp = []
		for(const item of arr){
			temp.push(item.name)
		}
		return temp
	}  
	this.fromTest = function(arr){
		return Array.from(arr,i => i + i)
	}
	this.argumentsTest = function(){   
		return [...arguments]             // ... 전달된 값을 그대로 리턴!
	}
	this.joinTest = function(){
		return [...arguments].join("\n")
	}
	
	this.sortTest = function(){
		let t1=[...arguments].sort()
		let t2=[...t1].reverse()   // 리버스는 역순인데 내림차순 정렬이라기보다 그냥 기본 배열을 역순으로 바꿔줌. 1 3 4 2 있으면 2 4 3 1 이렇게 역
		return [...t1, ...t2]
	}
	this.reverseTest = function(){
		return [...arguments].reverse()
	}
	this.todos = function (arr) {
		const todos = arr
		// 비교 함수
		function compare(key) {
			return function (a, b) {
				// 프로퍼티 값이 문자열인 경우, - 산술 연산으로 비교하면 NaN이 나오므로 비교 연산을 사용한다.
				// 제이슨에서 접근할때 . 쓰는 경우와[] 쓰는 경우 주의!!!
				// a.'id'  (x)  a[id] (o) 
				return a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0);
			};
		}

		// id를 기준으로 정렬 . id는 string 문자열값. 정렬이니깐 compare(id) 하면 안됨? 
		resultVal = todos.sort(compare('id'));
		console.log(todos);

		// content를 기준으로 정렬, 정렬이니깐 문자열 '' 
		arr = todos.sort(compare('content'));
		let temp = []
		for(const item of arr){
			temp.push(item.content)
		}
		return temp
	}

}