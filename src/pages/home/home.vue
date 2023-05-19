<script setup>
import Navbar from '../../components/layout/navBar.vue'
import Footer from '../../components/layout/footer.vue'
</script>

<template>
  <section>
    <Navbar />
    <!--Hero Section-->
    <section class="bg-[#F3F3F3] h-full pb-16">
      <section class="flex justify-center items-center">
        <p class="text-center font-anekBangla font-bold text-5xl mt-28">
          <span class="">Start Your Fundraiser</span> <br />
          Today and Change Lives
        </p>
      </section>
      <div class="flex">
        <div class="mx-auto flex items-center mt-5">
          <button
            type="button"
            class="flex gap-2 rounded-full bg-[#2A5E2A] border-[1px] border-[#fff] text-[#fff] py-3 text-[14px] px-10 m-3"
          >
            <img src="/arrow-left.svg" alt="" />
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
          class="font-bold sm:font-medium text-5xl sm:text-2xl text-[#242424] tracking-tighter sm:mt-3 mt-20 font-anekBangla mb-10"
        >
          How PutHand Works
        </p>
        <p
          class="font-inter not-italic font-medium text-base text-[#484848] justify-items-start"
        >
          If you're looking to raise funds, regardless of whether you're an
          individual, group, or <br />
          organization, PutHands is the ultimate platform for your fundraising
          needs.
        </p>
        <div class="container mx-auto">
          <div
            class="grid md:grid-cols-3 sm:grid-cols-1 sm:gap-0 place-items-center mt-5 gap-20"
          >
            <div
              v-for="num in 3"
              class="shadow-md bg-appGray100 rounded-lg p-5"
            >
              <div class="flex my-5 justify-center items-center gap-5">
                <div class="px-3 py-2 bg-[#fff] rounded-lg">
                  <img src="/arrow-right.svg" alt="arrow" />
                </div>

                <div class="">
                  <p class="text-[#242424] font-semibold text-xl font-poppins">
                    Easy
                  </p>
                  <p class="font-inter font-medium text-xs">
                    Start fundraising in just a few steps
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                class="font-semibold text-2xl md:text-3xl lg:text-4xl mb-5 mt-20"
              >
                Become a part of a community of our today.
              </h5>
              <p>
                Gorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus.
              </p>
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
        Discover the fundraisers <br />
        happening in your community.
      </p>
      <ul class="flex gap-7 no-scrollbar overflow-x-scroll">
        <li v-for="num in 10" class="flex-shrink-0 w-72">
          <figure>
            <img
              src="/community.svg"
              class="h-44 w-full object-cover object-center rounded-2xl"
              alt=""
            />
            <button type="button" class="bg-appGreen100 py-1 px-2 my-3">
              <span
                class="text-appGreen200 font-poppins font-bold text-sm rounded-md shadow-md shadow-appGreen100"
              >
                Medical
              </span>
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
  </section>
  <!-- <Footer></Footer> -->
</template>
