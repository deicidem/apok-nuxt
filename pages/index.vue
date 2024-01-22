<script lang="ts" setup>
const { awesome } = useAppConfig();

definePageMeta({ layout: "page" });
useHead({
  titleTemplate: "",
  title: awesome.name ?? "Nuxt 3 Awesome Starter",
});
</script>

<template>
  <div class="">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead> № </TableHead>
          <TableHead> Название </TableHead>
          <TableHead> Статус </TableHead>
          <TableHead> Дата </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        <TableRow>
          <TableCell> 1 </TableCell>
          <TableCell> 1 </TableCell>
          <TableCell> 1 </TableCell>
        </TableRow>
        <TableRow>
          <TableCell> 1 </TableCell>
          <TableCell> 1 </TableCell>
          <TableCell> 1 </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</template>
