function recursiva(max) {
    setTimeout(() => {
        console.log(max);
        if (max >= 10) return;
        recursiva(max);
    }, 500);
    max++;
}

recursiva(0);