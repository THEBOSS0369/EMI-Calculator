import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"

const EMIResult = ({ results }: { results: any }) => {
    if (!results) return null;

    const { emi, totalInterest, totalAmount, payments } = results;

    return (
        <div >
            <Card className="p-8">
                <h2>EMI Results</h2>

                <Table className="p-4">
                    <TableCaption>Details for the EMI</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableCell colSpan={4}>EMI:</TableCell>
                            <TableCell>{emi.toFixed(2)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={4}>Total Interest Payable:</TableCell>
                            <TableCell>{totalInterest.toFixed(2)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={4}>Total Amount Payable: </TableCell>
                            <TableCell>{totalAmount.toFixed(2)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableHead className="w-[150px]">Month</TableHead>
                            <TableHead>EMI</TableHead>
                            <TableHead>Interst Paid</TableHead>
                            <TableHead>Principle Paid</TableHead>
                            <TableHead className="text-right">Balance</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {payments.map((payment: any) => (
                            <TableRow key={payment.month}>
                                <TableCell className="font-bold">{payment.month}</TableCell>
                                <TableCell>{payment.emi.toFixed(2)}</TableCell>
                                <TableCell>{payment.interestPaid.toFixed(2)}</TableCell>
                                <TableCell>{payment.principalPaid.toFixed(2)}</TableCell>
                                <TableCell className="text-right font-medium">{payment.remainingBalance.toFixed(2)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>
        </div>
    );
};

export default EMIResult;
