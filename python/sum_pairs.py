def sum_pairs(arr, num):
    
    pairs = []
    
    for i in range(len(arr)):
        for j in range(i + 1, len(arr)):
            if arr[i] + arr[j] == num:
                pairs.append([arr[i], arr[j]])
    
    if not pairs:
        return "unable to find pairs"
    
    else:
        return pairs
    

print(sum_pairs([2, 4, 6, 8], 14))