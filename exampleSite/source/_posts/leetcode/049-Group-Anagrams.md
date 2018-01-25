---
number: 49
title: "049 Group Anagrams"
leetcodeURL: "https://leetcode.com/problems/group-anagrams/description/"
date: 2018-01-20
draft: false
field: "algorithm"
difficulty: "medium"
language: python
time: "O(n * glogg)"
space: "O(n)"
isfree: true
categories: 
	- ["language", "python"]
	- ["language", "cpp"]
	- ["field", "algorithm"]
tags: 
- leetcode
- test
permalink: 049-Group-Anagrams
toc-disable: true
comments:
---

## Problem
Given a string **s**, find the longest palindromic substring in **s**. You may assume that the maximum length of **s** is 1000.

## Test

```
Input: "babad"

Output: "bab"

Note: "aba" is also a valid answer.
```

```
Input: "cbbd"

Output: "bb"
```

## Python

```python
#!python3


class Solution:
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        dic = {}
        for index, num in enumerate(nums):
            if num in dic:
                return [dic[num], index]
            dic[target - num] = index


if __name__ == "__main__":
    nums = [2, 7, 11, 15]
    target = 9
    assert (Solution().twoSum(nums, target) == [0, 1])
    nums = [3, 2, 4]
    target = 6
    assert (Solution().twoSum(nums, target) == [1, 2])
```

$\alpha=\beta$