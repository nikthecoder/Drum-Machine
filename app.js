// JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const drumPads = document.querySelectorAll('.drum-pad');

    // Create a mapping of key codes to sound names
    const keyToSoundMap = {
        Q: 'Heater 1',
        W: 'Heater 2',
        E: 'Heater 3',
        A: 'Heater 4',
        S: 'Heater 6',
        D: 'Dsc Oh',
        Z: 'Kick-n-Hat',
        X: 'Kick',
        C: 'Closed HH',
    };

    drumPads.forEach(pad => {
        pad.addEventListener('click', function() {
            const audio = pad.querySelector('.clip');
            audio.currentTime = 0;
            audio.play();
            const key = pad.getAttribute('data-key');
            const soundName = keyToSoundMap[key];
            document.getElementById('display').innerText = soundName;
        });
    });

    document.addEventListener('keydown', function(event) {
        const key = event.key.toUpperCase();
        const pad = document.querySelector(`[data-key="${key}"]`);
        if (pad) {
            const audio = pad.querySelector('.clip');
            audio.currentTime = 0;
            audio.play();
            const soundName = keyToSoundMap[key];
            document.getElementById('display').innerText = soundName;
        }
    });
});
