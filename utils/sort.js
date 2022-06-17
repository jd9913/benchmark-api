const bubblesort = (arr)=>{
    let sorted = false;

    while (!sorted){
        sorted = true;

        for(let i=0; i<arr.length-1; i++){
            if(arr[i]>arr[i+1]){
                let temp =arr[i];

                arr[i]=arr[i+1];
                arr[i+1]= temp;

                sorted=false;
            }
        }
    }

    return arr;
};

const quickSort = (arr)=>{
    if (arr.length <=1){
        return arr;
    }

    const pivot = arr[0];
    const left = [];
    const right=[];

    for(let i=1; i<arr.length; i++){
        if(arr[i]<=pivot){
            left.push(arr[i]);
            
        }  else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
};

console.log(quickSort([1,43,67,4,3,89,78,0]));

module.exports={ bubblesort, quickSort};

