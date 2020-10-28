module.exports = class Stack {

   constructor() {
      this.queueList = [];
      this.index = 0;
   }

   get length() {
      return this.index;
   }

   get activeQueue() {
      return this.index > 0 ? this.queueList[this.index - 1] : null;
   }

   queue(obj) {
      this.queueList.push(obj);
      this.index++;
   }

   dequeue() {
      if (this.index > 0) {
         this.queueList.pop();
         this.index--;
      }
   }
}