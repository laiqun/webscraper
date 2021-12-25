class File{
    static blobDownload(e, t) {
        const i = document.createElement("a");
        i.href = window.URL.createObjectURL(e);
        i.setAttribute("download", t);
        i.click();
    }
}

export {File}