let students=[
    {
        FirstName:"Kalyani",
        age:22,
        city:"Pune",
        skills:["python","js",'java',"css"],
        marks:90
    }
    ,
    {
        FirstName:"Aryan",
        age:24,
        city:"Nagar",
        skills:["python","js1",'java1',"css1"],
        marks:90
    } 
    , 
    {
        FirstName:"Kalyan",
        age:25,
        city:"Mumbai",
        skills:["python","js2",'java2',"css2"],
        marks:90
    }
    ]
    
    students.forEach(function(el){
        console.log(el.FirstName , el.skills.length)
    })
    
    let q1=students.filter(function(el){
        return (el.skills.includes('python2'))
    })
    console.log(q1)
    
    q1.forEach(function(el){
        console.log(el.FirstName)
    })
    
    students.forEach(function(el){
        if(el.skills.includes('python')){
            console.log(el.FirstName)
        }
    })
    
    students.forEach(function(el){
        el.skills.push('jira')
    })
    console.log(students)
    
    students.forEach(function(el){
        el.skills.push('cs')
    })
    console.log(students)
    
    let q2=students.filter(function(el){
        return el.skills.includes('python')
    })
    console.log(q2)
    
    q2.forEach(function(el){
        console.log(el.FirstName)
    })
    
    students.forEach(function(el){
        if(el.skills.includes('python1')){
            console.log(el.skills)
        }
    })
    
    let q3=students.filter(function(el){
        return el.city=='Pune'
    })
    console.log(q3)
    
    q3.forEach(function(el){
        console.log(el.FirstName)
    })
    
    students.forEach(function(el){
        if(el.city=='Pune'){
            console.log(el.FirstName)
        }
    })
    
    let q4=students.filter(function(el){
        return (el.skills.includes('python')&& el.city=="Pune")
    })
    console.log(q4)
    
    q4.forEach(function(el){
        console.log(el.FirstName)
    })
    
    students.forEach(function(el){
        if(el.skills.includes('python')&& el.city=="Pune"){
            console.log(el.FirstName)
        }
    })
    
    let q5=students.reduce(function(acc,el){
        return acc+el.marks
    },0)
    console.log(q5/students.length)
    
    
    students.forEach(function(el){
    if( el.skills.includes('css') && el.city=="Pune"){
    console.log(el.FirstName)
    }
    })
    
    let q6=students.reduce(function(acc,el){
        return acc+el.marks
    },0)
    console.log(q6)
    console.log(q6/students.length)
    
    students.forEach(function(el){
    if(el.skills.includes('python')&& el.city==="Pune"){
    console.log(el.FirstName)
    }
    })
    