<template>
  <div class="balance-card">
    <h2 class="balance-label">Balance</h2>
    <p class="balance-amount">{{ formattedBalance }}</p>
  </div>
</template>

<script setup lang="ts">
import {useBalance} from '@/libs/useBalance';
import {ref, computed, onMounted} from 'vue'

const balanceService = useBalance();

const balance = ref<number | null>(null); // Refs are values that automatically react to changes

// Computed property is needed to update the formatted balance on every change automatically
const formattedBalance = computed(() =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(balance.value)
)

// OnMounted is called whenever the component is rendered in the browser
onMounted(async () => {
  try {
    balance.value = await balanceService.getBalance();
  } catch (e: AxiosError | any) {
    console.error(e.message);
  }
});
</script>

<style scoped>
.balance-card {
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 8px;
  max-width: 300px;
  background-color: #f8f8f8;
}

.balance-amount {
  font-size: 2rem;
  font-weight: bold;
  color: #2e7d32;
}

.balance-label {
  color: black;
  font-weight: bold;
}
</style>
