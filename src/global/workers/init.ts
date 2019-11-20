if (typeof(Worker) !== 'undefined') {
    const webWorker = new Worker('/scripts/workers.js');
    webWorker.postMessage({
        expr: '4+8'
    });
    webWorker.addEventListener('message', (e) => {
        console.log('hiii!', e.data);
    });
} else {
    console.warn('Warning! No Web Worker support deteced.');
}
