const compressArray = (original) => {
    const compressed = [];
    const copy = original.slice(0);
    original.filter(Boolean).map((obj)=> {
        let myCount = 0
        copy.filter(Boolean).map((item) => {
            if (obj.id === item.id) {
                myCount++;
                item = undefined;
            }
        })
        if (myCount > 0) {
            let a = new Object();
            a = { ...obj, count: obj.count ? obj.count + (myCount-1) : myCount };
            compressed.push(a);
        }
    })
    const setObj = new Set();

    const result = compressed.reduce((acc,item)=>{
      if(!setObj.has(item.id)){
        setObj.add(item.id,item)
        acc.push(item)
      }
      return acc;
    },[]);
    return result;
}

export default compressArray