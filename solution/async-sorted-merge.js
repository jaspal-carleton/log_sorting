"use strict";

// Print all entries, across all of the *async* sources, in chronological order.

const MinHeap = require("../lib/minHeap");

module.exports = (logSources, printer) => {
  return new Promise(async (resolve, reject) => {

    // Instantiate Binary Min-Heap
    let minHeapObj = new MinHeap();

    // Extract log entries from all log sources
    console.log("==== Please wait loading data into heap asynchronously ...");
    try {
      await initMinHeap(minHeapObj, logSources);
    } catch (err) {
      console.log(err);
      return;
    }

    // Extract node from MinHeap to stdout
    do {
      try {
        printer.print(minHeapObj.removeMin());
      } catch (err) {
        break;
      }
    } while (true);

    printer.done();
    resolve(console.log("Async sort complete."));
  });
};

/**
 * Helper function to drain log entries into heap
 * @param {Object} minHeapObj MinHeap object
 * @param {Array} logSources Array of log sources
 * @returns {Promise} Promise object
 */
async function initMinHeap(minHeapObj, logSources) {
  return Promise.all(logSources.map(async (logSource) => {
    try {
      do {
        minHeapObj.insert(logSource.last);
      } while (await logSource.popAsync());
    } catch (err) {
      throw err;
    }
  }));
}