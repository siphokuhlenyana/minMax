const ages =[20,55,30,14,3]
function minMax(){

     let max=Math.max(...ages)
     console.log(max + " is the maximum number !")
     let min =Math.min(...ages)
     console.log(min +" is the minimum number !")
}
minMax()