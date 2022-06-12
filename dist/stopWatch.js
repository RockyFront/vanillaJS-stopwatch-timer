function stopWatch() {
    let stopWatch = document.getElementById('stop-watch');
    let otherTimer = document.getElementById('timer');
    let recordsWrapper = document.getElementById('record-wrapper')
    otherTimer.classList.add('disp-none')
    stopWatch.classList.remove('disp-none')
    recordsWrapper.classList.remove('disp-none')

    let [minutes, seconds, milliseconds] = [0, 0, 0, 0];
    let timer = document.getElementById('stopWatchDisplay');
    let status = null;


    let start = document.getElementById('startStopWatch')
    let set = document.getElementById('setTimer');
    let pause = document.getElementById('pauseStopWatch');
    let reset = document.getElementById('resetTimer')

    let startStopWatch = document.getElementById('startStopWatch').addEventListener('click',
        () => {
            if (status !== null) {
                clearInterval(status);
            }
            reset.classList.add('disp-none');
            pause.classList.remove('disp-none')
            start.classList.add('disp-none');
            set.classList.remove('disp-none')
            status = setInterval(displayTimer, 10)
        });

    let setTimer = document.getElementById('setTimer').addEventListener('click', () => {
        let recordWrapper = document.getElementById('record-wrapper')
        let record = document.createElement('li');
        record.innerHTML = timer.innerHTML;
        recordWrapper.prepend(record);
    })

    let pauseStopWatch = document.getElementById('pauseStopWatch').addEventListener('click', () => {
        clearInterval(status);
        reset.classList.remove('disp-none')
        pause.classList.add('disp-none');
        start.classList.remove('disp-none')
        set.classList.add('disp-none');
    });

    let resetTimer = document.getElementById('resetTimer').addEventListener('click', () => {
        clearInterval(status);
        [minutes, seconds, milliseconds] = [0, 0, 0, 0];
        timer.innerHTML = '00 : 00 : 00';

    });


    function displayTimer() {
        milliseconds += 1;
        if (milliseconds == 100) {
            milliseconds = 0;
            seconds++;
        }
        if (seconds == 60) {
            seconds = 0;
            minutes++;
        }
        let m = String(minutes).padStart(2, '0')
        let s = String(seconds).padStart(2, '0')
        let ms = String(milliseconds).padStart(2, '0')

        timer.innerHTML = ` ${m} : ${s} : ${ms}`
    }
}