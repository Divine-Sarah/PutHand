<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const count = ref(0)
</script>

<template>
  <footer class="pt-4 pb-10 bg-bgDarkerGreen mx-9 px-14 rounded-2xl mt-40">
    <section
      class="grid lg:grid-cols-2 sm:grid-cols-1 my-5 container justify-between mt-20"
    >
      <img src="/Logo.svg" alt="logo" />
      <section class="flex sm:block gap-6 text-[#fff]">
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
    <section>
      <ul
        class="block md:flex lg:flex sm:block justify-start gap-11 mt-32 text-[#fff]"
      >
        <li>© 2023</li>
        <li>Put Hand</li>
        <li>Terms</li>
        <li>Private Policy</li>
      </ul>
    </section>
  </footer>
</template>
