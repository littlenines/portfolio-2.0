<template>
  <div class="menu">
    <a :class="['mdi mdi-arrow-up-bold mdi-24px', isActive ? 'show' : 'hidden']" href="#top" />
    <a :class="['mdi mdi-information mdi-24px', isActive ? 'show' : 'hidden']" href="#info" />
    <a :class="['mdi mdi-code-tags mdi-24px', isActive ? 'show' : 'hidden']" href="#code" />
    <a class="mdi mdi-nintendo-switch mdi-18px" @click="isActive = !isActive" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      isActive: false
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  position: fixed;
  right:7rem;
  bottom:8rem;
  z-index: 2;

  a {
    position: absolute;
    padding: 9px 10px;
    border-radius: 50%;
    color: var(--secondaryText);
    transition: all 0.3s ease-in-out;
    border: 3px solid var(--borderColor);
    background-color: var(--previewShadow);
    cursor: pointer;

    &:last-child {
      padding: 11px 13px;
    }

    &.hidden {
      visibility: hidden;
    }

    &:nth-child(1) {
      &.show {
        transform: rotate(270deg) translate(60px) rotate(90deg);
      }
    }

    &:nth-child(2) {
      &.show {
        transform: rotate(215deg) translate(60px) rotate(90deg);
      }
    }

    &:nth-child(3) {
      &.show {
        transform: rotate(160deg) translate(60px) rotate(5deg);
      }
    }
  }
}
</style>
