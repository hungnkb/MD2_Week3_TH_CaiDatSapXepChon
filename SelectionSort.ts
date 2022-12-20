export class SelectionSort {
    static list: number[] = [1, 9, 4.5, 6.6, 5.7, -4.5];

    static selectionSort(list: number[]) {
        for (let i = 0; i < list.length; i++) {
            let max = list[i];
            let maxIndex = i;
            for (let j = i; j < list.length; j++) {
                if (list[j] > max) {
                    max = list[j];
                    maxIndex = j;
                }
            }
            let temp = list[i];
            list[i] = max;
            list[maxIndex] = temp;
           
        }

        return list;
    }
}