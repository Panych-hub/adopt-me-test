<script setup lang="ts"></script>

<template>
  <header>
    <div class="wrapper">
      <nav>
       <slot />
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  font-size: 1rem;
  padding: 1rem 0;
  margin-top: 0.3rem;
}
nav :deep(a.router-link-exact-active) {
  color: var(--color-text);
}

nav :deep(a.router-link-exact-active:hover) {
  background-color: transparent;
}

nav :deep(*) {
  position: relative;
  display: inline-block;
  padding: 0 1rem;
}

nav :deep(*:not(:first-child)::before) {
  content: '';
  position: absolute;
  left: 0;
  top: 25%;
  bottom: 25%;
  width: 1px;
  background-color: var(--color-border);
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
