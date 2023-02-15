<template>
  <div class="space-y-5">
    <p class="px-2 text-3xl font-extrabold tracking-wider">Logo</p>
    <div class="p-2 flex-col space-y-10">
      <div class="max-w-screen-sm flex flex-col items-center justify-center space-y-4">
        <div class="shadow-lg py-20 px-10 w-full bg-white items-center justify-center text-center flex rounded-xl">
          <img src="@/assets/logo/primary/logo.png" alt="" class="w-96" />
        </div>
        <div class="items-center justify-between text-lg flex w-full">
          <p>Original logo on white background</p>
          <a
            href="/assets/images/logo/primary/logo.png"
            class="btn py-2 px-5 rounded-full border text-sm font-bold hover:bg-blue-600 hover:text-white"
            download
          >
            logo.png
          </a>
        </div>
      </div>
      <div class="max-w-screen-sm flex flex-col items-center justify-center space-y-4">
        <div class="shadow-lg py-20 px-10 w-full bg-slate-900 items-center justify-center text-center flex rounded-xl">
          <img src="@/assets/logo/white/logo.png" alt="" class="w-96" />
        </div>
        <div class="items-center justify-between text-lg flex w-full">
          <p>Original logo on dark background</p>
          <a
            href="/assets/images/logo/white/logo.png"
            class="btn py-2 px-5 rounded-full border text-sm font-bold hover:bg-blue-600 hover:text-white"
            download
          >
            logo.png
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
