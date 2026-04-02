function startDownload() {
        let progress = 0;
        let progressBar = document.getElementById("progressBar");
        let percentText = document.getElementById("percent");
        let completeMsg = document.getElementById("completeMsg");

        completeMsg.innerText = "";

        let interval = setInterval(() => {
            progress++;

            progressBar.style.width = progress + "%";
            percentText.innerText = progress + "%";

            if (progress >= 100) {
                clearInterval(interval);
                completeMsg.innerText = "Download Complete!";
            }
        }, 50); // speed of download
    }