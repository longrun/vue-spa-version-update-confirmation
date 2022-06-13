<template>
  <div id="app">
    <router-view />
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/aboutus">About Us</router-link></li>
      </ul>
    </nav>
    <p>version: {{ workingVersion }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useVersionStore } from '@/store/version'

export default defineComponent({
  inject: ['moshaToast'],
  setup() {
    return {
      workingVersion: null,
    }
  },
  methods: {},
  created() {
    const versionManager = useVersionStore()
    this.workingVersion = versionManager.current
    if (!versionManager.isSameVersion()) {
      this.moshaToast(
        {
          title: 'New version is available!',
          description: `It's a new version ${versionManager.latest} of the app. Please reload your Web browser.`,
        },
        {
          hideProgressBar: 'true',
          showIcon: 'true',
          type: 'info',
          timeout: -1,
        },
      )
    }
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
nav ul {
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
}
nav ul li {
  margin: 0 1em;
}
</style>
