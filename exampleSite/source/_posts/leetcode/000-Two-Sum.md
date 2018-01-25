---
number: 1
title: "000 Two Sum"
leetcodeURL: "https://leetcode.com/problems/two-sum/description/"
date: 2018-01-01
draft: false
field: "algorithm"
difficulty: "easy"
language: python
time: "O(n)"
space: "O(n)"
isfree: true
categories: 
- ["language", "python"]
- ["language", "cpp"]
- ["field", "algorithm"]
- test
tags: 
- leetcode
- test
permalink: 000-Two-Sum
toc-disable:
comments:
---

## Problem
Given an array of integers, return **indices** of the two numbers such that they add up to a specific target.

You may assume that each input would have *exactly* one solution, and you may not use the same element twice.

## Example

```
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```

## Python

```python
class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        lookup = {}
        for i, num in enumerate(nums):
            if target - num in lookup:
                return [lookup[target - num], i]
            lookup[num] = i

    def twoSum2(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        k = 0
        for i in nums:
            j = target - i
            k += 1
            tmp_nums = nums[k:]
            if j in tmp_nums:
                return [k - 1, tmp_nums.index(j) + k]


if __name__ == '__main__':
    print Solution().twoSum((2, 7, 11, 15), 9)
```

## C++

```cpp
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> lookup;
        for (int i = 0; i < nums.size(); ++i) {
            if (lookup.count(target - nums[i])) {
                return {lookup[target - nums[i]], i};
            }
            lookup[nums[i]] = i;
        }
        return {};
    }
};
```