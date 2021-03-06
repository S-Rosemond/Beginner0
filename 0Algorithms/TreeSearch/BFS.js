const Tree = require('../Tree/treeExport');
const Queue = require('../Stack_Queue/queueExport');

class BFS extends Tree {
	constructor(queue, queue1) {
		super();

		this.visited = queue;
		this.queue = queue1;
		this.result = null;
	}
	traverse() {
		if (!this.root) return null;

		let current;

		if (this.visited.length < 1) {
			this.queue.enqueue(this.root);
		}

		if (this.queue.length > 0) {
			current = this.queue.dequeue();
		}

		if (current.left) {
			this.queue.enqueue(current.left);
		}
		if (current.right) {
			this.queue.enqueue(current.right);
		}

		if (current) {
			this.visited.enqueue(current.value);
		}

		if (this.queue.length === 0) {
			//console.log(this.visited, '\n \n');
			//console.log(this.mapToArray(this.visited), '\n \n');

			return;
		} else {
			this.traverse();
		}

		return this.visited;
	}

	mapToArray(queue) {
		const array = [];
		let temp;
		while (queue.length > 0) {
			temp = queue.dequeue();
			array.push(temp);
		}

		temp = null;
		return array;
	}
	iTraverse() {
		if (!this.root) return null;
		while (true) {
			let current;

			if (this.visited.length < 1) {
				this.queue.enqueue(this.root);
			}

			if (this.queue.length > 0) {
				current = this.queue.dequeue();
			}

			if (current.left) {
				this.queue.enqueue(current.left);
			}
			if (current.right) {
				this.queue.enqueue(current.right);
			}

			if (current) {
				this.visited.enqueue(current.value);
			}

			if (this.queue.length === 0) {
				//console.log(this.visited, '\n \n');
				//console.log(this.mapToArray(this.visited), '\n \n');

				return this.visited;
			}
		}
	}
	courseVersion() {
		// var converted to let
		if (this.root === null) return [];

		let node = this.root,
			data = [],
			queue = [];

		queue.push(node);

		while (queue.length) {
			node = queue.shift();
			data.push(node.value);

			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}

		return data;
	}
}

/* 
            5
        3       7
      2   4   6  9   
*/

let queue = new Queue();
let visited = new Queue();
const bfs = new BFS(visited, queue);

// bfs.insert(5);
// bfs.insert(3);
// bfs.insert(7);
// bfs.insert(2);
// bfs.insert(4);
// bfs.insert(6);
// bfs.insert(9);

bfs.insert(10);
bfs.insert(6);
bfs.insert(15);
bfs.insert(8);
bfs.insert(3);
bfs.insert(20);

//console.log(bfs.traverse())

let answer = bfs.traverse();

console.log(answer);
console.log(bfs.courseVersion());
