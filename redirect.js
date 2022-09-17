    function onError(error) {
        console.log(error)
    }
    function gourl(item) {
        try {
            return window.location.replace(`${item.url.newtablink}`);
        } catch (error) {
           return window.location.replace("options/options.html");
        }
    }

    browser.storage.local.get("url")
    .then(gourl, onError);