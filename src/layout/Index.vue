<!--
 * @Author: zzh
 * @Date: 2022-02-25 09:07:01
 * @LastEditors: zzh
 * @LastEditTime: 2022-02-26 15:06:07
 * @Description: 布局入口
 * @FilePath: \zh-admin\src\layout\Index.vue
-->
<template>
<div class="layout">
  <div class="left">
   <Sidebar class="sidebar-container" />
  </div>
  <dv class="right">
      <Navbar />
      <!-- <TagsView /> -->
      <AppMain />
  </dv>
</div>


  <!-- <div
    :class="classObj"
    class="app-wrapper"
  >
    <div
      v-if="classObj.mobile && sidebar.opened"
      class="drawer-bg"
      @click="handleClickOutside"
    /> -->
    <!-- <div
      :class="{hasTagsView: showTagsView}"
      class="main-container"
    >
      <div :class="{'fixed-header': fixedHeader}">
        <Navbar />
        <TagsView v-if="showTagsView" />
      </div> -->
      
    <!-- </div> -->
  <!-- </div> -->
</template>

<script setup lang="ts">
import { Sidebar, Navbar, TagsView, AppMain } from './components';

</script>


<style lang="scss" scoped>

.layout {
  display: flex;
  .left {
    width: 300px;
  }
  .right{
    flex: 1;
  }
}

.app-wrapper {
  &:after {
    content: "";
    display: table;
    clear: both;
  }
  position: relative;
  height: 100%;
  width: 100%;
}

.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.main-container {
  min-height: 100%;
  transition: margin-left .28s;
  margin-left: 300px;
  position: relative;
}

.sidebar-container {
  transition: width 0.28s;
  width: 300px !important;
  height: 100%;
  position: fixed;
  font-size: 0px;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
  background-color: #ffffff !important;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - 300px);
  transition: width 0.28s;
}

.hideSidebar {
  .main-container {
    margin-left: 54px;
  }

  .sidebar-container {
    width: 54px !important;
  }

  .fixed-header {
    width: calc(100% - 54px)
  }
}

/* for mobile response 适配移动端 */
.mobile {
  .main-container {
    margin-left: 0px;
  }

  .sidebar-container {
    transition: transform .28s;
    width: 300px !important;
  }

  &.openSidebar {
    position: fixed;
    top: 0;
  }

  &.hideSidebar {
    .sidebar-container {
      pointer-events: none;
      transition-duration: 0.3s;
      transform: translate3d(-300px, 0, 0);
    }
  }

  .fixed-header {
    width: 100%;
  }
}

.withoutAnimation {
  .main-container,
  .sidebar-container {
    transition: none;
  }
}

</style>
