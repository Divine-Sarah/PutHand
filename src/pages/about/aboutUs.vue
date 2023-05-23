<script setup>
import Navbar from '../../components/layout/navBar.vue'
import Footer from '../../components/layout/footer.vue'

const values = [
  {
    img: '/public/component9.svg',
    title: 'Transparency',
    subtitle:
      'We are honest and open in every decision regarding your  money and other operations.',
  },
  {
    img: '/public/component7.svg',
    title: 'Inclusivity',
    subtitle: 'This is home. Everyone is welcome.',
  },
  {
    img: '/public/component8.svg',
    title: 'Responsiveness',
    subtitle: 'We’ll listen and respond to you anytime and any day',
  },
]
</script>

<template>
  <div class="shadow">
    <Navbar />
  </div>
  <main class="mt-5">
    <!-- HERO SECTION STARTS -->
    <section class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
      <section class="mt-20 p-10">
        <h1
          class="bg-appGreen100 text-appGreen200 py-2 px-4 flex w-max rounded-xl font-bold font-poppins"
        >
          Our Mission
        </h1>
        <h2
          class="my-12 font-inter font-extrabold text-4xl md:text-5xl lg:text-6xl"
        >
          Empowering you <br class="hidden lg:block" />
          and people you<br class="hidden lg:block" />
          may know through <br class="hidden lg:block" />
          fundraising.
        </h2>
        <p class="font-poppins font-medium text-sm sm:text-base">
          YOU MATTER. The need to create a crowdfunding platform that caters to
          transparency and accessibility of funds is why PutHand was created. 
        </p>
      </section>

      <figure class="relative">
        <img class="" src="/Hero.svg" alt="hero" />
      </figure>
    </section>
    <!-- HERO SECTION ENDS -->

    <!-- ABOUT US SECTION STARTS -->
    <section class="bg-[#F3F3F3]">
      <section class="container mx-auto">
        <!-- TODO ADD THE Clash Grotesk FONT HERE -->
        <h2
          class="font-bold lg:text-4xl md:text-3xl text-2xl text-center pt-20"
        >
          About Us
        </h2>
        <p
          class="text-base font-inter font-medium text-appDarkGray100 mt-5 mb-14"
        >
          Everyone should be able to have enough funds to achieve their goals,
          right? That is what we believe. And if you believe in the same thing,
          you are on the right platform. Whether you want to donate or ask for
          donations, PutHand has created a platform which is easy to use with a
          giant focus on the connections we create with our donors and
          fundraisers. Buckets are the campaigns and one thing you need to know
          is that this platform is for- and about- YOU. 
        </p>

        <div
          class="grid grid-cols-2 bg-bgDarkerGreen p-12 rounded-3xl pt-16 pb-10 mb-24 gap-28"
        >
          <article class="text-white my-10">
            <h3
              class="text-center pb-12 font-poppins font-semibold font text-4xl"
            >
              OUR VALUES
            </h3>

            <ul class="flex flex-col gap-2">
              <li
                v-for="value in values"
                :key="value.title"
                class="p-4 bg-appGreen300 rounded-2xl hover:scale-105 hover:animate-pulse transition-all duration-300 flex gap-4"
              >
                <!-- TODO YOUR IMAGE GOES HERE -->
                <span
                  ><img :src="value.img" class="h-14" :draggable="false" alt=""
                /></span>

                <span class="font-inter text-sm">
                  <p class="font-semibold">{{ value.title }}</p>
                  <span>{{ value.subtitle }}</span>
                </span>
              </li>
            </ul>
          </article>
          <img src="/together.svg" class="rounded-2xl" alt="" />
        </div>

        <div
          class="p-12 rounded-3xl pt-16 pb-10 mb-24 lg:shadow-lg bg-[#FEF7D6]"
        >
          <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="order-2">
              <h5
                class="font-semibold text-4xl font-poppins md:text-3xl lg:text-4xl mb-10 mt-20"
              >
                Become a part of a community<br />
                of our today.
              </h5>
              <p class="font-inter font-medium text-sm">
                Welcome to PutHand! A community of compassionate and dedicated
                individuals will attend to you shortly. Our mission is simple
                and you are invited to join our network of donors, fundraisers,
                and supporters. As a member, you have the power to transform
                lives, support meaningful projects, and put a smile on people’s
                faces. It doesn’t matter what you are passionate about, there’s
                someone for everyone.    Start your journey with PutHand and
                become a catalyst for change. Welcome to the PutHand community.
              </p>
              <button
                class="rounded-full bg-appGreen300 border-[1px] py-3 px-5 text-[#fff] font-poppins font-bold text-base mt-5"
                type="button"
              >
                Let's Put Hands
              </button>
            </div>
            <img class="order-1 md:order-3" src="/Frame65.svg" alt="frame" />
          </div>
        </div>
        <Footer></Footer>
      </section>
    </section>
    <!-- ABOUT US SECTION ENDS -->
  </main>
</template>
