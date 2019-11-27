<template>
  <div>
    <div class="topbar bg-black py-2 px-3 d-flex ai-center">
      <img src="../assets/logo.png" height="30px" alt />
      <div class="flex-1 px-2">
        <div class="text-white">王者荣耀</div>
        <div class="fs-xxs text-grey-1">团队成就更多</div>
      </div>
      <div>
        <button type="button" class="btn bg-primary px-2 py-1 fs-xxs">立即下载</button>
      </div>
    </div>
    <div class="nav bg-primary pt-3 pb-2 text-white">
      <div class="pb-1 d-flex jc-around">
        <div class="nav-item active">
          <router-link to="/" tag="div">首页</router-link>
        </div>
        <div class="nav-item">
          <router-link to="/" tag="div">攻略中心</router-link>
        </div>
        <div class="nav-item">
          <router-link to="/" tag="div">赛事中心</router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>