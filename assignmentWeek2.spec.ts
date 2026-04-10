// //Assignment week 2:

// // Your task is to launch two separate browser instances using Playwright:
// // 1. Load Red Bus in an Edge browser instance and verify the page title and URL.
// // 2. Load Flipkart in a Firefox browser instance and verify the page title and URL


import { test } from "@playwright/test";

test(' Red Bus', async ({ page}) => {
  await page.goto("https://www.redbus.in");
  let a = await page.title()
  console.log("page title" + a);
  let b= page.url()
  console.log("Page URL" +b);
});
 
test(' Flipkart', async ({ page }) => {
 
  await page.goto("https://www.flipkart.com");
  let a = await page.title()
  console.log("page title" + a);
  let b= page.url()
  console.log("Page URL" + b);
});

// //Create a JavaScript program that defines a function to compute the intersection of two arrays. The
// //intersection should include elements that appear in both arrays without any duplicates.


let num1 =[1,2,3,4]
let num2=[4,5,6,7]
let duplicate=[]
for (let i=0;i<num1.length;i++){

    for(let j=0;j<num2.length;j++){

        if(num1[i]==num2[j]){
        
           duplicate.push(num1[i])
            
        }
    } 
}console.log("Common numner is "+ duplicate);


// //Write a function to sum all the values between 1 and n, and return the sum
// Take n = 5, print between 1 and 5, and keep adding the sum of values
// i.e., 1+2=3, 3+3 =6, 6+4=10, 10+5 =15

let sum =0
function addition(n:number){

for (let i=1;i<=n;i++){

 console.log(sum= sum + i)

}

}
addition(5)

// Given the array, const nums = [2, 4, 7, 8, 11, 14];
// const target = 18;
// return the indices that have matching targets >> 7+11 (2, 4), 4+14 (1, 5)

const nums = [2, 4, 7, 8, 11, 14]
const target = 18
let result=[]
for (let i=0;i<nums.length;i++){
   
for (let j=i+1;j<nums.length;j++){
    if(nums[i]+nums[j]===target){
     result.push([i,j])
     
    }
}
}
console.log(result);


// Find the number of occurrences.
// Given the array, const nums = [2,4,5,2,1,2];
// if const k = 2, then output >> 3

const num = [2,4,5,2,1,2];
const k = 2
let count=0
for (let i=0;i<num.length;i++){
    if(num[i]===k){
        count++
    }
}
console.log(count);

