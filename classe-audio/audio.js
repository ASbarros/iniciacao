/* function createAudio(_idSVG) {
    //pega o audio do microfone...
    let input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'audio/*');
    input.setAttribute('capture', 'microphone');
    input.setAttribute('id', 'recorder');
    //document.getElementById('idSVG' + _idSVG).appendChild(input);
    //criando o elemento input...
    let audio = document.createElement('audio');
    audio.setAttribute('id', 'player');
    audio.setAttribute('controls', '');
    document.getElementById('idSVG' + _idSVG).appendChild(audio);
    //criando o elemento audio...
}
function handleSuccess(stream) {
    let player = $('#player');
    if (window.URL) {
        player.src = window.URL.createObjectURL(stream);
    }
    else {
        player.src = stream;
    }
}
navigator
    .mediaDevices
    .getUserMedia({ audio: true })
    .then(stream => {
        let mediaRecorder = new MediaRecorder(stream)
        mediaRecorder.ondataavailable = data => {
            console.log(data)
        }
        mediaRecorder.onstop = () => {
            console.log('stop')
        }
        mediaRecorder.start()
        let a = setTimeOut(() => mediaRecorder.onstop(), 3000);
    }, err => {
        document.body.innerHTML = '<p>vc deve permitir o audio</p>';
    }) */