import React, { useState } from "react";
import "./Body.css";
import { Box, Button, Text } from "@chakra-ui/react";
// import image from '../../image/Screenshot from 2023-07-05 21-19-58.png'

const languages = [
  {
    name: "C",
    code: `// C program for Merge Sort
  #include <stdio.h>
  #include <stdlib.h>
  
  // Merges two subarrays of arr[].
  // First subarray is arr[l..m]
  // Second subarray is arr[m+1..r]
  void merge(int arr[], int l, int m, int r)
  {
    int i, j, k;
    int n1 = m - l + 1;
    int n2 = r - m;
  
    // Create temp arrays
    int L[n1], R[n2];
  
    // Copy data to temp arrays L[] and R[]
    for (i = 0; i < n1; i++)
      L[i] = arr[l + i];
    for (j = 0; j < n2; j++)
      R[j] = arr[m + 1 + j];
  
    // Merge the temp arrays back into arr[l..r
    i = 0;
    j = 0;
    k = l;
    while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
        arr[k] = L[i];
        i++;
      }
      else {
        arr[k] = R[j];
        j++;
      }
      k++;
    }
  
    // Copy the remaining elements of L[],
    // if there are any
    while (i < n1) {
      arr[k] = L[i];
      i++;
      k++;
    }
  
    // Copy the remaining elements of R[],
    // if there are any
    while (j < n2) {
      arr[k] = R[j];
      j++;
      k++;
    }
  }
  
  // l is for left index and r is right index of the
  // sub-array of arr to be sorted
  void mergeSort(int arr[], int l, int r)
  {
    if (l < r) {
      int m = l + (r - l) / 2;
  
      // Sort first and second halves
      mergeSort(arr, l, m);
      mergeSort(arr, m + 1, r);
  
      merge(arr, l, m, r);
    }
  }
  
  // Function to print an array
  void printArray(int A[], int size)
  {
    int i;
    for (i = 0; i < size; i++)
      printf("%d ", A[i]);
    printf("\n");
  }
  
  // Driver code
  int main()
  {
    int arr[] = { 12, 11, 13, 5, 6, 7 };
    int arr_size = sizeof(arr) / sizeof(arr[0]);
  
    printf("Given array is \n");
    printArray(arr, arr_size);
  
    mergeSort(arr, 0, arr_size - 1);
  
    printf("\nSorted array is \n");
    printArray(arr, arr_size);
    return 0;
  }
  `,
  },
  {
    name: "C++",
    code: `// C++ program for Merge Sort
  #include <bits/stdc++.h>
  using namespace std;
  
  // Merges two subarrays of array[].
  // First subarray is arr[begin..mid]
  // Second subarray is arr[mid+1..end]
  void merge(int array[], int const left, int const mid,
      int const right)
  {
    int const subArrayOne = mid - left + 1;
    int const subArrayTwo = right - mid;
  
    // Create temp arrays
    auto *leftArray = new int[subArrayOne],
      *rightArray = new int[subArrayTwo];
  
    // Copy data to temp arrays leftArray[] and rightArray[]
    for (auto i = 0; i < subArrayOne; i++)
      leftArray[i] = array[left + i];
    for (auto j = 0; j < subArrayTwo; j++)
      rightArray[j] = array[mid + 1 + j];
  
    auto indexOfSubArrayOne = 0, indexOfSubArrayTwo = 0;
    int indexOfMergedArray = left;
  
    // Merge the temp arrays back into array[left..right]
    while (indexOfSubArrayOne < subArrayOne
      && indexOfSubArrayTwo < subArrayTwo) {
      if (leftArray[indexOfSubArrayOne]
        <= rightArray[indexOfSubArrayTwo]) {
        array[indexOfMergedArray]
          = leftArray[indexOfSubArrayOne];
        indexOfSubArrayOne++;
      }
      else {
        array[indexOfMergedArray]
          = rightArray[indexOfSubArrayTwo];
        indexOfSubArrayTwo++;
      }
      indexOfMergedArray++;
    }
  
    // Copy the remaining elements of
    // left[], if there are any
    while (indexOfSubArrayOne < subArrayOne) {
      array[indexOfMergedArray]
        = leftArray[indexOfSubArrayOne];
      indexOfSubArrayOne++;
      indexOfMergedArray++;
    }
  
    // Copy the remaining elements of
    // right[], if there are any
    while (indexOfSubArrayTwo < subArrayTwo) {
      array[indexOfMergedArray]
        = rightArray[indexOfSubArrayTwo];
      indexOfSubArrayTwo++;
      indexOfMergedArray++;
    }
    delete[] leftArray;
    delete[] rightArray;
  }
  
  // begin is for left index and end is right index
  // of the sub-array of arr to be sorted
  void mergeSort(int array[], int const begin, int const end)
  {
    if (begin >= end)
      return;
  
    int mid = begin + (end - begin) / 2;
    mergeSort(array, begin, mid);
    mergeSort(array, mid + 1, end);
    merge(array, begin, mid, end);
  }
  
  // UTILITY FUNCTIONS
  // Function to print an array
  void printArray(int A[], int size)
  {
    for (int i = 0; i < size; i++)
      cout << A[i] << " ";
    cout << endl;
  }
  
  // Driver code
  int main()
  {
    int arr[] = { 12, 11, 13, 5, 6, 7 };
    int arr_size = sizeof(arr) / sizeof(arr[0]);
  
    cout << "Given array is \n";
    printArray(arr, arr_size);
  
    mergeSort(arr, 0, arr_size - 1);
  
    cout << "\nSorted array is \n";
    printArray(arr, arr_size);
    return 0;
  }
  
  
  `,
  },

  {
    name: "Java",
    code: `// Java program for Merge Sort
  import java.io.*;
  
  class MergeSort {
  
    // Merges two subarrays of arr[].
    // First subarray is arr[l..m]
    // Second subarray is arr[m+1..r]
    void merge(int arr[], int l, int m, int r)
    {
      // Find sizes of two subarrays to be merged
      int n1 = m - l + 1;
      int n2 = r - m;
  
      // Create temp arrays
      int L[] = new int[n1];
      int R[] = new int[n2];
  
      // Copy data to temp arrays
      for (int i = 0; i < n1; ++i)
        L[i] = arr[l + i];
      for (int j = 0; j < n2; ++j)
        R[j] = arr[m + 1 + j];
  
      // Merge the temp arrays
  
      // Initial indices of first and second subarrays
      int i = 0, j = 0;
  
      // Initial index of merged subarray array
      int k = l;
      while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
          arr[k] = L[i];
          i++;
        }
        else {
          arr[k] = R[j];
          j++;
        }
        k++;
      }
  
      // Copy remaining elements of L[] if any
      while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
      }
  
      // Copy remaining elements of R[] if any
      while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
      }
    }
  
    // Main function that sorts arr[l..r] using
    // merge()
    void sort(int arr[], int l, int r)
    {
      if (l < r) {
  
        // Find the middle point
        int m = l + (r - l) / 2;
  
        // Sort first and second halves
        sort(arr, l, m);
        sort(arr, m + 1, r);
  
        // Merge the sorted halves
        merge(arr, l, m, r);
      }
    }
  
    // A utility function to print array of size n
    static void printArray(int arr[])
    {
      int n = arr.length;
      for (int i = 0; i < n; ++i)
        System.out.print(arr[i] + " ");
      System.out.println();
    }
  
    // Driver code
    public static void main(String args[])
    {
      int arr[] = { 12, 11, 13, 5, 6, 7 };
  
      System.out.println("Given array is");
      printArray(arr);
  
      MergeSort ob = new MergeSort();
      ob.sort(arr, 0, arr.length - 1);
  
      System.out.println("\nSorted array is");
      printArray(arr);
    }
  }
  /* This code is contributed by Rajat Mishra */
  `,
  },
  {
    name: "Python",
    code: `# Python program for implementation of MergeSort


  def mergeSort(arr):
    if len(arr) > 1:
  
      # Finding the mid of the array
      mid = len(arr)//2
  
      # Dividing the array elements
      L = arr[:mid]
  
      # Into 2 halves
      R = arr[mid:]
  
      # Sorting the first half
      mergeSort(L)
  
      # Sorting the second half
      mergeSort(R)
  
      i = j = k = 0
  
      # Copy data to temp arrays L[] and R[]
      while i < len(L) and j < len(R):
        if L[i] <= R[j]:
          arr[k] = L[i]
          i += 1
        else:
          arr[k] = R[j]
          j += 1
        k += 1
  
      # Checking if any element was left
      while i < len(L):
        arr[k] = L[i]
        i += 1
        k += 1
  
      while j < len(R):
        arr[k] = R[j]
        j += 1
        k += 1
  
  
  # Code to print the list
  def printList(arr):
    for i in range(len(arr)):
      print(arr[i], end=" ")
    print()
  
  
  # Driver Code
  if __name__ == '__main__':
    arr = [12, 11, 13, 5, 6, 7]
    print("Given array is")
    printList(arr)
    mergeSort(arr)
    print("\nSorted array is ")
    printList(arr)

  `,
  },
  // Add more languages and their corresponding merge sort code here
];
export default function Code() {
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleLanguageClick = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <>
      <Box>
        <Box
          m={3}
          display={"flex"}
          borderWidth={"2px"}
          flexDirection={"colume"}
          shadow={"1px 2px 1px 2px"}
          borderRadius={"20px"}
          borderColor={"black"}
          justifyContent={"center"}
        >
          {languages.map((language) => (
            <Button
              colorScheme={"pink"}
              m={3}
              key={language.name}
              onClick={() => handleLanguageClick(language)}
            >
              {language.name}
            </Button>
          ))}
        </Box>
      </Box>
      {selectedLanguage && (
        <Box
          display={"flex"}
          borderWidth={"2px"}
          flexDirection={"colume"}
          shadow={"1px 2px 1px 2px"}
          borderRadius={"20px"}
          borderColor={"black"}
          justifyContent={"center"}
          p={5}
          m={3}
        >
          <pre>
            <Text
              display={"Flex"}
              flexDirection={"column"}
              alignItems={"center"}
              letterSpacing={"2px"}
              fontWeight={"bold"}
              p={5}
              m={3}
              _hover={{color:"blue"}}
            >
              {selectedLanguage.code}
            </Text>
          </pre>
        </Box>
      )}
    </>
  );
}
