<!--
 * @Author: zzh
 * @Date: 2022-02-25 09:55:19
 * @LastEditors: zzh
 * @LastEditTime: 2022-02-26 14:34:57
 * @Description: 导航栏，包含折叠，最大化，个人信息
 * @FilePath: \zh-admin\src\layout\components\navigation_bar\Index.vue
-->
<template>
  <div class="navbar">
    <el-icon @click="toggleSideBar"><fold /></el-icon>
    
    <div class="right-menu">
      <el-dropdown
        class="avatar-container right-menu-item hover-effect"
        trigger="click"
      >
        <div class="avatar-wrapper">
          <img
            src="@/assets/img/img.jpg"
            class="user-avatar"
          >
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <router-link to="/profile/">
              <el-dropdown-item>
                个人信息
              </el-dropdown-item>
            </router-link>
            <router-link to="/">
              <el-dropdown-item>
                退出
              </el-dropdown-item>
            </router-link>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Hamburger from '@/components/hamburger/Index.vue';
import Screenfull from '@/components/screenfull/Index.vue';

const toggleSideBar = () => { let a = 0; };

// import { computed, reactive, toRefs } from 'vue';
// import { useStore } from '@/store';
// import { AppActionTypes } from '@/store/modules/app/action-types';
// import { useI18n } from 'vue-i18n';
// import { UserActionTypes } from '@/store/modules/user/action-types';
// import { useRoute, useRouter } from 'vue-router';
// export default {
//   components: {
//     BreadCrumb,
//     Hamburger,
//     Screenfull,
//     LangSelect,
//     SizeSelect
//   },
//   setup() {
//     const store = useStore();
//     const route = useRoute();
//     const router = useRouter();
//     const { t } = useI18n();
//     const sidebar = computed(() => {
//       return store.state.app.sidebar;
//     });
//     const device = computed(() => {
//       return store.state.app.device.toString();
//     });
//     const avatar = computed(() => {
//       return store.state.user.avatar;
//     });
//     const state = reactive({
//       toggleSideBar: () => {
//         store.dispatch(AppActionTypes.ACTION_TOGGLE_SIDEBAR, false);
//       },
//       logout: () => {
//         useStore().dispatch(UserActionTypes.ACTION_LOGIN_OUT);
//         router.push(`/login?redirect=${route.fullPath}`).catch(err => {
//           console.warn(err);
//         });
//       }
//     });
//     return {
//       sidebar,
//       device,
//       avatar,
//       ...toRefs(state),
//       t
//     };
//   }
// };
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    padding: 0 15px;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;
    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      .avatar-wrapper {
        margin-top: 5px;
        margin-right: 16px;
        margin-left: 16px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
