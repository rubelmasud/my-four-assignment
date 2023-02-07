//  Description:Take a function ,,,,name the function mindgame & take a number as output multiply that number by 3 the result will be added to 10 and divide the result by 2 the result will be The result of subtraction by 5 should be shown in the output

function mindGame(number) {
    if (typeof number != "number") {
        return 'pleace input a number'
    }
    let multipalicationResult = number * 3;
    let additionResult = multipalicationResult + 10;
    let divisionResult = additionResult / 2;
    let substrationResult = divisionResult - 5;
    return substrationResult
}

// Description:Write a function named oddeven. Take string as output. The output should be given based on the total number of characters in the String. Output will be 'even' or 'odd'

function evenOdd(string) {
    if (typeof string != "string") {
        return 'pleace input a string'
    }
    for (let i = 0; i < string.length; i++) {
        if (string.length % 2 === 0) {
            return 'even';
        }
        else {
            return 'odd';
        }
    }
    return string;
}

// Description:Write a function, name that function isLGSeven. Take an input. Find the difference between the input value and 7. If this difference is smaller than 7, then I need to return the subtraction. Otherwise I have to return double of the input. Means the number taken as input should be doubled and output.

function isLGSeven(number) {
    if (typeof number != "number") {
        return 'pleace input a number'
    }
    let substrationResult = number - 7;
    if (substrationResult < 7) {
        return substrationResult;
    }
    else {
        let multipalicationResult = number * 2;
        return multipalicationResult;
    }
}

// Description:Write a function named findingBadData. An array should be taken as input and the number of negative numbers in that array should be shown in the output.

function findingBadData(numbers) {
    let nagetiveNumber = 0;
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i]
        if (element < 0) {
            nagetiveNumber++
        }
    }
    return nagetiveNumber;
}

// Description:Write a function named gemsToDiamond. Input 3 should be taken as parameter.
// 1st parameter should be multiplied by 21
// 2nd parameter should be multiplied by 32
// The 3rd parameter must be multiplied by 43
// And all must be added. If the result is more than 2000 then subtract 2000.
// or if the sum of all parameters is less than 2000000 then the output should show whatever it is.


function gemsToDiamond(friendGems1, friendGems2, friendGems3) {
    let friendGems1Result = friendGems1 * 21;
    let friendGems2Result = friendGems2 * 32;
    let friendGems3Result = friendGems3 * 43;

    let totalGams = friendGems1Result + friendGems2Result + friendGems3Result;

    if (totalGams >= 2000) {
        let substrationGams = totalGams - 2000;
        return substrationGams;
    }
    return totalGams;
}