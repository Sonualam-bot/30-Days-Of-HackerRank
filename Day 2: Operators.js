/*
 * Complete the 'solve' function below.
 *
 * The function accepts following parameters:
 *  1. DOUBLE meal_cost
 *  2. INTEGER tip_percent
 *  3. INTEGER tax_percent
 */

function solve(meal_cost, tip_percent, tax_percent) {
    // Write your code here
    //  meal_cost = parseFloat(readLine());
    // let tip_percent = parseInt(readline());
    // let tax_percent = parseInt(readLine());
    
  let total_cost = Math.round(meal_cost + meal_cost * tip_percent / 100 + meal_cost * tax_percent / 100);
  
  console.log(total_cost);

}

function main() {
    const meal_cost = parseFloat(readLine().trim());

    const tip_percent = parseInt(readLine().trim(), 10);

    const tax_percent = parseInt(readLine().trim(), 10);

    solve(meal_cost, tip_percent, tax_percent);
}
