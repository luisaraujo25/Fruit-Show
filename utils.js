function removeElementX(index, list){
    let newList = [];
    let i = 0;
    while(i < index){
        newList.push(list[0]);
        list.shift();
        i++;
    }
    list.shift();
    for(let i = 0; i < list.length; i++){
        newList.push(list[i]);
    }
    return newList;
}

//console.log(removeElementX(3,[1,2,3,4,5,6]))
