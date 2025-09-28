
const areaofcircle=(R)=>{
    return 3.14*R*R;
}
const cube=(num)=>{
    return num*num*num;
}
const evenodd=(num)=>{
    if(num%2==0){
        return "even";
    }else{
        return "odd";
    }
}
module.exports={areaofcircle,cube,evenodd};