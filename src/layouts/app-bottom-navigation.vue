<template>
  <section id="bottom-navigation" class="block fixed border-t inset-x-0 bottom-0 z-10 dark:bg-slate-800 bg-white">
    <div id="tabs" class="flex justify-between">
      <router-link
        to="/"
        class="w-full focus:text-slate-500 hover:text-slate-500 justify-center inline-block text-center pt-2 pb-1"
      >
        <fa-icon icon="fa-thin fa-home w-6 h-6" />
        <span class="tab tab-home block text-xs">Home</span>
      </router-link>
      <router-link
        to="/strength-mapping/report/ikigai"
        class="w-full focus:text-slate-500 hover:text-slate-500 justify-center inline-block text-center pt-2 pb-1"
      >
        <fa-icon icon="fa-thin fa-chart-line w-6 h-6" />
        <span class="tab tab-explore block text-xs">Report</span>
      </router-link>
      <router-link
        to="/strength-mapping/capture/create"
        class="w-full focus:text-slate-500 hover:text-slate-500 justify-center inline-block text-center pt-2 pb-1"
      >
        <fa-icon icon="fa-thin fa-circle-camera w-6 h-6" />
        <span class="tab tab-kategori block text-xs">Capture</span>
      </router-link>
      <router-link
        to="/notification"
        class="w-full focus:text-slate-500 hover:text-slate-500 justify-center inline-block text-center pt-2 pb-1"
      >
        <fa-icon icon="fa-thin fa-bell w-6 h-6" />
        <span class="tab tab-whishlist block text-xs">Notification</span>
      </router-link>
      <router-link
        to="/account/profile"
        class="w-full focus:text-slate-500 hover:text-slate-500 justify-center inline-block text-center pt-2 pb-1"
      >
        <fa-icon icon="fa-thin fa-user w-6 h-6" />
        <span class="tab tab-account block text-xs">Account</span>
      </router-link>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
