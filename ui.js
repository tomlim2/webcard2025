let popup;
let inner;
let urlInput;

function settingPopup() {
    button = createButton('공유하기');
    popup = createDiv('');
    popup.addClass('popup');
    popup.hide();

    inner = createDiv('');
    inner.addClass('popup-inner');

    urlInput = createInput('');
    closeButton = createButton('닫기');

    inner.child(urlInput);
    inner.child(closeButton);
    popup.child(inner);
    button.mousePressed(openPopup);
    closeButton.mousePressed(closePopup);
}

function openPopup(){
    popup.show();
}

function closePopup() {
    popup.hide();
}
