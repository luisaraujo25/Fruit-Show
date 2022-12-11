function removeElementX(index, list){
    let newList = [];
    let i = 0;
    while(i < index){
        newList.push(list[0]);
        list.shift();
        i++;
    }
    list.shift();
    console.log("half1: " + newList);
    for(let i = 0; i < list.length; i++){
        console.log(list[i])
        newList.push(list[i]);
    }
    console.log(newList);
    return newList;
}

//console.log(removeElementX(3,[1,2,3,4,5,6]))
