<template>
  <div class="">
    <Navbar />
    <div class="px-6 py-12 sm:py-24 lg:px-8">
      <div class="flex">
        <!-- <div class="sm:w-1/4 p-10">
          <div class="image object-center text-center">
            <NuxtImg src="/contact.png" />
          </div>
        </div> -->
        <div class="items-center mx-auto p-10">
          <div
            class="mx-auto max-w-xl flex flex-col items-center justify-center text-center"
          >
            <h1
              class="text-4xl md:text-5xl font-bold tracking-tight text-black dark:text-white"
            >
              Contact opnemen
            </h1>
            <p class="mt-3 text-lg text-gray-700 dark:text-gray-200">
              Heb je een vraag? Of wil je gewoon in contact comen? Vul dan het
              formulier in en we nemen zo snel mogelijk contact met je op.
            </p>
          </div>
          <form class="mx-auto mt-16 max-w-xl sm:mt-20">
            <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  for="aanhef"
                  class="block text-sm font-semibold leading-6 text-gray-600 dark:text-gray-200"
                  >Aanhef</label
                >
                <div class="mt-2.5">
                  <input
                    required
                    type="text"
                    name="aanhef"
                    id="aanhef"
                    autocomplete="given-name"
                    placeholder="Aanhef"
                    class="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  for="naam"
                  class="block text-sm font-semibold leading-6 text-gray-600 dark:text-gray-200"
                  >Naam</label
                >
                <div class="mt-2.5">
                  <input
                    required
                    type="text"
                    name="naam"
                    id="naam"
                    autocomplete="family-name"
                    placeholder="Naam"
                    class="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label
                  for="email"
                  class="block text-sm font-semibold leading-6 text-gray-600 dark:text-gray-200"
                  >Email</label
                >
                <div class="mt-2.5">
                  <input
                    required
                    type="email"
                    name="email"
                    id="email"
                    autocomplete="email"
                    placeholder="Jouw email"
                    class="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label
                  for="phone"
                  class="block text-sm font-semibold leading-6 text-gray-600 dark:text-gray-200"
                  >Telefoonnummer</label
                >
                <div class="mt-2.5">
                  <input
                    required
                    type="tel"
                    name="phone"
                    id="phone"
                    autocomplete="tel"
                    placeholder="Telefoonnummer"
                    class="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label
                  for="message"
                  class="block text-sm font-semibold leading-6 text-gray-600 dark:text-gray-200"
                  >Bericht</label
                >
                <div class="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    placeholder="Waarom neem je contact met ons?"
                    class="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  ></textarea>
                </div>
              </div>
              <UCheckbox
                label="Nieuwsbrief"
                help="Wil je onze nieuwsbrief ontvangen?"
                required
                color="prim"
              />
            </div>
            <div class="mt-10">
              <button
                type="submit"
                class="bg-blue-600 text-white rounded-sm py-2 w-full block"
              >
                Submit →
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
