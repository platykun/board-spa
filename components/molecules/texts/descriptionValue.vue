<!--slot
* description
* valueSpan
* valueDefault
-->
<template>
  <div>
    <Description>
      <slot name="description"></slot>
    </Description>
    <value>
      <slot slot="span" name="valueSpan"></slot>
      <slot ></slot>
    </value>
  </div>
</template>

<script>
  import Description from '~/components/atoms/texts/description';
  import Value from '~/components/atoms/texts/value';

  export default {
    components: {
      'Description': Description,
      'Value': Value,
    }

  }
</script>

<style>
</style>
