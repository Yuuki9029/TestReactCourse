const arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let a = 1;
let b = 0;
let count;
for (let i=0; i<arr1.length; i++)
{
        for (let j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                b++;
                if (a<b)
                {
                a=b; 
                count = arr1[i];
                }
        }
        b=0;
}
console.log(count,a, "times" ) ;