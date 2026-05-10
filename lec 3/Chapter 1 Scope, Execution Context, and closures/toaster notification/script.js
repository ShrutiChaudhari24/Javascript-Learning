// toaster
function createToaster(config){
    return function(notification){   // receive message here
        let div = document.createElement("div");

        div.className = `fixed bg-gray-800 text-white px-6 py-3 rounded shadow-lg pointer-events-none 
        ${config.positionX === "right" ? "right-10" : "left-10"} 
        ${config.positionY === "top" ? "top-10" : "bottom-10"}`;

        div.textContent = notification;

        document.body.appendChild(div);  // fixed

        setTimeout(() => {   // fixed syntax
            document.body.removeChild(div);
        }, config.duration * 1000);
    };
}

let toaster = createToaster({
    positionX: "right",
    positionY: "top",
    theme: "dark",
    duration: 3,
});

toaster("This is a dummy notification");