class Timer {
	constructor(durationInput, startButton, pauseButton, callbacks) {
		this.durationInput = durationInput;
		this.startButton = startButton;
		this.pauseButton = pauseButton;
		//optional callbacks
		if (callbacks) {
			this.onStart = callbacks.onStart;
			this.onTick = callbacks.onTick;
			this.onComplete = callbacks.onComplete;
		}

		this.startButton.addEventListener("click", this.start);
		//assigns pause to click event and runs pause method
		this.pauseButton.addEventListener("click", this.pause);
	}

	//start up tick method and call it up every second
	start = () => {
		//optional onStart callback
		if (this.onStart) {
			this.onStart();
		}
		//run tick automatically first once so it doesnt have to wait for first interval
		this.tick();
		//tick to go off every second
		this.interval = setInterval(this.tick, 1000);
	};

	//pause timer with the variable of timer
	pause = () => {
		clearInterval(this.interval);
	};

	tick = () => {
		//check to stop timer when hits 0
		if (this.timeRemaining <= 0) {
			this.pause();
			//if call back provided, call it and notify the timer has stopped.
			if (this.onComplete) {
				this.onComplete();
			}
		} else {
			//reach into text input and get current value, turn string into number(Parse float for decimal. envoking time remaining method below)
			const timeRemaining = parseFloat(this.timeRemaining);
			this.timeRemaining = timeRemaining - 1;
			//if provided callback, call it.
			if (this.onTick) {
				this.onTick();
			}
		}
	};

	get timeRemaining() {
		return parseFloat(this.durationInput.value);
	}

	//setter to change the value of the input
	set timeRemaining(time) {
		this.durationInput.value = time;
	}
}

const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

//timer class. optinal CB functions. Hook up timer to "outside world" to react when certain things have finished
const timer = new Timer(durationInput, startButton, pauseButton, {
	onStart() {
		console.log("timer started");
	},
	onTick() {
		console.log("tick");
	},
	onComplete() {
		console.log("timer completed");
	},
});
