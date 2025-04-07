import axios from 'axios';

export function useBalance() {
    const getBalance = async () => {
        try {
            return (await axios.get('http://localhost:8000/api/balances')).data.balance;
        } catch (err) {
            console.error('An error occurred while fetching the balance.');
            return 0;
        }
    };
    return {
        getBalance
    };
}
