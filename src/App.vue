<script setup>
import MintBlock from './components/MintBlock.vue';
import Navbar from './components/Navbar.vue';
import Sidebar from './components/reusables/Sidebar.vue';

const projectName = "My Project";

const options = {
  twitterHandle: "",
  contractAddress: "",
  openseaName: ""
};
</script>

<template>

  <body class="bg-zinc-400 min-h-screen">
    <header class="bg-gradient-to-t from-dark to-extradark">
      <div class="flex flex-row justify-between space-x-2 items-center py-4 pl-6 md:pl-12 pr-4 md:pr-24">
        <Navbar :projectName="projectName" />
      </div>
    </header>

    <div class="border-t-2 border-extradark" id="divider">
    </div>
    <main>
      <div class="flex flex-col md:flex-row justify-between px-4 py-4">
        <div class="order-1">
          <Sidebar />
        </div>
        <div class="order-first md:order-2 w-full md:w-2/5">
          <MintBlock />
        </div>
        <div class="order-3">
          <Sidebar />
        </div>
      </div>
    </main>
  </body>
</template>