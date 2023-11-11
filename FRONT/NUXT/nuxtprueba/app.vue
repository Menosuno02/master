<template>
  <div
    data-bs-theme="dark"
    style="
      background-image: url(/images/background.jpg);
      background-size: contain;
      min-height: 100vh;
    "
  >
    <!-- <NuxtWelcome /> -->
    <MenuComponent />
    <div class="mt-3 container-fluid">
      <NuxtPage />
    </div>
  </div>
</template>

<style>
* {
  font-family: "Barlow", sans-serif;
  transition: all 0.2s ease-in;
  -webkit-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
}

.anton-font {
  font-family: "Anton", sans-serif;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
