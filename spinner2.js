const spinner = () => {
  let fullSpin = 2;
  let delay = 100;
  let spinnerArr = ['|', '/', '-', '\\', '|'];
  let arrLength = spinnerArr.length;
  let tracker = 0;

  while (fullSpin > 0) {
    if (fullSpin === 1) {
     spinnerArr = spinnerArr.slice(1);
    }
    for (const val of spinnerArr) {
      setTimeout(() => {
        process.stdout.write('\r' + val);
        tracker++;
        if(tracker === (arrLength * 2) - 1) {
            console.log('');
        }
        
      }, delay);
      delay += 200; 
    }
    fullSpin--;
  }
}
spinner();