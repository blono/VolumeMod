const amplifyMedia = (mediaElem, multiplier) => {
    const context = new (window.AudioContext || window.webkitAudioContext),
    result = {
        context: context,
        source: context.createMediaElementSource(mediaElem),
        gain: context.createGain(),
        media: mediaElem,
        amplify: (multiplier) => { result.gain.gain.value = multiplier; },
        getAmpLevel: () => { return result.gain.gain.value; }
    };
    result.source.connect(result.gain);
    result.gain.connect(context.destination);
    result.amplify(multiplier);
    return result;
};

const multiplyMedia = (media, multiplier) => {
    if (media != null && media.volume != null) {
        media.volume *= multiplier;
    }
}

const volumeMod = (multiplier) => {
    const videos = document.querySelectorAll('video');
    if (videos != null && videos.length != null && videos.length >= 1) {
        for (let i = 0; i < videos.length; ++i) {
            try {
                const video = videos[i];
                if (video != null) {
                    if (multiplier > 1) {
                        amplifyMedia(video, multiplier);
                    } else {
                        multiplyMedia(video, multiplier);
                    }
                }
            } catch (e) {
                console.error(e);
            }
        }
    }

    const audios = document.querySelectorAll('audio');
    if (audios != null && audios.length != null && audios.length >= 1) {
        for (let i = 0; i < audios.length; ++i) {
            try {
                const audio = audios[i];
                if (audio != null) {
                    if (multiplier > 1) {
                        amplifyMedia(audio, multiplier);
                    } else {
                        multiplyMedia(audio, multiplier);
                    }
                }
            } catch (e) {
                console.error(e);
            }
        }
    }
}

chrome.runtime.onMessage.addListener((req, snd, rsp) => {
    if (req === 'volume-down-01') {
        volumeMod(0.1);
    } else if (req === 'volume-down-02') {
        volumeMod(0.2);
    } else if (req === 'volume-down-04') {
        volumeMod(0.4);
    } else if (req === 'volume-down-06') {
        volumeMod(0.6);
    } else if (req === 'volume-down-08') {
        volumeMod(0.8);
    } else if (req === 'volume-up-15') {
        volumeMod(1.5);
    } else if (req === 'volume-up-25') {
        volumeMod(2.5);
    } else if (req === 'volume-up-35') {
        volumeMod(3.5);
    } else if (req === 'volume-up-45') {
        volumeMod(4.5);
    }

    rsp();
});
