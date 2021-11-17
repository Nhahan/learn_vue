<template>
  <div>
    <BaseCard>
      <BaseButton @click="setSelectedTab(StoredResources)"
        >Stored Resources</BaseButton
      >
      <BaseButton @click="setSelectedTab(AddResource)"
        >Add Resources</BaseButton
      >
    </BaseCard>
    <component :is="selectedTab"></component>
  </div>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  component: { StoredResources, AddResource },
  data() {
    return {
      selectedTab: StoredResources,
      storedResources: [
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
  provide() {
    return {
      resources: this.storedResources,
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
  },
};
</script>

<style></style>
