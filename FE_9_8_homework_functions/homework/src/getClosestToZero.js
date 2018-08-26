function getClosestToZero() {
    let minDiff = Infinity;
    let ans;
    for(let i = 0; i < arguments.length; i++){
        let m=Math.abs(0-arguments[i]);
        if(m<minDiff){
            minDiff=m;
            ans=arguments[i];
        }
    }
    return ans;
}
