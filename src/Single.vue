<template>
  <div>
    <div>vue single file component</div>
    <div>{{ test }}</div>
  </div>
</template>
<script>
export default {
  name: "Single",
  data: function () {
    return {
      test: "data",
    };
  },
};
</script>

