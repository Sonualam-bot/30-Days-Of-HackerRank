
function main() {
    const N = parseInt(readLine().trim(), 10);
     if((N % 2 === 1) || (N % 2 === 0 && N >= 6 && N <=20)){
        console.log("Weird");
    }else if((N % 2 === 0 && N >= 2 && N <= 5) || (N % 2 === 0 && N > 20)){
        console.log("Not Weird");
    }
}
