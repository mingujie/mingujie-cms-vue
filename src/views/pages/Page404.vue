<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="clearfix">
            <h1 class="float-left display-3 mr-4">404</h1>
            <h4 class="pt-3">天啊，没有找到你想要的内容；</h4>
            <p class="text-muted">建议你先返回首页，在重新查找一下。</p>
          </div>
          <div class="input-prepend input-group">
            <span class="input-group-addon"><i class="fa fa-search"></i></span>
            <input id="prependedInput" class="form-control" size="16" type="text" placeholder="你还可以在这里搜索你想要的，当然不一定能找到！">
            <span class="input-group-btn">
              <button class="btn btn-info" type="button">点试试</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page404'
}
</script>
