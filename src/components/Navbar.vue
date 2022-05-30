<script setup>
import { ref } from 'vue';
import EtherscanIcon from './icons/EtherscanIcon.vue';
import OpenSeaIcon from './icons/OpenSeaIcon.vue';
import TwitterIcon from './icons/TwitterIcon.vue';

const size = ref(12);

const props = defineProps({
  projectName: String
})
</script>

<template>
  <h1 class="text-white text-xl md:text-2xl">
    {{ projectName }}
  </h1>
  <ul class="flex flex-row space-x-6 md:space-x-12">
    <li>
      <a href="https://twitter.com/" target="_blank">
        <TwitterIcon :size="size" />
      </a>
    </li>
    <li>
      <a href="https://etherscan.io/" target="_blank">
        <EtherscanIcon :size="size" />
      </a>
    </li>
    <li>
      <a href="https://opensea.com/" target="_blank">
        <OpenSeaIcon :size="size" />
      </a>
    </li>
  </ul>
</template>