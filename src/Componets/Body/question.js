export const questions = [
    {
      id: 1,
question: 'Which sorting algorithm is more efficient for sorting small arrays, such as those with less than 10 elements?',
      options: ["Merge Sort",
       "  Bubble Sort",
        " Insertion Sort",
        " Quick Sort"],
      answer: 'Merge Sort',
    },
    {
      id: 2,
question: "What is the worst-case space complexity of Merge Sort?",
      options: ["a)O(1)",
       "  O(n)",
        "O(n log n)",
        "O(log n)"],
      answer: 'O(n log n)',
    },
    {
      id: 3,
question: "Is Merge Sort an adaptive sorting algorithm",
      options: ["Yes",
       "No",],
       answer: 'Yes',
    },
    {
      id: 4,
question: "Can Merge Sort be implemented iteratively without using recursion?",
      options: ["Yes",
       "No",],
       answer: 'Yes',
    },
    {
      id: 5,
question: "5. Which data structure is typically used during the merging step of Merge Sort?",
      options: ["Stack",
       "Queue",
        "Linked List",
        "Heap"],
      answer: 'Heap',
    }
  ]


// 6. In Merge Sort, if the array size is odd, which subarray is typically larger after the division?
//    a) Left subarray
//    b) Right subarray
//    c) Both subarrays have equal sizes
//    d) It depends on the values in the array

// 7. True or False: Merge Sort is an unstable sorting algorithm.
//    a) True
//    b) False

// 8. Which sorting algorithm has a better average-case time complexity than Merge Sort?
//    a) Bubble Sort
//    b) Quick Sort
//    c) Selection Sort
//    d) Heap Sort

// 9. In Merge Sort, what would be the result if the merging step uses the "greater than" operator instead of the "less than or equal to" operator?
//    a) The array would be sorted in descending order.
//    b) The algorithm would enter an infinite loop.
//    c) The array would remain unsorted.
//    d) The algorithm would throw an error.

// 10. What is the maximum number of recursive calls that can be active at any given point during Merge Sort?
//     a) Equal to the length of the array
//     b) Equal to the log base 2 of the length of the array
//     c) Equal to the square root of the length of the array
//     d) Equal to the length of the array minus 1