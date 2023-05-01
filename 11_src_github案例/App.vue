<template>
  <div id="app">
    <Search />
    <List />
  </div>
</template>

<script>
import Search from "./components/Search";
import List from "./components/List";

export default {
  name: 'VueTestApp',
  components: { Search, List },
};
</script >

<style >
</style>
