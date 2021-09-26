"use strict";

// Print all entries, across all of the sources, in chronological order.

const PriorityQueue = require("../lib/priorityQueue");

module.exports = (logSources, printer) => {

  // Instantiate PriorityQueue
  let minHeapObj = new PriorityQueue();
  let tmpLog;
  
  // Extract first log entry from all log sources and
  // create a custom priority queue node object for MinHeap
  for (let i = 0; i < logSources.length; i++) {
    tmpLog = logSources[i].pop();
    minHeapObj.insert({
      arrayIndex: i,
      value: tmpLog ? tmpLog.date.getTime() : Infinity,
      log: tmpLog
    });
  }

  // Sort heap and bubble up min node to the top
  minHeapObj.heapify();

  // Extract log entries and insert them in custom MinHeap,
  // Loop it until all nodes in MinHeap are emptied
  while (minHeapObj.getTopNode().value !== Infinity) {
    let top = minHeapObj.getTopNode();
    printer.print(top.log);
    if (logSources[top.arrayIndex]['drained']) {
      top.value = Infinity;
    } else {
      tmpLog = logSources[top.arrayIndex].pop();
      top.value = tmpLog ? tmpLog.date.getTime() : Infinity;
      top.log = tmpLog;
    }
    minHeapObj.setTopNode(top);
    minHeapObj.bubbleDown(0);
  }

  printer.done();
  return console.log("Sync sort complete.");
};
