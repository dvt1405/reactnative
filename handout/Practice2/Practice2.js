function sort(input){
    function quickSort(Arr, left, right){
        let l = left, r = right;
        let m = Math.floor((l + r) / 2);
        let k = Arr[m];
        while(l <= r){
            while(Arr[l] < k) l++;
            while(Arr[r] > k) r--;
            if(l <= r){
                let temp = Arr[l];
                Arr[l] = Arr[r];
                Arr[r] = temp;
                l++;
                r--;
            }
        }
        if(l < right) quickSort(Arr, l, right);
        if(r > left) quickSort(Arr, left, r);
    }
    quickSort(input,0,input.length-1);
}