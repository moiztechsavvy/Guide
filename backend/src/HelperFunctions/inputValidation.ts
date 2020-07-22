// Usage: Returns true if no common sql injections are detected in the input string.
// DISCLAIMER: The only reliable way to prevent malicious SQL injection is parameterized queries. This function is redundant.
let sqlInjection = (input: string) => {
    // Reg. Exp. check for quotation-bound and comment-escape sql code
    const injectTester = /^.*('.*(or|and|\*|-)+.*')|(".*(or|and|\*|-)+.*").*$/;
    return !injectTester.test(input.toLowerCase());
}
