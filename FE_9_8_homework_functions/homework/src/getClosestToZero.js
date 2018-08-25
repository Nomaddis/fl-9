function getClosestToZero() {
    let i=0;
    let minDiff=1000;
    let ans;
    for(i in arguments){
        let m=Math.abs(0-arguments[i]);
        if(m<minDiff){
            minDiff=m;
            ans=arguments[i];
        }
    }
    return ans;
}
