<script lang="ts" setup>
import Button from "~/components/ui/button/Button.vue";

const { awesome } = useAppConfig();

definePageMeta({ layout: "page" });
useHead({
  titleTemplate: "",
  title: awesome.name ?? "Nuxt 3 Awesome Starter",
});
</script>

<template>
  <div class="">
    <Button :variant="'outline'">asdf</Button>
  </div>
</template>
