import { getCurrentInstance } from 'vue';

export function useBalance() {
    const { proxy } = getCurrentInstance() as any;

    /**
     * Fetches the current user balance from the backend
     */
    const getBalance = async () => {
        try {
            // This works because $api is globally configured to prepend urls with
            // https://localhost:8000/api (URL of the backend, see main.js)
            return (await proxy.$api.get('/balances')).data.balance;
        } catch (err) {
            console.error('An error occurred while fetching the balance.');
            return 0;
        }
    };
    return {
        getBalance
    };
}
