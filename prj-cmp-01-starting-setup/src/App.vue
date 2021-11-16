<template>
  <ul>
    <LearningResource v-for="res in storedResources" :key="res.id" />
  </ul>
</template>

<script>
import LearningResource from './components/learning-resources/LearningItem.vue';

export default {
  components: { LearningResource },
  data() {
    return {
      stroedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.org',
        },
      ],
    };
  },
};
</script>

<style></style>
