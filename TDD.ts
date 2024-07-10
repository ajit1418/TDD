class StringCalculator {
    add(numbers: string): number {
        if (!numbers) {
            return 0;
        }

        // Default delimiter
        let delimiter = /,|\n/;

        // Check for custom delimiter
        if (numbers.startsWith("//")) {
            const delimiterEnd = numbers.indexOf("\n");
            delimiter = new RegExp(numbers.substring(2, delimiterEnd));
            numbers = numbers.substring(delimiterEnd + 1);
        }

        // Split the numbers string by the delimiter(s)
        const numberArray = numbers.split(delimiter);

        // Convert the strings to numbers and sum them up
        let sum = 0;
        const negativeNumbers = [];

        for (const numStr of numberArray) {
            const num = parseInt(numStr);
            if (num < 0) {
                negativeNumbers.push(num);
            }
            sum += num;
        }

        if (negativeNumbers.length > 0) {
            throw new Error(`negative numbers not allowed ${negativeNumbers.join(", ")}`);
        }

        return sum;
    }
}

// Example usage:
const calculator = new StringCalculator();
calculator.add(""); // Output: 0
