<template>
  <div>
    <BaseCard>
      <BaseButton
        @click="setSelectedTab('stored-resources')"
        :mode="storedResButtonMode"
        >Stored Resources</BaseButton
      >
      <BaseButton
        @click="setSelectedTab('add-resource')"
        :mode="addResButtonMode"
        >Add Resource</BaseButton
      >
    </BaseCard>
    <div>
      <keep-alive>
        <component :is="selectedTab"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  components: { StoredResources, AddResource },
  data() {
    return {
      selectedTab: 'stored-resources',
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
      addResource: this.addResource,
      removeResource: this.removeResource,
    };
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    },
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, url) {
      const newReource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: url,
      };
      this.storedResources.unshift(newReource); // unshift: push data in front of []
      this.selectedTab = 'stored-resources';
    },
    removeResource(resId) {
      console.log(this.storedResources);
      const resouceIdx = this.storedResources.findIndex(
        (resource) => resource.id === resId
      );
      this.storedResources.splice(resouceIdx, 1);
      console.log(resouceIdx, this.storedResources);
    },
  },
};
</script>

<style></style>
