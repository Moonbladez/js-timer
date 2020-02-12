const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const circle = document.querySelector("circle")

//find the perimeter of circle svg
const perimeter = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", perimeter);

let duration;

//timer class. optinal CB functions. Hook up timer to "outside world" to react when certain things have finished
const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(totalDuration) {
        duration = totalDuration;
    },
    onTick(timeRemaining) {
        circle.setAttribute("stroke-dashoffset",
            (perimeter * timeRemaining) / duration - perimeter
        );
    },
    onComplete() {
        console.log("timer completed");
    },
});