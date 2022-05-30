<script setup>
import EthereumIcon from './icons/EthereumIcon.vue';

</script>

<template>
  <div class="flex flex-col bg-blue-200 rounded-2xl space-y-4">
    <p id="short-description" class="p-4">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui numquam nisi facere aut consequatur recusandae.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem laboriosam aut nulla, assumenda tenetur
      architecto.
    </p>
    <div class="flex flex-row justify-center">
      <div id="supply" class="flex flex-row text-xl font-bold">
        <span>983 / 4444</span>
      </div>
    </div>
    <div id="price" class="flex flex-row justify-center text-xl font-bold p-4 divide-x divide-extradark">
      <span class="pr-4">1000 free
      </span>
      <div class="flex flex-row pl-4">
        <EthereumIcon />
        <span>0.005</span>
      </div>

    </div>

    <MintInterface />
  </div>
</template>