const fileInput = document.querySelector("input");
downloadBtn = document.querySelector("button");

downloadBtn.addEventListener("click", e => {
    e.preventDefault();
    // console.log("Button clicked");
    // console.log(fileInput.value);
    fetchFile(fileInput.value);
});

function fetchFile(url) {
    // fetching a file & returning a response as blob
    fetch(url).then(res => res.blob()).then(file => {
        // URL.createObjectURL creates a url of passed object
        let tempUrl = URL.createObjectURL(file);
        let aTag = document.createElement("a");
        aTag.href = tempUrl;

        aTag.download = "yourFile";
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
        console.log(file);
    });
}