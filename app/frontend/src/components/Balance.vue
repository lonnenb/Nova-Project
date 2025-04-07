<template>
  <div class="balance-card">
    <h2 class="balance-label">Kontostand</h2>
    <p class="balance-amount">{{ formattedBalance }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Beispiel: Aktueller Kontostand
const balance = ref(12345.67)

// Formatiert den Betrag mit Währung
const formattedBalance = computed(() =>
  new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR'
  }).format(balance.value)
)
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
