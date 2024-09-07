'use client'
import { useState } from 'react';
import LoanForm from './components/LoanForm';
import EMIResult from './components/EMIResult';
import { calculateEMI } from './utils/emiCalculator';

type Payment = {
  month: number;
  emi: number;
  interestPaid: number;
  principalPaid: number;
  remainingBalance: number;
};

type Results = {
  emi: number;
  totalInterest: number;
  totalAmount: number;
  payments: Payment[];
};

const Home = () => {
  const [results, setResults] = useState<Results | null>(null);

  const handleFormSubmit = (data: any) => {
    const { loanAmount, interestRate, tenure, prepayment } = data;
    const calculatedResults = calculateEMI(loanAmount, interestRate, tenure, prepayment);
    setResults(calculatedResults);
  };

  return (
    <div className="min-h-screen bg-white text-white p-8">
      <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex h-14 items-center p-4">
            <h1 className="mr-auto flex items-center gap-2 text-lg font-semibold" >
              <span className='text-gray-900 font-bold text-xl'>EMI Calculator</span>
            </h1>
          </div>
        </div>
      </nav>
      <div className='h-10'></div>
      <h1 className="text-4xl font-bold text-gray-900"></h1>
      <LoanForm onSubmit={handleFormSubmit} />
      {results && <EMIResult results={results} />}
    </div >
  );
};

export default Home;
