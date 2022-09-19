
  let subsets = [[]];
  for (let i = 0; i < nums.length; i++) {
      let n = subsets.length;
      for (let j = 0; j < n; j++) {
          let set = subsets[j].slice(0);
          set.push(nums[i]);
          subsets.push(set);
      }
  }
