window.wavegan = window.wavegan || {};

(function (wavegan) {
    var debug = true;

    // Config
    wavegan.cfg = {
        reqs: {
            userCanceled: false,
            noWebGlWarning: 'Warning: We did not find WebGL in your browser. This demo uses WebGL to accelerate neural network computation. Performance will be slow and may hang your browser. Continue?',
            mobileWarning: 'Warning: This demo runs a neural network in your browser. It appears you are on a mobile device. Consider running the demo on your laptop instead. Continue?'
        },
        net: {
            ckptDir: 'ckpts/drums',
            ppFilt: true,
	    zDim: 100
        },
        audio: {
            gain: 1,
        },
        ui: {
            canvasFlushDelayMs: 25,
            visualizerGain: 1,
            zactorNumRows: 2,
            zactorNumCols: 4,
            rmsAnimDelayMs: 25
        },
        sequencer: {
            labelWidth: 100,
            numCols: 16
        }
    };

    wavegan.cfg.debugMsg = function (msg) {
        if (debug) {
            console.log(msg);
        }
    };

})(window.wavegan);