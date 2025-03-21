class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }

  push(value) {
    // 힙의 맨 뒤에 push
    this.heap.push(value);
    // value가 push 된 위치
    let index = this.heap.length - 1;

    // 오름차순 정렬
    while (
      index > 0 &&
      this.heap[index] < this.heap[Math.floor((index - 1) / 2)]
    ) {
      // Math.floor((index - 1) / 2) : index의 부모 노드
      const temp = this.heap[index];
      this.heap[index] = this.heap[Math.floor((index - 1) / 2)];
      this.heap[Math.floor((index - 1) / 2)] = temp;
      index = Math.floor((index - 1) / 2);
    }
  }

  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const minValue = this.heap[0];
    // 끝에 있는 노드를 부모로 지정
    this.heap[0] = this.heap.pop();
    let index = 0;

    // 오름차순 정렬
    // 왼쪽 자식이 힙 길이 보다 작을 때까지
    while (index * 2 + 1 < this.heap.length) {
      // 오른쪽 자식 < 힙 길이 && 오른쪽 자식 < 왼쪽 자식 ?
      // 오른쪽 자식 : 왼쪽 자식
      let minChildIndex =
        index * 2 + 2 < this.heap.length &&
        this.heap[index * 2 + 2] < this.heap[index * 2 + 1]
          ? index * 2 + 2
          : index * 2 + 1;

      if (this.heap[index] < this.heap[minChildIndex]) {
        break;
      }

      const temp = this.heap[index];
      this.heap[index] = this.heap[minChildIndex];
      this.heap[minChildIndex] = temp;
      index = minChildIndex;
    }
    return minValue;
  }
}
