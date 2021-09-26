"use strict";

/**
 * Customized implementation of Priority Queue with Min-Heap for this exercise
 * 
 * This implementation has space complexity of only O(k),
 * where 'k' is the number of log sources
 * 
 * The regular implemenation of Min-Heap data structure,
 * would have taken space complexity of O(k*n),
 * where 'k' is the number of log sources and
 * 'n' is the number of logs present in each log source
 * 
 */
module.exports = class PriorityQueue {

    // PriorityQueue Constructor
    constructor() {
        this.heapMap = [];
    }

    // Get left and right child indices
    getChildIndices(index) {
        return [(2 * index) + 1, (2 * index) + 2];
    }

    // Returns the index of the smaller child node,
    // If no child nodes, then return undefined
    findMinChildIndex(leftIndex, rightIndex) {
        let minChildIndex;
        let leftChild = this.heapMap[leftIndex];
        let rightChild = this.heapMap[rightIndex];
        if (leftChild !== undefined) {
            if (rightChild === undefined) {
                minChildIndex = leftIndex;
            } else {
                minChildIndex = rightChild.value < leftChild.value ? rightIndex : leftIndex;
            }
        }
        return minChildIndex;
    }

    // Push the heavy nodes down in the PriorityQueue
    bubbleDown(index) {
        let currentIndex = index;
        let current = this.heapMap[currentIndex];
        let [leftIndex, rightIndex] = this.getChildIndices(currentIndex);
        let minChildIndex = this.findMinChildIndex(leftIndex, rightIndex);
        let minChild = minChildIndex === undefined ? undefined : this.heapMap[minChildIndex];
        while (minChild !== undefined && current.value > minChild.value) {
            [this.heapMap[currentIndex], this.heapMap[minChildIndex]] = [this.heapMap[minChildIndex], this.heapMap[currentIndex]];
            currentIndex = minChildIndex;
            [leftIndex, rightIndex] = this.getChildIndices(currentIndex);
            minChildIndex = this.findMinChildIndex(leftIndex, rightIndex);
            minChild = minChildIndex === undefined ? undefined : this.heapMap[minChildIndex];
        }
    }

    // Organize the PriorityQueue
    heapify() {
        for (let i = this.heapMap.length - 1; i >= 0; i--) {
            this.bubbleDown(i);
        }
    }

    // Add data to PriorityQueue Map
    insert(data){
        this.heapMap.push(data);
    }

    // Get top node of PriorityQueue Map
    getTopNode() {
        return this.heapMap[0];
    }

    // Replace the data in top node of PriorityQueue map
    setTopNode(data) {
        this.heapMap[0] = data;
    }
}