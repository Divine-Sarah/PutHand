<script setup>
import Navbar from '../../components/layout/navBar.vue'
import Footer from '../../components/layout/footer.vue'

// export default {
//   components: {},
//   data() {},
//   computed: {},

//   methods: {},
// }
</script>

<template>
  <section>
    <Navbar />
    <!--Hero Section-->
    <section class="bg-[#F3F3F3] h-full pb-16">
      <section class="flex justify-center items-center">
        <p class="text-center font-inter font-extrabold text-5xl mt-28">
          MAKE SOMEONE SMILE <br />
          TODAY- PUT HAND IN THEIR <br />
          BUCKET. 
        </p>
      </section>
      <section
        class="flex items-center justify-center my-7 font-poppins font-medium text-base leading-6"
      >
        Build a dream bucket and invite friends and families, strangers to
        donate. 
      </section>
      <div class="flex">
        <div class="mx-auto flex items-center">
          <button
            type="button"
            class="flex gap-2 rounded-full bg-[#2A5E2A] border-[1px] border-[#fff] text-[#fff] py-3 text-[14px] px-10 m-3"
          >
            <!-- <img src="/arrow-left.svg" alt="" /> -->
            <span class="font-poppins font-bold text-base"
              >Let's Put Hands</span
            >
          </button>
        </div>
      </div>
      <img
        src="/Group53.svg"
        alt=""
        class="mx-auto justify-center items-center -mt-20"
      />
    </section>

    <!-- How Put Hand Works -->

    <section class="bg-[#FFF] pt-4 pb-10">
      <div class="mx-auto container px-8 lg:px-16 justify-start">
        <p
          class="lg:font-bold sm:font-medium lg:text-5xl sm:text-2xl text-[#242424] tracking-tighter sm:mt-3 mt-20 font-anekBangla mb-10"
        >
          IT’S NOT ROCKET SCIENCE
        </p>
        <p
          class="font-inter not-italic font-medium text-base text-[#484848] justify-items-start"
        >
          it takes less than five minutes
        </p>
        <div class="container mx-auto">
          <div
            class="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 sm:gap-5 gap-5 place-items-center mt-5"
          >
            <div
              class="shadow-md bg-appGray100 rounded-lg p-16 justify-center items-center"
            >
              <img
                src="/Icon04.svg"
                alt=""
                class="mx-auto justify-center items-center"
              />
              <p class="text-center font-poppins font-semibold text-base">
                Create an <br />
                account
              </p>
            </div>
            <div class="shadow-md bg-appGray100 rounded-lg p-16">
              <img
                src="/Icon02.svg"
                alt=""
                class="mx-auto justify-center items-center"
              />
              <p class="text-center font-poppins font-semibold text-base">
                Register <br />
                attendance
              </p>
            </div>
            <div class="shadow-md bg-appGray100 rounded-lg p-16">
              <img
                src="/Icon01.svg"
                alt=""
                class="mx-auto justify-center items-center"
              />
              <p class="text-center font-poppins font-semibold text-base">
                Tell the class why <br />
                you created a <br />
                bucket
              </p>
            </div>
            <div class="shadow-md bg-appGray100 rounded-lg p-16">
              <img
                src="/Icon03.svg"
                alt=""
                class="mx-auto justify-center items-center"
              />
              <p class="text-center font-poppins font-semibold text-base">
                share the story <br />with everyone
              </p>
            </div>
          </div>
        </div>
        <p
          class="font-poppins font-normal text-lg leading-7 mt-8 text-appGreen400"
        >
          As soon as the campaign is live, share it with family and friends and
          strangers. Donors can contribute to the bucket using their credit or
          debit card, and when your goal is met, the funds are immediately
          transferred directly to your account. You can also request a premature
          withdrawal, if the goal is taking too long to be met.
        </p>
      </div>
    </section>

    <section class="bg-appGray100 h-[110vh]">
      <div class="mx-auto justify-center items-center py-[64px]">
        <div
          class="md:block mx-auto w-4/5 md:w-5/6 lg:w-4/5 my-6 p-10 rounded-2xl lg:shadow-lg bg-[#FEF7D6]"
        >
          <div class="grid grid-cols-1 md:grid-cols-2 h-full">
            <div class="order-2">
              <h5
                class="font-semibold text-4xl font-poppins md:text-3xl lg:text-4xl mb-10 mt-20"
              >
                Become a part of a community of our <br />
                today.
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
      </div>
    </section>

    <section
      class="bg-white pt-4 mx-auto container w-4/5 md:w-5/6 lg:w-4/5 pb-10"
    >
      <p class="pt-3 justify-start font-bold text-4xl leading-10 mb-8">
        DO YOU WANT TO PUT HAND FOR SOMEONE TODAY? 
      </p>
      <p class="mb-4 font-poppins font-medium text-base leading-4">
        Here are some campaigns you can donate and put a smile on someone’s
        face: 
      </p>
      <ul class="flex gap-7 no-scrollbar overflow-x-scroll">
        <li v-for="num in 10" class="flex-shrink-0 w-72">
          <figure>
            <img
              src="/community.svg"
              class="h-44 w-full object-cover object-center rounded-2xl"
              alt=""
            />
            <button
              type="button"
              class="bg-appGreen100 py-1 px-2 my-3 rounded-lg flex"
            >
              <span
                class="text-appGreen200 font-poppins font-bold text-sm shadow-md shadow-appGreen100"
              >
                Medical
              </span>
              <img src="/Vector.svg" alt="vector" class="px-2" />
            </button>
            <p class="font-poppins font-semibold text-base">
              Adeola Potts-Johnson is organizing this fundraiser on behalf of
              Girls.
            </p>

            <p class="text-sm mt-5 mb-2 font-poppins font-medium">
              Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit.
            </p>

            <dl class="flex">
              <div class="flex flex-1 bg-appGray100 rounded-full mr-3">
                <span class="bg-yellow-500 w-[60%] rounded-full" />
              </div>
              <data
                value="60"
                class="font-poppins font-medium text-sm text-[#000000]"
                >60%</data
              >
            </dl>

            <dl class="flex justify-between">
              <span class="flex">
                <dt class="font-bold font-poppins text-xs mr-1 text-[#000000]">
                  Raised:
                </dt>

                <dd class="font-medium font-poppins text-xs text-[#000000]">
                  50,000
                </dd>
              </span>
              <span class="flex">
                <dt class="font-bold font-poppins text-xs text-[#295F2D] mr-1">
                  Goals:
                </dt>
                <dd class="font-medium font-poppins text-xs text-[#295F2D]">
                  1,000,000
                </dd>
              </span>
            </dl>
            <button
              class="bg-appGreen300 w-full rounded-full py-2 font-semibold font-poppins text-lg text-[#FFFFFF]"
              type="button"
            >
              Donate
            </button>
          </figure>
        </li>
      </ul>
    </section>

    <section class="pt-4 pb-10 bg-appGray100 relative">
      <section class="mx-auto justify-center items-center">
        <section
          class="bg-[#FEF7D6] p-9 w-2/3 mx-auto rounded-md absolute inset-x-0 top-0 mt-6"
        >
          <p
            class="text-center font-poppins font-extrabold text-3xl text-[#333333]"
          >
            We Would Like To Send You Emails
          </p>
          <p
            class="text-center font-poppins font-normal text-base text-[#242424] pt-2"
          >
            Sign up to our newsletters to know what we are up to and what’
            trending
          </p>
          <form @submit.prevent="submitForm" action="input">
            <div class="relative">
              <div
                class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
              >
                <img src="/sms.svg" alt="" />
              </div>
              <input
                type="text"
                id="email-address-icon"
                class="bg-[#FFFFFF] rounded-lg block w-full pl-10 p-2.5"
                placeholder="Enter your email"
              />
            </div>
          </form>
        </section>
      </section>
      <Footer></Footer>
    </section>
  </section>
</template>
