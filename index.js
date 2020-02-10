class Timer {
    constructor(durationInput, startButton, pauseButton) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener("click", this.start)
        //assigns pause to click event and runs pause method
        this.pauseButton.addEventListener("click", this.pause)
    }

    //start up tick method and call it up every second
    start = () => {
        //run tick automatically first once so it doesnt have to wait for first interval
        this.tick();
        //tick to go off every second
        this.interval = setInterval(this.tick, 1000)
    }

    //pause timer with the variable of timer
    pause = () => {
        clearInterval(this.interval)
    }


    tick = () => {
        //reach into text input and get current value, turn string into number(Parse float for decimal), subtract 1 and put back into value
        const timeRemaining = parseFloat(this.durationInput.value)
        this.durationInput.value = timeRemaining - 1;
    }

}

const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start")
const pauseButton = document.querySelector("#pause")

const timer = new Timer(durationInput, startButton, pauseButton)