function verifyNews() {
    const fakeKeywords = [
        "miracle", "shocking", "unbelievable", "you won't believe",
        "secret revealed", "guaranteed win", "breaking news","100% proven","miraculous","jaw-dropping",
        "hidden truth", "must see", "click here", "watch before it's deleted",
        "scientists shocked", "doctors hate this", "banned video", 
        "government cover-up", "viral news", "instant success", "forbidden cure",
        "limited time offer", "what they don't want you to know"
    ];

    const newsInput = document.getElementById("newsInput").value.toLowerCase();
    const resultDiv = document.getElementById("result");

    let isFake = false;
    fakeKeywords.forEach(keyword => {
        if (newsInput.includes(keyword)) {
            isFake = true;
        }
    });

    if (newsInput.trim() === "") {
        resultDiv.textContent = "Please paste some news to verify.";
        return;
    }

    if (isFake) {
        resultDiv.textContent = "Warning: This news looks suspicious!";
        resultDiv.style.color = "red";
    } else {
        resultDiv.textContent = "This news looks authentic.";
        resultDiv.style.color = "green";
    }

    saveToHistory(newsInput);
}

function saveToHistory(news) {
    let history = JSON.parse(localStorage.getItem("newsHistory")) || [];
    history.unshift(news);
    if (history.length > 5) {
        history.pop();
    }
    localStorage.setItem("newsHistory", JSON.stringify(history));
    showHistory();
}

function showHistory() {
    let history = JSON.parse(localStorage.getItem("newsHistory")) || [];
    const historyList = document.getElementById("history");
    historyList.innerHTML = "";
    history.forEach(news => {
        const li = document.createElement("li");
        li.textContent = news;
        historyList.appendChild(li);
    });
}

// Show history on page load
showHistory();
