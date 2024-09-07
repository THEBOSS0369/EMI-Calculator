export const calculateEMI = (
    loanAmount: number,
    interestRate: number,
    tenure: number,
    prepayment: number = 0
) => {
    const monthlyRate = interestRate / 12 / 100;
    const emi = loanAmount * monthlyRate * (Math.pow(1 + monthlyRate, tenure)) / (Math.pow(1 + monthlyRate, tenure) - 1);

    let remainingBalance = loanAmount;
    const payments = [];

    for (let i = 1; i <= tenure; i++) {
        const interestPaid = remainingBalance * monthlyRate;
        const principalPaid = emi - interestPaid;
        remainingBalance -= principalPaid;

        payments.push({
            month: i,
            emi,
            interestPaid,
            principalPaid,
            remainingBalance: remainingBalance < 0 ? 0 : remainingBalance,
        });

        if (prepayment > 0) remainingBalance -= prepayment;
    }

    const totalInterest = payments.reduce((acc, p) => acc + p.interestPaid, 0);
    const totalAmount = loanAmount + totalInterest;

    return { emi, totalInterest, totalAmount, payments };
};
