import { useState } from 'react';
import { z } from "zod"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button';


const formSchema = z.object({
    username: z.string().min(2).max(50),
})

const LoanForm = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
    const [loanAmount, setLoanAmount] = useState<number | ''>('');
    const [interestRate, setInterestRate] = useState<number | ''>('');
    const [tenure, setTenure] = useState<number | ''>('');
    const [prepayment, setPrepayment] = useState<number | ''>('');
    const [date, setDate] = useState<Date | undefined>(new Date())

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (loanAmount && interestRate && tenure) {
            onSubmit({ loanAmount, interestRate, tenure, prepayment });
        } else {
            alert('Please fill in all required fields!');
        }
    };


    return (
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
            <Card>
                <h1 className='text-4xl flex pt-4 font-semibold text-gray-800 justify-center '>Calculate Your EMI EASILY</h1>
                <CardContent className='p-6'>                    <div className='p-2'>
                        <h2 className=' p-1'>Loan Amount:</h2>
                        <Input
                            type="number"
                            value={loanAmount}
                            placeholder="Enter Loan Amount"
                            onChange={(e) => setLoanAmount(+e.target.value)}
                            required
                        />
                    </div>
                    <div className='p-2'>
                        <h2>Interest Rate (%):</h2>
                        <Input
                            type="number"
                            value={interestRate}
                            placeholder="Enter Interest Rate"
                            onChange={(e) => setInterestRate(+e.target.value)}
                            required
                        />
                    </div>
                    <div className='p-2'>
                        <h2>Tenure (in months):</h2>
                        <Input
                            type="number"
                            placeholder="Enter Tenure"
                            value={tenure}
                            onChange={(e) => setTenure(+e.target.value)}
                            required
                        />
                    </div>
                    <div className='p-2'>
                        <h2>Prepayment Amount (optional):</h2>
                        <Input
                            type="number"
                            placeholder="Enter Prepayment Amount"
                            value={prepayment}
                            onChange={(e) => setPrepayment(+e.target.value)}
                        />
                    </div>
                    <Button type="submit" variant={'outline'} className="bg-black mx-auto flex ">Submit</Button>
                </CardContent>
            </Card>
        </form>
    );
};

export default LoanForm;
