<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const count = ref(0)
</script>

<template>
  <section class="pt-4 pb-10 bg-bgDarkerGreen mx-9 rounded-mds">
    <section class="flex my-5 gap-10 container">
      <!-- <img src="logo.svg" alt="logo" /> -->
      <section class="flex gap-6 text-[#fff]">
        <ul>
          <p>Fundraise for</p>
          <li to="">Medical</li>
          <li to="">Emergency</li>
          <li to="">Education</li>
          <li to="">Non-profit</li>
        </ul>
        <ul>
          <p>Learn</p>
          <li to="">How Puthands</li>
          <li to="">Why Puthands</li>
          <li to="">About</li>
          <li to="">FAQ</li>
        </ul>
      </section>
    </section>
  </section>
</template>
